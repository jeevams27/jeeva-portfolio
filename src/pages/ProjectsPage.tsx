import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  ArrowRight,
  CheckCircle2,
  FolderGit2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  const filteredProjects =
    filterCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
          (filterCategory === 'building' && p.status?.toLowerCase().includes('building'))
        );

  const getProjectStyle = (id: string) => {
    switch (id) {
      case 'equity-research-report-intelligence':
        return {
          border: 'border-cyan-500/25 hover:border-cyan-500/50',
          glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
          bg: 'bg-[#090e18]',
          badgeBg: 'bg-cyan-950/50 border-cyan-500/30 text-cyan-300',
          numberColor: 'text-cyan-400',
          accentLink: 'text-cyan-400 hover:text-cyan-300',
          topLine: 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent',
          buttonGradient: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-cyan-500/25',
        };
      case 'ai-resume-screener':
        return {
          border: 'border-purple-500/25 hover:border-purple-500/50',
          glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]',
          bg: 'bg-[#100d1c]',
          badgeBg: 'bg-purple-950/50 border-purple-500/30 text-purple-300',
          numberColor: 'text-purple-400',
          accentLink: 'text-purple-400 hover:text-purple-300',
          topLine: 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent',
          buttonGradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold shadow-purple-500/25',
        };
      case 'automated-quotation-maker':
        return {
          border: 'border-emerald-500/25 hover:border-emerald-500/50',
          glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]',
          bg: 'bg-[#0a1512]',
          badgeBg: 'bg-emerald-950/50 border-emerald-500/30 text-emerald-300',
          numberColor: 'text-emerald-400',
          accentLink: 'text-emerald-400 hover:text-emerald-300',
          topLine: 'bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent',
          buttonGradient: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold shadow-emerald-500/25',
        };
      case 'energy-management':
      default:
        return {
          border: 'border-amber-500/25 hover:border-amber-500/50',
          glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]',
          bg: 'bg-[#13100a]',
          badgeBg: 'bg-amber-950/50 border-amber-500/30 text-amber-300',
          numberColor: 'text-amber-400',
          accentLink: 'text-amber-400 hover:text-amber-300',
          topLine: 'bg-gradient-to-r from-transparent via-amber-500/50 to-transparent',
          buttonGradient: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold shadow-amber-500/25',
        };
    }
  };

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-projects pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-14">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Case Studies & Architectures</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Production{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                AI Systems & Projects
              </span>
            </h1>
            <p className="text-slate-300 text-base">
              Engineered systems built with Multimodal RAG, LangChain/LangGraph orchestration, Pydantic validation, and Applied Machine Learning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 bg-white/[0.04] p-1.5 rounded-xl border border-white/[0.08] shadow-sm">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilterCategory('rag')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'rag'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RAG & LLMs
            </button>
            <button
              onClick={() => setFilterCategory('machine learning')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'machine learning'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setFilterCategory('building')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'building'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              In Progress
            </button>
          </div>
        </div>

        {/* Flagship Highlight Card */}
        {(filterCategory === 'all' || filterCategory === 'rag') && featuredProject && (
          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#090e18] border border-cyan-500/30 hover:border-cyan-500/50 transition-all shadow-[0_0_35px_rgba(6,182,212,0.1)] space-y-6 group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-500/30 font-semibold flex items-center space-x-1 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                    <Sparkles className="w-3 h-3" />
                    <span>Flagship Project · 01</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded border border-white/[0.08]">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-100 transition-colors">
                    <Link to={`/projects/${featuredProject.slug}`}>
                      {featuredProject.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {featuredProject.description}
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

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/25"
                  >
                    <span>View Dedicated Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {featuredProject.liveDemo && (
                    <a
                      href={featuredProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.1] text-xs sm:text-sm transition-all"
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
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/[0.08] text-xs sm:text-sm transition-all"
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
                  className="block p-5 rounded-xl bg-[#070b13] border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                      Two-Stage Reranking Pipeline
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 font-medium">
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
                      <span className="text-slate-400">5. Inference:</span>
                      <span className="text-blue-300">Groq Llama 3.3 70B</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid with Individual Color Identities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects
            .filter((p) => (filterCategory === 'all' ? !p.featured : true))
            .map((project, idx) => {
              const isBuilding = project.status?.toLowerCase().includes('building');
              const style = getProjectStyle(project.id);

              return (
                <div
                  key={project.id}
                  className={`relative overflow-hidden p-6 sm:p-7 rounded-2xl ${style.bg} border ${style.border} ${style.glow} transition-all flex flex-col justify-between space-y-6 group`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${style.topLine}`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[11px] font-mono ${style.numberColor} font-bold`}>
                          0{idx + (filterCategory === 'all' ? 2 : 1)}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>

                      {isBuilding ? (
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${style.badgeBg} font-medium`}>
                          Currently Building
                        </span>
                      ) : (
                        <div className="flex items-center space-x-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`GitHub for ${project.title}`}
                              className="p-1 text-slate-400 hover:text-white transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Live demo for ${project.title}`}
                              className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                        <Link to={`/projects/${project.slug}`} className="flex items-center justify-between">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
                        </Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${style.numberColor} shrink-0 mt-0.5`} />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-[11px] font-mono text-slate-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <Link
                        to={`/projects/${project.slug}`}
                        className={`text-xs font-mono ${style.accentLink} flex items-center space-x-1 font-semibold`}
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
