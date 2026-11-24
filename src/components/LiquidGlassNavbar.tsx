/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LiquidGlassButton } from './LiquidGlassButton';

interface LiquidGlassNavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export function LiquidGlassNavbar({ activeSection, setActiveSection }: LiquidGlassNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center"
      >
        <div className="max-w-4xl w-full mx-auto px-6 h-16 rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-between gap-6 relative">
          
          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />

          {/* Brand Monogram */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-mono text-xs font-bold">
              MA
            </span>
            <span className="hidden sm:inline">Mohammed Ashfaq</span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap relative py-1 ${
                  activeSection === link.id ? 'text-neutral-900 dark:text-white font-semibold' : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="glassNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action */}
          <div className="flex items-center gap-3 shrink-0">
            <LiquidGlassButton href="#contact" variant="primary">
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </LiquidGlassButton>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-900 dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#fafafa]/90 dark:bg-[#050505]/90 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Navigation</div>
              <div className="flex flex-col space-y-4 text-3xl font-bold">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left py-2 text-neutral-900 dark:text-white hover:opacity-60 transition-opacity"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
