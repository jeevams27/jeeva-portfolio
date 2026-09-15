import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
          404 / Page Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          Lost in Latent Space
        </h1>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          The route you requested does not exist or has been relocated in the portfolio architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/[0.08] text-sm font-medium transition-all"
          >
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
