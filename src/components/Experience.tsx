import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import {
  Building2,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>05 // Industry Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Industry experience in AI model dataset annotation and quality consistency workflows.
          </p>
        </div>

        {/* Experience Card */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-surface-border hover:border-emerald-500/30 transition-all space-y-6"
            >
              {/* Header Details */}
              <div className="space-y-1.5 pb-4 border-b border-surface-border/60">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-slate-300 font-medium text-sm sm:text-base">
                  <div className="flex items-center space-x-1.5 text-white">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                  <span className="text-slate-600">•</span>
                  <div className="flex items-center space-x-1.5 text-slate-400 text-xs sm:text-sm font-normal">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400/80 shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Single Responsibility Card */}
              <div className="pt-1">
                <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 flex items-start space-x-3.5 hover:border-slate-700 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {exp.responsibilities[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};