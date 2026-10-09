import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillItem, SkillStatus } from '../types';
import { 
  Terminal, 
  Zap, 
  Database, 
  Code, 
  Server, 
  Network, 
  ShieldAlert, 
  Box, 
  GitBranch, 
  Cpu, 
  Cloud, 
  Compass, 
  Layers, 
  FileCode, 
  Layout,
  ChevronDown
} from 'lucide-react';
import { mangaSound } from '../utils/sound';

interface SkillPanelProps {
  skill: SkillItem;
  index: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Terminal,
  Zap,
  Database,
  Code,
  Server,
  Network,
  ShieldAlert,
  Box,
  GitBranch,
  Cpu,
  Cloud,
  Compass,
  Layers,
  FileCode,
  Layout
};

export const SkillPanel: React.FC<SkillPanelProps> = ({ skill, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = ICON_MAP[skill.iconName] || Terminal;

  const getStatusColor = (status: SkillStatus) => {
    switch (status) {
      case 'PROJECT EXPERIENCE':
        return 'bg-[#E10600] text-black border-[#E10600]';
      case 'BUILDING':
        return 'bg-white text-black border-white';
      case 'PRACTICING':
        return 'bg-[#222222] text-[#D9D9D9] border-[#555555]';
      case 'LEARNING':
        return 'bg-transparent text-[#999999] border-[#444444]';
    }
  };

  const handleToggle = () => {
    mangaSound.playStamp();
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      onMouseEnter={() => mangaSound.playPageTurn()}
      onClick={handleToggle}
      className={`relative group cursor-pointer transition-all duration-300 border-2 ${
        isExpanded ? 'border-[#E10600] bg-[#0E0E0E]' : 'border-[#262626] bg-[#0A0A0A] hover:border-[#D9D9D9]'
      } shadow-[5px_5px_0px_#000000]`}
    >
      {/* Ability Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-[#222222] bg-[#050505]/70 text-[10px] font-mono tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="text-[#E10600] font-bold">
            ABILITY #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[#666666]">// {skill.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-['Noto_Sans_JP'] text-xs font-bold text-white/50">
            {skill.kanji}
          </span>
          <span className="text-[#E10600] text-[9px] font-bold hidden sm:inline">
            {skill.levelBadge}
          </span>
        </div>
      </div>

      {/* Main Ability Info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#141414] border border-[#333333] group-hover:border-[#E10600] transition-colors text-[#F4F1EA]">
              <IconComponent className="w-5 h-5 text-[#D9D9D9] group-hover:text-[#E10600] transition-colors" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-['Cinzel',_serif] group-hover:text-[#E10600] transition-colors">
                {skill.name}
              </h3>
              <p className="text-[11px] font-mono text-[#777777] uppercase tracking-wide">
                {skill.category} MASTERY
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex flex-col items-end gap-1">
            <span
              className={`px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest border uppercase transition-colors ${getStatusColor(
                skill.status
              )}`}
            >
              {skill.status}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#777777] transition-transform duration-300 ${
                isExpanded ? 'rotate-180 text-[#E10600]' : 'group-hover:text-white'
              }`}
            />
          </div>
        </div>

        {/* Short Summary */}
        <p className="mt-3 text-xs sm:text-sm text-[#A0A0A0] leading-relaxed line-clamp-2">
          {skill.description}
        </p>

        {/* Expanded Manga Dossier Breakdown */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 pt-4 border-t border-[#222222] space-y-3 font-mono text-xs overflow-hidden"
            >
              <div className="bg-[#121212] p-3 border-l-2 border-[#E10600]">
                <div className="text-[10px] text-[#E10600] font-bold tracking-widest uppercase mb-1">
                  WHAT I USE IT FOR:
                </div>
                <div className="text-[#D9D9D9] leading-relaxed">
                  {skill.useCase}
                </div>
              </div>

              <div className="bg-[#121212] p-3 border-l-2 border-white">
                <div className="text-[10px] text-white font-bold tracking-widest uppercase mb-1">
                  RELATED PROJECT IN ARCHIVE:
                </div>
                <div className="text-[#999999] leading-relaxed">
                  {skill.relatedProject}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#666666] pt-1">
                <span>STATUS VERIFIED // BATTLE TESTED</span>
                <span className="text-[#E10600] font-bold">CLICK TO COLLAPSE ▲</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Speed line watermark accent */}
      <div className="absolute right-0 bottom-0 w-16 h-8 bg-speedlines opacity-10 pointer-events-none" />
    </motion.div>
  );
};
