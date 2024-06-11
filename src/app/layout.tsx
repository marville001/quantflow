import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontMenlo = localFont({ src: '../assets/fonts/Menlo-Regular.woff', variable: '--font-menlo' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMenlo.variable
        )}
      >{children}</body>
    </html>
  );
}
