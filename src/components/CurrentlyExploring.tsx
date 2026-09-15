import React from 'react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>05 / Active Frontier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Currently Exploring & Building
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Emerging architectures, agentic paradigms, and applications actively being built and prototyped.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const isBuilding = item.status.toLowerCase().includes('building');
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        isBuilding
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-white/[0.03] text-slate-400 border-white/[0.06]'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.tag}</span>
                  <span>Domain Focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
