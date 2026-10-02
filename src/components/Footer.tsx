import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070608] border-t border-rose-950/40 py-14 text-zinc-400 text-xs relative z-10 font-mono">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-rose-950/40">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 text-sm font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>{PORTFOLIO_DATA.profile.displayName}</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1 font-normal">
              {PORTFOLIO_DATA.profile.roleTag} · Quezon City, PH (Available Globally)
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-rose-400 transition-colors">Specializations</a>
            <a href="#experience" className="hover:text-rose-400 transition-colors">Experience</a>
            <a href="#tools" className="hover:text-rose-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141115] border border-rose-500/20 text-zinc-300 hover:text-white hover:border-rose-500/40 transition-all cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.profile.displayName}. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono">
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-rose-400 transition-colors">
              {PORTFOLIO_DATA.profile.email}
            </a>
            <span className="text-rose-950">/</span>
            <a href={`tel:${PORTFOLIO_DATA.profile.phoneRaw}`} className="hover:text-rose-400 transition-colors">
              {PORTFOLIO_DATA.profile.phone}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
