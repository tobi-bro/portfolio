import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BattleBugItem } from '../types';
import { ShieldAlert, CheckCircle, Skull, Crosshair, ChevronDown, Terminal } from 'lucide-react';
import { mangaSound } from '../utils/sound';

interface BattleCardProps {
  bug: BattleBugItem;
  index: number;
}

export const BattleCard: React.FC<BattleCardProps> = ({ bug, index }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const isDefeated = bug.status === 'DEFEATED';

  const handleToggle = () => {
    if (isDefeated) {
      mangaSound.playSlash();
    } else {
      mangaSound.playStamp();
    }
    setIsRevealed(!isRevealed);
  };

  return (
    <motion.div
      layout
      onClick={handleToggle}
      className={`relative group cursor-pointer border-3 transition-all duration-300 ${
        isDefeated
          ? 'border-[#333333] hover:border-white bg-[#0A0A0A]'
          : 'border-[#E10600] bg-[#120505]'
      } shadow-[6px_6px_0px_#000000] overflow-hidden`}
    >
      {/* Top Combat Bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#141414] border-b border-[#262626] text-[10px] font-mono tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#E10600]">{bug.bugNumber}</span>
          <span className="text-[#777777] hidden sm:inline">// {bug.enemyType}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 font-bold tracking-widest ${
              bug.threatLevel === 'CRITICAL'
                ? 'bg-[#E10600] text-black'
                : 'bg-[#2A2A2A] text-white'
            }`}
          >
            {bug.threatLevel}
          </span>
          <span className="text-[#888888]">{bug.timestamp}</span>
        </div>
      </div>

      {/* Main Encounter Details */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-black uppercase text-white font-['Cinzel',_serif] tracking-tight group-hover:text-[#E10600] transition-colors">
              {bug.title}
            </h4>
            <p className="text-xs text-[#888888] font-mono">
              ENEMY CLASS: <span className="text-[#D9D9D9]">{bug.enemyType}</span>
            </p>
          </div>

          {/* Large Manga Impact Stamp */}
          <div
            className={`shrink-0 px-2.5 py-1 border-2 font-mono font-black text-xs sm:text-sm tracking-widest uppercase rotate-[3deg] ${
              isDefeated
                ? 'border-white text-white bg-black/60 shadow-[3px_3px_0px_#ffffff]'
                : 'border-[#E10600] text-[#E10600] bg-[#E10600]/10 shadow-[3px_3px_0px_#E10600] animate-pulse'
            }`}
          >
            {isDefeated ? '討伐 // DEFEATED' : '交戦中 // ACTIVE'}
          </div>
        </div>

        {/* Symptoms teaser */}
        <p className="mt-3 text-xs sm:text-sm text-[#A8A8A8] font-mono leading-relaxed line-clamp-2">
          {bug.symptoms}
        </p>

        {/* Stack tags */}
        <div className="mt-3 flex flex-wrap gap-1.5 items-center">
          <span className="text-[9px] font-mono text-[#666666] uppercase mr-1">
            VECTORS:
          </span>
          {bug.stackInvolved.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-[#161616] border border-[#2B2B2B] text-[10px] font-mono text-[#999999]"
            >
              {tech}
            </span>
          ))}
          <div className="ml-auto text-[10px] font-mono text-[#E10600] flex items-center gap-1">
            <span>{isRevealed ? 'HIDE COMBAT LOG ▲' : 'VIEW LETHAL FIX ▼'}</span>
          </div>
        </div>

        {/* Expandable Forensic Combat Log */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 pt-4 border-t border-[#262626] space-y-3 font-mono text-xs overflow-hidden"
            >
              <div className="bg-[#121212] p-3 border-l-2 border-[#888888]">
                <div className="text-[10px] font-bold text-[#888888] tracking-widest uppercase mb-1">
                  ROOT CAUSE IDENTIFIED:
                </div>
                <div className="text-[#CCCCCC] leading-relaxed">
                  {bug.rootCause}
                </div>
              </div>

              <div className="bg-[#121212] p-3 border-l-2 border-[#E10600]">
                <div className="text-[10px] font-bold text-[#E10600] tracking-widest uppercase mb-1">
                  LETHAL FIX / COUNTERMEASURE:
                </div>
                <div className="text-white leading-relaxed">
                  {bug.lethalFix}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
