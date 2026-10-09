import React from 'react';
import { motion } from 'framer-motion';

interface MangaPanelProps {
  children: React.ReactNode;
  panelNumber?: string;
  categoryTag?: string;
  kanjiStamp?: string;
  variant?: 'ink' | 'paper' | 'dark' | 'screentone';
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const MangaPanel: React.FC<MangaPanelProps> = ({
  children,
  panelNumber,
  categoryTag,
  kanjiStamp,
  variant = 'dark',
  className = '',
  onClick,
  hoverEffect = true
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'paper':
        return 'paper-texture text-black border-2 border-black';
      case 'screentone':
        return 'bg-[#111111] bg-screentone-dense border-2 border-[#D9D9D9] text-[#F4F1EA]';
      case 'ink':
        return 'bg-[#050505] border-2 border-[#D9D9D9] text-[#D9D9D9]';
      case 'dark':
      default:
        return 'bg-[#0D0D0D] border-2 border-[#2A2A2A] text-[#D9D9D9]';
    }
  };

  return (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -4,
              borderColor: '#E10600',
              boxShadow: '8px 8px 0px #000000',
              transition: { duration: 0.2 }
            }
          : undefined
      }
      onClick={onClick}
      className={`relative group overflow-hidden ${getVariantStyles()} ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Editorial Panel Header Ribbon */}
      {(panelNumber || categoryTag || kanjiStamp) && (
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-inherit bg-black/40 text-[10px] font-mono tracking-widest uppercase select-none">
          <div className="flex items-center gap-2">
            {panelNumber && (
              <span className="font-bold text-[#E10600]">{panelNumber}</span>
            )}
            {categoryTag && (
              <span className="text-[#888888]">// {categoryTag}</span>
            )}
          </div>
          {kanjiStamp && (
            <span className="font-['Noto_Sans_JP'] font-bold text-xs text-[#E10600]/80">
              {kanjiStamp}
            </span>
          )}
        </div>
      )}

      {/* Panel Inner Content */}
      <div className="p-4 sm:p-6 relative z-10">{children}</div>

      {/* Screentone corner accent */}
      <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-20 bg-screentone-red" />
    </motion.div>
  );
};
