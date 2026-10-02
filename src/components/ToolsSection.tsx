import React from 'react';
import { Globe, Server, Share2, Database, FileSpreadsheet, FileText, Headphones, Video } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-rose-600" />;
      case 'Server': return <Server className="w-5 h-5 text-rose-600" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-rose-600" />;
      case 'Database': return <Database className="w-5 h-5 text-rose-600" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-rose-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-rose-600" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-rose-600" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-600" />;
      default: return <Globe className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="tools" className="section section-dim">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="kicker">Systems & Infrastructure</span>
          <h2 className="section-title">Production systems & tools</h2>
          <p className="lead">
            Proficient across hosting control panels, DNS architectures, enterprise CRM/helpdesks, and cloud productivity ecosystems.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.tools.map((tool) => (
            <div
              key={tool.name}
              className="card-crimson p-6 flex flex-col justify-between transition-all duration-300 hover:border-rose-600 hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 shadow-xs">
                  {getToolIcon(tool.iconName)}
                </div>

                <div className="text-[11px] font-mono text-rose-600 font-semibold mb-1">
                  {tool.category}
                </div>

                <h3 className="text-base font-bold text-zinc-950 mb-2">
                  {tool.name}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
