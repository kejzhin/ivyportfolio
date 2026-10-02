import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141115] rounded-2xl p-6 sm:p-10 shadow-2xl my-8 max-h-[92vh] overflow-y-auto border border-rose-500/20 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-rose-950/40 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-white">
              Curriculum Vitae
            </span>
            <span className="text-xs text-rose-400">
              · {PORTFOLIO_DATA.profile.displayName}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="btn-crimson-primary py-2 px-3.5 text-xs font-mono"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clean High Contrast Document Preview */}
        <div className="bg-[#0B0A0C] text-zinc-200 rounded-xl p-6 sm:p-10 font-sans border border-rose-950/40">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-rose-950/40">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5">
              {PORTFOLIO_DATA.profile.displayName}
            </h1>
            <p className="text-xs font-mono font-semibold uppercase tracking-widest text-rose-400 mb-3">
              Web Administrator · Technical Support Specialist · Virtual Assistant
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-zinc-400">
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-rose-400 underline">
                {PORTFOLIO_DATA.profile.email}
              </a>
              <span className="text-zinc-700">|</span>
              <a href={`tel:${PORTFOLIO_DATA.profile.phoneRaw}`} className="hover:text-rose-400">
                {PORTFOLIO_DATA.profile.phone}
              </a>
              <span className="text-zinc-700">|</span>
              <span>{PORTFOLIO_DATA.profile.location}</span>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="pt-6 pb-6 border-b border-rose-950/40">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-400 mb-4 pb-1 border-b border-rose-950/60">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-6">
              {/* Concentrix */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">
                    Concentrix Corporation
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-300 mb-1.5">
                    <span className="font-semibold text-white">Web Advisor</span>
                    <span className="font-mono text-rose-400">Oct 2024 – Jan 2026</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                    <li>Delivered comprehensive troubleshooting support to over 150 clients monthly, resolving website errors, DNS issues, and email configuration problems with a 95% satisfaction rate, significantly reducing client downtime.</li>
                    <li>Retained customers by identifying hosting-related pain points and offering tailored solutions, reducing cancellation requests.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-300 mb-1.5">
                    <span className="font-semibold text-white">Travel Advisor</span>
                    <span className="font-mono text-rose-400">Feb 2024 – Sep 2024</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                    <li>Resolved complex customer service issues (refunds, modifications, rebookings) via chat, email, and phone, liaising between customers and 3rd party tour suppliers on a leading e-commerce travel platform.</li>
                  </ul>
                </div>
              </div>

              {/* Alorica */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">
                    Alorica TeleServices, Inc.
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-300 mb-1.5">
                    <span className="font-semibold text-white">Technical Service Representative</span>
                    <span className="font-mono text-rose-400">Feb 2022 – Feb 2024</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                    <li>Resolved complex technical issues across a diverse range of devices, achieving a 35% reduction in repeat service calls and enhancing customer satisfaction scores by 20%.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-300 mb-1.5">
                    <span className="font-semibold text-white">Customer Service Representative</span>
                    <span className="font-mono text-rose-400">Jul 2021 – Feb 2022</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                    <li>Educated customers on product features and account management options through tailored consultations, increasing customer satisfaction scores by 20% and fostering stronger brand loyalty.</li>
                    <li>Streamlined troubleshooting process for common account concerns by documenting top issues and developing knowledge base resources, leading to 15% faster resolution time.</li>
                  </ul>
                </div>
              </div>

              {/* AMA */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">
                    AMA Computer College Sta. Mesa
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Sta. Mesa, Metro Manila, PH
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-300 mb-1.5">
                  <span className="font-semibold text-white">Intern</span>
                  <span className="font-mono text-rose-400">Jan 2020 – Feb 2020</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-zinc-400 space-y-1.5 leading-relaxed">
                  <li>Developed and maintained up-to-date database of current student information, ensuring 100% compliance with privacy regulations and supporting seamless communication.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Technical Stack */}
          <div className="pt-6 pb-6 border-b border-rose-950/40">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-400 mb-3 pb-1 border-b border-rose-950/60">
              SYSTEMS & TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs font-mono text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white">Web Administration:</strong> cPanel, DNS (A, CNAME, MX, TXT), FTP/SFTP, SSL/TLS Certificates, MySQL & phpMyAdmin.
              </p>
              <p>
                <strong className="text-white">CMS & Platforms:</strong> WordPress Core & Plugin Maintenance, Shopify Configuration.
              </p>
              <p>
                <strong className="text-white">Operations & Productivity:</strong> Google Workspace, Microsoft 365, Notion, Asana, Trello, Slack, Zendesk.
              </p>
            </div>
          </div>

          {/* Section: Education */}
          <div className="pt-6">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-400 mb-3 pb-1 border-b border-rose-950/60">
              ACADEMIC CREDENTIALS
            </h2>
            <div className="space-y-3 font-mono">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-white">
                    Carlos L. Albert High School
                  </h3>
                  <span className="text-xs text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>
                <div className="flex justify-between text-xs text-zinc-400">
                  <span>Secondary TVET: Information & Communications Technology</span>
                  <span className="text-rose-400 font-bold">2020</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
