import React, { useState } from 'react';
import { ChapterTitle } from '../components/ChapterTitle';
import { ProjectPanel } from '../components/ProjectPanel';
import { CaseStudyOverlay } from '../components/CaseStudyOverlay';
import { PROJECTS } from '../data/projects';
import { ProjectItem } from '../types';
import { Shield, Sparkles, Terminal, FileCode, CheckCircle } from 'lucide-react';
import { mangaSound } from '../utils/sound';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#080808] overflow-hidden">
      {/* Background Screentone Pattern */}
      <div className="absolute inset-0 bg-screentone-dense opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter 04 Title */}
        <ChapterTitle
          chapter="CHAPTER 04"
          title="THE PROJECT ARC"
          subtitle="PRODUCTION SYSTEMS & CASE STUDIES"
          kanji="実戦"
          description="The main battleground. Five full-stack architectures solving real-world cybersecurity, high-throughput backend data flows, and performance engineering challenges."
        />

        {/* Project Chapters List */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => (
            <ProjectPanel
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={handleOpenCaseStudy}
            />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-6 md:p-8 border-4 border-dashed border-[#333333] bg-[#0E0E0E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-[#E10600] font-bold tracking-widest uppercase">
              REPOSITORIES VERIFIED // ZERO STACK BLOAT
            </div>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-['Cinzel',_serif]">
              READY TO INSPECT CODE QUALITY?
            </h4>
            <p className="text-xs sm:text-sm text-[#888888] font-mono">
              All backend schemas, Dockerfiles, and test suites are formatted for architectural review.
            </p>
          </div>

          <a
            href="https://github.com/tobi-bro"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mangaSound.playSlash()}
            className="px-6 py-3.5 bg-[#E10600] hover:bg-white text-black font-mono font-black text-xs uppercase tracking-widest transition-all shadow-[6px_6px_0px_#000000] shrink-0"
          >
            EXPLORE ALL REPOSITORIES ➔
          </a>
        </div>
      </div>

      {/* Full-Screen Manga Case Study Dossier Modal */}
      <CaseStudyOverlay project={selectedProject} onClose={handleCloseCaseStudy} />
    </section>
  );
};
