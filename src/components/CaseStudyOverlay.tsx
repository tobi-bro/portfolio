import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../types';
import { X, ExternalLink, Shield, Terminal, BookOpen, AlertTriangle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { mangaSound } from '../utils/sound';

interface CaseStudyOverlayProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyOverlay: React.FC<CaseStudyOverlayProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop Ink Wash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            mangaSound.playPageTurn();
            onClose();
          }}
          className="fixed inset-0 bg-[#050505]/95 backdrop-blur-md"
        />

        {/* Speed lines backdrop */}
        <div className="fixed inset-0 bg-speedlines-diagonal opacity-25 pointer-events-none" />

        {/* Main Case File Dossier Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.92, opacity: 0, rotate: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0F0F0F] border-4 border-[#D9D9D9] text-[#E0E0E0] shadow-[16px_16px_0px_#000000] z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Dossier Header Bar */}
          <div className="bg-[#181818] border-b-2 border-[#D9D9D9] px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="bg-[#E10600] text-black font-black text-xs px-2.5 py-0.5 tracking-widest font-mono uppercase">
                {project.caseFileNumber}
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#888888] hidden sm:inline">
                CLASSIFIED ARCHITECTURE DOSSIER
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-['Noto_Sans_JP'] text-base font-black text-[#E10600]">
                {project.kanjiTitle}
              </span>
              <button
                onClick={() => {
                  mangaSound.playPageTurn();
                  onClose();
                }}
                className="p-1.5 bg-[#252525] hover:bg-[#E10600] text-white transition-colors border border-[#444444]"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dossier Scrollable Body */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-8 font-sans">
            {/* Title & Dramatic Watermark Section */}
            <div className="relative border-b-2 border-[#262626] pb-6">
              <div className="absolute right-0 top-0 select-none pointer-events-none text-8xl font-black text-white/[0.04] font-['Noto_Sans_JP']">
                機密
              </div>
              <div className="text-xs font-mono text-[#E10600] tracking-widest uppercase mb-1">
                // {project.chapterNumber} — CASE STUDY SPECIFICATION
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Cinzel',_serif] tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-mono text-[#888888] mt-1 tracking-wide">
                {project.subtitle}
              </p>

              {/* Classified Stamp */}
              <div className="mt-4 inline-block border-2 border-[#E10600] px-3 py-1 text-[11px] font-mono font-black text-[#E10600] tracking-widest uppercase rotate-[-2deg] bg-[#E10600]/10">
                ● STATUS: {project.status} // LEVEL 4 AUDIT PASSED
              </div>
            </div>

            {/* Manga Dialogue Exchange */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#141414] p-4 border border-[#2B2B2B]">
              <div className="border-l-2 border-[#888888] pl-3">
                <span className="text-[10px] font-mono text-[#777777] uppercase block mb-1">
                  TACTICAL QUESTION:
                </span>
                <p className="text-xs sm:text-sm italic font-['Space_Grotesk'] text-[#D0D0D0]">
                  &ldquo;{project.speechPrompt}&rdquo;
                </p>
              </div>
              <div className="border-l-2 border-[#E10600] pl-3">
                <span className="text-[10px] font-mono text-[#E10600] uppercase block mb-1">
                  DEFENSIVE RESOLUTION:
                </span>
                <p className="text-xs sm:text-sm font-semibold font-['Space_Grotesk'] text-white">
                  &ldquo;{project.speechResponse}&rdquo;
                </p>
              </div>
            </div>

            {/* The Problem & The Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121212] p-5 border border-[#222222] shadow-[4px_4px_0px_#000000]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  THE PROBLEM
                </div>
                <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="bg-[#121212] p-5 border border-[#222222] shadow-[4px_4px_0px_#000000]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white tracking-widest uppercase mb-3">
                  <Terminal className="w-4 h-4 text-[#E10600]" />
                  THE SOLUTION
                </div>
                <p className="text-xs sm:text-sm text-[#D9D9D9] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Dossier */}
            <div className="bg-[#121212] p-5 border border-[#222222]">
              <div className="text-xs font-mono font-bold text-[#D9D9D9] tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E10600]" />
                THE ARCHITECTURE & DATA FLOW
              </div>
              <p className="text-xs sm:text-sm text-[#B0B0B0] font-mono leading-relaxed bg-[#080808] p-3 border border-[#202020]">
                {project.architecture}
              </p>
            </div>

            {/* Security Hardening Vector */}
            <div className="bg-[#121212] p-5 border-2 border-[#333333]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase mb-3">
                <Shield className="w-4 h-4 text-[#E10600]" />
                THE SECURITY & PROTOCOLS
              </div>
              <ul className="space-y-2">
                {project.security.map((sec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#C4C4C4]"
                  >
                    <span className="text-[#E10600] font-mono font-bold mt-0.5">▶</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Arsenal */}
            <div>
              <div className="text-xs font-mono font-bold text-[#888888] tracking-widest uppercase mb-3">
                // THE TECHNOLOGY ARSENAL
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1A1A1A] border border-[#333333] text-xs font-mono text-white tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="bg-[#F4F1EA] text-black p-5 border-2 border-black shadow-[6px_6px_0px_#E10600]">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-black tracking-widest uppercase mb-2">
                <BookOpen className="w-4 h-4 text-[#E10600]" />
                WHAT I LEARNED // FIELD NOTES
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-sans font-medium">
                {project.whatILearned}
              </p>
            </div>
          </div>

          {/* Dossier Bottom Action Footer */}
          <div className="p-4 sm:p-6 bg-[#141414] border-t-2 border-[#D9D9D9] flex flex-wrap items-center justify-between gap-4 shrink-0">
            <div className="text-[11px] font-mono text-[#777777]">
              ARCHIVE REF: <span className="text-white">{project.id.toUpperCase()}_REV.4</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => mangaSound.playStamp()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black border-2 border-white hover:border-[#E10600] text-white hover:text-[#E10600] text-xs font-mono font-bold uppercase transition-all shadow-[3px_3px_0px_#ffffff]"
              >
                <GithubIcon className="w-4 h-4" />
                VIEW ON GITHUB
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => mangaSound.playSlash()}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-[#E10600] border-2 border-[#E10600] hover:bg-white text-black font-mono font-black text-xs uppercase transition-all shadow-[3px_3px_0px_#000000]"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
