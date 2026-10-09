import React, { useState } from 'react';
import { ChapterTitle } from '../components/ChapterTitle';
import { SkillPanel } from '../components/SkillPanel';
import { SKILLS } from '../data/skills';
import { mangaSound } from '../utils/sound';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Backend', 'DevOps', 'Security', 'Database', 'Languages'];

  const filteredSkills =
    selectedCategory === 'ALL'
      ? SKILLS
      : SKILLS.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategoryChange = (category: string) => {
    mangaSound.playStamp();
    setSelectedCategory(category);
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Background speed lines */}
      <div className="absolute inset-0 bg-speedlines-diagonal opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter 03 Title */}
        <ChapterTitle
          chapter="CHAPTER 03"
          title="THE TRAINING ARC"
          subtitle="COMBAT ARSENAL & ABILITY MATRICES"
          kanji="修練"
          description="Every skill forged through deliberate practice, debugging battles, and active production code. No arbitrary percentages—only real status and architectures."
        />

        {/* Tactical Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-[#202020]">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E10600] text-black shadow-[4px_4px_0px_#ffffff]'
                      : 'bg-[#121212] hover:bg-[#1E1E1E] text-[#888888] hover:text-white border border-[#2B2B2B]'
                  }`}
                >
                  {cat === 'ALL' ? 'ALL ABILITIES (15)' : cat}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-[#666666] flex items-center gap-3">
            <span>
              STATUS LEGEND: <span className="text-[#E10600] font-bold">PROJECT EXP</span> &bull;{' '}
              <span className="text-white font-bold">BUILDING</span> &bull;{' '}
              <span className="text-[#999999]">PRACTICING</span>
            </span>
          </div>
        </div>

        {/* Ability Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <SkillPanel key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-12 p-4 bg-[#0A0A0A] border-2 border-[#222222] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#777777]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E10600]" />
            <span className="text-[#D9D9D9] font-bold">RECRUITER NOTE:</span>
            <span>Click any ability panel to expand technical use-cases and project citations.</span>
          </div>
          <span className="text-[#555555]">TRAINING ARC LEVEL // ACTIVE ACCUMULATION</span>
        </div>
      </div>
    </section>
  );
};
