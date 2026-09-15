import React from 'react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>06 // Active Frontier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center space-x-2.5">
            <Compass className="w-6 h-6 text-emerald-400" />
            <span>Currently Exploring & Researching</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Emerging topics and architecture patterns actively being studied, prototyped, and refined.
          </p>
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-xl border border-surface-border hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400">
                    {item.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Focus</span>
                <Sparkles className="w-3.5 h-3.5 text-emerald-400/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
