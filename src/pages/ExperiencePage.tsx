import React from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE_DATA, PERSONAL_INFO } from '../data/portfolioData';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Download,
  ArrowRight,
  GraduationCap,
  Award,
} from 'lucide-react';

interface ExperiencePageProps {
  onResumeClick: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onResumeClick }) => {
  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-experience pointer-events-none -z-10" />

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Experience
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-normal">
            Industry experience in AI model dataset annotation, multimodal labeling pipelines, and quality consistency assurance.
          </p>
        </div>

        {/* Main Experience Timeline with Glowing Green/Teal Spine */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative space-y-6">
              {/* Glowing Timeline Indicator Dot */}
              <div className="absolute -left-[32px] sm:-left-[41px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#07090e] border-2 border-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              </div>

              <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-[#0a1512] border border-emerald-500/25 hover:border-emerald-500/45 transition-all shadow-[0_0_30px_rgba(16,185,129,0.08)] space-y-6 max-w-4xl group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-100 transition-colors">
                      {exp.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="flex items-center space-x-1.5 text-emerald-300 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.company}</span>
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="flex items-center space-x-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-teal-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-300 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-500/30 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Verified Responsibility */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Key Scope of Responsibility
                  </span>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {exp.responsibilities[0]}
                    </p>
                  </div>
                </div>

                {/* Key Competencies & Impact summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">Domain</span>
                    <p className="text-xs text-slate-200 font-medium">AI / LLM Data Practice</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 space-y-1">
                    <span className="text-[11px] font-mono text-teal-400 font-semibold">Modality</span>
                    <p className="text-xs text-slate-200 font-medium">Image, Audio & Video</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">Quality Standard</span>
                    <p className="text-xs text-slate-200 font-medium">Guidelines & Consistency</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Credentials Summary Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0c121e] to-teal-950/30 border border-emerald-500/25 space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.06)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">
                Academic Background & Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                B.Tech in Artificial Intelligence & Data Science (Saveetha Engineering College, CGPA: {PERSONAL_INFO.education.cgpa})
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <span>View Full Details in About</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={onResumeClick}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25"
            >
              <span>View Full Resume Dialog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] text-xs sm:text-sm font-semibold transition-all"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
