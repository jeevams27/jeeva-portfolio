import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';

interface ResumeCTAProps {
  onResumeClick: () => void;
  onContactClick: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onResumeClick, onContactClick }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
          <span>Opportunities</span>
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            I'm currently exploring opportunities in AI, Generative AI, LLM application development, and AI/ML engineering.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Jeeva_MS_Resume.pdf"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.08] font-medium text-sm transition-all"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Preview CV</span>
          </button>

          <button
            onClick={onContactClick}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/[0.08] font-medium text-sm transition-all"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </button>

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-sm font-medium transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-sm font-medium transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};