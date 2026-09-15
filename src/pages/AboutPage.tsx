import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
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

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header */}
        <div className="space-y-5 max-w-4xl">
          <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-emerald-400 uppercase tracking-wider font-bold">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span>About Me</span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
            AI & GenAI Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              Focused on Reliable Systems
            </span>.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Background narrative, Education & Certs */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Engineering Background
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg sm:text-xl font-normal">
                {PERSONAL_INFO.aboutDetails}
              </p>
            </div>

            {/* Education Card with Subtle Emerald Accent */}
            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono uppercase tracking-wider text-emerald-400 font-bold">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Formal Education</span>
              </div>
              <div className="p-8 rounded-3xl bg-[#0a1512] border border-emerald-500/25 space-y-4 shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-bold text-white text-xl sm:text-2xl">
                    {PERSONAL_INFO.education.institution}
                  </h3>
                  <span className="text-sm sm:text-base font-mono text-emerald-300 bg-emerald-950/70 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 font-bold">
                    CGPA: {PERSONAL_INFO.education.cgpa}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-slate-300 font-normal">
                  {PERSONAL_INFO.education.degree}
                </p>
                <div className="flex items-center space-x-4 text-sm sm:text-base font-mono text-slate-400 pt-1">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-teal-400" />
                    <span>Chennai, TN</span>
                  </span>
                  <span>•</span>
                  <span>{PERSONAL_INFO.education.period}</span>
                </div>
              </div>
            </div>

            {/* Certifications Block */}
            <div className="pt-6 space-y-4">
              <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono uppercase tracking-wider text-indigo-400 font-bold">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Verified Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-6 rounded-2xl bg-[#0e101c] border border-indigo-500/25 space-y-2 shadow-sm"
                  >
                    <p className="text-base sm:text-lg font-bold text-slate-200">
                      {cert.title}
                    </p>
                    <p className="text-sm font-mono text-indigo-300 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Focus Areas with Links */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono uppercase tracking-wider text-cyan-400 font-bold">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Core Architectural Pillars</span>
              </div>
              <p className="text-base sm:text-lg text-slate-400 font-normal">
                Deep technical capabilities applied directly across production systems.
              </p>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {focusAreas.map((item, idx) => (
                <div key={idx} className="py-7 space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <span className={`text-base sm:text-lg font-mono ${item.color} font-bold`}>
                        {item.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <Link
                      to={item.link}
                      className="text-sm sm:text-base font-mono text-slate-400 group-hover:text-emerald-400 transition-colors flex items-center space-x-1.5 font-bold"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
                    </Link>
                  </div>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed pl-9 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Actions Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-[#0a101d] to-cyan-950/30 border border-emerald-500/25 flex flex-wrap items-center justify-between gap-5 shadow-sm">
              <div className="space-y-1">
                <h4 className="text-xl sm:text-2xl font-bold text-white">Explore My Work</h4>
                <p className="text-sm sm:text-base text-slate-400">Inspect case studies and live deployments.</p>
              </div>
              <div className="flex items-center space-x-3.5">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-500/20"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.12] text-sm sm:text-base font-semibold transition-all"
                >
                  <span>Experience</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
