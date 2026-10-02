import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, FileText, Clock, ShieldCheck, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [phTime, setPhTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setPhTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="section section-dim">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="kicker">
            Get In Touch
          </span>
          <h2 className="section-title">Let’s connect and collaborate</h2>
          <p className="lead">
            Feel free to reach out directly through any of the contact channels below for contracts in web administration, technical support, inbox management, and operations.
          </p>
        </div>

        {/* High-Contrast Aesthetic Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Email Direct Channel Card */}
          <div className="card-crimson p-8 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-rose-400 bg-rose-950/40 border border-rose-500/20 px-2.5 py-0.5 rounded">
                  Primary Channel
                </span>
              </div>

              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Direct Email
              </span>
              <h3 className="text-lg font-bold text-white mb-2 break-all group-hover:text-rose-300 transition-colors">
                {PORTFOLIO_DATA.profile.email}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                Direct email inbox. Typical response turnaround is within 12 to 24 hours.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Inquiry%20via%20Portfolio`}
                className="btn-crimson-primary flex-1 justify-center py-2.5 text-xs text-center"
              >
                <span>Compose Mail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                className="p-2.5 rounded-lg bg-[#18131A] hover:bg-[#251D28] border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Phone & WhatsApp Channel Card */}
          <div className="card-crimson p-8 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                  Voice & WhatsApp
                </span>
              </div>

              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Phone / WhatsApp / Viber
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                {PORTFOLIO_DATA.profile.phone}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                Direct mobile line available for urgent coordination, WhatsApp messages, and voice discussions.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.profile.phoneRaw.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson-secondary flex-1 justify-center py-2.5 text-xs text-center border-rose-500/30"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${PORTFOLIO_DATA.profile.phoneRaw}`}
                className="btn-crimson-secondary justify-center py-2.5 px-3 text-xs"
                title="Direct call"
              >
                <span>Call</span>
              </a>

              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phoneRaw, 'phone')}
                className="p-2.5 rounded-lg bg-[#18131A] hover:bg-[#251D28] border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Location, Timezone & Schedule Card */}
          <div className="card-crimson p-8 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online & Active</span>
                </div>
              </div>

              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Location & Base Timezone
              </span>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                {PORTFOLIO_DATA.profile.location}
              </h3>
              
              <div className="p-3 rounded-lg bg-[#0C0B0D] border border-white/5 mb-4 font-mono text-xs text-zinc-300">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span>Current Local Time:</span>
                  <span className="text-rose-400 font-bold">{phTime || 'UTC+8 Manila'}</span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  Philippine Standard Time (PST / UTC+8)
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Comfortable aligning shifts to US (EST/PST), European (GMT/CET), or APAC business hours.
              </p>
            </div>

            {onOpenResume && (
              <div className="pt-4 border-t border-white/10 mt-6">
                <button
                  onClick={onOpenResume}
                  className="w-full btn-crimson-secondary justify-center py-2.5 text-xs text-center border-rose-500/30"
                >
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  <span>View Official Curriculum Vitae</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Trust & Commitment Banner */}
        <div className="card-crimson p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#110E12]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Commitment to Quality & Confidentiality
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-2xl font-normal">
                All client interactions, credentials, and business databases are handled under strict NDA standards with structured communication and regular progress updates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Direct%20Consultation`}
              className="btn-crimson-primary w-full sm:w-auto justify-center text-xs"
            >
              <span>Email Direct</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
