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
  Award,
} from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Multimodal RAG Pipelines',
      desc: 'Architecting 5-layer extraction systems parsing PDFs, text, tables, and visual charts with dense embeddings, ChromaDB, and neural cross-encoder reranking.',
    },
    {
      icon: Bot,
      title: 'LangChain, LCEL & LangGraph',
      desc: 'Developing end-to-end AI applications using LangChain LCEL, Groq API, and LangGraph with state machines and dynamic tool routing.',
    },
    {
      icon: Network,
      title: 'Machine Learning & Data Science',
      desc: 'Time-series forecasting, EDA, data preprocessing, feature engineering, random forests, and anomaly detection pipelines.',
    },
    {
      icon: Cpu,
      title: 'Model Evaluation & Validation',
      desc: 'Evaluating AI pipelines using RAGAS, LLM-as-Judge benchmarks, and enforcing strict type-safe Pydantic output schemas.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span className="w-4 h-[1px] bg-emerald-500"></span>
            <span>01 // Background & Education</span>
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
                Engineering practical, evaluated AI systems with LLMs & Machine Learning.
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.aboutDetails}
              </p>

              <div className="pt-4 border-t border-surface-border flex flex-wrap gap-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>{PERSONAL_INFO.education.institution}</strong> • CGPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
                  <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{PERSONAL_INFO.education.period}</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl bg-surface-card/60 border border-surface-border space-y-4">
              <h4 className="text-sm font-semibold text-slate-200 uppercase font-mono tracking-wider flex items-center space-x-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Professional Certifications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 hover:border-emerald-500/30 transition-colors"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {cert.title}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-400">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
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