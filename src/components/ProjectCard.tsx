import React from 'react';
import { Project } from '../types/portfolio';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 cursor-pointer group relative border border-surface-border hover:border-emerald-500/40"
    >
      {/* Top Meta */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
            <span>{project.category}</span>
          </span>

          <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.title}`}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
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
                className="p-1.5 text-emerald-400 hover:text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 rounded-lg border border-emerald-500/30 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title and Tagline */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-2 pt-1">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Trigger */}
      <div className="space-y-4 pt-3 border-t border-surface-border/60">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded bg-slate-900 text-[11px] font-mono text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-emerald-400 font-mono group-hover:translate-x-1 transition-transform">
          <span>View Architecture & Details</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};