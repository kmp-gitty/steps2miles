import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Steps to Miles Calculator",
  description:
    "Convert steps to miles instantly. Simple calculator with methodology, formulas, charts, and FAQs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="min-h-screen bg-orange-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
