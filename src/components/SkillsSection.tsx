import React, { useState } from 'react';
import { Server, Globe, Briefcase, Headphones, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-5 h-5 text-rose-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-rose-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-rose-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-rose-400" />;
      default:
        return <Server className="w-5 h-5 text-rose-400" />;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? PORTFOLIO_DATA.skillCategories 
    : PORTFOLIO_DATA.skillCategories.filter((_, idx) => `cat-${idx}` === activeTab);

  return (
    <section id="skills" className="section">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="kicker">Core Competencies</span>
            <h2 className="section-title">Technical specializations & services</h2>
            <p className="lead">
              Practical capabilities across web hosting architecture, CMS maintenance, customer retention, and executive operations.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141115] rounded-xl border border-rose-950/50 w-fit overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(`cat-${idx}`)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === `cat-${idx}`
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat.title.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="card-crimson p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center shrink-0">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>Production Verified</span>
                    </div>
                  </div>
                </div>

                {/* Clean unboxed checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs sm:text-[13px] text-zinc-300 py-2 px-3 rounded-lg bg-[#0C0B0D] border border-white/5 hover:border-rose-500/30 transition-all font-mono"
                    >
                      <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
