import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="kicker">Career Track Record</span>
          <h2 className="section-title">Professional experience</h2>
          <p className="lead">
            A proven record in enterprise web advisory, Level 2 technical troubleshooting, customer retention, and database administration.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-5">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-crimson p-7 sm:p-9"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-2">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-zinc-300">
                      {exp.company}
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-start sm:self-auto">
                  <span className="flex items-center gap-1.5 text-rose-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-rose-400" />
                    {exp.period}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed pl-1 sm:pl-13">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
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
