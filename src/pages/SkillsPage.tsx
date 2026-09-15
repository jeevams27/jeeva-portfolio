import React from 'react';
import { Link } from 'react-router-dom';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { AIEngineeringSection } from '../components/AIEngineeringSection';
import {
  Brain,
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
  Wrench,
  Code2,
  Database,
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
          <Brain className="w-3.5 h-3.5" />
          <span>Technical Stack & Methodologies</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Skills & Core Competencies
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Categorized frameworks, vector search systems, machine learning methods, and validation tools applied across production pipelines. Click on highlighted topics for architectural deep dives.
        </p>
      </div>

      {/* Categorized Matrix Rows */}
      <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-white/[0.01] transition-colors"
          >
            {/* Category Title & Description */}
            <div className="md:col-span-4 space-y-1.5">
              <h2 className="text-base sm:text-lg font-semibold text-white">
                {category.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {category.description}
              </p>
            </div>

            {/* Skills List */}
            <div className="md:col-span-8 flex flex-wrap gap-2 items-center">
              {category.skills.map((skill, sIdx) => {
                if (skill.slug) {
                  return (
                    <Link
                      key={sIdx}
                      to={`/skills/${skill.slug}`}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-white/[0.06] transition-all"
                    >
                      <span>{skill.name}</span>
                    </Link>
                  );
                }

                return (
                  <span
                    key={sIdx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                  >
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Dedicated Deep Dive Feature Cards */}
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Architectural Deep Dives</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Explore Detailed Topic Breakdowns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/skills/rag"
            className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">01</span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded">RAG</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Multimodal RAG Pipelines
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Two-stage retrieval with neural Cross-Encoder reranking and Gemini Vision chart ingestion.
            </p>
            <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1 pt-1">
              <span>Read Deep Dive</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/skills/langgraph"
            className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">02</span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded">Orchestration</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
              LangGraph & State Graphs
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cyclic agent state machines, tool routing, and human-in-the-loop checkpointing.
            </p>
            <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1 pt-1">
              <span>Read Deep Dive</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/skills/llms"
            className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">03</span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded">LCEL & Models</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
              LLMs & Prompt Engineering
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              LCEL composition, Groq LPU sub-second inference, and Pydantic schema enforcement.
            </p>
            <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1 pt-1">
              <span>Read Deep Dive</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/skills/machine-learning"
            className="p-5 rounded-xl bg-[#0c1017] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">04</span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded">ML & Data</span>
            </div>
            <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Machine Learning & EDA
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Time-series feature engineering, anomaly detection, predictive forecasting, and EDA.
            </p>
            <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1 pt-1">
              <span>Read Deep Dive</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </div>

      {/* Production Architecture Pipeline */}
      <div className="pt-6 border-t border-white/[0.06]">
        <AIEngineeringSection />
      </div>
    </div>
  );
};
