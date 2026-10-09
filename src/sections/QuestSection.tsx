import React from 'react';
import { CurrentQuest } from '../components/CurrentQuest';
import { StatsHud } from '../components/StatsHud';

export const QuestSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 bg-[#070707] border-y-4 border-[#222222] overflow-hidden">
      {/* Background Screentone */}
      <div className="absolute inset-0 bg-screentone-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Prominent Current Quest Panel */}
        <CurrentQuest />

        {/* Developer Telemetry & Stats HUD */}
        <StatsHud />
      </div>
    </section>
  );
};
