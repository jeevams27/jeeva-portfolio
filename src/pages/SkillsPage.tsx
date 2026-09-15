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
  const getCategoryTheme = (id: string) => {
    switch (id) {
      case 'genai':
        return {
          iconColor: 'text-purple-400',
          titleColor: 'text-purple-300',
          pillBorder: 'border-purple-500/20 hover:border-purple-500/40 hover:text-purple-300 hover:bg-purple-950/30',
          dotBg: 'bg-purple-400',
          cardBg: 'bg-[#100d1c]',
        };
      case 'frameworks':
        return {
          iconColor: 'text-cyan-400',
          titleColor: 'text-cyan-300',
          pillBorder: 'border-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-950/30',
          dotBg: 'bg-cyan-400',
          cardBg: 'bg-[#090e18]',
        };
      case 'ml':
        return {
          iconColor: 'text-blue-400',
          titleColor: 'text-blue-300',
          pillBorder: 'border-blue-500/20 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-950/30',
          dotBg: 'bg-blue-400',
          cardBg: 'bg-[#0a101d]',
        };
      case 'data-science':
        return {
          iconColor: 'text-teal-400',
          titleColor: 'text-teal-300',
          pillBorder: 'border-teal-500/20 hover:border-teal-500/40 hover:text-teal-300 hover:bg-teal-950/30',
          dotBg: 'bg-teal-400',
          cardBg: 'bg-[#081514]',
        };
      case 'programming':
        return {
          iconColor: 'text-emerald-400',
          titleColor: 'text-emerald-300',
          pillBorder: 'border-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-950/30',
          dotBg: 'bg-emerald-400',
          cardBg: 'bg-[#091510]',
        };
      case 'tools':
      default:
        return {
          iconColor: 'text-amber-400',
          titleColor: 'text-amber-300',
          pillBorder: 'border-amber-500/20 hover:border-amber-500/40 hover:text-amber-300 hover:bg-amber-950/30',
          dotBg: 'bg-amber-400',
          cardBg: 'bg-[#14100a]',
        };
    }
  };

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-skills pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Technical Stack & Methodologies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technical Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
              Core Capabilities
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Categorized frameworks, vector search systems, machine learning methods, and validation tools applied across production pipelines.
          </p>
        </div>

        {/* Categorized Matrix Rows with Distinct Category Color Themes */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SKILL_CATEGORIES.map((category) => {
            const theme = getCategoryTheme(category.id);

            return (
              <div
                key={category.id}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-white/[0.02] transition-colors rounded-xl px-2"
              >
                {/* Category Title & Description */}
                <div className="md:col-span-4 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${theme.dotBg}`}></span>
                    <h2 className={`text-base sm:text-lg font-bold ${theme.titleColor}`}>
                      {category.name}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {category.description}
                  </p>
                </div>

                {/* Skills List with links if slug is present */}
                <div className="md:col-span-8 flex flex-wrap gap-2 items-center">
                  {category.skills.map((skill, sIdx) => {
                    if (skill.slug) {
                      return (
                        <Link
                          key={sIdx}
                          to={`/skills/${skill.slug}`}
                          className={`inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-200 border ${theme.pillBorder} transition-all shadow-sm`}
                        >
                          <span>{skill.name}</span>
                        </Link>
                      );
                    }

                    return (
                      <span
                        key={sIdx}
                        className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                      >
                        <span>{skill.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Deep Dive Feature Cards */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Deep Dives</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Explore Detailed Topic Breakdowns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/skills/rag"
              className="p-5 rounded-xl bg-[#090e18] border border-cyan-500/25 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold">01</span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">RAG</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Multimodal RAG Pipelines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Two-stage retrieval with neural Cross-Encoder reranking and Gemini Vision chart ingestion.
              </p>
              <div className="text-xs font-mono text-cyan-400 flex items-center space-x-1 pt-1 font-semibold">
                <span>Read Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              to="/skills/langgraph"
              className="p-5 rounded-xl bg-[#110e1f] border border-violet-500/25 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-violet-400 font-bold">02</span>
                <span className="text-[10px] font-mono text-violet-300 bg-violet-950/50 px-2 py-0.5 rounded border border-violet-500/30">Orchestration</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                LangGraph & State Graphs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cyclic agent state machines, tool routing, and human-in-the-loop checkpointing.
              </p>
              <div className="text-xs font-mono text-violet-400 flex items-center space-x-1 pt-1 font-semibold">
                <span>Read Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              to="/skills/llms"
              className="p-5 rounded-xl bg-[#130f1d] border border-indigo-500/25 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.12)] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 font-bold">03</span>
                <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-500/30">LCEL & Models</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                LLMs & Prompt Engineering
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                LCEL composition, Groq LPU sub-second inference, and Pydantic schema enforcement.
              </p>
              <div className="text-xs font-mono text-indigo-400 flex items-center space-x-1 pt-1 font-semibold">
                <span>Read Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              to="/skills/machine-learning"
              className="p-5 rounded-xl bg-[#0a101d] border border-blue-500/25 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)] transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-blue-400 font-bold">04</span>
                <span className="text-[10px] font-mono text-blue-300 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-500/30">ML & Data</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                Machine Learning & EDA
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Time-series feature engineering, anomaly detection, predictive forecasting, and EDA.
              </p>
              <div className="text-xs font-mono text-blue-400 flex items-center space-x-1 pt-1 font-semibold">
                <span>Read Deep Dive</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>

        {/* Production Architecture Pipeline */}
        <div className="pt-6 border-t border-white/[0.08]">
          <AIEngineeringSection />
        </div>
      </div>
    </div>
  );
};
