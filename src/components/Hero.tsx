import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Terminal,
  Sparkles,
  Database,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  const [copiedTrace, setCopiedTrace] = useState(false);

  const handleCopyTrace = () => {
    const traceText = `Pipeline: Multi-Doc Equity Intelligence RAG\n1. Ingest: 3 PDF Reports -> 48 Chunks\n2. Vision: Gemini Vision parsed 8 tables & 4 charts\n3. Embedding: Sentence-Transformers (all-MiniLM-L6-v2) -> ChromaDB\n4. Rerank: Cross-Encoder (ms-marco-MiniLM-L-6-v2) -> Top 4 selected\n5. Inference: Groq Llama 3.3 70B -> Grounded synthesis with citations`;
    navigator.clipboard.writeText(traceText);
    setCopiedTrace(true);
    setTimeout(() => setCopiedTrace(false), 2000);
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Availability Indicator */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-surface-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Role Monospace Tag */}
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400">
              <span className="w-6 h-[1px] bg-emerald-500"></span>
              <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.role}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">May 2025 Graduate</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building Intelligent Systems with{' '}
              <span className="text-gradient-ai">LLMs, RAG & AI</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Metrics / Key Focus Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                Multimodal RAG
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                AI Agents & LangGraph
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                Cross-Encoder Reranking
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300">
                Pydantic Validation
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2 w-full sm:w-auto">
              <button
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-[0.99]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-surface-card hover:bg-surface-card-hover text-slate-200 hover:text-white border border-surface-border hover:border-slate-600 font-medium text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Secondary Links & Location */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <span className="text-slate-500 text-xs font-mono">📍 {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Right Column: Interactive AI Pipeline Execution Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-xl border border-surface-border bg-[#0d121e]/90 shadow-2xl p-5 overflow-hidden group">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">rag_execution_pipeline.py</span>
                </div>
                <button
                  onClick={handleCopyTrace}
                  title="Copy execution trace"
                  className="p-1.5 text-slate-400 hover:text-slate-200 rounded hover:bg-slate-800 transition-colors"
                >
                  {copiedTrace ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Execution Steps */}
              <div className="pt-4 space-y-3.5 font-mono text-xs">
                {/* Step 1 */}
                <div className="flex items-start space-x-2.5">
                  <Terminal className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400">User Query:</span>
                    <p className="text-emerald-300 font-medium mt-0.5">
                      "Compare Q3 revenue & gross margins across AAPL and MSFT research reports"
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-slate-300">1. Multimodal Parsing (Gemini Vision)</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                      Structured Tables Extracted
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Parsed 6 balance sheet tables & 4 revenue growth trajectory charts via pdfplumber + Gemini Vision.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Database className="w-3.5 h-3.5 text-indigo-400" />
                      <span className="text-slate-300">2. Vector Search & Cross-Encoder</span>
                    </span>
                    <span className="text-[10px] text-indigo-400 bg-indigo-950/60 px-1.5 py-0.5 rounded">
                      ChromaDB + Rerank
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Retrieved top 15 chunks from ChromaDB &rarr; Reranked via Cross-Encoder to top 4 highest precision chunks.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="flex items-center space-x-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">3. LLM Synthesis & Verification</span>
                    </span>
                    <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">
                      Groq Llama 3.3 70B
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Synthesized cross-document comparison with structured Pydantic schema validation & citation tags.
                  </p>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between pt-2 border-t border-surface-border/60 text-[11px] text-slate-400">
                  <span className="flex items-center space-x-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Schema Validated • Zero Hallucination Guard</span>
                  </span>
                  <span className="text-slate-500 font-mono">Latency: 480ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
