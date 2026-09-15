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
  ArrowDown,
  UserCheck,
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

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20 sm:space-y-28">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-400 font-medium">
            <span>Case Study 0{currentIndex + 1} / 0{PROJECTS.length}</span>
          </div>
        </div>

        {/* Case Study Top Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs sm:text-sm font-mono text-cyan-300 bg-cyan-950/60 px-3.5 py-1 rounded-md border border-cyan-500/30 font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              PROJECT / {project.category.toUpperCase()}
            </span>

            {project.targetAudience && (
              <span className="text-xs sm:text-sm font-mono text-purple-300 bg-purple-950/60 px-3.5 py-1 rounded-md border border-purple-500/30 font-bold shadow-[0_0_12px_rgba(168,85,247,0.15)] flex items-center space-x-1.5">
                <UserCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>{project.targetAudience.toUpperCase()}</span>
              </span>
            )}

            {isBuilding && (
              <span className="text-xs sm:text-sm font-mono text-emerald-300 bg-emerald-950/60 px-3.5 py-1 rounded-md border border-emerald-500/30 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                CURRENTLY BUILDING
              </span>
            )}
          </div>

          {/* Balanced Project Title (64-80px desktop) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.tagline}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-cyan-500/25 active:scale-[0.99]"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4 sm:w-5 h-5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.12] text-sm sm:text-base font-semibold transition-all"
              >
                <Github className="w-4 h-4 sm:w-5 h-5 text-cyan-400" />
                <span>Source Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Candidate Workflow Visual Section (If Available) */}
        {project.candidateWorkflow && project.candidateWorkflow.length > 0 && (
          <section className="space-y-6 pt-10 border-t border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-purple-400 uppercase tracking-widest font-bold">
                <Workflow className="w-4 h-4 text-purple-400" />
                <span>Candidate Workflow Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                How Candidates Use This System
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                An end-to-end evaluation journey answering: <span className="text-purple-300 font-semibold italic">"Based on my resume and this specific job description, how well am I suited for this role, what am I missing, and what should I improve?"</span>
              </p>
            </div>

            {/* Visual Workflow Steps Chain */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {project.candidateWorkflow.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-[#0d111b] border border-purple-500/25 hover:border-purple-500/45 transition-all space-y-2 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-mono text-purple-400 font-bold">
                        {item.step}
                      </span>
                      {idx < project.candidateWorkflow!.length - 1 && (
                        <span className="hidden lg:block text-slate-600 font-mono text-xs">
                          <ArrowRight className="w-3.5 h-3.5 text-purple-400/60 inline" />
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.label}
                    </h3>
                    {item.sub && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problem Statement Section */}
        <section className="space-y-5 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-rose-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span>The Problem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {project.problemTitle || 'What Challenge Does This Solve?'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.problem}
          </p>
        </section>

        {/* Architected Solution Section */}
        <section className="space-y-5 pt-10 border-t border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>The Solution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {project.solutionTitle || 'System Architecture & Approach'}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            {project.solution}
          </p>
        </section>

        {/* Architecture & How It Works (Step Flow) */}
        <section className="space-y-8 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <Workflow className="w-4 h-4" />
              <span>How It Works</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Pipeline Stages & Component Flow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.architectureNodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-7 rounded-2xl bg-[#090e18] border border-cyan-500/25 hover:border-cyan-500/45 transition-all space-y-3 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold">
                    Stage 0{nIdx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {node.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                    {node.description}
                  </p>
                </div>

                {node.tools && (
                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-3 py-1 rounded-md border border-cyan-500/30 font-medium">
                      {node.tools}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Features & Specifications */}
        <section className="space-y-6 pt-10 border-t border-white/[0.08]">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Key Features</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Engineered Capabilities
            </h2>
          </div>

          <div className="space-y-3.5">
            {project.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start space-x-3 text-base sm:text-lg text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Stack */}
        <section className="space-y-5 pt-10 border-t border-white/[0.08]">
          <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold">
            Technologies & Frameworks Stack
          </h2>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] text-xs sm:text-sm font-mono text-slate-200 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Case Study Navigation */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span>Prev: {prevProject.title.slice(0, 32)}...</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-cyan-300 transition-colors font-semibold"
            >
              <span>Next: {nextProject.title.slice(0, 32)}...</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
