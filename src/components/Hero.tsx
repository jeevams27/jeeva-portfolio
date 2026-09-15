import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  FileText,
} from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Status Pill */}
        <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Big Headline */}
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            {PERSONAL_INFO.role} · Chennai, India
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Building intelligent systems with{' '}
            <span className="text-gradient-ai">LLMs, RAG & AI</span>.
          </h1>
        </div>

        {/* Bio Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
          {PERSONAL_INFO.bio}
        </p>

        {/* Minimal Tags */}
        <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-slate-400">
          <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
            Multimodal RAG
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
            LangChain & LangGraph
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
            ChromaDB Vector Store
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
            Two-Stage Cross-Encoder
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-300">
            RAGAS Evaluation
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-sm active:scale-[0.99]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Jeeva_MS_Resume.pdf"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-100 hover:text-white border border-white/[0.1] font-medium text-sm transition-all"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06] text-sm font-medium transition-all"
          >
            <FileText className="w-4 h-4 text-slate-400" />
            <span>Preview CV</span>
          </button>
        </div>

        {/* Bottom Metadata & Links Strip */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400 font-mono">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <span className="inline-flex items-center space-x-1.5 text-slate-400">
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            <span>+91 {PERSONAL_INFO.phone}</span>
          </span>

          <span className="inline-flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{PERSONAL_INFO.location}</span>
          </span>

          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-slate-500" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};