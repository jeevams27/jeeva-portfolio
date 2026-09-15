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
  const regularProjects = PROJECTS.filter((p) => !p.featured);

  const filteredProjects =
    filterCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
          (filterCategory === 'building' && p.status?.toLowerCase().includes('building'))
        );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-14">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Case Studies & Systems</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Projects Portfolio
          </h1>
          <p className="text-slate-400 text-base">
            Engineered systems built with Multimodal RAG, LangChain/LangGraph orchestration, Pydantic validation, and Applied Machine Learning.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterCategory === 'all'
                ? 'bg-white/[0.1] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All ({PROJECTS.length})
          </button>
          <button
            onClick={() => setFilterCategory('rag')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterCategory === 'rag'
                ? 'bg-white/[0.1] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            RAG & LLMs
          </button>
          <button
            onClick={() => setFilterCategory('machine learning')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterCategory === 'machine learning'
                ? 'bg-white/[0.1] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setFilterCategory('building')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              filterCategory === 'building'
                ? 'bg-white/[0.1] text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            In Progress
          </button>
        </div>
      </div>

      {/* Flagship Highlight (when All or RAG is selected) */}
      {(filterCategory === 'all' || filterCategory === 'rag') && featuredProject && (
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Flagship Project · 01</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/[0.06]">
                  {featuredProject.category}
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <Link
                    to={`/projects/${featuredProject.slug}`}
                    className="hover:text-emerald-300 transition-colors"
                  >
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>View Dedicated Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {featuredProject.liveDemo && (
                  <a
                    href={featuredProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/[0.08] text-xs sm:text-sm transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-xs sm:text-sm transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Link
                to={`/projects/${featuredProject.slug}`}
                className="block p-5 rounded-xl bg-[#090d14] border border-white/[0.06] hover:border-emerald-500/30 transition-all space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Two-Stage Reranking Pipeline
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Full Architecture &rarr;
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">1. Document Parsing:</span>
                    <span className="text-emerald-300">PyMuPDF + pdfplumber</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">2. Chart Vision:</span>
                    <span className="text-cyan-300">Gemini Vision</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">3. Vector Store:</span>
                    <span className="text-indigo-300">ChromaDB + Metadata</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">4. Neural Reranking:</span>
                    <span className="text-emerald-300">Cross-Encoder (Top 5)</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">5. Fast Inference:</span>
                    <span className="text-cyan-300">Groq Llama 3.3 70B</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid for remaining / all filtered projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects
          .filter((p) => (filterCategory === 'all' ? !p.featured : true))
          .map((project, idx) => {
            const isBuilding = project.status?.toLowerCase().includes('building');
            return (
              <div
                key={project.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">
                        0{idx + (filterCategory === 'all' ? 2 : 1)}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {project.category}
                      </span>
                    </div>

                    {isBuilding ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium">
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
                            className="p-1 text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      <Link to={`/projects/${project.slug}`} className="flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    {project.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
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
                        className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
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
                      className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-semibold"
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
  );
};
