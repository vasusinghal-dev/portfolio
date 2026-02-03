import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundMotion } from "../components/BackgroundMotion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: "Vasu Dev - Next.js Full Stack Engineer",
  description:
    "Next.js full stack engineer building scalable, production-ready web applications with React, TypeScript, PostgreSQL, and modern backend tooling.",
  openGraph: {
    title: "Vasu Dev - Next.js Full Stack Engineer",
    description:
      "Next.js full stack engineer Building scalable, production-ready web applications with React, TypeScript, PostgreSQL, and modern backend tooling.",
    url: "/",
    siteName: "Vasu Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasu Dev – Next.js Full Stack Engineer",
    description:
      "Next.js full stack engineer Building scalable, production-ready web applications with React, TypeScript, PostgreSQL, and modern backend tooling.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <BackgroundMotion />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
