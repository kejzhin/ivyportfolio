import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#0B0A0C]" />
      
      {/* Subtle Crimson Grid */}
      <div className="absolute inset-0 bg-crimson-grid opacity-60" />
      
      {/* Aesthetic Deep Crimson & Smoked Ruby Ambient Orbs (Positioned around borders, away from text and portrait) */}
      <div className="absolute -top-48 -left-48 w-[650px] h-[650px] bg-rose-950/20 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-red-950/15 rounded-full blur-[150px]" />
      <div className="absolute -bottom-48 left-1/4 w-[700px] h-[700px] bg-rose-900/10 rounded-full blur-[160px]" />
    </div>
  );
};
