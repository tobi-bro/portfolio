import React from 'react';
import { motion } from 'framer-motion';

interface ChapterTitleProps {
  chapter: string;
  title: string;
  subtitle?: string;
  kanji?: string;
  volumeTag?: string;
  description?: string;
}

export const ChapterTitle: React.FC<ChapterTitleProps> = ({
  chapter,
  title,
  subtitle,
  kanji = '連載',
  volumeTag = 'VOL. 01 // SERIALIZATION',
  description
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full my-16 md:my-24 overflow-hidden"
    >
      {/* Background Manga Speedline Ribbon */}
      <div className="absolute inset-0 bg-speedlines opacity-40 pointer-events-none" />

      {/* Top Editorial Rule */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#D9D9D9] to-[#777777]" />
        <div className="flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#333333] text-[10px] tracking-[0.25em] font-mono text-[#777777] uppercase">
          <span className="w-1.5 h-1.5 bg-[#E10600] inline-block animate-pulse" />
          {volumeTag}
        </div>
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#D9D9D9] to-[#777777]" />
      </div>

      {/* Main Chapter Content Frame */}
      <div className="relative border-y-2 border-[#333333] bg-[#0A0A0A]/90 py-8 px-4 md:px-8">
        {/* Giant Watermark Kanji */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 select-none pointer-events-none text-7xl md:text-9xl font-black text-white/[0.04] font-['Noto_Sans_JP']">
          {kanji}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-[#E10600] text-black font-black text-xs tracking-widest uppercase font-mono">
                {chapter}
              </span>
              {subtitle && (
                <span className="text-[#777777] text-xs font-mono tracking-widest uppercase">
                  // {subtitle}
                </span>
              )}
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-['Cinzel',_serif] leading-[0.95]">
              {title}
            </h2>
          </div>

          {description && (
            <div className="max-w-md border-l-2 border-[#E10600] pl-4 py-1">
              <p className="text-xs sm:text-sm text-[#777777] font-mono leading-relaxed">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Editorial Bar with Hatch Accents */}
      <div className="flex items-center justify-between text-[9px] font-mono text-[#555555] tracking-widest px-2 py-1 bg-[#050505] border-b border-[#222222]">
        <span>TOBI ARCHIVE // FILE-SERIES</span>
        <span className="text-[#E10600]">CLASSIFIED ARCHITECTURE // PAGE SPREAD</span>
        <span>INDEX: {chapter}</span>
      </div>
    </motion.div>
  );
};
