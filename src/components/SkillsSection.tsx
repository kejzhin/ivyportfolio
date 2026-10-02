import React, { useState } from 'react';
import { Server, Globe, Briefcase, Headphones, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-5 h-5 text-rose-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-rose-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-rose-600" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-rose-600" />;
      default:
        return <Server className="w-5 h-5 text-rose-600" />;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? PORTFOLIO_DATA.skillCategories 
    : PORTFOLIO_DATA.skillCategories.filter((_, idx) => `cat-${idx}` === activeTab);

  return (
    <section id="skills" className="section">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="kicker">Core Competencies</span>
            <h2 className="section-title">Technical specializations & services</h2>
            <p className="lead">
              Practical capabilities across web hosting architecture, CMS maintenance, customer retention, and executive operations.
            </p>
          </div>

          {/* Segmented Filter Control */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl border border-zinc-200 overflow-x-auto max-w-full no-scrollbar shadow-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              All Domains
            </button>
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(`cat-${idx}`)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === `cat-${idx}`
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {cat.title.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="card-crimson p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-rose-600 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 shadow-xs">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-600 mt-0.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                      <span>Production Verified</span>
                    </div>
                  </div>
                </div>

                {/* Checklist Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-xs sm:text-[13px] text-zinc-700 py-2.5 px-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-rose-300 transition-all font-mono"
                    >
                      <Check className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      <span className="truncate">{skill}</span>
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
