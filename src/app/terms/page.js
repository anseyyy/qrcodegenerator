import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | QrCodey",
  description: "Read the Terms and Conditions of QrCodey. Learn about the free commercial and personal usage rights of generated QR codes.",
};

export default function TermsPage() {
  return (
    <main className="relative flex-1 flex flex-col justify-start bg-transparent py-16 px-6 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-primary-green/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-bold text-primary-dark hover:text-primary-green uppercase tracking-wider transition-colors w-fit group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5" 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Generator
        </Link>

        {/* Terms Content Card */}
        <div className="bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-12 shadow-md flex flex-col gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Agreement</span>
            <h1 className="heading-2 text-text-heading mt-2 font-semibold">Terms and Conditions</h1>
            <p className="body-small text-text-body mt-1">Last Updated: August 2026</p>
          </div>

          <hr className="border-border-light" />

          <div className="flex flex-col gap-5 text-sm text-text-body leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">1. Use of the Service</h2>
              <p>
                By accessing and using QrCodey, you agree to comply with these terms. QrCodey provides a free browser-based generator utility enabling you to render and download custom styled QR codes with logos and decorative backgrounds.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">2. Intellectual Property Rights (100% Free)</h2>
              <p>
                All QR codes generated using QrCodey are completely free for both <strong>personal and commercial use</strong>. You hold full ownership of the downloaded QR files and are granted perpetual, royalty-free rights to reproduce, distribute, and print them on any media (flyers, menus, signage, business cards). No attribution is required.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">3. Prohibited Activities</h2>
              <p>
                You agree not to use QrCodey to generate QR codes containing malicious URLs, phishing traps, virus distribution vectors, or content that violates local, state, or federal laws.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">4. Disclaimer of Warranties</h2>
              <p>
                This utility is provided "as is" and "as available" without any warranties of any kind, express or implied. The developer does not guarantee that the service will be uninterrupted, error-free, or compatible with every physical scanner lens. Please verify that your generated QR code scans correctly before printing in bulk.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">5. Limitation of Liability</h2>
              <p>
                Under no circumstances shall QrCodey or its developer be liable for any direct, indirect, incidental, or consequential damages (including printing cost losses or broken url redirects) arising out of the use or inability to use this tool.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
