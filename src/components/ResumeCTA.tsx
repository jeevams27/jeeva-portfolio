import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  FileText,
} from 'lucide-react';

interface ResumeCTAProps {
  onResumeClick: () => void;
  onContactClick: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onResumeClick, onContactClick }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#101929] via-[#0d1422] to-[#07090e] border border-emerald-500/30 shadow-2xl overflow-hidden text-center space-y-8">
          {/* Subtle Ambient Lights */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-10 -mb-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Real-World AI Engineering</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something Intelligent.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I'm currently exploring opportunities in AI, Generative AI, LLM application development, and AI/ML engineering.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-surface-card hover:bg-surface-card-hover text-white border border-surface-border hover:border-slate-600 font-semibold text-sm transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Full CV</span>
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-surface-card hover:bg-surface-card-hover text-white border border-surface-border hover:border-slate-600 font-semibold text-sm transition-all"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contact Me</span>
            </button>

            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};