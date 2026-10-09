import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, ArrowDown, ExternalLink, Code2 } from 'lucide-react';
import tobiHeroImg from '../assets/illustrations/tobi_hero.jpg';
import tobiEyesImg from '../assets/illustrations/tobi_eyes.jpg';
import { mangaSound } from '../utils/sound';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    mangaSound.playSlash();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-16 flex flex-col justify-center overflow-hidden border-b-4 border-[#D9D9D9] bg-[#050505]"
    >
      {/* Background Manga FX: Speedlines & Screentone Grids */}
      <div className="absolute inset-0 bg-speedlines opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-dense opacity-10 pointer-events-none" />

      {/* Subtle Manga Ink Splatters */}
      <div className="absolute top-1/4 left-6 w-32 h-32 rounded-full bg-black border-4 border-dashed border-[#1E1E1E] opacity-20 pointer-events-none -rotate-12" />
      <div className="absolute bottom-1/4 right-8 w-48 h-48 rounded-full bg-[#E10600]/5 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Manga Cover Top Editorial Header (like "BEHIND" in reference) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center mb-6"
        >
          <div className="w-full flex items-center justify-between text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#888888] uppercase border-b-2 border-white/20 pb-2 mb-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E10600] inline-block" />
              CHAPTER 01 // SERIALIZED EDITION
            </span>
            <span className="text-white font-bold hidden sm:inline">
              MANGA ARCHIVE // SHONEN TECH
            </span>
            <span className="text-[#E10600]">VOL. 01</span>
          </div>

          {/* Top Wide Tracked Serif Banner (Reference Image "B E H I N D" Aesthetic) */}
          <div className="relative py-1 w-full text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.45em] sm:tracking-[0.6em] text-white font-['Cinzel',_serif] uppercase">
              B E H I N D
            </h1>
            <div className="text-[10px] font-mono tracking-[0.4em] text-[#E10600] -mt-1 uppercase">
              THE TERMINAL & ARCHITECTURE
            </div>
          </div>
        </motion.div>

        {/* Dramatic Eyes Manga Panel Banner (Reference Image Top Cropped Panel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto mb-8 border-4 border-white bg-black shadow-[8px_8px_0px_#000000] overflow-hidden group"
        >
          <img
            src={tobiEyesImg}
            alt="Tobi - Intense Developer Eyes Focused on Code"
            className="w-full h-32 sm:h-44 md:h-52 object-cover object-center grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700"
          />

          {/* Vertical Kanji Ribbon on Right (Reference "禅院" aesthetic) */}
          <div className="absolute right-3 top-3 bottom-3 w-8 bg-black/85 border border-white/30 flex flex-col items-center justify-around py-1 text-white font-['Noto_Sans_JP'] text-xs font-black tracking-widest writing-mode-vertical">
            <span>電脳</span>
            <span className="text-[#E10600]">防衛</span>
            <span>眼光</span>
          </div>

          {/* Left Vertical Editorial Coordinates */}
          <div className="absolute left-3 bottom-3 bg-black/90 border border-white/40 px-2 py-1 text-[9px] font-mono text-[#D9D9D9]">
            SYS_INIT: FOCUS // PORT 8080
          </div>
        </motion.div>

        {/* Central Asymmetric Manga Cover Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Editorial Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 space-y-6 z-20"
          >
            {/* Chapter Stamp Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121212] border-2 border-white shadow-[4px_4px_0px_#E10600]">
              <span className="w-2 h-2 bg-[#E10600]" />
              <span className="text-xs font-mono font-black text-white tracking-widest uppercase">
                CHAPTER 01: THE BEGINNING
              </span>
            </div>

            {/* Sub-identity Titles */}
            <div className="space-y-1">
              <div className="flex flex-wrap gap-2 text-xs font-mono font-bold tracking-widest uppercase">
                <span className="text-[#E10600] bg-[#E10600]/10 px-2 py-0.5 border border-[#E10600]">
                  COMPUTER SCIENCE STUDENT
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#D9D9D9] font-['Cinzel',_serif] uppercase tracking-wide">
                BACKEND DEVELOPER <br />
                <span className="text-[#888888] font-normal">&amp;</span> DEVOPS ENGINEER
              </h2>
              <div className="text-xs font-mono text-[#E10600] font-bold tracking-widest uppercase">
                FUTURE DEVSECOPS ENGINEER
              </div>
            </div>

            {/* Protagonist Core Philosophy Statement */}
            <div className="relative p-5 bg-[#0D0D0D] border-2 border-[#D9D9D9] shadow-[6px_6px_0px_#000000]">
              <div className="absolute -top-3 right-4 px-2 py-0.5 bg-[#E10600] text-black text-[10px] font-mono font-black tracking-widest uppercase">
                ORIGINAL MANIFESTO
              </div>
              <blockquote className="text-base sm:text-lg text-white font-['Space_Grotesk'] leading-relaxed font-semibold italic">
                &ldquo;Every developer has a first line of code. <br />
                <span className="text-[#E10600] not-italic font-black">
                  This is mine.
                </span>&rdquo;
              </blockquote>
              <div className="mt-3 pt-3 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono text-[#777777]">
                <span>ARCHIVE STATUS: COMMITTED</span>
                <span>SYSTEM LEVEL: HARDENED</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('about')}
                className="px-6 py-3.5 bg-white hover:bg-[#E10600] text-black font-black font-mono text-xs uppercase tracking-widest transition-all shadow-[5px_5px_0px_#000000] hover:shadow-[5px_5px_0px_#ffffff] cursor-pointer flex items-center gap-2"
              >
                <span>[ ENTER MY WORLD ]</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('projects')}
                className="px-6 py-3.5 bg-transparent hover:bg-white text-white hover:text-black border-2 border-white font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-[5px_5px_0px_#E10600] cursor-pointer flex items-center gap-2"
              >
                <span>[ VIEW PROJECTS ]</span>
                <Terminal className="w-4 h-4" />
              </button>
            </div>

            {/* Handwritten Note ("Scroll to continue ->") */}
            <div className="pt-2 flex items-center gap-2 font-['Permanent_Marker',_cursive] text-sm text-[#E10600] rotate-[-2deg]">
              <span>Scroll to continue</span>
              <span className="text-lg">➔</span>
              <span className="text-xs text-[#888888] font-mono not-italic ml-2">
                (PAGE 01 / 07)
              </span>
            </div>
          </motion.div>

          {/* Center-Right Hero Art: Giant Monumental TOBI with Character Overlap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[580px]"
          >
            {/* Giant Red Serif Background Typography (Matches "TOJI" in Reference!) */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
              <span className="text-[140px] sm:text-[220px] md:text-[270px] lg:text-[310px] font-black text-[#E10600] font-['Cinzel',_serif] tracking-tighter opacity-90 leading-none transform -translate-y-4">
                TOBI
              </span>
            </div>

            {/* Original Protagonist Illustration (Overlapping Typography) */}
            <div className="relative z-10 w-full max-w-md sm:max-w-lg border-4 border-black shadow-[14px_14px_0px_#000000] bg-[#0A0A0A] overflow-hidden group">
              <img
                src={tobiHeroImg}
                alt="Tobi - Manga Developer Protagonist in Server Room"
                className="w-full h-auto object-cover object-top contrast-115 filter group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Inked Editorial Annotation Badges over Illustration */}
              <div className="absolute top-4 left-4 bg-black/90 border border-white px-2.5 py-1 text-[10px] font-mono text-white shadow-[3px_3px_0px_#E10600]">
                ● BACKEND ONLINE
              </div>

              <div className="absolute top-4 right-4 bg-black/90 border border-white px-2.5 py-1 text-[10px] font-mono text-[#E10600] shadow-[3px_3px_0px_#ffffff]">
                SECURITY: DEVELOPING
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/95 border-2 border-white p-2.5 text-[10px] font-mono text-[#CCCCCC] flex items-center justify-between">
                <span>SYSTEM INITIALIZED // 2026</span>
                <span className="text-[#E10600] font-bold">STRENGTH: ASYNC PYTHON</span>
              </div>
            </div>

            {/* Vertical Kanji Column (Reference "杜氏" stamp aesthetic) */}
            <div className="absolute -left-4 sm:left-2 bottom-12 z-20 bg-black border-2 border-white px-2 py-4 shadow-[4px_4px_0px_#E10600] writing-mode-vertical text-white font-['Noto_Sans_JP'] text-sm sm:text-base font-black tracking-widest hidden sm:flex">
              <span>基幹開発者</span>
            </div>

            {/* Right Side Kanji Column */}
            <div className="absolute -right-2 top-8 z-20 bg-[#E10600] border-2 border-black px-2 py-4 shadow-[4px_4px_0px_#000000] writing-mode-vertical text-black font-['Noto_Sans_JP'] text-sm sm:text-base font-black tracking-widest hidden sm:flex">
              <span>防衛電脳録</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Annotations Coordinates Bar */}
        <div className="mt-12 pt-4 border-t-2 border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] font-mono text-[#666666]">
          <div>
            <span className="text-white block font-bold">COORDINATES</span>
            <span>35.6762° N // SEC_PORT: 8080</span>
          </div>
          <div>
            <span className="text-white block font-bold">KERNEL ARCHITECTURE</span>
            <span>LINUX 6.x // ASYNC WORKERS</span>
          </div>
          <div>
            <span className="text-white block font-bold">SECURITY CLEARANCE</span>
            <span>LEVEL 4 // ZERO-TRUST DEFENSE</span>
          </div>
          <div className="text-right sm:text-left">
            <span className="text-[#E10600] block font-bold">CURRENT STATUS</span>
            <span className="text-[#E10600] font-bold animate-pulse">● OPEN FOR OPPORTUNITIES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
