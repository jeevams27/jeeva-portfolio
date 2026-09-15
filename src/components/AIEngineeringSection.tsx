import React, { useState } from 'react';
import { AI_PIPELINE_STAGES } from '../data/portfolioData';
import {
  Layers,
  Cpu,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
  Sparkles,
  Bot,
  Search,
} from 'lucide-react';

export const AIEngineeringSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<number>(3);

  const activeStage =
    AI_PIPELINE_STAGES.find((s) => s.id === activeStageId) || AI_PIPELINE_STAGES[0];

  const getStageIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Terminal className="w-4 h-4" />;
      case 2:
        return <Layers className="w-4 h-4" />;
      case 3:
        return <Bot className="w-4 h-4" />;
      case 4:
        return <Search className="w-4 h-4" />;
      case 5:
        return <Cpu className="w-4 h-4" />;
      case 6:
        return <ShieldCheck className="w-4 h-4" />;
      case 7:
        return <Zap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="ai-systems" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>04 // Systems Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I Build Production AI Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A systematic engineering methodology for building reliable, low-latency, and hallucination-resistant LLM & Agent applications.
          </p>
        </div>

        {/* Visual Pipeline Bar */}
        <div className="glass-card p-4 sm:p-6 rounded-2xl border border-surface-border space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Interactive End-to-End Pipeline
            </span>
            <span className="text-[11px] font-mono text-emerald-400">
              Click any stage to inspect engineering details
            </span>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-3">
            {AI_PIPELINE_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-3 rounded-xl flex flex-col items-start text-left transition-all duration-200 border relative ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isSelected ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      0{stage.id}
                    </span>
                    <div
                      className={`p-1 rounded ${
                        isSelected ? 'text-emerald-400 bg-emerald-950' : 'text-slate-500'
                      }`}
                    >
                      {getStageIcon(stage.id)}
                    </div>
                  </div>

                  <span
                    className={`text-xs font-semibold tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {stage.name}
                  </span>

                  <span className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {stage.technologies[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="p-6 rounded-xl bg-slate-900/90 border border-emerald-500/20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {getStageIcon(activeStage.id)}
                </div>
                <div>
                  <div className="text-[11px] font-mono text-emerald-400 uppercase">
                    Stage 0{activeStage.id} // {activeStage.name}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {activeStage.role}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Technology Stack & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-slate-950 text-xs font-mono text-emerald-300 border border-emerald-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Production Engineering Practices */}
            <div className="lg:col-span-6 p-4 rounded-lg bg-[#07090e] border border-surface-border space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-slate-200 font-semibold uppercase tracking-wider">
                  Engineering Practices
                </span>
                <span className="text-emerald-400">Production Standards</span>
              </div>

              <div className="space-y-2.5">
                {activeStage.keyPractices.map((practice, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};