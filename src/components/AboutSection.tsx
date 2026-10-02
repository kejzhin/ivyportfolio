import React from 'react';
import { CheckCircle2, ShieldCheck, Wrench, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CheckCircle':
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-rose-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-rose-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="about" className="section section-dim">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PORTFOLIO_DATA.features.map((feature, idx) => (
            <div
              key={feature.title}
              className="card-crimson p-7 sm:p-8 flex items-start gap-4 sm:gap-5 group relative overflow-hidden"
            >
              <div className="w-11 h-11 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center shrink-0">
                {getIcon(feature.iconName)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
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
