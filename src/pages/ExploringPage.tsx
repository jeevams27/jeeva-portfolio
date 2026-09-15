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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Active Frontier</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Currently Exploring & Building
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Active research, emerging paradigms, and projects currently in development across Agentic State Graphs, multi-turn reasoning loops, and structured automation.
        </p>
      </div>

      {/* Exploring Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CURRENTLY_EXPLORING.map((item, idx) => {
          const isBuilding = item.status.toLowerCase().includes('building');
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded border ${
                      isBuilding
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-white/[0.03] text-slate-400 border-white/[0.06]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{item.tag}</span>
                  <span>Domain Focus</span>
                </div>

                <Link
                  to={item.link}
                  className="w-full inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 border border-white/[0.06] text-xs font-mono transition-all group-hover:border-emerald-500/30"
                >
                  <span>{isBuilding ? 'View Project Details' : 'Read Topic Analysis'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Focus Breakdown Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1017] border border-white/[0.08] space-y-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5" />
            <span>Why Agentic Architectures Matter</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Moving Beyond Static Prompt-Response Chains
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold">01 / Cyclic Graphs</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              LangGraph enables cyclical reasoning loops and automatic retry logic on schema validation failures.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold">02 / Dynamic Tools</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              State-driven routing between catalog lookup, mathematical pricing calculation, and tax engines.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold">03 / Checkpoints</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              State persistence enables human approval gates and auditable conversation time-travel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
