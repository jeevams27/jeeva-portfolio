import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const normalizedSlug = slug?.toLowerCase();
  const project = PROJECTS.find(
    (p) =>
      p.slug.toLowerCase() === normalizedSlug ||
      (normalizedSlug === 'energy-management-analysis' && p.slug === 'energy-management') ||
      p.id.toLowerCase() === normalizedSlug
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-projects pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span>Project 0{currentIndex + 1} / 0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Project Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-3 py-1 rounded-md border border-cyan-500/30 font-semibold shadow-[0_0_10px_rgba(6,182,212,0.15)]">
              {project.category}
            </span>
            {project.status && (
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950/50 px-3 py-1 rounded-md border border-emerald-500/30 font-medium">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white border border-white/[0.1] text-sm font-semibold transition-all"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem & Solution Double Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c121e] border border-rose-500/25 space-y-3 shadow-[0_0_20px_rgba(244,63,94,0.06)]">
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center space-x-1.5 font-semibold">
              <span>Engineering Problem</span>
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c121e] border border-cyan-500/25 space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.06)]">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center space-x-1.5 font-semibold">
              <span>Architected Solution</span>
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Pipeline Flow */}
        <div className="space-y-6 pt-4 border-t border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Architecture Breakdown</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Pipeline Stages & Component Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.architectureNodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-5 rounded-xl bg-[#0c121e] border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    Stage 0{nIdx + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {node.description}
                  </p>
                </div>

                {node.tools && (
                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/30">
                      {node.tools}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Features & Specifications */}
        <div className="space-y-6 pt-4 border-t border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Implementation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Key Features & System Capabilities
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e] border border-white/[0.08] space-y-4">
            <div className="grid grid-cols-1 gap-3.5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start space-x-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Matrix */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Technologies & Frameworks Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-lg bg-white/[0.03] text-xs font-mono text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Prev / Next Case Studies */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Prev: {prevProject.title.slice(0, 32)}...</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span>Next: {nextProject.title.slice(0, 32)}...</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
