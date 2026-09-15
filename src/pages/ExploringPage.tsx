import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  Workflow,
  CheckCircle2,
} from 'lucide-react';

export const ExploringPage: React.FC = () => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-exploring pointer-events-none -z-10" />

      <div className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            <span>Active Research & Building</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Currently{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              Exploring & Building
            </span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Autonomous multi-agent workflows, cyclic state machines with LangGraph, and automated quotation intelligence.
          </p>
        </div>

        {/* Numbered Topic Showcase (Clean Typography Layout) */}
        <div className="space-y-12">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const isBuilding = item.status.toLowerCase().includes('building');
            const num = `0${idx + 1}`;
            const accentColor = idx === 0 ? 'text-violet-400' : idx === 1 ? 'text-cyan-400' : 'text-emerald-400';

            return (
              <Link
                key={idx}
                to={item.link}
                className="block pt-10 first:pt-0 border-t border-white/[0.08] first:border-none space-y-4 group"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm font-mono ${accentColor} font-bold tracking-wider`}>
                      {num}
                    </span>
                    <span className="text-slate-600">—</span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold ${
                      isBuilding
                        ? 'bg-emerald-950/50 border-emerald-500/30 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                        : 'bg-white/[0.04] border-white/[0.08] text-slate-300'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-violet-200 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                  </h2>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Why Agentic State Graphs Matter */}
        <section className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-widest font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Architectural Rationale</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Moving Beyond Linear Chains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <div className="p-6 rounded-2xl bg-[#110e20] border border-violet-500/20 space-y-2.5">
              <span className="text-xs font-mono text-violet-400 font-bold">01 / Cyclic Graphs</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                LangGraph enables cyclical reasoning loops and automatic retry logic on schema validation failures.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#09121d] border border-cyan-500/20 space-y-2.5">
              <span className="text-xs font-mono text-cyan-400 font-bold">02 / Dynamic Tools</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                State-driven routing between catalog lookup, mathematical pricing calculation, and tax engines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a1512] border border-emerald-500/20 space-y-2.5">
              <span className="text-xs font-mono text-emerald-400 font-bold">03 / Checkpoints</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                State persistence enables human approval gates and auditable conversation time-travel.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
