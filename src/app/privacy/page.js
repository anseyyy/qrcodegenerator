import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | QrCodey",
  description: "Read the Privacy Policy for QrCodey. We value your privacy: all QR code generation is done locally in your browser.",
};

export default function PrivacyPage() {
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

        {/* Policy Content Card */}
        <div className="bg-white/75 backdrop-blur-xl border border-white/20 rounded-card p-8 sm:p-12 shadow-md flex flex-col gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">Legal & Safety</span>
            <h1 className="heading-2 text-text-heading mt-2 font-semibold">Privacy Policy</h1>
            <p className="body-small text-text-body mt-1">Last Updated: August 2026</p>
          </div>

          <hr className="border-border-light" />

          <div className="flex flex-col gap-5 text-sm text-text-body leading-relaxed">
            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">1. Local Generation (Zero-Data Storage)</h2>
              <p>
                At QrCodey, we believe your data belongs to you. Unlike other online generators, all QR codes are compiled and rendered <strong>entirely inside your browser</strong> using HTML5 Canvas scripts. None of the text, URLs, contacts, or logo image files you enter or upload are ever transmitted to our servers or stored in any database. 
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">2. Personal & Custom Image Files</h2>
              <p>
                When you upload a custom logo (PNG/JPG) to center inside your QR code, the file is loaded locally using a browser-level <code>FileReader</code> API. No data or image files are uploaded, saved, or shared.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">3. Cookies & Analytical Tracking</h2>
              <p>
                We do not use cookie-based tracking files or target advertisements to identify you. We may use privacy-preserving, anonymous server logging files to monitor layout load performance and bandwidth utilization.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">4. Third-Party Links</h2>
              <p>
                Our site may contain links to external sites (such as GitHub or LinkedIn). We are not responsible for the privacy practices of external platforms, and we encourage you to review their terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">5. Updates to This Policy</h2>
              <p>
                We reserve the right to modify this privacy policy at any time. Any changes will be posted directly on this page with an updated timestamp.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-text-heading mb-2">6. Contact Information</h2>
              <p>
                If you have any questions or feedback regarding this policy, feel free to contact the developer directly at <a href="mailto:ahamedansilpa@gmail.com" className="text-primary-green hover:underline">ahamedansilpa@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
