import type { Metadata } from "next";
import { Footer } from "../../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A minimal, professional portfolio for software engineers",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
