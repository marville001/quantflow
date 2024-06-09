import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quantflow",
  description: "Superpowers for Admin Teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
