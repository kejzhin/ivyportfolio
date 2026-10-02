import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import profileCutout from '../assets/images/profile_cutout.png';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Re-aligned structured layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Remote Opportunities</span>
            </div>

            {/* Overline Kicker */}
            <p className="text-xs font-mono font-bold tracking-widest text-rose-600 uppercase mb-2">
              Professional Portfolio
            </p>

            {/* Large Name - Full unbroken display */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-zinc-950 tracking-tight leading-[1.1] mb-3 whitespace-nowrap">
              {PORTFOLIO_DATA.profile.displayName}
            </h1>

            {/* Sub-roles with elegant divider pipes */}
            <div className="flex flex-wrap items-center text-sm sm:text-base font-semibold text-zinc-700 mb-5">
              <span>Web Administrator</span>
              <span className="text-rose-600 mx-2.5 font-normal">|</span>
              <span>Technical Support</span>
              <span className="text-rose-600 mx-2.5 font-normal">|</span>
              <span>Executive VA</span>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[520px]">
              {PORTFOLIO_DATA.profile.heroLead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#skills"
                className="btn-crimson-primary"
              >
                <span>View My Skills</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="btn-crimson-secondary"
                >
                  <Download className="w-4 h-4 text-rose-600" />
                  <span>Download CV</span>
                </button>
              )}
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-zinc-200 mb-6 max-w-[540px]" />

            {/* 3 Key Stats / Attributes Row */}
            <div className="grid grid-cols-3 gap-4 max-w-[540px]">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-sans text-zinc-950">6+</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-500 mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-sans text-zinc-950">100%</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-500 mt-0.5">Reliable & Discreet</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-sans text-zinc-950">Remote</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-500 mt-0.5">Flexible Hours</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Portrait with Increased Prominent Size */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative flex items-center justify-center select-none">
              
              {/* Soft Crimson / Rose Radial Glow Aura Behind Portrait */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[440px] lg:w-[500px] h-80 sm:h-[440px] lg:h-[500px] rounded-full bg-rose-500/15 blur-[90px] pointer-events-none" />

              {/* Pure Portrait Image with Increased Sizing */}
              <div className="relative z-10 flex items-center justify-center">
                <img
                  src={profileCutout}
                  alt={PORTFOLIO_DATA.profile.displayName}
                  className="h-[520px] sm:h-[600px] lg:h-[660px] xl:h-[720px] w-auto max-w-none object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
