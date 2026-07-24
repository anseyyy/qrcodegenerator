import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { logoDark, donationQr } from "@/require";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-footer text-text-footer-secondary border-t border-border-divider transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative h-8 w-8 overflow-hidden rounded-[8px]">
                <Image
                  src={logoDark}
                  alt="adeogram Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-text-footer transition-colors duration-200">
                adeogram
              </span>
            </Link>
            
            <div className="space-y-4 text-sm leading-relaxed text-text-footer-secondary">
              <p>
                We are a group of friends building tools that are simple, useful, and available for everyone.
              </p>
              <p>
                This is our first open source product, built for the world, completely free. <span className="inline-block text-primary-green">💚</span>
              </p>
            </div>

            <Button
              href="/about"
              variant="secondary"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Column 2: About Links */}
          <div className="space-y-6 lg:pl-10">
            <h3 className="text-base font-semibold text-text-footer">About Adeogram</h3>
            <ul className="space-y-1 text-sm font-medium">
              {[
                { name: "Our Mission", href: "/about" },
                { name: "Why We Built This", href: "/about" },
                { name: "Our Team", href: "/about" },
                { name: "Open Source", href: "https://github.com" }
              ].map((item, index) => (
                <li key={index} className="border-b border-border-divider/50 py-3 last:border-0">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-text-footer-secondary hover:text-text-footer transition-colors duration-200 group"
                  >
                    <span>{item.name}</span>
                    <span className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support & QR Code */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-text-footer">Support Our Journey</h3>
            <p className="text-sm leading-relaxed text-text-footer-secondary">
              If you like this tool and want to help us build more amazing free products, consider donating!
            </p>

            {/* QR Card */}
            <div className="w-fit rounded-donation-card bg-white p-3 shadow-md">
              <div className="flex flex-col items-center gap-2">
                {/* Real Donation QR Code Image */}
                <div className="relative w-[120px] h-[120px] select-none">
                  <Image
                    src={donationQr}
                    alt="Scan to Donate"
                    fill
                    className="object-contain"
                  />
                  {/* CSS overlay replacing the center GPay logo with a green heart logo */}
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
          <p className="flex items-center gap-1">
            &copy; 2025 Adeogram. Made with <span className="text-primary-green">💚</span> by friends, for the world.
          </p>
          <a
            href="https://instagram.com/adeogram.in"
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>Instagram: adeogram.in</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
