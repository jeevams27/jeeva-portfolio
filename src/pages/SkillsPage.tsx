import React from 'react';
import { Link } from 'react-router-dom';
import { AIEngineeringSection } from '../components/AIEngineeringSection';
import {
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const categoriesData = [
    {
      categoryName: 'PROGRAMMING',
      color: 'text-emerald-400',
      dotColor: 'bg-emerald-400',
      borderColor: 'border-emerald-500/25',
      skills: [
        { name: 'Python', slug: null },
        { name: 'SQL', slug: null },
      ],
    },
    {
      categoryName: 'GENERATIVE AI & LLMs',
      color: 'text-purple-400',
      dotColor: 'bg-purple-400',
      borderColor: 'border-purple-500/25',
      skills: [
        { name: 'LLMs', slug: 'llms' },
        { name: 'RAG', slug: 'rag' },
        { name: 'Multimodal RAG', slug: 'rag' },
        { name: 'Prompt Engineering', slug: null },
        { name: 'LangChain', slug: 'llms' },
        { name: 'LCEL', slug: 'llms' },
        { name: 'LangGraph', slug: 'langgraph' },
        { name: 'ChromaDB', slug: 'rag' },
        { name: 'Groq API', slug: 'llms' },
        { name: 'Agentic AI', slug: 'langgraph' },
      ],
    },
    {
      categoryName: 'MACHINE LEARNING',
      color: 'text-blue-400',
      dotColor: 'bg-blue-400',
      borderColor: 'border-blue-500/25',
      skills: [
        { name: 'Machine Learning', slug: 'machine-learning' },
        { name: 'Linear Regression', slug: null },
        { name: 'Logistic Regression', slug: null },
        { name: 'Decision Tree', slug: null },
        { name: 'Random Forest', slug: 'machine-learning' },
        { name: 'Model Evaluation', slug: null },
      ],
    },
    {
      categoryName: 'DATA SCIENCE & ANALYTICS',
      color: 'text-teal-400',
      dotColor: 'bg-teal-400',
      borderColor: 'border-teal-500/25',
      skills: [
        { name: 'Pandas', slug: null },
        { name: 'NumPy', slug: null },
        { name: 'Scikit-learn', slug: 'machine-learning' },
        { name: 'EDA', slug: 'machine-learning' },
        { name: 'Data Preprocessing', slug: null },
        { name: 'Feature Engineering', slug: 'machine-learning' },
      ],
    },
    {
      categoryName: 'TOOLS & EVALUATION',
      color: 'text-amber-400',
      dotColor: 'bg-amber-400',
      borderColor: 'border-amber-500/25',
      skills: [
        { name: 'RAGAS', slug: 'rag' },
        { name: 'LLM-as-Judge', slug: 'llms' },
        { name: 'Pydantic', slug: 'llms' },
        { name: 'Streamlit', slug: null },
        { name: 'Docker', slug: null },
        { name: 'FastAPI', slug: null },
        { name: 'Git', slug: null },
        { name: 'GitHub', slug: null },
      ],
    },
  ];

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-skills pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
              Skills & Stack
            </span>.
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal max-w-3xl">
            Core competencies across Generative AI, RAG pipelines, agentic orchestration, machine learning models, and production evaluation frameworks.
          </p>
        </div>

        {/* Clean Editorial Technical Profile Layout */}
        <div className="space-y-14 sm:space-y-18">
          {categoriesData.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`}></span>
                <h2 className={`text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest uppercase ${cat.color}`}>
                  {cat.categoryName}
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                {cat.skills.map((skill, sIdx) => {
                  if (skill.slug) {
                    return (
                      <Link
                        key={sIdx}
                        to={`/skills/${skill.slug}`}
                        className="inline-flex items-center px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono bg-white/[0.04] text-slate-100 border border-white/[0.1] hover:border-purple-500/50 hover:text-purple-300 hover:bg-white/[0.08] transition-all shadow-sm group"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-2" />
                      </Link>
                    );
                  }

                  return (
                    <span
                      key={sIdx}
                      className="inline-flex items-center px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Deep Dive Feature Cards */}
        <div className="space-y-8 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Deep-Dive Topics</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Architectural Breakdowns & Flowcharts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <Link
              to="/skills/rag"
              className="p-7 rounded-3xl bg-[#090e18] border border-cyan-500/25 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-cyan-400 font-bold">01 / RAG</span>
                <span className="text-xs sm:text-sm font-mono text-cyan-300 flex items-center space-x-1.5 font-bold">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                Multimodal RAG Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                5-layer document extraction with two-stage Cross-Encoder reranking and Gemini Vision chart understanding.
              </p>
            </Link>

            <Link
              to="/skills/langgraph"
              className="p-7 rounded-3xl bg-[#110e1f] border border-violet-500/25 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)] transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-violet-400 font-bold">02 / Orchestration</span>
                <span className="text-xs sm:text-sm font-mono text-violet-300 flex items-center space-x-1.5 font-bold">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                LangGraph & State Graphs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cyclic agent state machines, tool routing, schema validation loops, and human checkpoints.
              </p>
            </Link>

            <Link
              to="/skills/llms"
              className="p-7 rounded-3xl bg-[#130f1d] border border-indigo-500/25 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-indigo-400 font-bold">03 / LCEL & Inference</span>
                <span className="text-xs sm:text-sm font-mono text-indigo-300 flex items-center space-x-1.5 font-bold">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                LLM Orchestration & Evaluation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                LCEL composition, Groq LPU sub-second inference, and Pydantic schema validation.
              </p>
            </Link>

            <Link
              to="/skills/machine-learning"
              className="p-7 rounded-3xl bg-[#0a101d] border border-blue-500/25 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-blue-400 font-bold">04 / ML & Analytics</span>
                <span className="text-xs sm:text-sm font-mono text-blue-300 flex items-center space-x-1.5 font-bold">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                Applied Machine Learning & EDA
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Time-series feature engineering, anomaly detection, predictive ensembles, and Streamlit dashboards.
              </p>
            </Link>
          </div>
        </div>

        {/* Production AI Engineering Pipeline Flow */}
        <div className="pt-10 border-t border-white/[0.08]">
          <AIEngineeringSection />
        </div>
      </div>
    </div>
  );
};
