/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
}

export function LiquidGlassButton({ children, onClick, href, target, rel, variant = 'primary', className = '' }: LiquidGlassButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:bg-neutral-800 dark:hover:bg-neutral-100';
      case 'secondary':
        return 'bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm hover:bg-white dark:hover:bg-neutral-900';
      case 'glass':
        return 'bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl text-neutral-900 dark:text-white border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:bg-white/60 dark:hover:bg-neutral-900/60';
    }
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`relative px-7 py-3.5 rounded-full font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-2 overflow-hidden ${getStyles()} ${className}`}
    >
      {/* Internal Shimmer Highlight */}
      <span className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
