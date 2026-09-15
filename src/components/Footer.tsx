import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#07090e] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Brand */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>
          <span className="text-slate-600">/</span>
          <span className="font-mono text-slate-400">{PERSONAL_INFO.role}</span>
        </div>

        {/* Center Links */}
        <div className="flex items-center space-x-5 text-slate-400 font-mono">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-slate-700">•</span>
          <a
            href={`mailto:${PERSONAL_INFO.links.email}`}
            className="hover:text-emerald-400 transition-colors flex items-center space-x-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right Back to Top */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-500 font-mono">
            © 2026 {PERSONAL_INFO.name}
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
