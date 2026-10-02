import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen relative font-sans selection:bg-[#E11D48] selection:text-white">
      {/* Aesthetic Crimson Noir Ambient Backdrop */}
      <AmbientBackground />

      {/* Modern Frosted Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section: Zero background behind cutout */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Core Technical Specializations */}
        <SkillsSection />

        {/* Professional Track Record */}
        <ExperienceSection />

        {/* Systems & Tools Grid */}
        <ToolsSection />

        {/* Academic Credentials */}
        <EducationSection />

        {/* Direct Contact & Booking Hub */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
