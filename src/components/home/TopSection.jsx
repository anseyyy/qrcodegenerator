import Image from "next/image";
import Button from "@/components/common/Button";

export default function TopSection({ inputValue, setInputValue, onGenerate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-6 pt-12 sm:pt-16 lg:pt-24 pb-8 flex flex-col items-center text-center">

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-badge bg-primary-light border border-primary-green/20 text-primary-dark text-badge font-medium tracking-wide uppercase mb-6 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
        ✨ 100% Free • Customize Themes & Logos!
      </div>

      {/* Main Title with Sparkle Lines */}
      <div>
        <h1 className="display-large text-text-heading leading-tight tracking-[-1%]">
          QR Code{" "}
          <span className="relative inline-block text-primary-green">
            Generator
            {/* Sparkle lines on the top right of Generator */}
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
        Paste your link below and generate a QR code instantly.
      </p>

      {/* Input Form with Left Arrow */}
      <form onSubmit={handleSubmit} className="relative w-full max-w-xl mt-10">
        {/* Curvy arrow pointing to the input bar */}
        <div className="absolute -left-1 sm:-left-8 lg:-left-12 -top-10 sm:-top-5 lg:-top-5 w-8 h-8 sm:w-10 rotate-25 sm:rotate-0 sm:h-10 lg:w-12 lg:h-12 select-none pointer-events-none text-text-heading">
          <Image
            src="/images/icons/arrow-left.svg"
            fill
            className="opacity-90 object-contain"
            alt=""
          />
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2.5 w-full h-[68px] max-md:h-[60px] p-2 bg-white/90 backdrop-blur-sm rounded-input border border-border-input shadow-sm focus-within:ring-4 focus-within:ring-primary-light focus-within:border-primary-green transition-all duration-250">
          {/* Chain Link Icon */}
          <div className="pl-3 text-text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
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

          {/* Input field */}
          <input
            type="url"
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Paste your link here..."
            className="flex-1 bg-transparent border-0 outline-none text-sm text-text-heading placeholder-text-muted focus:ring-0 py-2"
          />

          {/* Arrow Button */}
          <Button
            type="submit"
            variant="icon"
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>
        </div>
        <p className="text-xs text-text-body/80 mt-3 select-none">
          💡 <strong>Tip:</strong> You can choose color themes and add custom logos to the center of your QR code after generating!
        </p>
      </form>
    </section>
  );
}
