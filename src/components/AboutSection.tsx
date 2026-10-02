import React from 'react';
import { CheckCircle2, ShieldCheck, Wrench, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle':
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-rose-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-rose-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="about" className="section section-dim">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="kicker">
            Operational Principles
          </span>
          <h2 className="section-title">
            {PORTFOLIO_DATA.profile.aboutHeadline}
          </h2>
          <p className="lead">
            {PORTFOLIO_DATA.profile.aboutLead}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.features.map((feature, idx) => (
            <div
              key={feature.title}
              className="card-crimson p-6 sm:p-8 flex items-start gap-4 sm:gap-5 group relative overflow-hidden transition-all duration-300 hover:border-rose-600 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                {getIcon(feature.iconName)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-rose-600 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
