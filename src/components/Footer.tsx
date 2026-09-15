import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#07090e] text-slate-400 text-sm sm:text-base">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <Link to="/" className="font-bold text-white hover:text-emerald-300 transition-colors text-base sm:text-lg md:text-xl">
              {PERSONAL_INFO.name}
            </Link>
            <span className="text-slate-600 text-base">/</span>
            <span className="font-mono text-slate-400 text-sm sm:text-base">{PERSONAL_INFO.role}</span>
          </div>

          {/* Quick Page Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-sm sm:text-base font-mono text-slate-400">
            <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span className="text-slate-700">•</span>
            <Link to="/about" className="hover:text-emerald-300 transition-colors">About</Link>
            <span className="text-slate-700">•</span>
            <Link to="/projects" className="hover:text-emerald-300 transition-colors">Projects</Link>
            <span className="text-slate-700">•</span>
            <Link to="/skills" className="hover:text-emerald-300 transition-colors">Skills</Link>
            <span className="text-slate-700">•</span>
            <Link to="/experience" className="hover:text-emerald-300 transition-colors">Experience</Link>
            <span className="text-slate-700">•</span>
            <Link to="/exploring" className="hover:text-emerald-300 transition-colors">Exploring</Link>
            <span className="text-slate-700">•</span>
            <Link to="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center space-x-5">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white transition-colors hover:scale-105"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white transition-colors hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2 text-slate-400 hover:text-emerald-400 transition-colors hover:scale-105"
            >
              <Mail className="w-6 h-6" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.04] text-center text-slate-500 font-mono text-xs sm:text-sm">
          © 2026 {PERSONAL_INFO.name} · Designed & Built for High-Performance AI Engineering
        </div>
      </div>
    </footer>
  );
};
