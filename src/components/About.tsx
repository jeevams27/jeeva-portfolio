import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Sparkles,
  Bot,
  Layers,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Calendar,
  Network,
  Cpu,
} from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Multimodal RAG Pipelines',
      desc: 'Architecting retrieval systems that parse complex text, financial tables, and visual charts with dense embeddings and cross-encoder reranking.',
    },
    {
      icon: Bot,
      title: 'Agentic Workflows & LangGraph',
      desc: 'Engineering stateful multi-agent systems with cyclic execution graphs, dynamic tool calling, and strict schema constraints.',
    },
    {
      icon: Network,
      title: 'Applied Machine Learning & NLP',
      desc: 'Developing end-to-end ML pipelines, feature engineering, semantic search, and contextual text classification systems.',
    },
    {
      icon: Cpu,
      title: 'Production Verification & Guardrails',
      desc: 'Implementing Pydantic schema validation, RAGAS evaluation metrics, and deterministic structured outputs for reliable AI behavior.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>01 // Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 leading-snug">
                Engineering practical, verified AI systems for real-world complexity.
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.aboutDetails}
              </p>

              <div className="pt-4 border-t border-surface-border flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong>B.Tech AI & Data Science</strong> • May 2025
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>Graduation: May 2025</span>
                </div>
              </div>
            </div>

            {/* Engineering Principles */}
            <div className="p-6 rounded-2xl bg-surface-card/60 border border-surface-border space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 uppercase font-mono tracking-wider flex items-center space-x-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Core Engineering Principles</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Deterministic validation over blind LLM generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Two-stage retrieval with cross-encoder reranking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Stateful agent graphs with verifiable checkpoints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Low-latency inference and multimodal integration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl flex items-start space-x-4 border border-surface-border hover:border-emerald-500/40"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
