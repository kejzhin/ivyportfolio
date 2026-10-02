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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-10 shadow-2xl my-8 max-h-[92vh] overflow-y-auto border border-zinc-200 text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-zinc-200 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-zinc-950">
              Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-rose-600">
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
              className="p-1.5 text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clean High Contrast Document Preview */}
        <div className="bg-[#FDFCFE] text-zinc-800 rounded-xl p-6 sm:p-10 font-sans border border-zinc-200 shadow-xs">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-zinc-200">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 mb-1.5">
              {PORTFOLIO_DATA.profile.displayName}
            </h1>
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600 mb-3">
              Web Administrator · Technical Support Specialist · Virtual Assistant
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-zinc-600">
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-rose-600 underline">
                {PORTFOLIO_DATA.profile.email}
              </a>
              <span className="text-zinc-300">|</span>
              <a href={`tel:${PORTFOLIO_DATA.profile.phoneRaw}`} className="hover:text-rose-600">
                {PORTFOLIO_DATA.profile.phone}
              </a>
              <span className="text-zinc-300">|</span>
              <span>{PORTFOLIO_DATA.profile.location}</span>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="pt-6 pb-6 border-b border-zinc-200">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-600 mb-4 pb-1 border-b border-zinc-200">
              WORK EXPERIENCE
            </h2>

            <div className="space-y-6">
              {/* Concentrix */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-zinc-950">
                    Concentrix Corporation
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-700 mb-1.5">
                    <span className="font-semibold text-zinc-950">Web Advisor</span>
                    <span className="font-mono text-rose-600 font-semibold">Oct 2024 – Jan 2026</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 space-y-1.5 leading-relaxed">
                    <li>Delivered comprehensive troubleshooting support to over 150 clients monthly, resolving website errors, DNS issues, and email configuration problems with a 95% satisfaction rate, significantly reducing client downtime.</li>
                    <li>Retained customers by identifying hosting-related pain points and offering tailored solutions, reducing cancellation requests.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-700 mb-1.5">
                    <span className="font-semibold text-zinc-950">Travel Advisor</span>
                    <span className="font-mono text-rose-600 font-semibold">Feb 2024 – Sep 2024</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 space-y-1.5 leading-relaxed">
                    <li>Resolved complex customer service issues (refunds, modifications, rebookings) via chat, email, and phone, liaising between customers and 3rd party tour suppliers on a leading e-commerce travel platform.</li>
                  </ul>
                </div>
              </div>

              {/* Alorica */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-zinc-950">
                    Alorica TeleServices, Inc.
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-700 mb-1.5">
                    <span className="font-semibold text-zinc-950">Technical Service Representative</span>
                    <span className="font-mono text-rose-600 font-semibold">Feb 2022 – Feb 2024</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 space-y-1.5 leading-relaxed">
                    <li>Resolved complex technical issues across a diverse range of devices, achieving a 35% reduction in repeat service calls and enhancing customer satisfaction scores by 20%.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-700 mb-1.5">
                    <span className="font-semibold text-zinc-950">Customer Service Representative</span>
                    <span className="font-mono text-rose-600 font-semibold">Jul 2021 – Feb 2022</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 space-y-1.5 leading-relaxed">
                    <li>Educated customers on product features and account management options through tailored consultations, increasing customer satisfaction scores by 20% and fostering stronger brand loyalty.</li>
                    <li>Streamlined troubleshooting process for common account concerns by documenting top issues and developing knowledge base resources, leading to 15% faster resolution time.</li>
                  </ul>
                </div>
              </div>

              {/* AMA */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-sm font-bold text-zinc-950">
                    AMA Computer College Sta. Mesa
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    Sta. Mesa, Metro Manila, PH
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-zinc-700 mb-1.5">
                  <span className="font-semibold text-zinc-950">Intern</span>
                  <span className="font-mono text-rose-600 font-semibold">Jan 2020 – Feb 2020</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-zinc-600 space-y-1.5 leading-relaxed">
                  <li>Developed and maintained up-to-date database of current student information, ensuring 100% compliance with privacy regulations and supporting seamless communication.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Technical Stack */}
          <div className="pt-6 pb-6 border-b border-zinc-200">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-600 mb-3 pb-1 border-b border-zinc-200">
              SYSTEMS & TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs font-mono text-zinc-700 leading-relaxed">
              <p>
                <strong className="text-zinc-950 font-bold">Web Administration:</strong> cPanel, DNS (A, CNAME, MX, TXT), FTP/SFTP, SSL/TLS Certificates, MySQL & phpMyAdmin.
              </p>
              <p>
                <strong className="text-zinc-950 font-bold">CMS & Platforms:</strong> WordPress Core & Plugin Maintenance, Shopify Configuration.
              </p>
              <p>
                <strong className="text-zinc-950 font-bold">Operations & Productivity:</strong> Google Workspace, Microsoft 365, Notion, Asana, Trello, Slack, Zendesk.
              </p>
            </div>
          </div>

          {/* Section: Education */}
          <div className="pt-6">
            <h2 className="text-xs uppercase tracking-widest font-mono font-bold text-rose-600 mb-3 pb-1 border-b border-zinc-200">
              ACADEMIC CREDENTIALS
            </h2>
            <div className="space-y-3 font-mono">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h3 className="text-sm font-bold text-zinc-950">
                    Carlos L. Albert High School
                  </h3>
                  <span className="text-xs text-zinc-500">
                    Quezon City, Metro Manila, PH
                  </span>
                </div>
                <div className="flex justify-between text-xs text-zinc-600">
                  <span>Secondary TVET: Information & Communications Technology</span>
                  <span className="text-rose-600 font-bold">2020</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
