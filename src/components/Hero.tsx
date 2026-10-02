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
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Re-aligned structured layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Remote Opportunities</span>
            </div>

            {/* Overline Kicker */}
            <p className="text-xs font-mono font-semibold tracking-widest text-rose-400 uppercase mb-2">
              Professional Portfolio
            </p>

            {/* Large Name - Full unbroken display */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.1] mb-3 whitespace-nowrap">
              {PORTFOLIO_DATA.profile.displayName}
            </h1>

            {/* Sub-roles with elegant divider pipes */}
            <div className="flex flex-wrap items-center text-sm sm:text-base font-semibold text-zinc-200 mb-5">
              <span>Web Administrator</span>
              <span className="text-rose-500 mx-2.5 font-normal">|</span>
              <span>Technical Support</span>
              <span className="text-rose-500 mx-2.5 font-normal">|</span>
              <span>Executive VA</span>
            </div>

            {/* Narrative Paragraph */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-[520px]">
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
                  <Download className="w-4 h-4 text-rose-400" />
                  <span>Download CV</span>
                </button>
              )}
            </div>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-rose-950/60 mb-6 max-w-[540px]" />

            {/* 3 Key Stats / Attributes Row */}
            <div className="grid grid-cols-3 gap-4 max-w-[540px]">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-sans text-white">6+</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-400 mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-sans text-white">100%</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-400 mt-0.5">Reliable & Discreet</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-sans text-white">Remote</div>
                <div className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-zinc-400 mt-0.5">Flexible Hours</div>
              </div>
            </div>

          </div>

          {/* Right Column: Redesigned Sleek Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Outer Subtle Halo Accent */}
              <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-b from-rose-500/15 via-transparent to-transparent blur-xl pointer-events-none" />

              {/* Redesigned Modern Minimalist Frame */}
              <div className="relative rounded-[36px] bg-gradient-to-b from-[#18131B]/90 via-[#100D13]/70 to-[#0A080C]/90 border border-rose-500/25 overflow-hidden shadow-2xl p-4 pt-7 flex items-end justify-center min-h-[480px] sm:min-h-[530px]">
                
                {/* Internal Ambient Radial Lighting */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Cutout Portrait */}
                <div className="relative z-10 select-none">
                  <img
                    src={profileCutout}
                    alt={PORTFOLIO_DATA.profile.displayName}
                    className="h-[430px] sm:h-[480px] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
