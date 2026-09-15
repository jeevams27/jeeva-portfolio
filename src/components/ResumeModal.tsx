import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import {
  X,
  Download,
  Mail,
  FileText,
  Copy,
  Check,
  GraduationCap,
  Sparkles,
  Award,
  Phone,
  MapPin,
  ExternalLink,
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
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.links.linkedin} | GitHub: ${PERSONAL_INFO.links.github}
Artificial Intelligence & Data Science — Python — Machine Learning — Generative AI

---

## PROFESSIONAL SUMMARY
Artificial Intelligence and Data Science graduate with hands-on experience in Python, Machine Learning, Generative AI, LLMs, and RAG. Experienced in developing AI applications using LangChain, LangGraph, ChromaDB and Streamlit, with exposure to prompt engineering, document processing, retrieval, and model evaluation. Familiar with building and deploying end-to-end AI/ML applications and working with emerging AI technologies.

---

## TECHNICAL SKILLS
- **Programming**: Python, SQL.
- **Data Science**: Pandas, NumPy, Scikit-learn, EDA, Data Preprocessing, Feature Engineering.
- **Machine Learning**: Linear Regression, Logistic Regression, Decision Tree, Random Forest, Model Evaluation.
- **Generative AI**: LLMs, Prompt Engineering, RAG, Multimodal RAG, Agentic AI.
- **Frameworks**: LangChain, LCEL, LangGraph, ChromaDB, Groq API.
- **Tools**: RAGAS, LLM-as-Judge, Pydantic, Streamlit, Docker, FastAPI, Git, GitHub.

---

## PROJECTS

### 1. Equity Research Report Intelligence System - Multimodal RAG
- Built a production-style multimodal RAG system that ingests equity research PDFs and answers natural language questions across text, tables, and charts with exact source citations, using a 5-layer extraction and retrieval architecture.
- Solved cross-document retrieval bias with a two-stage pipeline - bi-encoder retrieves 50 candidates, cross-encoder rescores by reading query and chunk together, keeping the top 5 for precision retrieval.
- Built persistent, filterable multi-document management in ChromaDB with metadata filtering, and deployed the system on Streamlit Community Cloud with Docker containerization.
- Live Demo: https://equity-research-report-intelligence-27.streamlit.app/
- GitHub: https://github.com/jeevams27/Equity-Research-Report-Intelligence

### 2. AI Resume Screener
- Built an end-to-end resume screening pipeline using LangChain LCEL and a Groq-hosted LLM.
- Extracted and parsed candidate data from PDF resumes using pdfplumber; validated structured output with Pydantic.
- Generated real-time match scores and role-fit feedback via an interactive Streamlit interface.
- GitHub: https://github.com/jeevams27/Langchain-Resume-Screener

### 3. AI-Powered Energy Management System
- Built an ML pipeline with anomaly detection to monitor, predict, and flag unusual energy consumption patterns from time-series data via an interactive Streamlit dashboard.
- GitHub: https://github.com/jeevams27/Energy-Usage-Monitoring-and-Management-System

---

## EDUCATION
- **B.Tech — Artificial Intelligence & Data Science** (2021 – 2025)
  Saveetha Engineering College, Chennai | CGPA: 7.6

---

## CERTIFICATIONS
- IBM Data Science Professional Certificate — Coursera / IBM
- Data Analyst Certification — ExcelR
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#07090e]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d121e] border border-surface-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full border border-slate-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-3 border-b border-surface-border pb-5 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Official Curriculum Vitae / Resume</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-mono mt-0.5">
              {PERSONAL_INFO.role} • {PERSONAL_INFO.location} • {PERSONAL_INFO.phone}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Jeeva_MS_Resume.pdf"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF Resume</span>
            </a>

            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm border border-slate-700 transition-all font-mono"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Plaintext'}</span>
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20AI%20Engineering%20Role%20-%20Jeeva%20MS`}
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-surface-card hover:bg-slate-800 text-slate-300 text-xs sm:text-sm border border-surface-border transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email Directly</span>
            </a>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Summary */}
          <div className="space-y-1.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
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
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-semibold text-white">{PERSONAL_INFO.education.degree}</p>
                <p className="text-xs text-slate-400">{PERSONAL_INFO.education.institution}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/20">
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
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Certifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PERSONAL_INFO.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-0.5">
                  <p className="font-semibold text-white">{cert.title}</p>
                  <p className="text-[11px] font-mono text-emerald-400">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Featured Projects</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-2">
                  <div className="flex items-center justify-between font-semibold text-slate-200">
                    <span className="text-sm text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-slate-300 text-xs pl-1">
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