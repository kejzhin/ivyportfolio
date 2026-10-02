import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="kicker">Career Track Record</span>
          <h2 className="section-title">Professional experience</h2>
          <p className="lead">
            A proven record in enterprise web advisory, Level 2 technical troubleshooting, customer retention, and database administration.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-crimson p-6 sm:p-9 transition-all duration-300 hover:border-rose-600"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-zinc-700 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-600 self-start md:self-auto bg-zinc-100 py-1.5 px-3 rounded-xl border border-zinc-200">
                  <span className="flex items-center gap-1.5 text-rose-600 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-rose-600" />
                    {exp.period}
                  </span>
                  <span className="text-zinc-400">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-zinc-700 leading-relaxed pl-0 sm:pl-2">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
