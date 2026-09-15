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
  Brain,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const focusAreas = [
    {
      num: '01',
      title: 'Multimodal RAG Pipelines',
      desc: 'Architecting 5-layer extraction systems parsing PDFs, text, tables, and visual charts with dense embeddings, ChromaDB, and neural cross-encoder reranking.',
      link: '/skills/rag',
    },
    {
      num: '02',
      title: 'LangChain, LCEL & LangGraph',
      desc: 'Developing end-to-end AI applications using LangChain LCEL, Groq API, and LangGraph with state machines and dynamic tool routing.',
      link: '/skills/langgraph',
    },
    {
      num: '03',
      title: 'Machine Learning & Data Science',
      desc: 'Time-series forecasting, EDA, data preprocessing, feature engineering, random forests, and anomaly detection pipelines.',
      link: '/skills/machine-learning',
    },
    {
      num: '04',
      title: 'Model Evaluation & Validation',
      desc: 'Evaluating AI pipelines using RAGAS, LLM-as-Judge benchmarks, and enforcing strict type-safe Pydantic output schemas.',
      link: '/skills/llms',
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          AI & GenAI Engineer focused on reliable, production-ready systems.
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Background narrative, Education & Certs */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Engineering Background
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
              {PERSONAL_INFO.aboutDetails}
            </p>
          </div>

          {/* Education Card */}
          <div className="pt-4 border-t border-white/[0.06] space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Formal Education</span>
            </div>
            <div className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-semibold text-white text-base">
                  {PERSONAL_INFO.education.institution}
                </h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
              </div>
              <p className="text-sm text-slate-300">
                {PERSONAL_INFO.education.degree}
              </p>
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Chennai, TN</span>
                </span>
                <span className="text-slate-600">•</span>
                <span>{PERSONAL_INFO.education.period}</span>
              </div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="pt-2 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Verified Certifications</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-[#0c1017] border border-white/[0.08] space-y-1"
                >
                  <p className="text-sm font-semibold text-slate-200">
                    {cert.title}
                  </p>
                  <p className="text-xs font-mono text-emerald-400">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Core Focus Areas with Links */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Core Architectural Pillars</span>
            </div>
            <p className="text-sm text-slate-400">
              Deep expertise applied directly across production workflows.
            </p>
          </div>

          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="py-5 space-y-2 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {item.num}
                    </span>
                    <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    to={item.link}
                    className="text-xs font-mono text-slate-500 group-hover:text-emerald-400 transition-colors flex items-center space-x-1"
                  >
                    <span>Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="text-sm font-semibold text-white">Explore My Work</h4>
              <p className="text-xs text-slate-400">Inspect case studies and live deployments.</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.08] text-slate-200 text-xs transition-all"
              >
                <span>Experience</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
