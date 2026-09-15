import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    {
      num: '01',
      title: 'Multimodal RAG Pipelines',
      desc: 'Architecting 5-layer extraction systems parsing PDFs, text, tables, and visual charts with dense embeddings, ChromaDB, and neural cross-encoder reranking.',
    },
    {
      num: '02',
      title: 'LangChain, LCEL & LangGraph',
      desc: 'Developing end-to-end AI applications using LangChain LCEL, Groq API, and LangGraph with state machines and dynamic tool routing.',
    },
    {
      num: '03',
      title: 'Machine Learning & Data Science',
      desc: 'Time-series forecasting, EDA, data preprocessing, feature engineering, random forests, and anomaly detection pipelines.',
    },
    {
      num: '04',
      title: 'Model Evaluation & Validation',
      desc: 'Evaluating AI pipelines using RAGAS, LLM-as-Judge benchmarks, and enforcing strict type-safe Pydantic output schemas.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Tag */}
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <span>01 / About</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Education */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Engineering practical, evaluated AI systems with LLMs & Machine Learning.
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {PERSONAL_INFO.aboutDetails}
              </p>
            </div>

            {/* Education Block */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Education</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-semibold text-white text-sm">
                    {PERSONAL_INFO.education.institution}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                    CGPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {PERSONAL_INFO.education.degree}
                </p>
                <div className="flex items-center space-x-4 text-[11px] font-mono text-slate-400 pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>Chennai, TN</span>
                  </span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.education.period}</span>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-0.5"
                  >
                    <p className="text-xs font-semibold text-slate-200">
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

          {/* Right Column: 4 Key Engineering Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Focus Areas
              </h3>
              <p className="text-sm text-slate-400">
                Key architectural capabilities and practical applications.
              </p>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {focusAreas.map((item, idx) => (
                <div key={idx} className="py-5 first:pt-2 last:pb-2 space-y-2 group">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {item.num}
                    </span>
                    <h4 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};