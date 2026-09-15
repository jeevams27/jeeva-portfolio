import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowRight,
  Database,
  Cpu,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d121e] border border-surface-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-700 transition-colors z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Details */}
        <div className="space-y-3 pr-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <span>Launch Live Streamlit Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-surface-card hover:bg-surface-card-hover text-slate-200 hover:text-white border border-surface-border text-xs sm:text-sm transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-red-950/10 border border-red-900/30 space-y-2">
            <div className="flex items-center space-x-2 text-red-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-900/30 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Visual Architecture Flowchart */}
        <div className="p-6 rounded-2xl bg-surface-card/70 border border-surface-border space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Technical System Architecture & Dataflow</span>
            </h4>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
              End-to-End Pipeline
            </span>
          </div>

          {/* Architecture Pipeline Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
            {project.architectureNodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-colors relative"
              >
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold">
                  <span>{node.title}</span>
                  {nIdx < project.architectureNodes.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:inline" />
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {node.description}
                </p>
                {node.tools && (
                  <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center space-x-1">
                    <span className="text-slate-500">Tech:</span>
                    <span>{node.tools}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-200 flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Key Engineering Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            Complete Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
