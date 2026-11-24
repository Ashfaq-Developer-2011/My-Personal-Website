/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Edit3 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface AnimatedNavbarProps {
  isAdminMode: boolean;
  setIsAdminMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export function AnimatedNavbar({ isAdminMode, setIsAdminMode, activeSection, setActiveSection }: AnimatedNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#fafafa]/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-neutral-200/80 dark:border-neutral-800/80"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap shrink-0 text-left hover:opacity-80 transition-opacity group flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center text-xs font-mono font-bold">
              MA
            </span>
            <span>Mohammed Ashfaq</span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 ${
                  activeSection === link.id ? 'text-neutral-900 dark:text-white font-semibold' : ''
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 dark:bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Admin Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                isAdminMode
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isAdminMode ? 'Exit Editor' : 'Edit Portfolio'}</span>
            </button>

            <MagneticButton>
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden sm:inline-flex px-5 py-2.5 text-xs font-medium text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 items-center gap-1.5 shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-900 dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#fafafa] dark:bg-[#050505] pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Navigation</div>
              <div className="flex flex-col space-y-4 text-2xl font-bold">
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
                className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-2xl flex items-center justify-center gap-2"
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
