import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';
import {
  ArrowRight,
  Workflow,
} from 'lucide-react';

export const ExploringPage: React.FC = () => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-exploring pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-violet-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-violet-400"></span>
            <span>Active Research & Building</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Currently{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              Exploring & Building
            </span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            Autonomous multi-agent workflows, cyclic state machines with LangGraph, and automated quotation intelligence.
          </p>
        </div>

        {/* Numbered Topic Showcase (Editorial Layout) */}
        <div className="space-y-14 sm:space-y-20">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const isBuilding = item.status.toLowerCase().includes('building');
            const num = `0${idx + 1}`;
            const accentColor = idx === 0 ? 'text-violet-400' : idx === 1 ? 'text-cyan-400' : 'text-emerald-400';

            return (
              <Link
                key={idx}
                to={item.link}
                className="block pt-10 sm:pt-14 first:pt-0 border-t border-white/[0.08] first:border-none space-y-5 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-2.5">
                    <span className={`text-base sm:text-lg font-mono ${accentColor} font-bold tracking-wider`}>
                      {num}
                    </span>
                    <span className="text-slate-600">—</span>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-mono px-3.5 py-1 rounded-full border font-semibold ${
                      isBuilding
                        ? 'bg-emerald-950/50 border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                        : 'bg-white/[0.04] border-white/[0.08] text-slate-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-violet-200 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 h-6 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1.5 transition-all shrink-0 ml-3" />
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Agentic State Graphs Matter */}
        <section className="space-y-7 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-violet-400 uppercase tracking-widest font-bold">
              <Workflow className="w-4 h-4" />
              <span>Architectural Rationale</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Moving Beyond Linear Chains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#110e20] border border-violet-500/25 space-y-2.5 shadow-sm">
              <span className="text-xs sm:text-sm font-mono text-violet-400 font-bold">01 / Cyclic Graphs</span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                LangGraph enables cyclical reasoning loops and automatic retry logic on schema validation failures.
              </p>
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#09121d] border border-cyan-500/25 space-y-2.5 shadow-sm">
              <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold">02 / Dynamic Tools</span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                State-driven routing between catalog lookup, mathematical pricing calculation, and tax engines.
              </p>
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a1512] border border-emerald-500/25 space-y-2.5 shadow-sm">
              <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold">03 / Checkpoints</span>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                State persistence enables human approval gates and auditable conversation time-travel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
