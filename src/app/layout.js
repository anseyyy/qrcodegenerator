import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QrCodey | Free Custom QR Code Generator & Maker with Logo",
  description: "Create custom QR codes with logos, custom colors, background templates, and frames for free. QrCodey is the easiest tool to generate high-resolution scannable QR codes instantly. No sign-ups required, 100% free.",
  keywords: "qr code generator, custom qr code maker, qr code with logo, free qr generator, create qr code, dynamic qr code, high resolution qr code, qrcodey, qrcodey.in, customize qr codes, free qr templates",
  metadataBase: new URL("https://www.qrcodey.in"),
  alternates: {
    canonical: "https://www.qrcodey.in",
  },
  openGraph: {
    title: "QrCodey | Free Custom QR Code Generator with Logo",
    description: "Easily generate custom scannable QR codes with custom logos, templates, shapes and colors in high-resolution. No subscriptions or hidden fees.",
    url: "https://www.qrcodey.in",
    siteName: "QrCodey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QrCodey | Free Custom QR Code Generator with Logo",
    description: "Easily generate custom scannable QR codes with custom logos, templates, shapes and colors in high-resolution.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "QrCodey",
    "operatingSystem": "All",
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "QR Code Generator",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "QrCodey is a free online tool to generate custom, high-resolution QR codes with logos, frames, shapes, and background templates. Completely free, no registration required.",
    "url": "https://www.qrcodey.in",
    "author": {
      "@type": "Person",
      "name": "Ansil"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
