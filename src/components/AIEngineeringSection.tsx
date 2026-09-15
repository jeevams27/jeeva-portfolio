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
        return <Terminal className="w-5 h-5" />;
      case 2:
        return <Layers className="w-5 h-5" />;
      case 3:
        return <Bot className="w-5 h-5" />;
      case 4:
        return <Search className="w-5 h-5" />;
      case 5:
        return <Cpu className="w-5 h-5" />;
      case 6:
        return <ShieldCheck className="w-5 h-5" />;
      case 7:
        return <Zap className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="ai-systems" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>Systems Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            How I Build Production AI Systems
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl font-normal leading-relaxed">
            A systematic engineering methodology for building reliable, low-latency, and hallucination-resistant LLM & Agent applications.
          </p>
        </div>

        {/* Interactive Pipeline Container */}
        <div className="space-y-8">
          {/* Stepper Pipeline Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
            {AI_PIPELINE_STAGES.map((stage) => {
              const isSelected = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 sm:p-5 rounded-2xl flex flex-col items-start text-left transition-all border ${
                    isSelected
                      ? 'bg-white/[0.08] border-emerald-500/60 text-white shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.14] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2.5">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isSelected ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      0{stage.id}
                    </span>
                    <div className={isSelected ? 'text-emerald-400' : 'text-slate-500'}>
                      {getStageIcon(stage.id)}
                    </div>
                  </div>

                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {stage.name}
                  </span>

                  <span className="text-xs text-slate-400 line-clamp-1 mt-1 font-mono">
                    {stage.technologies[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1017] border border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start shadow-sm">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  {getStageIcon(activeStage.id)}
                </div>
                <div>
                  <span className="text-sm font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    Stage 0{activeStage.id} · {activeStage.name}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeStage.role}
                  </h3>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
                {activeStage.description}
              </p>

              {/* Technologies */}
              <div className="space-y-3 pt-2">
                <span className="text-sm sm:text-base font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Technology Stack & Tools
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {activeStage.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white/[0.04] text-sm sm:text-base font-mono text-slate-200 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Production Engineering Practices */}
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-5">
              <div className="flex items-center justify-between text-sm sm:text-base font-mono text-slate-400 pb-3.5 border-b border-white/[0.06]">
                <span className="text-slate-200 font-bold uppercase tracking-wider">
                  Engineering Standards
                </span>
                <span className="text-emerald-400 font-semibold">Production Practices</span>
              </div>

              <div className="space-y-3.5 pt-1">
                {activeStage.keyPractices.map((practice, pIdx) => (
                  <div key={pIdx} className="flex items-start space-x-3.5 text-base sm:text-lg text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
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