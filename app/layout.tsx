import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bash-Feeq Ventures",
  description:
    "Professional pest control, fumigation, facility maintenance, and chemical supply services in Lagos. Quality service guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bashfeeq Ventures",
    description:
      "Professional pest control, fumigation, facility maintenance, and chemical supply services in Lagos.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Egole Street, Rock Stone Ville Estate, Bakery Bus Stop, Off Addo Road",
      addressLocality: "Ajah",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    telephone: ["+2347065580104", "+2348028379316"],
    email: "info@bash-feeq.com",
    areaServed: "Lagos State",
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
