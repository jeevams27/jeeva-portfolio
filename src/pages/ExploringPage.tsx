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

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Active Research Frontier</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Currently{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              Exploring & Building
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Active research, emerging paradigms, and projects currently in development across Agentic State Graphs, multi-turn reasoning loops, and structured automation.
          </p>
        </div>

        {/* Exploring Cards Grid with Violet / Cyan / Emerald Visual Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            const isBuilding = item.status.toLowerCase().includes('building');
            const cardTheme =
              idx === 0
                ? {
                    border: 'border-violet-500/25 hover:border-violet-500/50',
                    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
                    bg: 'bg-[#110e20]',
                    badgeBg: 'bg-violet-950/50 border-violet-500/30 text-violet-300',
                    numColor: 'text-violet-400',
                    topLine: 'bg-gradient-to-r from-transparent via-violet-500/50 to-transparent',
                    linkText: 'text-violet-400 hover:text-violet-300',
                  }
                : idx === 1
                ? {
                    border: 'border-cyan-500/25 hover:border-cyan-500/50',
                    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
                    bg: 'bg-[#09121d]',
                    badgeBg: 'bg-cyan-950/50 border-cyan-500/30 text-cyan-300',
                    numColor: 'text-cyan-400',
                    topLine: 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent',
                    linkText: 'text-cyan-400 hover:text-cyan-300',
                  }
                : {
                    border: 'border-emerald-500/25 hover:border-emerald-500/50',
                    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
                    bg: 'bg-[#0a1512]',
                    badgeBg: 'bg-emerald-950/50 border-emerald-500/30 text-emerald-300',
                    numColor: 'text-emerald-400',
                    topLine: 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent',
                    linkText: 'text-emerald-400 hover:text-emerald-300',
                  };

            return (
              <div
                key={idx}
                className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl ${cardTheme.bg} border ${cardTheme.border} ${cardTheme.glow} transition-all flex flex-col justify-between space-y-6 group`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${cardTheme.topLine}`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono ${cardTheme.numColor} font-bold`}>
                      0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${cardTheme.badgeBg} font-semibold`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{item.tag}</span>
                    <span>Domain Focus</span>
                  </div>

                  <Link
                    to={item.link}
                    className="w-full inline-flex items-center justify-center space-x-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 border border-white/[0.08] text-xs font-mono transition-all group-hover:border-violet-500/40"
                  >
                    <span>{isBuilding ? 'View Project Details' : 'Read Topic Analysis'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${cardTheme.numColor}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Breakdown Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-950/25 via-[#0d121c] to-cyan-950/25 border border-violet-500/25 space-y-6 shadow-[0_0_35px_rgba(139,92,246,0.06)]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Why Agentic Architectures Matter</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Moving Beyond Static Prompt-Response Chains
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4.5 rounded-xl bg-[#110e20] border border-violet-500/20 space-y-2">
              <span className="text-xs font-mono text-violet-400 font-bold">01 / Cyclic Graphs</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                LangGraph enables cyclical reasoning loops and automatic retry logic on schema validation failures.
              </p>
            </div>
            <div className="p-4.5 rounded-xl bg-[#09121d] border border-cyan-500/20 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">02 / Dynamic Tools</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                State-driven routing between catalog lookup, mathematical pricing calculation, and tax engines.
              </p>
            </div>
            <div className="p-4.5 rounded-xl bg-[#0a1512] border border-emerald-500/20 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold">03 / Checkpoints</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                State persistence enables human approval gates and auditable conversation time-travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
