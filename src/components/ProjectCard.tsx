import React from 'react';
import { Project } from '../types/portfolio';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 cursor-pointer group relative border ${
        project.isUpcoming
          ? 'border-cyan-500/30 hover:border-cyan-400/60 bg-gradient-to-br from-[#0c1524] via-[#0d121e] to-[#07090e]'
          : 'border-surface-border hover:border-emerald-500/40'
      }`}
    >
      {/* Top Meta */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span>{project.category}</span>
            </span>

            {project.isUpcoming && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-[10px] font-mono font-semibold text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Upcoming Project</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
            {project.github && !project.isUpcoming && (
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
            {project.isUpcoming && (
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>In Dev</span>
              </span>
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
              <CheckCircle2
                className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                  project.isUpcoming ? 'text-cyan-400/80' : 'text-emerald-400/80'
                }`}
              />
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

        <div
          className={`flex items-center justify-between text-xs font-mono group-hover:translate-x-1 transition-transform ${
            project.isUpcoming ? 'text-cyan-400' : 'text-emerald-400'
          }`}
        >
          <span>{project.isUpcoming ? 'View Architecture & Pipeline Design' : 'View Architecture & Details'}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};