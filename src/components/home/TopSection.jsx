import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function TopSection({ inputValue, setInputValue, onGenerate, qrType = "url" }) {
  // Local states for complex formats
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiEncryption, setWifiEncryption] = useState("WPA");

  const [vFirstName, setVFirstName] = useState("");
  const [vLastName, setVLastName] = useState("");
  const [vPhone, setVPhone] = useState("");
  const [vEmail, setVEmail] = useState("");
  const [vCompany, setVCompany] = useState("");
  const [vTitle, setVTitle] = useState("");
  const [vUrl, setVUrl] = useState("");

  const [emailTo, setEmailTo] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const [geoLat, setGeoLat] = useState("");
  const [geoLng, setGeoLng] = useState("");

  const [simpleText, setSimpleText] = useState("");

  // Sync initial input value if it has content
  useEffect(() => {
    if (inputValue && simpleText === "") {
      setSimpleText(inputValue);
    }
  }, [inputValue]);

  const compileValue = () => {
    switch (qrType) {
      case "wifi":
        return `WIFI:S:${wifiSsid.trim()};T:${wifiEncryption};P:${wifiPassword.trim()};;`;
      case "vcard":
        return [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `N:${vLastName.trim()};${vFirstName.trim()};;;`,
          `FN:${vFirstName.trim()} ${vLastName.trim()}`,
          vCompany.trim() ? `ORG:${vCompany.trim()}` : "",
          vTitle.trim() ? `TITLE:${vTitle.trim()}` : "",
          vPhone.trim() ? `TEL:${vPhone.trim()}` : "",
          vEmail.trim() ? `EMAIL:${vEmail.trim()}` : "",
          vUrl.trim() ? `URL:${vUrl.trim()}` : "",
          "END:VCARD"
        ].filter(Boolean).join("\n");
      case "email":
        const emailParams = [];
        if (emailSubject) emailParams.push(`subject=${encodeURIComponent(emailSubject.trim())}`);
        if (emailBody) emailParams.push(`body=${encodeURIComponent(emailBody.trim())}`);
        const paramsStr = emailParams.length > 0 ? `?${emailParams.join("&")}` : "";
        return `mailto:${emailTo.trim()}${paramsStr}`;
      case "whatsapp":
        const cleanPhone = whatsappPhone.replace(/[^0-9]/g, "");
        const waText = whatsappMessage.trim() ? `?text=${encodeURIComponent(whatsappMessage.trim())}` : "";
        return `https://wa.me/${cleanPhone}${waText}`;
      case "location":
        return `geo:${geoLat.trim()},${geoLng.trim()}`;
      case "instagram":
        const igUser = simpleText.replace(/@/g, "").trim();
        return igUser.startsWith("http") ? igUser : `https://instagram.com/${igUser}`;
      case "facebook":
        const fbUser = simpleText.trim();
        return fbUser.startsWith("http") ? fbUser : `https://facebook.com/${fbUser}`;
      case "twitter":
        const twUser = simpleText.replace(/@/g, "").trim();
        return twUser.startsWith("http") ? twUser : `https://twitter.com/${twUser}`;
      case "youtube":
        const ytChan = simpleText.trim();
        return ytChan.startsWith("http") ? ytChan : `https://youtube.com/${ytChan}`;
      case "url":
      default:
        let val = simpleText.trim();
        if (val && !val.startsWith("http://") && !val.startsWith("https://")) {
          val = "https://" + val;
        }
        return val;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalVal = compileValue();
    if (finalVal) {
      setInputValue(finalVal);
      // Wait for state sync and execute generation
      setTimeout(() => {
        onGenerate();
      }, 50);
    }
  };

  // Pre-calculate headings and helper text depending on active route/type
  const getSubheading = () => {
    switch (qrType) {
      case "wifi": return "Generate a scannable WiFi QR code. Users can scan to join the network instantly.";
      case "vcard": return "Create a digital vCard business card. Users can scan to import your contact details.";
      case "email": return "Generate an Email QR code with pre-filled subject line and message body.";
      case "whatsapp": return "Generate a custom WhatsApp click-to-chat QR code link.";
      case "location": return "Generate a static QR code pointing to specific GPS map coordinates.";
      case "instagram": return "Generate an Instagram QR code to grow your social following.";
      case "facebook": return "Generate a Facebook QR code to link users to your page or profile.";
      case "twitter": return "Generate a Twitter QR code to direct users to your profile feed.";
      case "youtube": return "Generate a YouTube QR code linking directly to your channel or video.";
      case "text": return "Generate a static QR code containing raw text paragraphs.";
      case "api": return "Integrate dynamic custom QR generation into your applications using our API.";
      case "url":
      default: return "Paste your link below and generate a QR code instantly.";
    }
  };

  const isMultiField = ["wifi", "vcard", "email", "whatsapp", "location"].includes(qrType);

  return (
    <section className="relative w-full max-w-3xl mx-auto px-6 pt-12 sm:pt-16 lg:pt-24 pb-8 flex flex-col items-center text-center">

      {/* Pill Badge */}
      <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-badge bg-primary-light border border-primary-green/20 text-primary-dark text-badge font-medium tracking-wide uppercase mb-6 shadow-sm select-none">
        <span className=" w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
        ✨ Free Customizer • Themes & Logos!
      </div>

      {/* Main Title with Sparkle Lines */}
      <div>
        <h1 className="display-large text-text-heading leading-tight tracking-[-1%] capitalize">
          {qrType.replace("-", " ")}{" "}
          <span className="relative inline-block text-primary-green">
            QR Generator
            <span className="absolute top-1 sm:-top-1.5 xl:top-1.5 xl:-right-3 -right-3.5 w-6 h-6 select-none pointer-events-none">
              <Image
                src="/images/icons/sparkle-lines.svg"
                width={24}
                height={24}
                className="text-primary-green"
                alt=""
              />
            </span>
          </span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="mt-4 body-base text-text-body max-w-md font-normal">
        {getSubheading()}
      </p>

      {/* Input Form with Left Arrow */}
      <form onSubmit={handleSubmit} className="relative w-full max-w-xl mt-10 text-left">
        {/* Curvy arrow pointing to the input bar */}
        <div className="absolute -left-1 sm:-left-8 lg:-left-12 -top-10 sm:-top-5 lg:-top-5 w-8 h-8 sm:w-10 rotate-25 sm:rotate-0 sm:h-10 lg:w-12 lg:h-12 select-none pointer-events-none text-text-heading">
          <Image
            src="/images/icons/arrow-left.svg"
            fill
            className="opacity-90 object-contain"
            alt=""
          />
        </div>

        {isMultiField ? (
          /* Multi-Field Grid Layout (WiFi, vCard, Email, WhatsApp, Geo) */
          <div className="flex flex-col gap-4 p-6 sm:p-8 rounded-card bg-white/70 backdrop-blur-md border border-border-input shadow-md w-full animate-[fadeIn_0.3s_ease-out]">
            
            {qrType === "wifi" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Network Name (SSID)</label>
                  <input
                    type="text"
                    required
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    placeholder="e.g. Home_Network"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Password</label>
                  <input
                    type="password"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="WPA/WPA2 Key"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Security Encryption</label>
                  <select
                    value={wifiEncryption}
                    onChange={(e) => setWifiEncryption(e.target.value)}
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all cursor-pointer"
                  >
                    <option value="WPA">WPA / WPA2 (Recommended)</option>
                    <option value="WEP">WEP Encryption</option>
                    <option value="nopass">Unsecured (No Password)</option>
                  </select>
                </div>
              </div>
            )}

            {qrType === "vcard" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">First Name</label>
                  <input
                    type="text"
                    required
                    value={vFirstName}
                    onChange={(e) => setVFirstName(e.target.value)}
                    placeholder="John"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Last Name</label>
                  <input
                    type="text"
                    required
                    value={vLastName}
                    onChange={(e) => setVLastName(e.target.value)}
                    placeholder="Doe"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={vPhone}
                    onChange={(e) => setVPhone(e.target.value)}
                    placeholder="+91 99999 99999"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Email Address</label>
                  <input
                    type="email"
                    value={vEmail}
                    onChange={(e) => setVEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Company Name</label>
                  <input
                    type="text"
                    value={vCompany}
                    onChange={(e) => setVCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Job Title</label>
                  <input
                    type="text"
                    value={vTitle}
                    onChange={(e) => setVTitle(e.target.value)}
                    placeholder="Product Designer"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Website URL</label>
                  <input
                    type="url"
                    value={vUrl}
                    onChange={(e) => setVUrl(e.target.value)}
                    placeholder="https://www.example.com"
                    className="h-11 px-3.5 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
              </div>
            )}

            {qrType === "email" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Send To (Email Address)</label>
                  <input
                    type="email"
                    required
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    placeholder="receiver@example.com"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Subject Line</label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Inquiry about services"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Message Body</label>
                  <textarea
                    rows={4}
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    placeholder="Write your prefilled email text here..."
                    className="p-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {qrType === "whatsapp" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Phone Number (with Country Code)</label>
                  <input
                    type="tel"
                    required
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="e.g. 919876543210 (India)"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Welcome Message</label>
                  <textarea
                    rows={3}
                    value={whatsappMessage}
                    onChange={(e) => setWhatsappMessage(e.target.value)}
                    placeholder="Hello! I'm interested in your QR tools..."
                    className="p-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {qrType === "location" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Latitude</label>
                  <input
                    type="text"
                    required
                    value={geoLat}
                    onChange={(e) => setGeoLat(e.target.value)}
                    placeholder="e.g. 28.6139"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Longitude</label>
                  <input
                    type="text"
                    required
                    value={geoLng}
                    onChange={(e) => setGeoLng(e.target.value)}
                    placeholder="e.g. 77.2090"
                    className="h-12 px-4 rounded-xl border border-zinc-200 bg-white text-xs font-semibold text-text-heading outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-light transition-all"
                  />
                </div>
              </div>
            )}

            <Button type="submit" variant="primary" className="h-12 mt-4 text-xs font-bold w-full uppercase tracking-wider">
              Generate QR Code
            </Button>
          </div>
        ) : (
          /* Single-Field Layout (URL, Text, Social Usernames) */
          <>
            <div className="flex items-center gap-2.5 w-full h-[68px] max-md:h-[60px] p-2 bg-white/90 backdrop-blur-sm rounded-input border border-border-input shadow-sm focus-within:ring-4 focus-within:ring-primary-light focus-within:border-primary-green transition-all duration-250">
              {/* Context-Specific Icon */}
              <div className="pl-3 text-text-muted">
                {qrType === "text" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
                ) : ["instagram", "facebook", "twitter", "youtube"].includes(qrType) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                )}
              </div>

              {/* Input field */}
              <input
                type="text"
                required
                value={simpleText}
                onChange={(e) => setSimpleText(e.target.value)}
                placeholder={
                  qrType === "text" ? "Type or paste your text content here..." :
                  qrType === "instagram" ? "Enter Instagram username (e.g. anseyyy)" :
                  qrType === "facebook" ? "Enter Facebook username/profile URL" :
                  qrType === "twitter" ? "Enter Twitter username (e.g. anseyyy)" :
                  qrType === "youtube" ? "Enter YouTube channel or video URL" :
                  "Paste your target link here..."
                }
                className="flex-1 bg-transparent border-0 outline-none text-xs font-semibold text-text-heading placeholder-text-muted focus:ring-0 py-2"
              />

              {/* Arrow Button */}
              <Button type="submit" variant="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>
            
            <p className="text-xs text-text-body/80 mt-3 select-none">
              💡 <strong>Tip:</strong> Choose custom backgrounds and center logos on your QR code in the settings panel below!
            </p>
          </>
        )}
      </form>
    </section>
  );
}
