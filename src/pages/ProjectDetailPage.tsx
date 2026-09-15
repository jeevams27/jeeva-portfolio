import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Workflow,
  ShieldCheck,
  ArrowRight,
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

  const isBuilding = project.status?.toLowerCase().includes('building');
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-projects pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-24 sm:space-y-32">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2.5 text-sm sm:text-base font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center space-x-2 text-sm sm:text-base font-mono text-slate-400 font-medium">
            <span>Case Study 0{currentIndex + 1} / 0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Case Study Top Hero */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm sm:text-base font-mono text-cyan-300 bg-cyan-950/60 px-4 py-1.5 rounded-lg border border-cyan-500/30 font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              PROJECT / {project.category.toUpperCase()}
            </span>
            {isBuilding && (
              <span className="text-sm sm:text-base font-mono text-emerald-300 bg-emerald-950/60 px-4 py-1.5 rounded-lg border border-emerald-500/30 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                CURRENTLY BUILDING
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base sm:text-lg transition-all shadow-lg shadow-cyan-500/25 active:scale-[0.99]"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-5 h-5 sm:w-6 h-6" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-7 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.12] text-base sm:text-lg font-semibold transition-all"
              >
                <Github className="w-5 h-5 sm:w-6 h-6 text-cyan-400" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem Statement Section */}
        <section className="space-y-6 pt-12 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-rose-400 uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
            <span>The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Challenge Does This Solve?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.problem}
          </p>
        </section>

        {/* Architected Solution Section */}
        <section className="space-y-6 pt-12 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>The Solution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            System Architecture & Approach
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.solution}
          </p>
        </section>

        {/* Architecture & How It Works (Step Flow) */}
        <section className="space-y-8 pt-12 border-t border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <Workflow className="w-5 h-5" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pipeline Stages & Component Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.architectureNodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-8 rounded-3xl bg-[#090e18] border border-cyan-500/25 hover:border-cyan-500/45 transition-all space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <span className="text-base font-mono text-cyan-400 font-bold">
                    Stage 0{nIdx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {node.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                    {node.description}
                  </p>
                </div>

                {node.tools && (
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-xs sm:text-sm font-mono text-cyan-300 bg-cyan-950/50 px-3.5 py-1.5 rounded-lg border border-cyan-500/30 font-medium">
                      {node.tools}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features & Specifications */}
        <section className="space-y-8 pt-12 border-t border-white/[0.08]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 text-sm sm:text-base font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span>Key Features</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineered Capabilities
            </h2>
          </div>

          <div className="space-y-4">
            {project.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start space-x-4 text-lg sm:text-xl text-slate-200">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="space-y-6 pt-12 border-t border-white/[0.08]">
          <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Technologies & Frameworks Stack
          </h2>
          <div className="flex flex-wrap gap-3 pt-1">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-4 py-2 rounded-xl bg-white/[0.04] text-sm sm:text-base font-mono text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Case Study Navigation */}
        <div className="pt-12 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center space-x-2.5 text-sm sm:text-base font-mono text-slate-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
              <span>Prev: {prevProject.title.slice(0, 32)}...</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center space-x-2.5 text-sm sm:text-base font-mono text-slate-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <span>Next: {nextProject.title.slice(0, 32)}...</span>
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
