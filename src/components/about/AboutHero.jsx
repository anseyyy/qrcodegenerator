"use client";

import Image from "next/image";
import { aboutHero, dotPattern } from "@/../public/images";
import Badge from "@/components/shared/Badge";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function AboutHero() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Decorative background dot pattern */}
      <div className="absolute top-12 left-1/2 -translate-x-12 opacity-40 select-none pointer-events-none hidden lg:block">
        <Image src={dotPattern} width={60} height={60} alt="" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side text content */}
        <AnimatedWrapper type="fadeUp" delay={0.05} className="space-y-6 lg:max-w-xl">
          <Badge>We are Adeogram</Badge>
          
          <h1 className="display-large text-text-heading leading-tight tracking-[-1%] font-bold">
            About{" "}
            <span className="text-primary-green relative">
              Us
            </span>
          </h1>

          <div className="space-y-4">
            <p className="body-large text-text-heading leading-relaxed font-semibold">
              We are a group of friends who love building simple, useful tools that make a difference. 
              Adeogram is our first open-source project built for everyone around the world. 
              We are just getting started.
            </p>
            <p className="body-base text-text-body leading-relaxed">
              Our goal is to create beautiful free tools and open-source resources anyone can use.
            </p>
          </div>
        </AnimatedWrapper>

        {/* Right Side SVG Illustration */}
        <AnimatedWrapper type="zoomIn" delay={0.2} className="relative w-full aspect-[4/3] flex items-center justify-center lg:pl-6">
          {/* Abstract green blob background decoration */}
          <div className="absolute inset-0 bg-primary-light/40 rounded-[40px] filter blur-xl -z-10 transform scale-95"></div>
          
          {/* Main puzzle assembly graphic */}
          <div className="relative w-full h-full max-w-md lg:max-w-lg">
            <Image
              src={aboutHero}
              alt="About Adeogram Illustration"
              fill
              priority
              className="object-contain select-none"
            />
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
