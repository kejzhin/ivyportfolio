import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Pure White Canvas */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Subtle Crimson Grid */}
      <div className="absolute inset-0 bg-crimson-grid opacity-80" />
      
      {/* Soft Light Crimson Ambient Orbs */}
      <div className="absolute -top-48 -left-48 w-[650px] h-[650px] bg-rose-100/50 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[150px]" />
      <div className="absolute -bottom-48 left-1/4 w-[700px] h-[700px] bg-rose-50/60 rounded-full blur-[160px]" />
    </div>
  );
};
