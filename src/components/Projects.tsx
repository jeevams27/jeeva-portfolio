import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import {
  Sparkles,
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Search,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const regularProjects = PROJECTS.filter((p) => !p.featured);

  const filteredRegularProjects =
    filterCategory === 'all'
      ? regularProjects
      : regularProjects.filter((p) =>
          p.category.toLowerCase().includes(filterCategory.toLowerCase())
        );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-surface-border/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span className="w-4 h-[1px] bg-emerald-500"></span>
              <span>03 // Portfolio & Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured AI Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Production-focused applications built with Multimodal RAG, LLMs, Agentic State Machines, and Machine Learning.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-surface-card rounded-xl border border-surface-border">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilterCategory('rag')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'rag'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              RAG & GenAI
            </button>
            <button
              onClick={() => setFilterCategory('agentic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'agentic'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Agentic Workflows
            </button>
            <button
              onClick={() => setFilterCategory('machine learning')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === 'machine learning'
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        {/* DOMINANT FEATURED PROJECT HERO CARD */}
        {featuredProject && (filterCategory === 'all' || filterCategory === 'rag') && (
          <div className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#101929] via-[#0d1422] to-[#0a0e18] border border-emerald-500/30 shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Flagship Project</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Key Bullet Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {featuredProject.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-900/90 text-xs font-mono text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3.5 pt-2">
                  {featuredProject.liveDemo && (
                    <a
                      href={featuredProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-surface-card hover:bg-surface-card-hover text-slate-200 hover:text-white border border-surface-border text-xs sm:text-sm transition-all"
                    >
                      <Github className="w-4 h-4 text-emerald-400" />
                      <span>GitHub Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs sm:text-sm transition-all font-mono"
                  >
                    <span>View System Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive System Architecture Preview */}
              <div className="lg:col-span-5 w-full">
                <div
                  onClick={() => setSelectedProject(featuredProject)}
                  className="p-5 rounded-2xl bg-[#090d15] border border-surface-border/80 space-y-3 cursor-pointer hover:border-emerald-500/50 transition-all shadow-xl"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Multimodal RAG Flow</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                      Click to expand
                    </span>
                  </div>

                  {/* Flow Diagram Mini */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">1. Ingestion:</span>
                      <span className="text-emerald-300">Multi-PDF (PyMuPDF, pdfplumber)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">2. Vision:</span>
                      <span className="text-cyan-300">Gemini Vision (Charts & Graphs)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">3. Vector Store:</span>
                      <span className="text-indigo-300">ChromaDB + Sentence Transformers</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">4. Rerank:</span>
                      <span className="text-emerald-300">Cross-Encoder Neural Reranking</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">5. Synthesis:</span>
                      <span className="text-cyan-300">Groq Llama 3.3 70B (Low Latency)</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] font-mono text-emerald-400 hover:underline">
                      Explore detailed workflow diagram →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRegularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
