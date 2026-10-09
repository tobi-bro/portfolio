import React, { useState } from 'react';
import { ChapterTitle } from '../components/ChapterTitle';
import { BattleCard } from '../components/BattleCard';
import { BATTLE_BUGS } from '../data/battleLog';
import cyberBattleImg from '../assets/illustrations/cyber_battle.jpg';
import { ShieldAlert, Crosshair, Skull, Swords, Flame } from 'lucide-react';
import { mangaSound } from '../utils/sound';

export const BattleLog: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'DEFEATED' | 'INVESTIGATING'>('ALL');

  const filteredBugs =
    filter === 'ALL' ? BATTLE_BUGS : BATTLE_BUGS.filter((b) => b.status === filter);

  const defeatedCount = BATTLE_BUGS.filter((b) => b.status === 'DEFEATED').length;

  return (
    <section id="battle-log" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Background speed lines */}
      <div className="absolute inset-0 bg-speedlines opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter 05 Title */}
        <ChapterTitle
          chapter="CHAPTER 05"
          title="BATTLE LOG"
          subtitle="DEFEATED SYSTEM ANOMALIES & EXPLOITS"
          kanji="討伐"
          description="In software engineering, every production incident is a duel. Here lies the forensic record of concurrency bottlenecks, memory leaks, and protocol anomalies defeated in combat."
        />

        {/* Feature Combat Manga Art Banner (cyber_battle.jpg) */}
        <div className="relative mb-12 border-4 border-[#D9D9D9] bg-black shadow-[12px_12px_0px_#000000] overflow-hidden group">
          <img
            src={cyberBattleImg}
            alt="Manga Cyber Battle Action - Developer Defending against Malware and Exploits"
            className="w-full h-48 sm:h-64 md:h-80 object-cover object-center grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700"
          />

          {/* Inked Combat Overlay Badges */}
          <div className="absolute top-4 left-4 bg-black/90 border-2 border-white px-3 py-1 font-mono text-xs text-white shadow-[4px_4px_0px_#E10600]">
            COMBAT SECTOR: KERNEL &amp; APPLICATION RUNTIME
          </div>

          <div className="absolute top-4 right-4 bg-[#E10600] border-2 border-black px-3 py-1 font-mono font-black text-xs text-black shadow-[4px_4px_0px_#ffffff]">
            4 OF 5 ENEMIES DEFEATED
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-black/95 border-2 border-white p-3 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E10600] animate-ping" />
              <span className="text-white font-bold">MANGA COMBAT RULE:</span>
              <span className="text-[#AAAAAA]">Every bug teaches low-level discipline.</span>
            </div>
            <div className="text-[11px] text-[#E10600] font-bold">
              ROOT CAUSE ANALYSIS // LETHAL COUNTERMEASURES
            </div>
          </div>
        </div>

        {/* Filter Controls & Impact Stat Box */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-[#202020]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                mangaSound.playStamp();
                setFilter('ALL');
              }}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'ALL'
                  ? 'bg-white text-black shadow-[3px_3px_0px_#E10600]'
                  : 'bg-[#121212] text-[#888888] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              ALL BATTLES ({BATTLE_BUGS.length})
            </button>

            <button
              onClick={() => {
                mangaSound.playSlash();
                setFilter('DEFEATED');
              }}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'DEFEATED'
                  ? 'bg-[#E10600] text-black shadow-[3px_3px_0px_#ffffff]'
                  : 'bg-[#121212] text-[#888888] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              DEFEATED ({defeatedCount})
            </button>

            <button
              onClick={() => {
                mangaSound.playStamp();
                setFilter('INVESTIGATING');
              }}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'INVESTIGATING'
                  ? 'bg-amber-400 text-black shadow-[3px_3px_0px_#000000]'
                  : 'bg-[#121212] text-[#888888] hover:text-white border border-[#2B2B2B]'
              }`}
            >
              INVESTIGATING (1)
            </button>
          </div>

          <div className="text-xs font-mono text-[#888888] flex items-center gap-3">
            <span>
              IMPACT RATING:{' '}
              <span className="text-[#E10600] font-black">CRITICAL (99.8%)</span>
            </span>
          </div>
        </div>

        {/* Battle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBugs.map((bug, index) => (
            <BattleCard key={bug.id} bug={bug} index={index} />
          ))}
        </div>

        {/* Manga Combat Typography Splash Ribbon */}
        <div className="mt-12 py-4 bg-[#0A0A0A] border-y-2 border-[#222222] flex items-center justify-between overflow-x-auto text-[11px] font-mono tracking-[0.25em] text-[#555555] uppercase select-none">
          <span className="text-[#E10600] font-bold">ERROR</span>
          <span>◆</span>
          <span className="text-white font-bold">CRITICAL</span>
          <span>◆</span>
          <span className="text-[#E10600] font-bold">FIXED</span>
          <span>◆</span>
          <span className="text-white font-bold">DEFEATED</span>
          <span>◆</span>
          <span className="text-[#E10600] font-bold">RETRY</span>
          <span>◆</span>
          <span className="text-white font-bold">HARDENED</span>
        </div>
      </div>
    </section>
  );
};
