import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';
import { ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { mangaSound } from '../utils/sound';

interface ProjectPanelProps {
  project: ProjectItem;
  index: number;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectPanel: React.FC<ProjectPanelProps> = ({
  project,
  index,
  onOpenCaseStudy
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative group border-4 border-[#D9D9D9] bg-[#0A0A0A] shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#E10600] transition-all duration-300 overflow-hidden"
    >
      {/* Top Editorial Manga Header Strip */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#141414] border-b-2 border-[#D9D9D9] font-mono text-[11px] tracking-widest uppercase">
        <div className="flex items-center gap-3">
          <span className="bg-[#E10600] text-black font-black px-2 py-0.5">
            {project.chapterNumber}
          </span>
          <span className="font-bold text-white">{project.caseFileNumber}</span>
          <span className="text-[#777777] hidden sm:inline">// REPO: {project.id}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-['Noto_Sans_JP'] text-sm font-bold text-[#E10600]">
            {project.kanjiTitle}
          </span>
          <span className="text-[10px] text-[#A0A0A0] hidden md:inline">
            STATUS: <strong className="text-white">{project.status}</strong>
          </span>
        </div>
      </div>

      {/* Main Panel Asymmetric Layout */}
      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs font-mono text-[#E10600] tracking-widest uppercase">
                // SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase text-white font-['Cinzel',_serif] tracking-tight group-hover:text-[#E10600] transition-colors mt-0.5">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#888888] tracking-wider mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Speech Bubble Comic Dialogue Exchange */}
            <div className="bg-[#141414] border-l-4 border-[#E10600] p-4 space-y-2">
              <div className="text-[11px] font-mono text-[#888888]">
                PROTAGONIST QUERY:
              </div>
              <p className="text-sm italic font-['Space_Grotesk'] text-[#F4F1EA]">
                &ldquo;{project.speechPrompt}&rdquo;
              </p>
              <div className="text-xs font-mono font-bold text-[#E10600] pt-1">
                ➔ &ldquo;{project.speechResponse}&rdquo;
              </div>
            </div>

            {/* Problem & Solution Preview */}
            <div className="space-y-2 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
              <p>
                <strong className="text-white font-mono uppercase text-xs tracking-wider">
                  MISSION OBJECTIVE:{' '}
                </strong>
                {project.problem}
              </p>
            </div>

            {/* Tech Arsenal Pill Tags */}
            <div className="pt-2">
              <div className="text-[10px] font-mono text-[#666666] tracking-widest uppercase mb-2">
                TECHNOLOGY MATRIX:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#181818] border border-[#2B2B2B] text-[11px] font-mono text-[#D9D9D9] group-hover:border-[#555555] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tactical Dossier & Security Highlights */}
          <div className="lg:col-span-4 bg-[#111111] border-2 border-[#262626] p-4 sm:p-5 flex flex-col justify-between h-full space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                SECURITY HARDENING
              </div>
              <ul className="space-y-2 text-xs text-[#999999]">
                {project.security.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E10600] font-mono">▪</span>
                    <span className="line-clamp-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study Trigger Button */}
            <div className="pt-4 border-t border-[#222222] space-y-2">
              <button
                onClick={() => {
                  mangaSound.playSlash();
                  onOpenCaseStudy(project);
                }}
                className="w-full py-3 px-4 bg-white hover:bg-[#E10600] text-black font-black font-mono text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_#000000] cursor-pointer"
              >
                <span>OPEN CASE DOSSIER</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => mangaSound.playStamp()}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#888888] hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => mangaSound.playStamp()}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E10600] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>LIVE DEMO</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speed lines bottom border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.article>
  );
};
