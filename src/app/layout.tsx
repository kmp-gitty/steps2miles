import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.steps2miles.com"),
  title: "Steps to Miles Calculator",
  description:
    "Convert steps to miles instantly. Simple calculator with methodology, formulas, charts, and FAQs.",
  alternates: {
    canonical: "./",
  },
  };

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.steps2miles.com/#org",
      name: "Steps2Miles",
      url: "https://www.steps2miles.com/",
      logo: "https://www.steps2miles.com/favicon.ico",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.steps2miles.com/#website",
      url: "https://www.steps2miles.com/",
      name: "Steps2Miles",
      publisher: { "@id": "https://www.steps2miles.com/#org" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className="min-h-screen bg-orange-50 text-slate-900 antialiased">
        {/* Site-wide structured data */}
        <Script
          id="schema-org-site"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

