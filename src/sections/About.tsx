import React from 'react';
import { motion } from 'framer-motion';
import { ChapterTitle } from '../components/ChapterTitle';
import { SpeechBubble } from '../components/SpeechBubble';
import { JOURNEY_STEPS } from '../data/journey';
import serverStanceImg from '../assets/illustrations/server_stance.jpg';
import { Shield, Server, Terminal, Code, Cpu, ArrowRight } from 'lucide-react';
import { mangaSound } from '../utils/sound';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#080808] overflow-hidden">
      {/* Halftone / Screentone Texture Layer */}
      <div className="absolute inset-0 bg-screentone-light opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter 02 Title Header */}
        <ChapterTitle
          chapter="CHAPTER 02"
          title="THE ORIGIN"
          subtitle="PROTAGONIST DOSSIER & EVOLUTION"
          kanji="起源"
          description="The origin story of a Computer Science student advancing through backend systems, low-level networking, and defensive cybersecurity architecture."
        />

        {/* Asymmetric Manga Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Panel 01 & 02: Left Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            {/* PANEL 01: WHO IS TOBI? */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-4 border-[#D9D9D9] bg-[#0E0E0E] p-6 sm:p-8 shadow-[8px_8px_0px_#000000]"
            >
              <div className="flex items-center justify-between border-b-2 border-[#222222] pb-3 mb-5 font-mono text-xs">
                <span className="text-[#E10600] font-black tracking-widest uppercase">
                  PANEL 01 // IDENTITY DOSSIER
                </span>
                <span className="font-['Noto_Sans_JP'] text-sm font-bold text-white/50">
                  身元調査
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-white font-['Cinzel',_serif] mb-4">
                WHO IS L JASHWANTH /(TOBI)?
              </h3>

              {/* Speech bubble dialogue */}
              <SpeechBubble
                speaker="TOBI // STATEMENT"
                variant="shout"
                tailDirection="bottom-left"
                className="mb-6"
              >
                &ldquo;I am a Computer Science student focused on building backend systems, learning infrastructure, and understanding cybersecurity from the inside out.&rdquo;
              </SpeechBubble>

              <div className="space-y-4 text-xs sm:text-sm text-[#A8A8A8] font-sans leading-relaxed">
                <p>
                  I don&apos;t build software by blindly pasting boilerplate. I am obsessed with understanding 
                  <strong className="text-white"> what happens beneath the abstraction layer</strong>: how Linux kernels manage file descriptors, how TCP handshakes negotiate cryptographic sessions, and how unoptimized database queries degrade under concurrent load.
                </p>
                <p>
                  My mission is clear: transition from deep <strong className="text-[#E10600]">Backend Engineering</strong> into <strong className="text-white">DevOps Infrastructure</strong>, and ultimately conquer <strong className="text-[#E10600]">DevSecOps</strong>—automating security and defense directly into the lifecycle of software.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-5 border-t border-[#222222]">
                <div className="p-3 bg-[#141414] border border-[#2B2B2B]">
                  <div className="text-[10px] font-mono text-[#E10600] font-bold">PILLAR 01</div>
                  <div className="text-white font-bold text-sm mt-0.5">BACKEND CORE</div>
                  <div className="text-[11px] text-[#777777] font-mono mt-1">High-concurrency APIs &amp; ACID DBs</div>
                </div>
                <div className="p-3 bg-[#141414] border border-[#2B2B2B]">
                  <div className="text-[10px] font-mono text-[#E10600] font-bold">PILLAR 02</div>
                  <div className="text-white font-bold text-sm mt-0.5">INFRASTRUCTURE</div>
                  <div className="text-[11px] text-[#777777] font-mono mt-1">Docker, CI/CD, Linux daemons</div>
                </div>
                <div className="p-3 bg-[#141414] border border-[#2B2B2B]">
                  <div className="text-[10px] font-mono text-[#E10600] font-bold">PILLAR 03</div>
                  <div className="text-white font-bold text-sm mt-0.5">SECURITY FIRST</div>
                  <div className="text-[11px] text-[#777777] font-mono mt-1">Zero-trust cryptographic protocols</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Full-Height Manga Art Panel (server_stance.jpg) */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border-4 border-white bg-[#0A0A0A] shadow-[10px_10px_0px_#000000] overflow-hidden group"
            >
              <img
                src={serverStanceImg}
                alt="Tobi Manga Developer Standing in Server Room with Tablet"
                className="w-full h-auto object-cover grayscale contrast-125 filter group-hover:scale-105 transition-transform duration-700"
              />

              {/* Inked Editorial Stamps over Art */}
              <div className="absolute top-4 left-4 bg-black/90 border border-white px-3 py-1 font-mono text-xs text-white">
                FIELD SECTOR: 01 // SERVERS
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/90 border-2 border-white p-3 font-mono text-xs flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#E10600] font-bold">CURRENT LEVEL:</div>
                  <div className="text-white font-bold">TRAINING ARC: PHASE 10</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#888888]">SPECIALTY:</div>
                  <div className="text-[#D9D9D9]">FASTAPI &bull; LINUX</div>
                </div>
              </div>
            </motion.div>

            <div className="p-3 bg-[#111111] border border-[#262626] text-[11px] font-mono text-[#777777] flex items-center justify-between">
              <span>ILLUSTRATION REF: CHAPTER 02 VOL SPREAD</span>
              <span className="text-[#E10600]">ORIGINAL SERIALIZATION</span>
            </div>
          </div>
        </div>

        {/* Panel 03: DEVELOPER EVOLUTION (The Manga Training Arc Progression) */}
        <div className="relative border-4 border-[#D9D9D9] bg-[#0A0A0A] p-6 sm:p-8 md:p-10 shadow-[12px_12px_0px_#000000]">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#262626] pb-4 mb-8">
            <div>
              <span className="text-xs font-mono text-[#E10600] tracking-widest uppercase">
                PANEL 03 // PROGRESSION LADDER
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-['Cinzel',_serif] tracking-tight mt-1">
                DEVELOPER EVOLUTION: THE TRAINING ARC
              </h3>
            </div>
            <div className="px-3 py-1 bg-white text-black font-mono font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_#E10600]">
              STAGE 01 ➔ STAGE 11
            </div>
          </div>

          {/* Sequential Manga Progression Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {JOURNEY_STEPS.map((milestone, idx) => {
              const isCurrent = milestone.isCurrent;
              return (
                <motion.div
                  key={milestone.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`p-4 border-2 transition-all relative ${
                    isCurrent
                      ? 'border-[#E10600] bg-[#140505] shadow-[5px_5px_0px_#E10600]'
                      : 'border-[#262626] hover:border-white bg-[#101010]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-2">
                    <span className="text-[#888888]">{milestone.rank}</span>
                    <span className="font-['Noto_Sans_JP'] font-bold text-white/50">
                      {milestone.kanji}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-white font-['Cinzel',_serif] uppercase tracking-wide mb-2 line-clamp-1">
                    {milestone.stageName}
                  </h4>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {milestone.techNodes.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 bg-[#181818] text-[9px] font-mono text-[#AAAAAA] border border-[#2B2B2B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-[11px] font-mono text-[#777777] italic leading-snug">
                    &ldquo;{milestone.quote}&rdquo;
                  </p>

                  {isCurrent && (
                    <div className="mt-3 pt-2 border-t border-[#E10600]/40 text-[9px] font-mono text-[#E10600] font-black uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#E10600] animate-ping inline-block" />
                      CURRENT FOCUS OF STUDY
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Evolution Summary */}
          <div className="mt-8 pt-4 border-t-2 border-[#202020] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="text-[#E10600] font-bold">NEXT HORIZON:</span>
              <span className="text-white">DEVSECOPS ENGINEERING // ZERO-TRUST INFRASTRUCTURE</span>
            </div>
            <div className="text-[10px] text-[#666666]">
              METHODOLOGY: DELIBERATE REPETITION &bull; CONTINUOUS PRACTICE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
