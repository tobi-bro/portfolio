import React from 'react';
import { motion } from 'framer-motion';

interface SpeechBubbleProps {
  children: React.ReactNode;
  speaker?: string;
  variant?: 'speech' | 'thought' | 'shout' | 'terminal';
  tailDirection?: 'bottom-left' | 'bottom-right' | 'left' | 'none';
  className?: string;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  speaker,
  variant = 'speech',
  tailDirection = 'bottom-left',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'thought':
        return 'bg-[#F4F1EA] text-[#050505] border-2 border-dashed border-[#111111] rounded-3xl';
      case 'shout':
        return 'bg-[#F4F1EA] text-[#050505] border-3 border-[#050505] shadow-[6px_6px_0px_#E10600] font-black tracking-wide';
      case 'terminal':
        return 'bg-[#0D0D0D] text-[#D9D9D9] border-2 border-[#E10600] font-mono shadow-[4px_4px_0px_#1B1B1B]';
      case 'speech':
      default:
        return 'bg-[#F4F1EA] text-[#050505] border-2 border-[#050505] shadow-[5px_5px_0px_#000000]';
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.94, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`relative p-3.5 sm:p-5 text-sm sm:text-base leading-snug ${getVariantStyles()} ${className}`}
    >
      {speaker && (
        <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[#050505] text-[#F4F1EA] text-[10px] font-mono tracking-widest uppercase border border-[#333333]">
          {speaker}
        </div>
      )}

      {children}

      {/* Comic speech bubble tail */}
      {tailDirection === 'bottom-left' && variant === 'speech' && (
        <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#050505]">
          <div className="absolute -top-[13px] -left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#F4F1EA]" />
        </div>
      )}

      {tailDirection === 'bottom-right' && variant === 'speech' && (
        <div className="absolute -bottom-3 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#050505]">
          <div className="absolute -top-[13px] -left-[6px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#F4F1EA]" />
        </div>
      )}
    </motion.div>
  );
};
