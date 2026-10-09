import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, ArrowUpRight, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SpeechBubble } from '../components/SpeechBubble';
import { mangaSound } from '../utils/sound';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'darkp7435@gmail.com';
  const githubUrl = 'https://github.com/tobi-bro';
  const linkedinUrl = 'https://www.linkedin.com/in/jashwanth8/';

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    mangaSound.playSlash();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] py-20 md:py-32 bg-[#050505] flex flex-col justify-center border-t-4 border-[#D9D9D9] overflow-hidden"
    >
      {/* Background Manga Speedlines & Screentone */}
      <div className="absolute inset-0 bg-speedlines opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-screentone-dense opacity-10 pointer-events-none" />

      {/* Watermark Giant Kanji */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-[20vw] font-black text-white/[0.02] font-['Noto_Sans_JP']">
        終幕
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        {/* Final Chapter Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 bg-black border-2 border-white shadow-[4px_4px_0px_#E10600] mb-6"
        >
          <span className="w-2 h-2 bg-[#E10600]" />
          <span className="text-xs font-mono font-black text-white tracking-[0.25em] uppercase">
            FINAL CHAPTER // TO BE CONTINUED...
          </span>
        </motion.div>

        {/* Narrative Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-xl font-mono text-[#888888] tracking-widest uppercase mb-4"
        >
          &ldquo;Every project is another chapter.&rdquo;
        </motion.p>

        {/* ENORMOUS MANGA TYPOGRAPHY: LET'S BUILD SOMETHING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white font-['Cinzel',_serif] tracking-tighter leading-[0.9] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
            LET&apos;S BUILD <br />
            <span className="text-[#E10600]">SOMETHING.</span>
          </h2>
        </motion.div>

        {/* Speech Bubble: "See you in the next chapter." */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto mb-12"
        >
          <SpeechBubble
            speaker="TOBI"
            variant="shout"
            tailDirection="bottom-left"
            className="text-center"
          >
            <span className="font-['Cinzel',_serif] text-base sm:text-lg font-black tracking-wide text-black">
              &ldquo;See you in the next chapter.&rdquo;
            </span>
          </SpeechBubble>
        </motion.div>

        {/* Direct Action Connection Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* GitHub Button */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mangaSound.playStamp()}
            className="px-6 sm:px-8 py-4 bg-black border-3 border-white hover:border-[#E10600] text-white hover:text-[#E10600] font-mono font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[6px_6px_0px_#ffffff] hover:shadow-[6px_6px_0px_#E10600] flex items-center gap-2.5 cursor-pointer"
          >
            <GithubIcon className="w-5 h-5" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>

          {/* LinkedIn Button */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => mangaSound.playStamp()}
            className="px-6 sm:px-8 py-4 bg-black border-3 border-white hover:border-[#E10600] text-white hover:text-[#E10600] font-mono font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[6px_6px_0px_#ffffff] hover:shadow-[6px_6px_0px_#E10600] flex items-center gap-2.5 cursor-pointer"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>

          {/* Email Me Button */}
          <a
            href={`mailto:${emailAddress}`}
            onClick={() => mangaSound.playSlash()}
            className="px-6 sm:px-8 py-4 bg-[#E10600] hover:bg-white text-black font-mono font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-[6px_6px_0px_#ffffff] hover:shadow-[6px_6px_0px_#E10600] flex items-center gap-2.5 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span>EMAIL ME</span>
            <ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
        </motion.div>

        {/* Display Email Address with Mailto & Copy */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`mailto:${emailAddress}`}
            className="text-xs font-mono text-[#888888] hover:text-white transition-colors underline underline-offset-4"
          >
            Direct Dispatch: {emailAddress}
          </a>
          <span className="hidden sm:inline text-[#444444]">•</span>
          <button
            onClick={handleCopyEmail}
            className="text-xs font-mono text-[#E10600] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className={copied ? 'text-emerald-400 font-bold' : ''}>
              {copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
