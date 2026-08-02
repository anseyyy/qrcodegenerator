import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { FRAMES, PRESET_LOGOS } from "@/utils/qrGenerator";

export default function QrSection({
  qrDataUrl,
  hasGenerated,
  selectedFrame,
  setSelectedFrame,
  frameText,
  setFrameText,
  customLogo,
  setCustomLogo,
  selectedPresetLogo,
  setSelectedPresetLogo,
  useCustomColors,
  setUseCustomColors,
  customDark,
  setCustomDark,
  customLight,
  setCustomLight,
  badgeShape,
  setBadgeShape
}) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
    setHasDragged(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const slider = scrollRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    slider.scrollLeft = scrollLeft - walk;
  };

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setCustomLogo(event.target?.result);
      setSelectedPresetLogo(null);
    };
    reader.readAsDataURL(file);
  };

  const handlePresetSelect = (key) => {
    setSelectedPresetLogo(key);
    setCustomLogo(null);
  };

  const handleRemoveLogo = () => {
    setSelectedPresetLogo(null);
    setCustomLogo(null);
  };

  const isSquare = selectedFrame?.id === "none";
  const isPreviewSquare = isSquare || !frameText.trim();

  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 pb-24 flex flex-col items-center">
      {hasGenerated && qrDataUrl ? (
        /* 2-Column Split Dashboard (Desktop) / Stacked (Mobile) */
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-[fadeIn_0.5s_ease-out]">
          
          {/* Left Column: QR Code Display Card */}
          <div className="lg:col-span-5 bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-10 flex flex-col items-center shadow-md w-full relative transition-all duration-300">
            {/* QR Wrapper with Lime Green Brackets */}
            <div className="relative p-6 bg-white/50 rounded-qr-preview shadow-sm border border-white/10">
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary-green rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary-green rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary-green rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary-green rounded-br-lg"></div>

              {/* Dynamic preview box adjusts height to fit frame shape nicely */}
              <div className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-inner transition-all duration-300 ${
                isPreviewSquare ? "w-48 h-48 p-0" : "w-52 h-[280px] p-2"
              }`}>
                <Image
                  src={qrDataUrl}
                  alt="Generated QR Code"
                  fill
                  className="object-contain transition-all duration-300 p-2"
                  priority
                />
              </div>
            </div>

            {/* Download Button Wrapper */}
            <div className="relative w-full flex justify-center mt-8">
              <Button
                onClick={handleDownload}
                variant="primary"
                className="w-full sm:w-auto gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download QR Code
              </Button>
            </div>

            <span className="caption-text text-text-muted mt-3 select-none">
              Scan to preview • 100% Free
            </span>
          </div>

          {/* Right Column: Customization Panel */}
          <div className="lg:col-span-7 bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-10 flex flex-col gap-6 shadow-md w-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/70 border border-primary-green/30 text-primary-dark text-[10px] font-bold uppercase tracking-wider mb-3 w-fit shadow-sm select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
                ✨ Customizer Options Available
              </div>
              <h2 className="heading-3 text-text-heading font-semibold">Customize QR Code</h2>
              <p className="body-small text-text-body mt-1">
                Personalize your QR code template design and logo details.
              </p>
            </div>

            <hr className="border-border-light" />

            {/* Custom Frame Background Templates (Scrollable Horizontal Carousel) */}
            <div className="flex flex-col gap-2.5">
              <h3 className="text-xs uppercase font-bold tracking-wider text-text-heading flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green"></span>
                Select Background / Frame Design
              </h3>
              
              {/* Scrollable list */}
              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex gap-3.5 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none select-none active:cursor-grabbing"
                style={{
                  cursor: isDragging ? "grabbing" : "grab",
                  scrollBehavior: isDragging ? "auto" : "smooth"
                }}
              >
                {FRAMES.map((f) => {
                  const isSelected = selectedFrame?.id === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => {
                        if (hasDragged) return;
                        setSelectedFrame(f);
                        setFrameText("");
                      }}
                      className={`flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all duration-200 w-[140px] ${
                        isSelected
                          ? "border-primary-green bg-primary-light/30 ring-2 ring-primary-green/10 scale-[1.01]"
                          : "border-border-light hover:border-gray-300 bg-gray-50/20"
                      }`}
                    >
                      {/* Visual preview representation of the template */}
                      <div
                        className={`w-full aspect-[3/4] max-h-[105px] rounded-xl border border-gray-200/50 flex flex-col items-center justify-between p-2 shadow-sm overflow-hidden ${
                          f.id === "none" ? "bg-white border-dashed border-gray-300" : ""
                        }`}
                        style={{
                          background: f.bgColor === "linear-gradient" && f.colors
                            ? `linear-gradient(135deg, ${f.colors.join(", ")})`
                            : f.bgColor
                        }}
                      >
                        {f.id === "none" ? (
                          <div className="flex-1 flex items-center justify-center text-[10px] text-text-muted font-bold">
                            SQUARE
                          </div>
                        ) : (
                          <>
                            {/* Inner white container */}
                            <div className="w-[60%] aspect-square bg-white rounded-md flex items-center justify-center shadow-xs mt-1">
                              <div className="w-3.5 h-3.5 border border-zinc-900 border-dashed rounded-xs opacity-35" />
                            </div>
                            {/* Bottom tag text badge preview */}
                            <div
                              className="w-[85%] h-4 rounded-full mt-2 flex items-center justify-center text-[8px] font-black truncate px-1 text-center leading-none"
                              style={{
                                backgroundColor: f.accentColor,
                                color: f.textColor
                              }}
                            >
                              {f.labelText}
                            </div>
                          </>
                        )}
                      </div>
                      <span className="text-[11px] font-bold text-text-heading truncate w-full">
                        {f.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Input for custom frame text */}
              {!isSquare && (
                <div className="mt-2 flex flex-col gap-1.5 animate-[fadeIn_0.2s_ease-out]">
                  <span className="text-[10px] uppercase font-bold text-text-muted">
                    Frame Text Label
                  </span>
                  <input
                    type="text"
                    maxLength={18}
                    value={frameText}
                    onChange={(e) => setFrameText(e.target.value)}
                    placeholder={`e.g. ${selectedFrame.labelText}`}
                    className="h-11 px-4 rounded-xl border border-border-light bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                  <span className="text-[9px] text-text-muted">
                    Limit: 18 characters. Leave empty for default.
                  </span>
                </div>
              )}
            </div>

            <hr className="border-border-light" />

            {/* Logo Settings */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-text-heading flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green"></span>
                Add Logo to Center
              </h3>

              {/* Preset Logos Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                <button
                  type="button"
                  onClick={handleRemoveLogo}
                  className={`flex flex-col items-center justify-center p-2 rounded-xl border aspect-square transition-all duration-200 cursor-pointer ${
                    !selectedPresetLogo && !customLogo
                      ? "border-primary-green bg-primary-light/30 ring-2 ring-primary-green/10"
                      : "border-border-light hover:border-gray-300 bg-gray-50/30"
                  }`}
                >
                  <span className="text-[9px] font-bold text-text-muted uppercase">None</span>
                </button>
                {Object.entries(PRESET_LOGOS).map(([key, item]) => {
                  const isSelected = selectedPresetLogo === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handlePresetSelect(key)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border aspect-square transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-primary-green bg-primary-light/30 ring-2 ring-primary-green/10"
                          : "border-border-light hover:border-gray-300 bg-gray-50/30"
                      }`}
                      title={item.name}
                    >
                      <div
                        className="w-6 h-6 flex items-center justify-center text-text-heading"
                        dangerouslySetInnerHTML={{ __html: item.svg }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Custom Image Upload */}
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
                <div className="w-full flex-1">
                  <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="flex items-center justify-center gap-2 w-full h-11 border border-dashed border-primary-green/45 hover:border-primary-green rounded-xl bg-primary-light/10 hover:bg-primary-light/20 text-xs font-semibold text-primary-dark cursor-pointer transition-all duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-4.5 h-4.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    Upload Custom PNG/JPG Logo
                  </label>
                </div>

                {customLogo && (
                  <div className="flex items-center gap-2.5 bg-gray-50 border border-border-light rounded-xl px-3 py-2 w-full sm:w-auto animate-[fadeIn_0.2s_ease-out]">
                    <div className="relative w-7 h-7 rounded-lg border border-gray-200 overflow-hidden bg-white flex-shrink-0">
                      <Image
                        src={customLogo}
                        alt="Custom logo preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-heading max-w-[100px] truncate">
                      Custom Uploaded
                    </span>
                    <button
                      type="button"
                      onClick={handleRemoveLogo}
                      className="p-1 hover:bg-gray-200 rounded-lg text-error transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Logo Badge Shape Selector */}
              {(selectedPresetLogo || customLogo) && (
                <div className="flex flex-col gap-2 mt-2 animate-[fadeIn_0.2s_ease-out]">
                  <span className="text-[10px] uppercase font-bold text-text-muted">
                    Logo Badge Shape
                  </span>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setBadgeShape("circle")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-200 ${
                        badgeShape === "circle"
                          ? "border-primary-green bg-primary-light/30 ring-2 ring-primary-green/10"
                          : "border-border-light hover:border-gray-300 bg-gray-50/30 text-text-body"
                      }`}
                    >
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-current" />
                      Circular Outer Border
                    </button>
                    <button
                      type="button"
                      onClick={() => setBadgeShape("rounded-rect")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-200 ${
                        badgeShape === "rounded-rect"
                          ? "border-primary-green bg-primary-light/30 ring-2 ring-primary-green/10"
                          : "border-border-light hover:border-gray-300 bg-gray-50/30 text-text-body"
                      }`}
                    >
                      <div className="w-3.5 h-3.5 rounded border-2 border-current" />
                      Rounded Square Border
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Advanced customization options: Color matrix (applicable on square or badge borders) */}
            {isSquare && (
              <>
                <hr className="border-border-light" />
                
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-text-heading flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-green"></span>
                    Advanced Color Options
                  </h3>
                  
                  <div className="p-4 rounded-2xl border border-dashed border-border-light bg-gray-50/20">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={useCustomColors}
                        onChange={(e) => setUseCustomColors(e.target.checked)}
                        className="w-4.5 h-4.5 rounded border-border-light text-primary-green focus:ring-primary-green accent-primary-green cursor-pointer"
                      />
                      <span className="text-xs font-semibold text-text-heading">
                        Use Advanced Custom Colors
                      </span>
                    </label>
                    {useCustomColors && (
                      <div className="flex gap-4 mt-4 animate-[fadeIn_0.25s_ease-out]">
                        <div className="flex-1 flex flex-col gap-1.5">
                          <span className="text-[10px] uppercase font-bold text-text-muted">
                            QR Pattern (Dark)
                          </span>
                          <div className="flex items-center gap-2 h-11 px-3 rounded-xl border border-border-light bg-white">
                            <input
                              type="color"
                              value={customDark}
                              onChange={(e) => setCustomDark(e.target.value)}
                              className="w-7 h-7 border-0 p-0 cursor-pointer rounded-lg bg-transparent"
                            />
                            <span className="text-xs font-mono uppercase font-semibold text-text-heading">
                              {customDark}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5">
                          <span className="text-[10px] uppercase font-bold text-text-muted">
                            Background (Light)
                          </span>
                          <div className="flex items-center gap-2 h-11 px-3 rounded-xl border border-border-light bg-white">
                            <input
                              type="color"
                              value={customLight}
                              onChange={(e) => setCustomLight(e.target.value)}
                              className="w-7 h-7 border-0 p-0 cursor-pointer rounded-lg bg-transparent"
                            />
                            <span className="text-xs font-mono uppercase font-semibold text-text-heading">
                              {customLight}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

          </div>
        </div>
      ) : (
        /* Empty / Waiting for Link State */
        <div className="relative w-full max-w-md bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-12 flex flex-col items-center shadow-md">
          <div className="relative p-6 bg-white rounded-qr-preview shadow-sm border border-border-light">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary-green rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary-green rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary-green rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary-green rounded-br-lg"></div>

            <div className="w-48 h-48 relative flex items-center justify-center overflow-hidden rounded-qr-preview">
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <svg
                  width="192"
                  height="192"
                  viewBox="0 0 29 29"
                  className="text-text-heading blur-[4px] opacity-15 select-none transition-all duration-300"
                  fill="none"
                >
                  <rect width="29" height="29" fill="white" />
                  <path d="M 1,1 H 8 V 8 H 1 Z M 2,2 V 7 H 7 V 2 Z M 3,3 H 6 V 6 H 3 Z" fill="currentColor" />
                  <path d="M 21,1 H 28 V 8 H 21 Z M 22,2 V 7 H 27 V 2 Z M 23,3 H 26 V 6 H 23 Z" fill="currentColor" />
                  <path d="M 1,21 H 8 V 28 H 1 Z M 2,22 V 27 H 7 V 22 Z M 3,23 H 6 V 26 H 3 Z" fill="currentColor" />
                  <path d="M 10,1 H 12 V 3 H 10 Z M 13,0 H 15 V 2 H 13 Z M 16,1 H 18 V 3 H 16 Z M 19,2 H 20 V 4 H 19 Z" fill="currentColor" />
                  <path d="M 9,4 H 11 V 6 H 9 Z M 14,3 H 16 V 5 H 14 Z M 18,4 H 20 V 6 H 18 Z" fill="currentColor" />
                  <path d="M 10,7 H 12 V 9 H 10 Z M 15,6 H 17 V 8 H 15 Z M 19,7 H 20 V 9 H 19 Z" fill="currentColor" />
                  <path d="M 1,10 H 3 V 12 H 1 Z M 5,9 H 7 V 11 H 5 Z M 9,10 H 11 V 12 H 9 Z" fill="currentColor" />
                  <path d="M 21,10 H 23 V 12 H 21 Z M 25,9 H 27 V 11 H 25 Z M 27,11 H 28 V 13 H 27 Z" fill="currentColor" />
                  <path d="M 10,13 H 12 V 15 H 10 Z M 14,14 H 16 V 16 H 14 Z M 18,13 H 20 V 15 H 18 Z" fill="currentColor" />
                  <path d="M 1,15 H 3 V 17 H 1 Z M 5,14 H 7 V 16 H 5 Z M 9,15 H 11 V 17 H 9 Z" fill="currentColor" />
                  <path d="M 21,15 H 23 V 17 H 21 Z M 25,14 H 27 V 16 H 25 Z M 27,16 H 28 V 18 H 27 Z" fill="currentColor" />
                  <path d="M 10,21 H 12 V 23 H 10 Z M 13,22 H 15 V 24 H 13 Z M 16,21 H 18 V 23 H 16 Z M 19,22 H 20 V 24 H 19 Z" fill="currentColor" />
                  <path d="M 9,25 H 11 V 27 H 9 Z M 14,24 H 16 V 26 H 14 Z M 18,25 H 20 V 27 H 18 Z" fill="currentColor" />
                  <path d="M 10,27 H 12 V 29 H 10 Z M 15,28 H 17 V 30 H 15 Z M 19,27 H 20 V 29 H 19 Z" fill="currentColor" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-dark mb-2 shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Waiting for Link
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full flex justify-center mt-8">
            <Button
              disabled={true}
              variant="primary"
              className="w-full sm:w-auto gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download QR Code
            </Button>
          </div>

          <span className="caption-text text-text-muted mt-3 select-none">
            Enter a URL above to generate
          </span>
        </div>
      )}
    </section>
  );
}
