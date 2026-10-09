import React from 'react';
import { ArrowUp } from 'lucide-react';
import { mangaSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    mangaSound.playSlash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-4 border-black bg-[#0A0A0A] py-12 text-[#888888] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#202020]">
          {/* Brand & Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 bg-[#E10600] inline-block" />
              <span className="font-['Cinzel',_serif] font-black text-xl text-white tracking-tight">
                TOBI // THE DEVELOPER
              </span>
            </div>
            <div className="text-[11px] text-[#A0A0A0] tracking-widest uppercase">
              BACKEND &bull; DEVOPS &bull; DEVSECOPS
            </div>
          </div>

          {/* Handwritten Annotation: TO BE CONTINUED... & Quick Socials */}
          <div className="text-center space-y-2">
            <span className="font-['Permanent_Marker',_cursive] text-2xl text-[#E10600] tracking-wider rotate-[-2deg] inline-block">
              &ldquo;TO BE CONTINUED...&rdquo;
            </span>
            <div className="flex items-center justify-center gap-3 text-[11px] font-mono">
              <a
                href="https://github.com/tobi-bro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#E10600] transition-colors"
              >
                GITHUB
              </a>
              <span className="text-[#333333]">•</span>
              <a
                href="https://www.linkedin.com/in/jashwanth8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#E10600] transition-colors"
              >
                LINKEDIN
              </a>
              <span className="text-[#333333]">•</span>
              <a
                href="mailto:darkp7435@gmail.com"
                className="text-[#888888] hover:text-[#E10600] transition-colors"
              >
                EMAIL
              </a>
            </div>
            <div className="text-[10px] text-[#555555] uppercase tracking-widest mt-1">
              CHAPTER 07 IN PRODUCTION // NEXT SPRINT
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#141414] hover:bg-white text-[#999999] hover:text-black border border-[#333333] transition-all cursor-pointer text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000000]"
          >
            <span>RETURN TO COVER</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Editorial Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#555555]">
          <div>
            &copy; {new Date().getFullYear()} TOBI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>INK &amp; CODE PUBLICATION</span>
            <span>&bull;</span>
            <span>COMPILED WITH VITE &amp; REACT</span>
            <span>&bull;</span>
            <span className="text-[#E10600]">ZERO COMPROMISE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
