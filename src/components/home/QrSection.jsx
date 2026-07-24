import Image from "next/image";
import Button from "@/components/common/Button";

export default function QrSection({ qrDataUrl, hasGenerated }) {
  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full max-w-xl mx-auto px-6 pb-24 flex flex-col items-center">
      {/* QR Card Container */}
      <div className="relative w-full max-w-md bg-white border border-border-light rounded-card p-8 sm:p-12 flex flex-col items-center shadow-md">



        {/* QR Wrapper with Brackets */}
        <div className="relative p-6 bg-white rounded-qr-preview shadow-sm border border-border-light">
          {/* Lime Green Brackets */}
          {/* Top-Left */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary-green rounded-tl-lg"></div>
          {/* Top-Right */}
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary-green rounded-tr-lg"></div>
          {/* Bottom-Left */}
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary-green rounded-bl-lg"></div>
          {/* Bottom-Right */}
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary-green rounded-br-lg"></div>

          {/* Generated QR Image or Placeholder */}
          <div className="w-48 h-48 relative flex items-center justify-center overflow-hidden rounded-qr-preview">
            {hasGenerated && qrDataUrl ? (
              <Image
                src={qrDataUrl}
                alt="Generated QR Code"
                fill
                className="object-contain animate-[fadeIn_0.4s_ease-out]"
                priority
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Stylized Blurred SVG QR Code */}
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

                {/* Centered Instruction Overlay */}
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
            )}
          </div>
        </div>

        {/* Download Button Wrapper */}
        <div className="relative w-full flex justify-center mt-8">
          <Button
            onClick={handleDownload}
            disabled={!hasGenerated || !qrDataUrl}
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

          {/* Curvy arrow pointing to the download button - only shown when QR code is generated */}
          {hasGenerated && (
            <div className="absolute -rotate-30 sm:rotate-0 left-[calc(60%+100px)] sm:left-[calc(50%+115px)] lg:left-[calc(50%+130px)] -top-[40px] sm:top-[4px] lg:top-[2px] w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 select-none pointer-events-none text-text-heading">
              <Image
                src="/images/icons/arrow-right.svg"
                fill
                className="opacity-90 object-contain"
                alt=""
              />
            </div>
          )}
        </div>

        {/* Scan to Preview Muted Label */}
        {hasGenerated ? (
          <span className="caption-text text-text-muted mt-3 select-none animate-[fadeIn_0.4s_ease-out]">
            Scan to preview
          </span>
        ) : (
          <span className="caption-text text-text-muted mt-3 select-none">
            Enter a URL above to generate
          </span>
        )}
      </div>
    </section>
  );
}
