import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Github,
  ArrowRight,
  CheckCircle2,
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
              <span>02 / Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Case Studies
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Production-focused systems built with Multimodal RAG, LLMs, and Applied Machine Learning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 bg-white/[0.03] p-1 rounded-lg border border-white/[0.06]">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filterCategory === 'all'
                  ? 'bg-white/[0.1] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilterCategory('rag')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filterCategory === 'rag'
                  ? 'bg-white/[0.1] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              RAG & GenAI
            </button>
            <button
              onClick={() => setFilterCategory('machine learning')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filterCategory === 'machine learning'
                  ? 'bg-white/[0.1] text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        {/* DOMINANT FEATURED PROJECT SHOWCASE */}
        {featuredProject && (filterCategory === 'all' || filterCategory === 'rag') && (
          <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.15] transition-all space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Case Study Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                    Flagship Project · 01
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/[0.06]">
                    {featuredProject.category}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Key Bullet Features Grid */}
                <div className="space-y-2 pt-1">
                  {featuredProject.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
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

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {featuredProject.liveDemo && (
                    <a
                      href={featuredProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
                    >
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/[0.08] text-xs sm:text-sm transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>GitHub Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-xs sm:text-sm transition-all font-mono"
                  >
                    <span>Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  </button>
                </div>
              </div>

              {/* Right Column: Architectural Flow Summary */}
              <div className="lg:col-span-5 w-full">
                <div
                  onClick={() => setSelectedProject(featuredProject)}
                  className="p-5 rounded-xl bg-[#090d14] border border-white/[0.06] space-y-3 cursor-pointer hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Multimodal RAG Flow
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      Expand &rarr;
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">1. Ingestion:</span>
                      <span className="text-emerald-300">PyMuPDF + pdfplumber</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">2. Vision:</span>
                      <span className="text-cyan-300">Gemini Vision (Charts/Tables)</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">3. Vector Store:</span>
                      <span className="text-indigo-300">ChromaDB + Dense Embeddings</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">4. Rerank:</span>
                      <span className="text-emerald-300">Cross-Encoder (Top 5 Rescore)</span>
                    </div>
                    <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">5. Synthesis:</span>
                      <span className="text-cyan-300">Groq Llama 3.3 70B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        {filteredRegularProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRegularProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 2}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        )}

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};