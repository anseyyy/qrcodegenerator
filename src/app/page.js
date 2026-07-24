"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";
import Image from "next/image";
import TopSection from "@/components/home/TopSection";
import QrSection from "@/components/home/QrSection";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  const generateQrCode = async (text) => {
    try {
      const url = await QRCode.toDataURL(text, {
        width: 512,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
      setQrDataUrl(url);
    } catch (err) {
      console.error("Failed to generate QR code", err);
    }
  };

  const handleGenerate = () => {
    if (inputValue.trim()) {
      generateQrCode(inputValue.trim());
      setHasGenerated(true);
    }
  };

  return (
    <main className="relative flex-1 flex flex-col justify-start bg-transparent transition-colors duration-300 overflow-hidden">
      <Image
        src="/images/homebgmobile.png"
        alt="Home background mobile"
        fill
        className="absolute inset-0 -z-10 object-cover sm:hidden"
        priority
      />
      <Image
        src="/images/homebg.png"
        alt="Home background"
        fill
        className="hidden sm:block absolute inset-0 -z-10 object-cover"
        priority
      />

      {/* Absolute Viewport-Aligned 3x3 Dot Grid Icons */}
      {/* Left side start icon */}
      <div className="absolute left-2 sm:left-4 md:left-8 top-[320px] sm:top-72 w-6 h-6 sm:w-9 sm:h-9 select-none pointer-events-none text-text-muted opacity-30">
        <Image
          src="/images/icons/dot-grid.svg"
          fill
          className="object-contain"
          alt="Dot grid pattern"
        />
      </div>

      {/* Right side end icon */}
      <div className="absolute right-2 sm:right-4 md:right-8 top-[180px] sm:top-44 w-6 h-6 sm:w-9 sm:h-9 select-none pointer-events-none text-text-muted opacity-30">
        <Image
          src="/images/icons/dot-grid.svg"
          fill
          className="object-contain"
          alt="Dot grid pattern"
        />
      </div>

      <TopSection
        inputValue={inputValue}
        setInputValue={setInputValue}
        onGenerate={handleGenerate}
      />
      <QrSection qrDataUrl={qrDataUrl} hasGenerated={hasGenerated} />
    </main>
  );
}
