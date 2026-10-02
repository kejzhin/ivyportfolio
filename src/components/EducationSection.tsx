import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative z-10 bg-white border-t border-zinc-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-[1.15] mb-4">
            Education & Academic Background
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Technical foundation in Information & Communications Technology (ICT) alongside rigorous academic and vocational training.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {PORTFOLIO_DATA.education.map((edu, idx) => {
            const isICT = idx === 0;
            return (
              <div
                key={edu.institution}
                className="bg-[#FAFAFC] hover:bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Degree Level + Year */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 bg-white px-3 py-1 rounded-lg border border-zinc-200 shadow-xs">
                      {isICT ? <Award className="w-3.5 h-3.5 text-rose-600" /> : <GraduationCap className="w-3.5 h-3.5 text-zinc-600" />}
                      <span>{edu.degree}</span>
                    </span>
                    
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-zinc-600 bg-white px-2.5 py-1 rounded-lg border border-zinc-200 shadow-xs">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      <span>Class of {edu.year}</span>
                    </span>
                  </div>

                  {/* Institution Name */}
                  <h3 className="text-xl font-bold text-zinc-950 mb-2">
                    {edu.institution}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Specialization / Track Details */}
                  {isICT ? (
                    <div className="p-4 rounded-xl bg-white border border-zinc-200/90 shadow-xs mb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 mb-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Technical-Vocational Track</span>
                      </div>
                      <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                        Information and Communications Technology (ICT)
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                        Core focus on computer hardware, network basics, operating systems, and administrative software workflows.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-white border border-zinc-200/90 shadow-xs mb-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 mb-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Foundational Studies</span>
                      </div>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        Completed primary education with strong emphasis on mathematics, communications, and foundational academic literacy.
                      </p>
                    </div>
                  )}
                </div>

                {/* Status Indicator */}
                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    Status
                  </span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[11px]">
                    Completed / Graduate
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
