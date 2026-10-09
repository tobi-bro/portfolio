import React from 'react';
import { DEVELOPER_STATS } from '../data/stats';
import { Terminal, Database, GitBranch, Cpu, Code } from 'lucide-react';

export const StatsHud: React.FC = () => {
  return (
    <div className="border-4 border-[#D9D9D9] bg-[#0E0E0E] p-6 sm:p-8 shadow-[10px_10px_0px_#000000]">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b-2 border-[#262626] pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#E10600] inline-block" />
          <span className="font-bold text-white uppercase tracking-widest">
            OPERATIONAL TELEMETRY // STATS HUD
          </span>
        </div>
        <span className="text-[#777777] text-[10px]">
          GITHUB API HOOK: READY FOR SYNC
        </span>
      </div>

      {/* Grid of Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {DEVELOPER_STATS.map((stat) => (
          <div
            key={stat.id}
            className={`p-4 border-2 ${
              stat.status === 'PENDING_API'
                ? 'border-[#2D2D2D] bg-[#080808]'
                : 'border-white bg-[#121212]'
            } flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#777777] mb-1">
                <span>{stat.kanji}</span>
                {stat.status === 'PENDING_API' && (
                  <span className="text-[#E10600] font-bold">API STUB</span>
                )}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-['Cinzel',_serif] tracking-tight">
                {stat.value}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#222222]">
              <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[9px] font-mono text-[#888888] mt-0.5 truncate">
                {stat.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#1F1F1F] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#666666]">
        <span>HONEST ARCHITECTURE: ZERO FABRICATED DATA</span>
        <span className="text-[#888888]">REPOSITORIES & COMMITS LINK DIRECTLY TO AUTHENTIC WORK</span>
      </div>
    </div>
  );
};
