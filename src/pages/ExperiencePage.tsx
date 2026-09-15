import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data/portfolioData';
import {
  Download,
  ArrowRight,
} from 'lucide-react';

interface ExperiencePageProps {
  onResumeClick: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onResumeClick }) => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-experience pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-emerald-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Work History / 2025 – 2026</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Experience
            </span>.
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed">
            Industry background in AI/LLM data preparation, multimodal dataset curation, and quality consistency workflows.
          </p>
        </div>

        {/* Minimal Editorial Timeline */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-emerald-500/35 space-y-16">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative space-y-6">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-5 h-5 rounded-full bg-[#07090e] border-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono text-emerald-400 font-bold tracking-wider uppercase">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-base sm:text-lg text-slate-300">
                    <span className="text-emerald-300 font-bold">{exp.company}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>

                {/* Clean Statement */}
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal pt-2 max-w-3xl">
                  {exp.responsibilities[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Summary Strip */}
        <div className="pt-12 border-t border-white/[0.08] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Education & Professional Certifications
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                Saveetha Engineering College (CGPA: {PERSONAL_INFO.education.cgpa}) · IBM & ExcelR Certified
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono text-emerald-400 hover:text-emerald-300 font-bold shrink-0"
            >
              <span>View Background in About</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99]"
            >
              <span>View Full Resume Dialog</span>
              <ArrowRight className="w-4 h-4 sm:w-5 h-5" />
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.12] text-sm sm:text-base font-semibold transition-all"
            >
              <Download className="w-4 h-4 sm:w-5 h-5 text-emerald-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
