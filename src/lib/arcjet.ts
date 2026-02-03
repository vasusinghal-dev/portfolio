import { findIp } from "@arcjet/ip";
import arcjet, {
  shield,
  detectBot,
  validateEmail,
  slidingWindow,
} from "@arcjet/next";
import { getBaseUrl } from "./server/request";
import { headers } from "next/headers";

export const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["userIP"],
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: [],
    }),
    validateEmail({
      mode: "LIVE",
      deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),
    slidingWindow({
      mode: "LIVE",
      max: 10,
      interval: "15m",
    }),
  ],
});

export async function checkArcjet(
  email: string,
): Promise<{ success: false; error: string } | void> {
  const baseUrl = await getBaseUrl();
  const request = new Request(baseUrl, { headers: await headers() });

  const userIP = findIp(request);
  const decision = await aj.protect(request, {
    email,
    userIP,
  });

  if (!decision.isDenied()) return;

  if (decision.reason.isRateLimit()) {
    return {
      success: false,
      error: "Too many requests. Please try again later.",
    };
  } else if (decision.reason.isEmail()) {
    let message: string;

    if (decision.reason.emailTypes.includes("INVALID")) {
      message = "Email address format is invalid.";
    } else if (decision.reason.emailTypes.includes("DISPOSABLE")) {
      message = "Disposable email addresses are not allowed.";
    } else if (decision.reason.emailTypes.includes("NO_MX_RECORDS")) {
      message = "Email domain is not valid.";
    } else {
      message = "Invalid email address.";
    }

    return { success: false, error: message };
  }

  return { success: false, error: "Request blocked." };
}
