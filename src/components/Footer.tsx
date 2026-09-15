import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#07090e] text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <Link to="/" className="font-semibold text-white hover:text-emerald-300 transition-colors">
              {PERSONAL_INFO.name}
            </Link>
            <span className="text-slate-600">/</span>
            <span className="font-mono text-slate-400">{PERSONAL_INFO.role}</span>
          </div>

          {/* Quick Page Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span>?</span>
            <Link to="/about" className="hover:text-emerald-300 transition-colors">About</Link>
            <span>?</span>
            <Link to="/projects" className="hover:text-emerald-300 transition-colors">Projects</Link>
            <span>?</span>
            <Link to="/skills" className="hover:text-emerald-300 transition-colors">Skills</Link>
            <span>?</span>
            <Link to="/experience" className="hover:text-emerald-300 transition-colors">Experience</Link>
            <span>?</span>
            <Link to="/exploring" className="hover:text-emerald-300 transition-colors">Exploring</Link>
            <span>?</span>
            <Link to="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-emerald-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.links.email}`}
              aria-label="Send Email"
              className="hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-slate-400 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.04] text-center text-slate-500 font-mono text-[11px]">
          ? 2026 {PERSONAL_INFO.name} ? Designed & Built for High-Performance AI Engineering
        </div>
      </div>
    </footer>
  );
};
