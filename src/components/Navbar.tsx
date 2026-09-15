import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Exploring', path: '/exploring' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/95 backdrop-blur-md border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo / Brand */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center space-x-3.5 focus:outline-none"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <span className="font-black tracking-tight text-white group-hover:text-emerald-300 transition-colors text-lg sm:text-xl md:text-2xl">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs sm:text-sm md:text-base text-slate-400 font-mono hidden sm:inline font-semibold">
              / AI Engineer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-base sm:text-lg font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.08] shadow-inner font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Resume */}
          <div className="hidden sm:flex items-center space-x-5">
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

            <div className="h-5 w-[1px] bg-slate-800"></div>

            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.14] text-slate-100 hover:text-white border border-white/[0.14] text-sm sm:text-base font-bold transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 h-5 text-emerald-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onResumeClick}
              className="px-3.5 py-1.5 text-sm text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-lg font-bold"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e17] border-b border-white/[0.08] px-6 pt-5 pb-7 shadow-2xl animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-3 rounded-xl text-base sm:text-lg font-semibold transition-colors ${
                    isActive
                      ? 'text-emerald-400 bg-white/[0.08] font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.02]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-5 mt-2 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <span>View Full Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
