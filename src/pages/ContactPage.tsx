import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Send,
  Github,
  Linkedin,
  Check,
  Copy,
  ArrowUpRight,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Jeeva,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="relative page-enter">
      {/* Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] ambient-glow-contact pointer-events-none -z-10" />

      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-24 sm:space-y-32">
        {/* Page Header with Master Headline Typography */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-mono text-cyan-400 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Let’s Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Something Intelligent
            </span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl font-normal">
            Open to full-time AI / GenAI Engineering roles, contract architecture, and collaborative research projects.
          </p>
        </div>

        {/* Direct Contact Links Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Quick Action */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#090e18] border border-cyan-500/25 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">Direct Email</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors font-medium"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-cyan-300 transition-colors font-mono break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Phone Quick Action */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#100d1c] border border-purple-500/25 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-400 font-bold">Phone Contact</span>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors font-medium"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="block text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-purple-300 transition-colors font-mono"
            >
              +91 {PERSONAL_INFO.phone}
            </a>
          </div>
        </div>

        {/* Social Profile Shortcuts */}
        <div className="flex flex-wrap gap-4">
          <a
            href={PERSONAL_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] p-5 sm:p-6 rounded-xl bg-[#090e18] border border-white/[0.08] hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center space-x-3.5">
              <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="font-bold text-white text-base sm:text-lg">GitHub Profile</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[200px] p-5 sm:p-6 rounded-xl bg-[#100d1c] border border-white/[0.08] hover:border-purple-500/40 transition-all flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center space-x-3.5">
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-bold text-white text-base sm:text-lg">LinkedIn Profile</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* Direct Message Form */}
        <div className="pt-8 border-t border-white/[0.08]">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-2xl bg-[#0c121e] border border-cyan-500/25 space-y-6 shadow-[0_0_40px_rgba(6,182,212,0.08)]"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Send a Direct Inquiry
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-sm sm:text-base text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-sm sm:text-base text-white placeholder-slate-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="AI Engineering Opportunity / Consultation"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-sm sm:text-base text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-xs sm:text-sm font-mono text-slate-300 font-semibold">
                Message *
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500 focus:outline-none text-sm sm:text-base text-white placeholder-slate-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99]"
            >
              <Send className="w-4 h-4 sm:w-5 h-5" />
              <span>Send Message</span>
            </button>

            {submitted && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-xs sm:text-sm text-emerald-300 flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Email client opened with formatted details. Looking forward to connecting!</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
