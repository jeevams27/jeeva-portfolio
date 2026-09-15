import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>06 / Technical Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technical Capabilities & Stack
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Categorized technologies and frameworks applied across production RAG, AI agents, and machine learning pipelines.
          </p>
        </div>

        {/* Technical Documentation Matrix (Rows) */}
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-white/[0.01] transition-colors"
            >
              {/* Category Title & Description (Left Column) */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {category.description}
                </p>
              </div>

              {/* Skills List (Right Column) */}
              <div className="md:col-span-8 flex flex-wrap gap-2 items-center">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                      skill.highlight
                        ? 'bg-emerald-950/30 text-emerald-300 border border-emerald-500/25'
                        : 'bg-white/[0.03] text-slate-300 border border-white/[0.06]'
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    )}
                    <span>{skill.name}</span>
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
