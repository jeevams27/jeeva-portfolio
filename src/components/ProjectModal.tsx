import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/85 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0a0e17] border border-white/[0.08] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-7 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-full border border-white/[0.06] transition-colors z-10"
          aria-label="Close project modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-3 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
            <span>Case Study</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{project.category}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Launch Live Streamlit Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 hover:text-white border border-white/[0.08] text-xs sm:text-sm transition-all"
              >
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineering Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Visual Architecture Flow */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              System Architecture & Dataflow
            </h4>
            <span className="text-[10px] font-mono text-emerald-400">
              End-to-End Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.architectureNodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 relative"
              >
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold">
                  <span>{node.title}</span>
                  {nIdx < project.architectureNodes.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:inline" />
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {node.description}
                </p>
                {node.tools && (
                  <div className="pt-1 text-[11px] font-mono text-slate-400 flex items-center space-x-1">
                    <span className="text-slate-500">Tech:</span>
                    <span className="text-slate-300">{node.tools}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Engineering Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="flex items-start space-x-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 pt-1 border-t border-white/[0.06]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded bg-white/[0.03] text-xs font-mono text-slate-300 border border-white/[0.06]"
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