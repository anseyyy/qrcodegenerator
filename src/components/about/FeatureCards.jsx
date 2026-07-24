"use client";

import Image from "next/image";
import { giftIcon, codeIcon, heartIcon } from "@/../public/images";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function FeatureCards() {
  const features = [
    {
      icon: giftIcon,
      title: "100% Free",
      description: "Always and forever.",
    },
    {
      icon: codeIcon,
      title: "Open Source",
      description: "Built for everyone.",
    },
    {
      icon: heartIcon,
      title: "Made with 💚",
      description: "By friends, for the world.",
    },
  ];

  return (
    <section className="py-12 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <AnimatedWrapper
          type="stagger"
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <AnimatedWrapper
              key={index}
              type="fadeUp"
              className="group flex flex-col items-center text-center p-8 rounded-card border border-border-light bg-white shadow-sm transition-all duration-300 hover:border-primary-green/30 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Centered Rounded Icon Box */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary-dark transition-transform duration-300 group-hover:scale-110 shadow-sm relative">
                <Image
                  src={feature.icon}
                  width={24}
                  height={24}
                  className="text-primary-dark"
                  alt=""
                />
              </div>

              {/* Small Title */}
              <h3 className="mt-6 heading-4 text-text-heading font-bold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm text-text-body font-normal">
                {feature.description}
              </p>
            </AnimatedWrapper>
          ))}
        </AnimatedWrapper>
      </div>
    </section>
  );
}
