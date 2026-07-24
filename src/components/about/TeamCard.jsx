"use client";

import Image from "next/image";
import { githubIcon, instagramIcon, linkedinIcon } from "@/../public/images";

export default function TeamCard({ member }) {
  return (
    <div className="group bg-white border border-border-light rounded-[28px] p-6 flex flex-col shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:-translate-y-1">
      {/* Large Square Image with Rounded Corners */}
      <div className="relative w-full aspect-square rounded-[22px] overflow-hidden bg-bg-secondary border border-border-light shadow-sm">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Member Info */}
      <div className="mt-5 flex-1 flex flex-col">
        <h3 className="heading-4 text-text-heading font-bold">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary-dark select-none">
          {member.role}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-text-body font-normal flex-1">
          {member.description}
        </p>

        {/* Social Icons Links */}
        <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-3">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border-light bg-white hover:bg-primary-light hover:border-primary-green/30 hover:text-primary-dark flex items-center justify-center text-text-body transition-colors duration-250"
            >
              <Image src={githubIcon} width={15} height={15} alt="GitHub" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border-light bg-white hover:bg-primary-light hover:border-primary-green/30 hover:text-primary-dark flex items-center justify-center text-text-body transition-colors duration-250"
            >
              <Image src={instagramIcon} width={15} height={15} alt="Instagram" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-border-light bg-white hover:bg-primary-light hover:border-primary-green/30 hover:text-primary-dark flex items-center justify-center text-text-body transition-colors duration-250"
            >
              <Image src={linkedinIcon} width={15} height={15} alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
