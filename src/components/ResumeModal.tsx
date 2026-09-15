import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import {
  X,
  Download,
  Mail,
  Copy,
  Check,
  GraduationCap,
  Award,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const generateMarkdownResume = () => {
    return `# JEEVA MS
Phone: +91 ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.links.linkedin} | GitHub: ${PERSONAL_INFO.links.github}
Role: AI & GenAI Engineer

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

---

## EDUCATION
B.Tech — Artificial Intelligence & Data Science (2021 – 2025)
Saveetha Engineering College, Chennai | CGPA: 7.6

---

## CERTIFICATIONS
- IBM Data Science Professional Certificate — Coursera / IBM
- Data Analyst Certification — ExcelR

---

## EXPERIENCE
Analyst – AI / LLM Practice | Innodata (Noida, India · Remote) | 29 May 2026 – 17 August 2026
- Annotated image, audio, and video data for multiple AI/LLM models by following detailed annotation guidelines and maintaining consistency and quality across datasets.

---

## FEATURED PROJECTS
1. Equity Research Report Intelligence System - Multimodal RAG
- Production-style multimodal RAG system ingesting equity research PDFs with exact source citations across text, tables, and charts.
- Solved cross-document retrieval bias with a two-stage pipeline: bi-encoder retrieves 50 candidates, neural cross-encoder rescores top 5.
- Multi-document management with metadata filtering in ChromaDB; deployed on Streamlit & Docker.

2. AI Resume Screener
- End-to-end resume screening pipeline using LangChain LCEL and Groq-hosted LLM with Pydantic output validation.

3. Energy-Usage-Monitoring-and-Management-System
- Machine learning pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption patterns.
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/85 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#0a0e17] border border-white/[0.08] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] rounded-full border border-white/[0.06] transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-3 border-b border-white/[0.06] pb-5 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <span>Official Curriculum Vitae</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-mono mt-0.5">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.location} • +91 {PERSONAL_INFO.phone}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 text-xs sm:text-sm border border-white/[0.08] transition-all font-mono"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Plaintext'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20AI%20Engineering%20Role%20-%20Jeeva%20MS`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.06] text-slate-400 hover:text-white text-xs sm:text-sm border border-white/[0.06] transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Summary */}
          <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-semibold text-white text-sm">{PERSONAL_INFO.education.institution}</p>
                <p className="text-xs text-slate-400">{PERSONAL_INFO.education.degree}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs space-y-0.5">
                  <p className="font-semibold text-white">{cert.title}</p>
                  <p className="text-[11px] font-mono text-emerald-400">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Featured Projects
            </h4>
            <div className="space-y-2.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-1.5">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span className="text-sm text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                      {proj.category}
                    </span>
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-slate-300 text-xs pl-0.5">
                    {proj.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};