import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>04 / Experience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Industry experience in AI model dataset annotation and quality consistency workflows.
          </p>
        </div>

        {/* Vertical Timeline Spine */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.1] space-y-10">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative space-y-4">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#07090e] border-2 border-emerald-400"></div>

              {/* Experience Header */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.period && (
                    <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      <span>{exp.period}</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center space-x-1.5 text-white font-medium">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.company}</span>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center space-x-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Single Responsibility */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] max-w-3xl">
                {exp.responsibilities[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};