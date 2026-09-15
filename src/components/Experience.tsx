import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Layers,
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto space-y-12">
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
            Practical industry contributions in AI data solutions, multimodal annotation quality, and LLM evaluation workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-surface-border hover:border-emerald-500/30 transition-all space-y-6"
            >
              {/* Header Details */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-border">
                <div className="space-y-1">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.department}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight pt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center space-x-2 text-slate-300 font-medium text-sm sm:text-base">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 text-xs sm:text-sm font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-start md:self-center px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Contributions
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-border/50">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
