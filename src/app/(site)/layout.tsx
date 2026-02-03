import { Header } from "../../components/Header/DynamicHeader";
import { Footer } from "../../components/Footer/Footer";
import { Toaster } from "sonner";

export default function SiteLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      {modal}
      <Toaster position="top-right" expand={false} richColors />
      <Footer />
    </>
  );
}
