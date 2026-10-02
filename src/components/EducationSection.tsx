import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="kicker">Verified Credentials</span>
          <h2 className="section-title">Education & qualifications</h2>
          <p className="lead">
            Formal technical education in Information & Communications Technology paired with operational competencies.
          </p>
        </div>

        {/* Education Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={edu.institution}
              className="card-crimson p-7 flex items-start gap-4 sm:gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                {idx === 0 ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-rose-400">
                    {edu.year}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-zinc-300 mb-3">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.location}</span>
                  {edu.track && (
                    <>
                      <span className="text-zinc-600">·</span>
                      <span className="text-rose-300 font-medium">{edu.track}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
