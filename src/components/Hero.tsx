import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  FileText,
  Mail,
  Phone,
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
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full text-center space-y-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-surface-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Role Monospace Tag */}
        <div className="flex items-center justify-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400">
          <span className="w-6 h-[1px] bg-emerald-500"></span>
          <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.role}</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Saveetha Engineering College (2021 – 2025)</span>
          <span className="w-6 h-[1px] bg-emerald-500"></span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
          Building Intelligent Systems with{' '}
          <span className="text-gradient-ai">LLMs, RAG & AI</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {PERSONAL_INFO.bio}
        </p>

        {/* Quick Skills / Focus Tags */}
        <div className="flex flex-wrap justify-center gap-2 pt-1 text-xs font-mono text-slate-300">
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            Multimodal RAG
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            LangChain & LangGraph
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            ChromaDB Vector Store
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            Two-Stage Cross-Encoder Rerank
          </span>
          <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
            RAGAS & Model Evaluation
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3.5 pt-4">
          <button
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Jeeva_MS_Resume.pdf"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-surface-card hover:bg-surface-card-hover text-slate-100 hover:text-white border border-surface-border hover:border-slate-600 font-semibold text-sm transition-all duration-200 shadow-md"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Download Resume (PDF)</span>
          </a>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Preview CV</span>
          </button>
        </div>

        {/* Contact info strip */}
        <div className="pt-2 flex flex-wrap justify-center items-center gap-5 sm:gap-7 text-xs sm:text-sm text-slate-400 font-mono">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="inline-flex items-center space-x-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.phone}</span>
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="inline-flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{PERSONAL_INFO.location}</span>
          </span>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};