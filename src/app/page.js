"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TopSection from "@/components/home/TopSection";
import QrSection from "@/components/home/QrSection";
import {
  generateQrWithCustomizations,
  FRAMES,
  PRESET_LOGOS,
  getSvgDataUrl
} from "@/utils/qrGenerator";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [generatedValue, setGeneratedValue] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [hasGenerated, setHasGenerated] = useState(false);

  // Customization States
  const [selectedFrame, setSelectedFrame] = useState(FRAMES[0]);
  const [frameText, setFrameText] = useState("");
  const [customLogo, setCustomLogo] = useState(null);
  const [selectedPresetLogo, setSelectedPresetLogo] = useState(null);
  const [useCustomColors, setUseCustomColors] = useState(false);
  const [customDark, setCustomDark] = useState("#101010");
  const [customLight, setCustomLight] = useState("#FFFFFF");
  const [badgeShape, setBadgeShape] = useState("circle");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Reactively regenerate QR code when theme, frame, logo, or colors change
  useEffect(() => {
    if (hasGenerated && generatedValue) {
      let foregroundColor = "#101010";
      let backgroundColor = "#FFFFFF";

      if (useCustomColors) {
        foregroundColor = customDark;
        backgroundColor = customLight;
      }

      let logoDataUrl = null;
      if (customLogo) {
        logoDataUrl = customLogo;
      } else if (selectedPresetLogo && PRESET_LOGOS[selectedPresetLogo]) {
        logoDataUrl = getSvgDataUrl(PRESET_LOGOS[selectedPresetLogo].svg);
      }

      generateQrWithCustomizations(generatedValue, {
        foregroundColor,
        backgroundColor,
        logoDataUrl,
        badgeShape,
        frameId: selectedFrame?.id || "none",
        frameText: frameText
      })
        .then((url) => {
          setQrDataUrl(url);
        })
        .catch((err) => {
          console.error("Failed to generate QR code", err);
        });
    }
  }, [
    hasGenerated,
    generatedValue,
    selectedFrame,
    frameText,
    customLogo,
    selectedPresetLogo,
    useCustomColors,
    customDark,
    customLight,
    badgeShape
  ]);

  const handleGenerate = () => {
    if (inputValue.trim()) {
      setGeneratedValue(inputValue.trim());
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
      
      <QrSection
        qrDataUrl={qrDataUrl}
        hasGenerated={hasGenerated}
        selectedFrame={selectedFrame}
        setSelectedFrame={setSelectedFrame}
        frameText={frameText}
        setFrameText={setFrameText}
        customLogo={customLogo}
        setCustomLogo={setCustomLogo}
        selectedPresetLogo={selectedPresetLogo}
        setSelectedPresetLogo={setSelectedPresetLogo}
        useCustomColors={useCustomColors}
        setUseCustomColors={setUseCustomColors}
        customDark={customDark}
        setCustomDark={setCustomDark}
        customLight={customLight}
        setCustomLight={setCustomLight}
        badgeShape={badgeShape}
        setBadgeShape={setBadgeShape}
      />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I make a QR code with a logo for free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply enter your destination link or URL at the top of QrCodey, hit generate, select your preferred background template or frame, select or upload a custom logo (circular or square), and click Download to save the scannable high-resolution QR code instantly."
                }
              },
              {
                "@type": "Question",
                "name": "Do QrCodey QR codes expire?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, all custom QR codes created on QrCodey are static. The target URL is encoded directly into the QR matrix, meaning the code will never expire and can be scanned unlimited times forever."
                }
              },
              {
                "@type": "Question",
                "name": "Are custom QR codes safe to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, QrCodey generates static QR codes locally inside your browser canvas. We do not run redirects or intermediate tracking links, ensuring that your users scan the raw destination link safely without domain hijack risks."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use custom QR codes for commercial use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all templates and generated layouts are 100% royalty-free and available for commercial printing, business cards, restaurant menus, retail signages, and flyers."
                }
              }
            ]
          })
        }}
      />

      {/* SEO copy & FAQ Article Section */}
      <section className="relative w-full max-w-5xl mx-auto px-6 pb-24 flex flex-col gap-12 text-text-body animate-[fadeIn_0.6s_ease-out]">
        
        {/* Glassmorphic Divider */}
        <hr className="border-border-light" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Feature Cards Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/60 border border-primary-green/20 text-primary-dark text-[10px] font-bold uppercase tracking-wider mb-3 w-fit select-none">
                🌟 Smart Utility
              </span>
              <h2 className="heading-2 text-text-heading font-semibold leading-tight">
                Create Premium Custom QR Codes with Logos
              </h2>
              <p className="body-normal text-text-body mt-3">
                Stop using boring black-and-white QR codes. Style your digital connections to match your brand identity. QrCodey provides dynamic styling tools to create stunning, scannable assets for your business, menu, or socials in seconds.
              </p>
            </div>
            
            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white/45 border border-white/20 hover:border-primary-green/30 hover:bg-white/60 transition-all duration-300 shadow-xs group">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark font-bold text-sm mb-3 group-hover:scale-105 transition-transform duration-200">
                  ⚡
                </div>
                <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider">100% Free Forever</h4>
                <p className="text-[11px] text-text-body leading-relaxed mt-1">
                  No subscription models, no generation caps, no hidden fees. Download high-resolution print files instantly.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/45 border border-white/20 hover:border-primary-green/30 hover:bg-white/60 transition-all duration-300 shadow-xs group">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark font-bold text-sm mb-3 group-hover:scale-105 transition-transform duration-200">
                  🎯
                </div>
                <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider">Center Logo Badging</h4>
                <p className="text-[11px] text-text-body leading-relaxed mt-1">
                  Upload custom brand marks or select presets (Instagram, GitHub) to draw inside circular or square white borders.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/45 border border-white/20 hover:border-primary-green/30 hover:bg-white/60 transition-all duration-300 shadow-xs group">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark font-bold text-sm mb-3 group-hover:scale-105 transition-transform duration-200">
                  🎨
                </div>
                <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider">predesigned frames</h4>
                <p className="text-[11px] text-text-body leading-relaxed mt-1">
                  Choose from beautiful scrollable flyers like Polaroid templates, charcoal slate badges, or cyberpunk neon grids.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/45 border border-white/20 hover:border-primary-green/30 hover:bg-white/60 transition-all duration-300 shadow-xs group">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary-dark font-bold text-sm mb-3 group-hover:scale-105 transition-transform duration-200">
                  🔒
                </div>
                <h4 className="text-xs font-bold text-text-heading uppercase tracking-wider">Client-Side Safety</h4>
                <p className="text-[11px] text-text-body leading-relaxed mt-1">
                  All rendering is performed locally on your browser canvas. Your URLs or files are never sent to external servers.
                </p>
              </div>

            </div>
          </div>

          {/* Column 2: Accordion FAQ Section */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-10 shadow-md flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Answers & Help</span>
              <h2 className="heading-3 text-text-heading font-semibold mt-1">Frequently Asked Questions</h2>
            </div>
            
            <div className="flex flex-col gap-3">
              {[
                {
                  q: "How can I make a QR code with a logo for free?",
                  a: "Simply enter your destination link or URL at the top of QrCodey, hit generate, select your preferred background template or frame, select or upload a custom logo (circular or square), and click Download to save the scannable high-resolution QR code instantly."
                },
                {
                  q: "Do QrCodey QR codes expire?",
                  a: "No, all custom QR codes created on QrCodey are static. The target URL is encoded directly into the QR matrix, meaning the code will never expire and can be scanned unlimited times forever."
                },
                {
                  q: "Are scannable custom QR codes safe to use?",
                  a: "Yes, QrCodey generates static QR codes locally inside your browser canvas. We do not run redirects or intermediate tracking links, ensuring that your users scan the raw destination link safely without domain hijack risks."
                },
                {
                  q: "Can I use custom QR codes for commercial use?",
                  a: "Yes, all templates and generated layouts are 100% royalty-free and available for commercial printing, business cards, restaurant menus, retail signages, and flyers."
                }
              ].map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-border-light rounded-xl overflow-hidden bg-white/35 transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex items-center justify-between w-full p-4 text-left font-bold text-xs text-text-heading hover:bg-white/50 transition-colors select-none cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-300 ${
                          isOpen ? "rotate-90 text-primary-green" : ""
                        }`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[160px] opacity-100 border-t border-border-light/50" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="p-4 text-[11px] leading-relaxed text-text-body font-medium bg-white/10">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}
