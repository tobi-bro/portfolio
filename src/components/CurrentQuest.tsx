import React from 'react';
import { motion } from 'framer-motion';
import { CURRENT_QUEST_DATA } from '../data/stats';
import { Target, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export const CurrentQuest: React.FC = () => {
  return (
    <div className="relative border-4 border-[#D9D9D9] bg-[#0A0A0A] p-6 sm:p-8 md:p-10 shadow-[10px_10px_0px_#000000] overflow-hidden">
      {/* Background Japanese Watermark */}
      <div className="absolute right-4 top-4 select-none pointer-events-none text-8xl md:text-9xl font-black text-white/[0.03] font-['Noto_Sans_JP']">
        任務
      </div>

      {/* Top Quest Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#2B2B2B] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-[#E10600] text-black font-black font-mono text-xs">
            QUEST
          </span>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-['Cinzel',_serif]">
              {CURRENT_QUEST_DATA.title}
            </h3>
            <span className="text-xs font-mono text-[#888888]">
              {CURRENT_QUEST_DATA.questRank}
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 border border-[#E10600] px-3 py-1 bg-[#E10600]/10 text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
          ACTIVE CAMPAIGN
        </div>
      </div>

      {/* 3-Stage Progression Ladder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative">
        {CURRENT_QUEST_DATA.progression.map((stage, idx) => {
          const isCurrent = stage.state === 'ACTIVE FOCUS';
          const isNext = stage.state === 'NEXT TARGET';
          const isGoal = stage.state === 'FINAL GOAL';

          return (
            <motion.div
              key={stage.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative p-5 border-2 transition-all ${
                isCurrent
                  ? 'border-[#E10600] bg-[#140606] shadow-[6px_6px_0px_#E10600]'
                  : isNext
                  ? 'border-white bg-[#0F0F0F]'
                  : 'border-[#333333] bg-[#0A0A0A]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="text-[#888888]">{stage.level}</span>
                <span
                  className={`px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase ${
                    isCurrent
                      ? 'bg-[#E10600] text-black'
                      : isNext
                      ? 'bg-white text-black'
                      : 'bg-[#222222] text-[#888888]'
                  }`}
                >
                  {stage.state}
                </span>
              </div>

              <div className="font-['Noto_Sans_JP'] text-xs font-bold text-[#666666] mb-1">
                {stage.kanji}
              </div>

              <h4 className="text-lg sm:text-xl font-black uppercase text-white font-['Cinzel',_serif] mb-2">
                {stage.title}
              </h4>

              <p className="text-xs text-[#A8A8A8] font-mono leading-relaxed">
                {stage.desc}
              </p>

              {/* Step indicator arrow for desktop */}
              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-black border border-white p-1 text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Quest Directive Speech Ribbon */}
      <div className="mt-6 p-4 bg-[#141414] border-l-4 border-white font-mono text-xs text-[#CCCCCC] flex items-center justify-between gap-4">
        <div>
          <span className="text-[#E10600] font-bold mr-2">DIRECTIVE:</span>
          {CURRENT_QUEST_DATA.questNotes}
        </div>
        <span className="text-[10px] text-[#666666] shrink-0 font-mono hidden sm:inline">
          PATH: BACKEND ➔ DEVOPS ➔ DEVSECOPS
        </span>
      </div>
    </div>
  );
};
