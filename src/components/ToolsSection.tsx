import React from 'react';
import { Globe, Server, Share2, Database, FileSpreadsheet, FileText, Headphones, Video } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-rose-400" />;
      case 'Server': return <Server className="w-5 h-5 text-rose-400" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-rose-400" />;
      case 'Database': return <Database className="w-5 h-5 text-rose-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-rose-400" />;
      case 'FileText': return <FileText className="w-5 h-5 text-rose-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-rose-400" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-400" />;
      default: return <Globe className="w-5 h-5 text-rose-400" />;
    }
  };

  return (
    <section id="tools" className="section section-dim">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="kicker">Systems & Infrastructure</span>
          <h2 className="section-title">Production systems & tools</h2>
          <p className="lead">
            Proficient across hosting control panels, DNS architectures, enterprise CRM/helpdesks, and cloud productivity ecosystems.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.tools.map((tool) => (
            <div
              key={tool.name}
              className="card-crimson p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#20171D] border border-rose-500/20 flex items-center justify-center mb-4">
                  {getToolIcon(tool.iconName)}
                </div>

                <div className="text-[11px] font-mono text-rose-400 mb-1">
                  {tool.category}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {tool.name}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
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
