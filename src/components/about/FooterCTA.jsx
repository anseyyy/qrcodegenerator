"use client";

import Button from "@/components/shared/Button";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function FooterCTA() {
  return (
    <section className="bg-bg-footer border-t border-border-divider text-text-footer py-20 sm:py-28 relative overflow-hidden">
      {/* Absolute decorative accent circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-green/5 filter blur-3xl select-none pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary-green/5 filter blur-3xl select-none pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10">
        <AnimatedWrapper type="fadeUp" delay={0.05} className="space-y-6 max-w-xl mx-auto">
          <h2 className="heading-1 text-text-footer font-bold leading-tight">
            Ready to craft your own?
          </h2>
          
          <p className="body-base text-text-footer-secondary max-w-md mx-auto">
            Start generating beautiful, clean QR codes in less than a minute. No credit card required.
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              href="/"
              variant="primary"
              className="px-10 h-[56px] shadow-lg hover:shadow-primary-green/10"
            >
              Get Started
            </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
