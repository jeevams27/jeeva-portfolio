import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-projects pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header with Large Bold Typography */}
        <div className="space-y-5 max-w-4xl">
          <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-cyan-400 uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span>Projects / Case Studies</span>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
            Things I’ve Built with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              AI & Machine Learning
            </span>.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-normal max-w-3xl">
            Detailed case studies of production systems, multimodal RAG pipelines, agentic state graphs, and applied ML models.
          </p>
        </div>

        {/* Editorial Project Showcase List (Generous Whitespace, Large Typography) */}
        <div className="space-y-20 sm:space-y-28">
          {PROJECTS.map((project, idx) => {
            const isBuilding = project.status?.toLowerCase().includes('building');
            const num = `0${idx + 1}`;

            return (
              <article
                key={project.id}
                className="pt-14 sm:pt-20 first:pt-0 border-t border-white/[0.08] first:border-none space-y-8 group"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg sm:text-xl font-mono text-cyan-400 font-bold tracking-wider">
                      {num}
                    </span>
                    <span className="text-slate-600 text-lg">/</span>
                    <span className="text-sm sm:text-base font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {isBuilding && (
                    <span className="text-sm sm:text-base font-mono px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 font-semibold shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                      Currently Building
                    </span>
                  )}
                </div>

                {/* Main Content Layout */}
                <div className="space-y-6">
                  {/* Big Title */}
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight group-hover:text-cyan-200 transition-colors">
                    <Link to={`/projects/${project.slug}`} className="hover:underline decoration-cyan-500/40 underline-offset-8">
                      {project.title}
                    </Link>
                  </h2>

                  {/* Tagline / Narrative */}
                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3.5 text-base sm:text-lg lg:text-xl text-slate-200">
                        <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-2 rounded-xl bg-white/[0.04] text-sm sm:text-base font-mono text-slate-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center space-x-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base sm:text-lg transition-all shadow-md shadow-cyan-500/20 active:scale-[0.99]"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-5 h-5 sm:w-6 h-6" />
                    </Link>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.12] text-base sm:text-lg font-semibold transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] text-base sm:text-lg font-medium transition-all"
                      >
                        <Github className="w-5 h-5 sm:w-6 h-6" />
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
