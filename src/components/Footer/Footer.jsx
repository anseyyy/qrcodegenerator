import Link from "next/link";
import Image from "next/image";
import { donationQr } from "@/require";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-footer text-text-footer-secondary border-t border-border-divider transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              
              <div className="text-xl font-bold text-text-footer transition-colors duration-200">
                QrCodey
              </div>
            </Link>
            
            <div className="space-y-4 text-sm leading-relaxed text-text-footer-secondary">
              <p>
                QrCodey is a personal project built by Ansil. A simple, useful QR code generator designed for everyone, completely free.
              </p>
              <p>
                Create, style, and customize your QR codes with logo overlays and beautiful color themes, with no sign-up required. <span className="inline-block text-primary-green">💚</span>
              </p>
            </div>
          </div>

          {/* Column 2: Developer Details */}
          <div className="space-y-6 lg:pl-10">
            <h3 className="text-base font-semibold text-text-footer">Developer Profile</h3>
            <ul className="space-y-1 text-sm font-medium">
              {[
                { name: "GitHub Portfolio", href: "https://github.com/anseyyy", handle: "anseyyy" },
                { name: "LinkedIn Profile", href: "https://linkedin.com/in/ahamedansil", handle: "ahamedansil" },
                { name: "Contact Email", href: "mailto:ahamedansilpa@gmail.com", handle: "ahamedansilpa@gmail.com" }
              ].map((item, index) => (
                <li key={index} className="border-b border-border-divider/50 py-3.5 last:border-0">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-text-footer-secondary hover:text-text-footer transition-colors duration-200 group"
                  >
                    <div className="flex flex-col">
                      <span className="text-text-footer">{item.name}</span>
                      <span className="text-xs font-normal text-zinc-500 mt-0.5">{item.handle}</span>
                    </div>
                    <span className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & QR Code */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-text-footer">Support My Journey</h3>
            <p className="text-sm leading-relaxed text-text-footer-secondary">
              If you find QrCodey helpful and want to support more free tools, feel free to show some love!
            </p>

            {/* QR Card */}
            <div className="w-fit rounded-donation-card bg-white p-3 shadow-md border border-zinc-100">
              <div className="flex flex-col items-center gap-2">
                {/* Real Donation QR Code Image */}
                <div className="relative w-[120px] h-[120px] select-none">
                  <Image
                    src={donationQr}
                    alt="Scan to Support"
                    fill
                    className="object-contain"
                  />
                  {/* CSS overlay replacing the center logo with a green heart logo */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center border border-zinc-100 shadow-sm">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary-green fill-primary-green"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-zinc-900 uppercase tracking-wider">
                  Scan to Donate
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal text-text-footer-secondary">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p className="flex items-center justify-center sm:justify-start gap-1">
              &copy; 2026 QrCodey. Made with <span className="text-primary-green">💚</span> by{" "}
              <a
                href="https://github.com/anseyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-footer font-semibold underline transition-colors"
              >
                Ansil
              </a>
            </p>
            <div className="flex justify-center sm:justify-start gap-4 font-semibold text-zinc-400">
              <Link href="/privacy" className="hover:text-text-footer transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-text-footer transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
          <a
            href="https://github.com/anseyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text-footer transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>GitHub: anseyyy</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
