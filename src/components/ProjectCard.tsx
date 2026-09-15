import React from 'react';
import { Project } from '../types/portfolio';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="p-6 sm:p-7 rounded-2xl bg-[#0c1017] border border-white/[0.08] hover:border-white/[0.16] transition-all flex flex-col justify-between space-y-6 cursor-pointer group"
    >
      {/* Top Meta */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-emerald-400 font-bold">
              0{index}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-[11px] font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub for ${project.title}`}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
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
                className="p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title and Tagline */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
      <div className="space-y-3 pt-3 border-t border-white/[0.06]">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded bg-white/[0.03] text-[11px] font-mono text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-[11px] font-mono text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};