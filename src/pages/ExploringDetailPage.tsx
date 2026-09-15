import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { EXPLORING_TOPIC_DETAILS } from '../data/portfolioData';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  CheckCircle2,
  Workflow,
  Sparkles,
  Layers,
  FolderGit2,
} from 'lucide-react';

export const ExploringDetailPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const normalizedId = topicId?.toLowerCase();

  const detail = normalizedId ? EXPLORING_TOPIC_DETAILS[normalizedId] : undefined;

  if (!detail) {
    return <Navigate to="/exploring" replace />;
  }

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-exploring pointer-events-none -z-10" />

      <div className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <Link
            to="/exploring"
            className="inline-flex items-center space-x-2 text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Exploring</span>
          </Link>
          <span className="text-xs font-mono text-violet-300 bg-violet-950/50 px-3 py-1 rounded-md border border-violet-500/30 font-semibold shadow-[0_0_10px_rgba(139,92,246,0.15)]">
            {detail.status}
          </span>
        </div>

        {/* Topic Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-300 bg-white/[0.04] px-3 py-1 rounded border border-white/[0.08]">
              {detail.tag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {detail.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl font-normal">
            {detail.description}
          </p>
        </div>

        {/* What It Is & Why It Matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#110e20] border border-violet-500/25 space-y-3 shadow-[0_0_20px_rgba(139,92,246,0.06)]">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold flex items-center space-x-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>What It Is</span>
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {detail.whatItIs}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#09121d] border border-cyan-500/25 space-y-3 shadow-[0_0_20px_rgba(6,182,212,0.06)]">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why It Matters</span>
            </span>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {detail.whyItMatters}
            </p>
          </div>
        </div>

        {/* 4-Step Architecture Flow */}
        <div className="space-y-6 pt-4 border-t border-white/[0.08]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Architecture & Execution Flow</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              How The Agent Loop Executes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.architectureFlow.map((flow, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0e111b] border border-violet-500/20 hover:border-violet-500/40 transition-all space-y-2 shadow-sm"
              >
                <span className="text-xs font-mono text-violet-400 font-bold">
                  Step 0{idx + 1}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {flow.step}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {flow.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold">
            Key Capabilities & Design Principles
          </h3>
          <div className="p-6 rounded-2xl bg-[#0c1017] border border-white/[0.08] space-y-3">
            {detail.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Application Link */}
        {detail.relatedProjectLink && (
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-950/30 via-[#0c1017] to-cyan-950/30 border border-violet-500/30 space-y-4 shadow-[0_0_30px_rgba(139,92,246,0.08)]">
            <div className="flex items-center space-x-2 text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Practical Application</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {detail.practicalApplication}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Applied directly in the {detail.relatedProjectTitle || 'Project'}.
                </p>
              </div>
              <Link
                to={detail.relatedProjectLink}
                className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-violet-500/25 shrink-0"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
