import Link from "next/link";
import Image from "next/image";
import { donationQr } from "@/require";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-footer text-text-footer-secondary border-t border-border-divider transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="text-lg font-bold text-text-footer transition-colors duration-200">
                QrCodey
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-zinc-400">
              QrCodey is a personal project built by Ansil. A simple, useful custom QR code generator designed for everyone, 100% free with no monthly subscription caps.
            </p>
            <p className="text-xs leading-relaxed text-zinc-400">
              Create, style, and customize QR codes with logo overlays and beautiful template themes locally inside your browser window. <span className="inline-block text-primary-green">💚</span>
            </p>
          </div>

          {/* Column 2: Custom Generators */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-footer">Custom Generators</h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/url-to-qr-code" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  URL to QR Code
                </Link>
              </li>
              <li>
                <Link href="/wifi-qr-code-generator" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  WiFi QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="/vcard-qr-code" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  vCard QR Code Generator
                </Link>
              </li>
              <li>
                <Link href="/whatsapp-qr-code" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  WhatsApp QR Code
                </Link>
              </li>
              <li>
                <Link href="/qr-code-with-logo" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  QR Code with Logo
                </Link>
              </li>
              <li>
                <Link href="/qr-code-api" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  QR Code Generator API
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-footer">Knowledge Hub</h3>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/blog" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  QrCodey Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a href="https://github.com/anseyyy" target="_blank" rel="noopener noreferrer" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ahamedansil" target="_blank" rel="noopener noreferrer" className="text-text-footer-secondary hover:text-text-footer transition-colors">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-footer">Support My Journey</h3>
            <p className="text-xs leading-relaxed text-zinc-400">
              If you find QrCodey helpful and want to support more free tools, feel free to show some love!
            </p>
            {/* QR Card */}
            <div className="w-fit rounded-donation-card bg-white p-2.5 shadow-sm border border-zinc-800">
              <div className="flex flex-col items-center gap-1.5">
                <div className="relative w-[100px] h-[100px] select-none">
                  <Image
                    src={donationQr}
                    alt="Scan to Support"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center border border-zinc-100 shadow-sm">
                    <svg
                      width="14"
                      height="14"
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
                <span className="text-[8px] font-bold text-zinc-900 uppercase tracking-wider">
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
