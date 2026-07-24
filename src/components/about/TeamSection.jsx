"use client";

import Image from "next/image";
import { member1, member2, member3, member4, sparkleLines } from "@/../public/images";
import TeamCard from "./TeamCard";
import AnimatedWrapper from "@/components/shared/AnimatedWrapper";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Ansil",
      role: "Frontend Developer",
      description: "Building clean and beautiful user experiences.",
      image: member1,
      socials: {
        github: "https://github.com",
        instagram: "https://instagram.com/adeogram.in",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Shibil",
      role: "Backend Developer",
      description: "Loves solving problems and building solid backend.",
      image: member2,
      socials: {
        github: "https://github.com",
        instagram: "https://instagram.com/adeogram.in",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Fasal",
      role: "UI/UX Designer",
      description: "Designing simple, intuitive and meaningful interfaces.",
      image: member3,
      socials: {
        github: "https://github.com",
        instagram: "https://instagram.com/adeogram.in",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Razin",
      role: "DevOps & Support",
      description: "Keeps everything running smooth and reliable.",
      image: member4,
      socials: {
        github: "https://github.com",
        instagram: "https://instagram.com/adeogram.in",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg-secondary border-t border-border-light">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Block */}
        <AnimatedWrapper type="fadeUp" delay={0.05} className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-badge bg-primary-light border border-primary-green/20 text-primary-dark text-badge font-medium tracking-wide uppercase mb-6 shadow-sm select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-green animate-pulse"></span>
            The People Behind Adeogram
          </div>
          
          <div>
            <h2 className="mt-2 font-bold tracking-tight display-large text-text-heading">
              Meet The{" "}
              <span className="relative inline-block text-primary-green">
                Team
                {/* Sparkle lines on the top right of Team */}
                <span className="absolute top-1 sm:-top-1.5 xl:top-1.5 xl:-right-3 -right-3.5 w-6 h-6 select-none pointer-events-none">
                  <Image
                    src={sparkleLines}
                    width={24}
                    height={24}
                    className="text-primary-green"
                    alt=""
                  />
                </span>
              </span>
            </h2>
          </div>
          
          <p className="mt-4 mx-auto max-w-lg body-base font-normal text-text-body">
            Different minds. Same vision. Building something awesome together.
          </p>
        </AnimatedWrapper>

        {/* Team Grid */}
        <AnimatedWrapper
          type="stagger"
          staggerChildren={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <AnimatedWrapper key={index} type="fadeUp">
              <TeamCard member={member} />
            </AnimatedWrapper>
          ))}
        </AnimatedWrapper>
      </div>
    </section>
  );
}
