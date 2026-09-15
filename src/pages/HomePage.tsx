import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, PROJECTS, CURRENTLY_EXPLORING } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onResumeClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onResumeClick }) => {
  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-home pointer-events-none -z-10" />

      <div className="space-y-20 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="pt-2 sm:pt-6 space-y-7 max-w-4xl">
          {/* Status Pill */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-medium">{PERSONAL_INFO.status}</span>
          </div>

          {/* Big Headline */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{PERSONAL_INFO.role} · Chennai, India</span>
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.06]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Intelligent Systems
              </span>{' '}
              with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                LLMs, RAG & AI
              </span>.
            </h1>
          </div>

          {/* Bio Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
            <Link
              to="/skills/rag"
              className="px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/25 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all shadow-[0_0_10px_rgba(16,185,129,0.08)]"
            >
              Multimodal RAG &rarr;
            </Link>
            <Link
              to="/skills/langgraph"
              className="px-3 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-500/25 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/40 transition-all shadow-[0_0_10px_rgba(6,182,212,0.08)]"
            >
              LangGraph & State Graphs &rarr;
            </Link>
            <Link
              to="/skills/llms"
              className="px-3 py-1.5 rounded-lg bg-indigo-950/30 border border-indigo-500/25 text-indigo-300 hover:border-indigo-400 hover:bg-indigo-900/40 transition-all shadow-[0_0_10px_rgba(99,102,241,0.08)]"
            >
              LCEL & Groq API &rarr;
            </Link>
            <Link
              to="/skills/machine-learning"
              className="px-3 py-1.5 rounded-lg bg-blue-950/30 border border-blue-500/25 text-blue-300 hover:border-blue-400 hover:bg-blue-900/40 transition-all shadow-[0_0_10px_rgba(59,130,246,0.08)]"
            >
              Machine Learning & Analytics &rarr;
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.99]"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center justify-center space-x-2 px-4.5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-100 hover:text-white border border-white/[0.12] font-semibold text-sm transition-all shadow-sm"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onResumeClick}
              className="inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.07] text-slate-300 hover:text-white border border-white/[0.08] text-sm font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Preview CV</span>
            </button>
          </div>

          {/* Contact Links Strip */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400 font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center space-x-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 {PERSONAL_INFO.phone}</span>
            </span>

            <span className="inline-flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>

            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Flagship Project Highlight Card */}
        {featuredProject && (
          <section className="space-y-6 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Flagship Engineering Case Study</span>
              </div>
              <Link
                to="/projects"
                className="text-xs font-mono text-slate-400 hover:text-cyan-300 flex items-center space-x-1 transition-colors"
              >
                <span>View All 4 Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>

            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0c121e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all shadow-[0_0_30px_rgba(6,182,212,0.06)] space-y-6 group">
              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-0.5 rounded border border-cyan-500/30 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                      Multimodal RAG
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/[0.06]">
                      5-Layer Extraction Architecture
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-100 transition-colors">
                      {featuredProject.title}
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {featuredProject.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      to={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {featuredProject.liveDemo && (
                      <a
                        href={featuredProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.1] text-xs sm:text-sm transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                    )}

                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-xs sm:text-sm transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="block p-5 rounded-xl bg-[#090e18] border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-3 shadow-inner"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                        Two-Stage Retrieval Pipeline
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        Details &rarr;
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">1. Ingestion:</span>
                        <span className="text-emerald-300">PyMuPDF + pdfplumber</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">2. Vision:</span>
                        <span className="text-cyan-300">Gemini Vision</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">3. Vector Store:</span>
                        <span className="text-indigo-300">ChromaDB Embeddings</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">4. Reranking:</span>
                        <span className="text-teal-300">Cross-Encoder (Top 5)</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">5. Synthesis:</span>
                        <span className="text-blue-300">Groq Llama 3.3 70B</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Core Focus & What I Build Preview */}
        <section className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span>Core Architectural Pillars</span>
            </div>
            <Link
              to="/about"
              className="text-xs font-mono text-slate-400 hover:text-purple-300 flex items-center space-x-1 transition-colors"
            >
              <span>Learn About Background</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/skills/rag"
              className="p-5 rounded-xl bg-[#0c121e] border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all space-y-2.5 group"
            >
              <span className="text-xs font-mono text-cyan-400 font-bold">01</span>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Multimodal RAG Pipelines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Two-stage vector search with neural cross-encoder reranking and Gemini Vision chart ingestion.
              </p>
            </Link>

            <Link
              to="/skills/langgraph"
              className="p-5 rounded-xl bg-[#110e1f] border border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all space-y-2.5 group"
            >
              <span className="text-xs font-mono text-violet-400 font-bold">02</span>
              <h3 className="text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
                LangGraph & State Graphs
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deterministic cyclic state machines, dynamic tool routing, and schema validation.
              </p>
            </Link>

            <Link
              to="/skills/machine-learning"
              className="p-5 rounded-xl bg-[#0b1220] border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all space-y-2.5 group"
            >
              <span className="text-xs font-mono text-blue-400 font-bold">03</span>
              <h3 className="text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                Machine Learning & EDA
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Time-series feature engineering, anomaly detection, predictive forecasting, and Streamlit dashboards.
              </p>
            </Link>

            <Link
              to="/skills/llms"
              className="p-5 rounded-xl bg-[#130f1d] border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all space-y-2.5 group"
            >
              <span className="text-xs font-mono text-indigo-400 font-bold">04</span>
              <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                Evaluation & Schema Safety
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pydantic v2 data models, RAGAS faithfulness metrics, and sub-second Groq LPU inference.
              </p>
            </Link>
          </div>
        </section>

        {/* Active Frontier Preview */}
        <section className="space-y-6 pt-6 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
              <Compass className="w-3.5 h-3.5 text-violet-400" />
              <span>Currently Exploring & Building</span>
            </div>
            <Link
              to="/exploring"
              className="text-xs font-mono text-slate-400 hover:text-violet-300 flex items-center space-x-1 transition-colors"
            >
              <span>View All Research</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CURRENTLY_EXPLORING.map((item, idx) => {
              const isBuilding = item.status.toLowerCase().includes('building');
              const accentBorder = idx === 0 ? 'border-violet-500/25 hover:border-violet-500/50' : idx === 1 ? 'border-cyan-500/25 hover:border-cyan-500/50' : 'border-emerald-500/25 hover:border-emerald-500/50';
              const accentText = idx === 0 ? 'text-violet-400' : idx === 1 ? 'text-cyan-400' : 'text-emerald-400';
              const accentBg = idx === 0 ? 'bg-[#120e20]' : idx === 1 ? 'bg-[#0a121e]' : 'bg-[#0a1714]';

              return (
                <Link
                  key={idx}
                  to={item.link}
                  className={`p-5 rounded-xl ${accentBg} border ${accentBorder} transition-all flex flex-col justify-between space-y-3 group shadow-sm`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${accentText} font-bold`}>
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isBuilding
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-white/[0.04] text-slate-300 border-white/[0.08]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{item.tag}</span>
                    <span className={`${accentText} group-hover:translate-x-0.5 transition-transform font-semibold`}>
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom Action CTA Strip */}
        <section className="relative overflow-hidden p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-slate-900/60 to-cyan-950/30 border border-emerald-500/25 text-center space-y-5 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Meaningful</span> Together.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Open to full-time AI / GenAI Engineering roles, contract research, and innovative LLM system architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-sm font-medium transition-all"
            >
              <span>View Full Resume</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
