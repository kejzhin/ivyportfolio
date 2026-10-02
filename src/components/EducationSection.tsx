import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="kicker">Verified Credentials</span>
          <h2 className="section-title">Education & qualifications</h2>
          <p className="lead">
            Formal technical education in Information & Communications Technology paired with operational competencies.
          </p>
        </div>

        {/* Education Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={edu.institution}
              className="card-crimson p-6 sm:p-7 flex items-start gap-4 sm:gap-5 transition-all duration-300 hover:border-rose-600"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-xs mt-0.5">
                {idx === 0 ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                    {edu.institution}
                  </h3>
                  <span className="text-xs font-mono text-rose-600 font-semibold bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                    {edu.year}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-zinc-700 mb-3">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{edu.location}</span>
                  {edu.track && (
                    <>
                      <span className="text-zinc-300">·</span>
                      <span className="text-rose-600 font-medium">{edu.track}</span>
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
