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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] ambient-glow-home pointer-events-none -z-10" />

      <div className="space-y-24 sm:space-y-32 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="pt-2 sm:pt-4 space-y-8 max-w-5xl">
          {/* Status Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono shadow-[0_0_20px_rgba(16,185,129,0.18)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="font-bold">{PERSONAL_INFO.status}</span>
          </div>

          {/* Master Headline */}
          <div className="space-y-4">
            <p className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center space-x-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{PERSONAL_INFO.role} · Chennai, India</span>
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[98px] font-black tracking-tight text-white leading-[1.05]">
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
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Tag Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1 text-xs sm:text-sm font-mono">
            <Link
              to="/skills/rag"
              className="px-4 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/50 transition-all shadow-[0_0_15px_rgba(16,185,129,0.12)] font-semibold"
            >
              Multimodal RAG &rarr;
            </Link>
            <Link
              to="/skills/langgraph"
              className="px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/50 transition-all shadow-[0_0_15px_rgba(6,182,212,0.12)] font-semibold"
            >
              LangGraph & State Graphs &rarr;
            </Link>
            <Link
              to="/skills/llms"
              className="px-4 py-2 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 hover:border-indigo-400 hover:bg-indigo-900/50 transition-all shadow-[0_0_15px_rgba(99,102,241,0.12)] font-semibold"
            >
              LCEL & Groq API &rarr;
            </Link>
            <Link
              to="/skills/machine-learning"
              className="px-4 py-2 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 hover:border-blue-400 hover:bg-blue-900/50 transition-all shadow-[0_0_15px_rgba(59,130,246,0.12)] font-semibold"
            >
              Machine Learning & Analytics &rarr;
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/45 active:scale-[0.99]"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
            </Link>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] text-slate-100 hover:text-white border border-white/[0.14] font-semibold text-sm sm:text-base transition-all shadow-sm"
            >
              <Download className="w-4 h-4 sm:w-5 h-5 text-emerald-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onResumeClick}
              className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/[0.1] text-sm sm:text-base font-medium transition-all"
            >
              <FileText className="w-4 h-4 sm:w-5 h-5 text-cyan-400" />
              <span>Preview CV</span>
            </button>
          </div>

          {/* Contact Links Strip */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-8 text-xs sm:text-sm md:text-base text-slate-300 font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-2 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <span className="inline-flex items-center space-x-2 text-slate-300">
              <Phone className="w-4 h-4 text-teal-400" />
              <span>+91 {PERSONAL_INFO.phone}</span>
            </span>

            <span className="inline-flex items-center space-x-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </span>

            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-400" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-slate-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Flagship Project Highlight Showcase */}
        {featuredProject && (
          <section className="space-y-6 pt-10 border-t border-white/[0.08]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Flagship Engineering Case Study</span>
              </div>
              <Link
                to="/projects"
                className="text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-300 flex items-center space-x-1.5 transition-colors font-bold"
              >
                <span>View All 4 Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12 rounded-3xl bg-[#0c121e] border border-cyan-500/25 hover:border-cyan-500/45 transition-all shadow-[0_0_40px_rgba(6,182,212,0.1)] space-y-6 group">
              {/* Subtle top cyan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs sm:text-sm font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-500/30 font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                      Multimodal RAG
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 bg-white/[0.03] px-3 py-1 rounded-md border border-white/[0.06]">
                      5-Layer Extraction Architecture
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-cyan-100 transition-colors">
                      {featuredProject.title}
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                      {featuredProject.tagline}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {featuredProject.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <Link
                      to={`/projects/${featuredProject.slug}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md shadow-cyan-500/20"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
                    </Link>

                    {featuredProject.liveDemo && (
                      <a
                        href={featuredProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.12] text-sm sm:text-base font-semibold transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}

                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] text-sm sm:text-base font-medium transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="block p-6 rounded-2xl bg-[#090e18] border border-cyan-500/25 hover:border-cyan-500/45 transition-all space-y-3.5 shadow-inner"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-300 font-bold">
                        Two-Stage Retrieval Pipeline
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold">
                        Details &rarr;
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs sm:text-sm font-mono">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">1. Ingestion:</span>
                        <span className="text-emerald-300 font-bold">PyMuPDF + pdfplumber</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">2. Vision:</span>
                        <span className="text-cyan-300 font-bold">Gemini Vision</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">3. Vector Store:</span>
                        <span className="text-indigo-300 font-bold">ChromaDB Embeddings</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">4. Reranking:</span>
                        <span className="text-teal-300 font-bold">Cross-Encoder (Top 5)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                        <span className="text-slate-400">5. Synthesis:</span>
                        <span className="text-blue-300 font-bold">Groq Llama 3.3 70B</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Core Focus & What I Build Preview */}
        <section className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Core Architectural Pillars</span>
            </div>
            <Link
              to="/about"
              className="text-xs sm:text-sm font-mono text-slate-400 hover:text-purple-300 flex items-center space-x-1.5 transition-colors font-bold"
            >
              <span>Learn About Background</span>
              <ArrowRight className="w-4 h-4 text-purple-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Link
              to="/skills/rag"
              className="p-6 rounded-2xl bg-[#0c121e] border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all space-y-3 group"
            >
              <span className="text-sm font-mono text-cyan-400 font-bold">01</span>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Multimodal RAG Pipelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Two-stage vector search with neural cross-encoder reranking and Gemini Vision chart ingestion.
              </p>
            </Link>

            <Link
              to="/skills/langgraph"
              className="p-6 rounded-2xl bg-[#110e1f] border border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] transition-all space-y-3 group"
            >
              <span className="text-sm font-mono text-violet-400 font-bold">02</span>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                LangGraph & State Graphs
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Deterministic cyclic state machines, dynamic tool routing, and schema validation.
              </p>
            </Link>

            <Link
              to="/skills/machine-learning"
              className="p-6 rounded-2xl bg-[#0b1220] border border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)] transition-all space-y-3 group"
            >
              <span className="text-sm font-mono text-blue-400 font-bold">03</span>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                Machine Learning & EDA
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Time-series feature engineering, anomaly detection, predictive forecasting, and Streamlit dashboards.
              </p>
            </Link>

            <Link
              to="/skills/llms"
              className="p-6 rounded-2xl bg-[#130f1d] border border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)] transition-all space-y-3 group"
            >
              <span className="text-sm font-mono text-indigo-400 font-bold">04</span>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                Evaluation & Schema Safety
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Pydantic v2 data models, RAGAS faithfulness metrics, and sub-second Groq LPU inference.
              </p>
            </Link>
          </div>
        </section>

        {/* Active Frontier Preview */}
        <section className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-violet-400 uppercase tracking-wider font-bold">
              <Compass className="w-4 h-4 text-violet-400" />
              <span>Currently Exploring & Building</span>
            </div>
            <Link
              to="/exploring"
              className="text-xs sm:text-sm font-mono text-slate-400 hover:text-violet-300 flex items-center space-x-1.5 transition-colors font-bold"
            >
              <span>View All Research</span>
              <ArrowRight className="w-4 h-4 text-violet-400" />
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
                  className={`p-6 rounded-2xl ${accentBg} border ${accentBorder} transition-all flex flex-col justify-between space-y-4 group shadow-sm`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-mono ${accentText} font-bold`}>
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-xs font-mono px-3 py-1 rounded-full border ${
                          isBuilding
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/35 font-semibold'
                            : 'bg-white/[0.04] text-slate-300 border-white/[0.08]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{item.tag}</span>
                    <span className={`${accentText} group-hover:translate-x-1 transition-transform font-bold`}>
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom Action CTA Strip */}
        <section className="relative overflow-hidden p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900/70 to-cyan-950/40 border border-emerald-500/30 text-center space-y-5 shadow-[0_0_60px_rgba(16,185,129,0.12)]">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Meaningful</span> Together.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Open to full-time AI / GenAI Engineering roles, contract research, and innovative LLM system architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/25"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
            </Link>
            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/[0.14] text-slate-100 text-sm sm:text-base font-semibold transition-all"
            >
              <span>View Full Resume</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
