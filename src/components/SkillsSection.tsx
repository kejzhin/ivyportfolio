import React, { useState, useMemo } from 'react';
import { 
  Server, 
  Globe, 
  Briefcase, 
  Headphones, 
  Search,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';

interface Specialization {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  benchmark: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const specializations: Specialization[] = useMemo(() => [
    {
      id: 'web-hosting',
      index: '01',
      title: 'Web Administration & Hosting',
      shortTitle: 'Web & Hosting',
      tagline: 'Server infrastructure & domain management',
      summary: 'End-to-end server hosting administration, DNS zone propagation, SSL certificates, and high-availability database maintenance.',
      benchmark: '99.9% Uptime Support',
      icon: Server,
      skills: [
        'cPanel & WHM',
        'DNS Zone Editor (A/MX/TXT)',
        'FTP / SFTP File Access',
        'SSL / TLS Setup',
        'MySQL & phpMyAdmin',
        'Domain Routing',
        'Nameserver Config',
        'Email Deliverability (SPF/DKIM)'
      ]
    },
    {
      id: 'cms-support',
      index: '02',
      title: 'CMS & Technical Troubleshooting',
      shortTitle: 'CMS & Tech Support',
      tagline: 'Platform stability & root-cause diagnostics',
      summary: 'WordPress site maintenance, plugin/theme conflict resolution, error 500 troubleshooting, and cross-platform hardware/OS diagnostics.',
      benchmark: '< 15m Diagnostic Speed',
      icon: Globe,
      skills: [
        'WordPress CMS',
        'Plugin Maintenance',
        'Theme Configuration',
        'HTTP 500 / Critical Fixes',
        'Device Diagnostics',
        'Hardware & OS Support',
        'Root Cause Analysis',
        'Site Migrations'
      ]
    },
    {
      id: 'operations-va',
      index: '03',
      title: 'Executive Virtual Assistance',
      shortTitle: 'Executive VA',
      tagline: 'Operational coordination & inbox workflow',
      summary: 'High-level administrative execution, calendar management, travel itinerary booking, supplier liaison, and reliable task coordination.',
      benchmark: '100% On-Time Delivery',
      icon: Briefcase,
      skills: [
        'Executive Inbox Triage',
        'Client Communications',
        'Travel & Booking Logistics',
        'Supplier & Vendor Liaison',
        'Refunds & Rebookings',
        'Calendar Scheduling',
        'Cross-Team Coordination',
        'Follow-up Workflows'
      ]
    },
    {
      id: 'customer-data',
      index: '04',
      title: 'Customer Success & Data Handling',
      shortTitle: 'Customer & Data',
      tagline: 'Omnichannel support & rigorous data privacy',
      summary: 'High-satisfaction customer service, ticket de-escalation, database record updating with 100% privacy compliance, and SOP creation.',
      benchmark: '95% CSAT Benchmark',
      icon: Headphones,
      skills: [
        'Live Chat Support',
        'Email Ticket Triage',
        'Conflict De-escalation',
        'Customer Retention',
        'Database Validation',
        'Data Privacy Compliance',
        'SOP Documentation',
        'Multi-channel Support'
      ]
    }
  ], []);

  // Filtered by Category and Search Query
  const filteredSpecializations = useMemo(() => {
    return specializations.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.id === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(query);
      const summaryMatch = item.summary.toLowerCase().includes(query);
      const skillsMatch = item.skills.some((s) => s.toLowerCase().includes(query));

      return titleMatch || summaryMatch || skillsMatch;
    });
  }, [specializations, selectedCategory, searchQuery]);

  const totalSkillsCount = specializations.reduce((acc, s) => acc + s.skills.length, 0);

  return (
    <section id="skills" className="py-24 md:py-32 relative z-10 bg-[#FAFAFC] border-t border-zinc-200/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-rose-600 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-zinc-950 tracking-tight leading-[1.15] mb-4">
            Technical Specializations & Services
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Practical, battle-tested expertise spanning web hosting architecture, WordPress CMS maintenance, customer retention, and executive administrative operations.
          </p>
        </div>

        {/* Filter Controls & Search Bar Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-zinc-200/80">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-zinc-950 text-white shadow-sm'
                  : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:bg-zinc-50'
              }`}
            >
              All Specializations ({totalSkillsCount})
            </button>
            
            {specializations.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === item.id
                    ? 'bg-rose-600 text-white shadow-sm shadow-rose-500/20'
                    : 'bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {item.shortTitle}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools, skills, protocols..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-zinc-200 rounded-xl text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-rose-500 shadow-xs"
            />
          </div>

        </div>

        {/* Cards Grid */}
        {filteredSpecializations.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-zinc-200 p-8">
            <SlidersHorizontal className="w-8 h-8 text-zinc-300 mx-auto mb-3" />
            <p className="text-zinc-700 font-semibold text-base mb-1">No specializations match "{searchQuery}"</p>
            <p className="text-zinc-500 text-xs">Try searching for keywords like cPanel, WordPress, DNS, or Inbox.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSpecializations.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.id}
                  className="bg-white rounded-2xl p-7 sm:p-8 border border-zinc-200/80 shadow-xs hover:shadow-lg hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon, Number, Title */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                            {spec.title}
                          </h3>
                          <p className="text-xs font-medium text-rose-600">
                            {spec.tagline}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xl font-bold text-zinc-300">
                        {spec.index}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {spec.summary}
                    </p>

                    {/* Skills Matrix (Refined typography tags, no bulky check pills) */}
                    <div className="mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                        Key Competencies & Tools
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {spec.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 hover:bg-rose-50 hover:text-rose-700 text-zinc-700 text-xs font-medium rounded-lg border border-zinc-200/70 hover:border-rose-200 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Benchmark Footer */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                    <span className="text-zinc-500 font-medium">Performance SLA</span>
                    <span className="font-mono font-bold text-zinc-900 flex items-center gap-1.5 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{spec.benchmark}</span>
                    </span>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
