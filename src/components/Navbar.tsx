import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Volume2, VolumeX, Shield, Radio } from 'lucide-react';
import { mangaSound } from '../utils/sound';

interface NavItem {
  label: string;
  href: string;
  chapter: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home', chapter: 'CH.01' },
  { label: 'ABOUT', href: '#about', chapter: 'CH.02' },
  { label: 'SKILLS', href: '#skills', chapter: 'CH.03' },
  { label: 'PROJECTS', href: '#projects', chapter: 'CH.04' },
  { label: 'BATTLE LOG', href: '#battle-log', chapter: 'CH.05' },
  { label: 'GITHUB', href: '#github', chapter: 'CH.06' },
  { label: 'CONTACT', href: '#contact', chapter: 'FINAL' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundActive, setSoundActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    mangaSound.playPageTurn();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newState = mangaSound.toggle();
    setSoundActive(newState);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b-2 border-[#262626] shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
            : 'bg-[#050505]/80 backdrop-blur-sm border-b border-[#1E1E1E]'
        }`}
      >
        {/* Top Editorial Microstrip */}
        <div className="hidden sm:flex items-center justify-between px-4 sm:px-8 py-1 border-b border-[#161616] text-[9px] font-mono tracking-widest text-[#666666] uppercase">
          <div className="flex items-center gap-3">
            <span>TOBI // DEV ARCHIVE</span>
            <span className="text-[#333333]">|</span>
            <span>ISSUE #2026</span>
            <span className="text-[#333333]">|</span>
            <span className="text-[#E10600]">SERIALIZATION: ACTIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              BACKEND RUNTIME: NORMAL
            </span>
            <button
              onClick={toggleSound}
              className="flex items-center gap-1 text-[#888888] hover:text-[#E10600] transition-colors cursor-pointer"
              title="Toggle Manga Sound Effects"
            >
              {soundActive ? (
                <>
                  <Volume2 className="w-3 h-3 text-[#E10600]" />
                  <span className="text-[#E10600]">SFX: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3 h-3" />
                  <span>SFX: OFF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3"
          >
            <div className="relative w-9 h-9 bg-black border-2 border-white group-hover:border-[#E10600] transition-colors flex items-center justify-center shadow-[3px_3px_0px_#ffffff] group-hover:shadow-[3px_3px_0px_#E10600]">
              <span className="font-['Cinzel',_serif] font-black text-lg text-white group-hover:text-[#E10600]">
                T
              </span>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#E10600]" />
            </div>

            <div className="flex flex-col">
              <span className="font-['Cinzel',_serif] font-black text-xl tracking-tight text-white group-hover:text-[#E10600] transition-colors">
                TOBI
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#777777] uppercase -mt-1">
                THE DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-1.5 font-mono text-xs font-semibold tracking-wider transition-all duration-200 group ${
                    isActive ? 'text-white' : 'text-[#888888] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[9px] text-[#E10600] opacity-60 group-hover:opacity-100 font-mono">
                      {item.chapter}
                    </span>
                    <span>{item.label}</span>
                  </span>

                  {/* Brush-stroke style underline on active/hover */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavStroke"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#E10600]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              );
            })}
          </nav>

          {/* Right Status Indicator */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#101010] border border-[#333333] font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
              <span className="font-black tracking-widest text-white uppercase text-[11px]">
                ● ONLINE
              </span>
            </div>
          </div>

          {/* Mobile Menu & Sound Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSound}
              className="p-2 border border-[#333333] text-[#888888] hover:text-[#E10600]"
              aria-label="Toggle Sound"
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-[#E10600]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                mangaSound.playStamp();
                setIsOpen(!isOpen);
              }}
              className="p-2 border-2 border-white bg-black text-white hover:border-[#E10600] hover:text-[#E10600] transition-colors shadow-[3px_3px_0px_#ffffff]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Manga Panel Page Flip) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#0A0A0A] border-l-4 border-white flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Speed lines watermark */}
            <div className="absolute inset-0 bg-speedlines opacity-30 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="border-b-2 border-[#E10600] pb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#E10600]">
                    CHAPTER INDEX
                  </div>
                  <h3 className="text-2xl font-black font-['Cinzel',_serif] text-white">
                    NAVIGATION DOSSIER
                  </h3>
                </div>
                <div className="px-2.5 py-1 bg-[#161616] border border-[#333333] font-mono text-xs text-white">
                  ● ONLINE
                </div>
              </div>

              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between p-3 border-2 border-[#202020] hover:border-[#E10600] bg-[#101010] text-left transition-colors group shadow-[3px_3px_0px_#000000]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 bg-[#E10600] text-black font-mono font-bold text-[10px]">
                        {item.chapter}
                      </span>
                      <span className="text-lg font-bold font-['Cinzel',_serif] text-white group-hover:text-[#E10600]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#666666] group-hover:text-white">
                      ➔
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#222222] text-xs font-mono text-[#777777] flex items-center justify-between">
              <span>TOBI // DEV ARCHIVE</span>
              <span className="text-[#E10600]">TO BE CONTINUED...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
