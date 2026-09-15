import React from 'react';
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
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-projects pointer-events-none -z-10" />

      <div className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
        {/* Page Header with Large Bold Typography */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Projects / Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Things I’ve Built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              AI & Machine Learning
            </span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Detailed case studies of production systems, multimodal RAG pipelines, agentic state graphs, and applied ML models.
          </p>
        </div>

        {/* Editorial Project Showcase List (Generous Whitespace, Large Typography) */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS.map((project, idx) => {
            const isBuilding = project.status?.toLowerCase().includes('building');
            const num = `0${idx + 1}`;

            return (
              <article
                key={project.id}
                className="pt-12 sm:pt-16 first:pt-0 border-t border-white/[0.08] first:border-none space-y-8 group"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-mono text-cyan-400 font-bold tracking-wider">
                      {num}
                    </span>
                    <span className="text-slate-600">/</span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {isBuilding && (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      Currently Building
                    </span>
                  )}
                </div>

                {/* Main Content Layout */}
                <div className="space-y-6">
                  {/* Big Title */}
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                    <Link to={`/projects/${project.slug}`} className="hover:underline decoration-cyan-500/40 underline-offset-8">
                      {project.title}
                    </Link>
                  </h2>

                  {/* Tagline / Narrative */}
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-cyan-500/20 active:scale-[0.99]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.1] text-xs sm:text-sm font-semibold transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-white/[0.08] text-xs sm:text-sm font-medium transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
