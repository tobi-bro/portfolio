import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { BattleLog } from './sections/BattleLog';
import { QuestSection } from './sections/QuestSection';
import { GitHubArchive } from './sections/GitHubArchive';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { MangaCursor } from './components/MangaCursor';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#D9D9D9] selection:bg-[#E10600] selection:text-white">
      {/* Film grain noise texture layer across entire experience */}
      <div className="noise-layer pointer-events-none fixed inset-0 z-50" />

      {/* Manga crosshair targeting cursor on desktop */}
      <MangaCursor />

      {/* Fixed Manga Publication Header */}
      <Navbar />

      {/* Chapter 01: The Beginning (Manga Cover Hero) */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BattleLog />
        <QuestSection />
        <GitHubArchive />
        <Contact />
      </main>

      {/* Publication Footer */}
      <Footer />
    </div>
  );
};

export default App;
