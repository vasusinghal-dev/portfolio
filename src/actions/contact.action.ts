"use server";

import { Resend } from "resend";
import { contactSchema } from "../lib/schema";
import { emailFormat } from "../lib/utils";
import { checkArcjet } from "../lib/arcjet";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactEmail(
  formData: unknown,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      error: "Invalid form data",
    };
  }

  const arcjetResult = await checkArcjet(parsed.data.email);
  if (arcjetResult) return arcjetResult;

  try {
    await resend.emails.send(emailFormat(parsed.data));
    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      success: false,
      error: "Failed to send email",
    };
  }
}
