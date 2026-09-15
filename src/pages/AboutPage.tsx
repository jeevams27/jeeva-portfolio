import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const focusAreas = [
    {
      num: '01',
      title: 'Multimodal RAG Pipelines',
      desc: 'Architecting 5-layer extraction systems parsing PDFs, text, tables, and visual charts with dense embeddings, ChromaDB, and neural cross-encoder reranking.',
      link: '/skills/rag',
      color: 'text-cyan-400',
    },
    {
      num: '02',
      title: 'LangChain, LCEL & LangGraph',
      desc: 'Developing end-to-end AI applications using LangChain LCEL, Groq API, and LangGraph with state machines and dynamic tool routing.',
      link: '/skills/langgraph',
      color: 'text-violet-400',
    },
    {
      num: '03',
      title: 'Machine Learning & Data Science',
      desc: 'Time-series forecasting, EDA, data preprocessing, feature engineering, random forests, and anomaly detection pipelines.',
      link: '/skills/machine-learning',
      color: 'text-blue-400',
    },
    {
      num: '04',
      title: 'Model Evaluation & Validation',
      desc: 'Evaluating AI pipelines using RAGAS, LLM-as-Judge benchmarks, and enforcing strict type-safe Pydantic output schemas.',
      link: '/skills/llms',
      color: 'text-indigo-400',
    },
  ];

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-about pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Page Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-emerald-400 uppercase tracking-wider font-bold">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>About Me</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            AI & GenAI Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              Focused on Reliable Systems
            </span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Main Grid: Balanced 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Background narrative & Education */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Engineering Background
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-normal">
                {PERSONAL_INFO.aboutDetails}
              </p>
            </div>

            {/* Education Card with Subtle Emerald Accent */}
            <div className="pt-6 border-t border-white/[0.08] space-y-3.5">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Formal Education</span>
              </div>
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0a1512] border border-emerald-500/25 space-y-2.5 shadow-sm">
                <h3 className="font-bold text-white text-lg sm:text-xl">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal">
                  {PERSONAL_INFO.education.degree}
                </p>
                <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Chennai, TN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Focus Areas with Links */}
          <div className="lg:col-span-6 space-y-7">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Core Architectural Pillars</span>
              </div>
              <p className="text-sm sm:text-base text-slate-400 font-normal">
                Deep technical capabilities applied directly across production systems.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {focusAreas.map((item, idx) => (
                <div key={idx} className="py-5 sm:py-6 space-y-2 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`text-sm sm:text-base font-mono ${item.color} font-bold`}>
                        {item.num}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <Link
                      to={item.link}
                      className="text-xs sm:text-sm font-mono text-slate-400 group-hover:text-emerald-400 transition-colors flex items-center space-x-1.5 font-bold"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-7 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions / Explore My Work Full Banner */}
        <div className="p-7 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0a101d] to-cyan-950/30 border border-emerald-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white">Explore My Work</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Inspect production case studies, architecture flows, and live deployments.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.12] text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Experience</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
