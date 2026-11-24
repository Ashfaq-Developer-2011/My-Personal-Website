/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Rocket, Globe } from 'lucide-react';

interface AnimatedFooterProps {
  instagramUrl: string;
  onNavigate: (id: string) => void;
}

export function AnimatedFooter({ instagramUrl, onNavigate }: AnimatedFooterProps) {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-neutral-200 dark:border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
        
        {/* Brand Monogram */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-mono font-bold text-sm">
              MA
            </div>
            <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">Mohammed Ashfaq</span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
            Student developer, AI enthusiast, and NASA Space Apps Challenge participant. Building minimalist, high-impact digital experiences.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Navigation</div>
          <ul className="space-y-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {['home', 'about', 'experience', 'projects', 'contact'].map((sec) => (
              <li key={sec}>
                <button onClick={() => onNavigate(sec)} className="hover:text-neutral-900 dark:hover:text-white capitalize transition-colors">
                  {sec}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">Featured Portals</div>
          <ul className="space-y-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <li>
              <a href="https://oops-im-an-astronaut.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5 text-amber-500" />
                <span>Oops! I'm an Astronaut Game</span>
              </a>
            </li>
            <li>
              <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>NASA Space Apps Challenge</span>
              </a>
            </li>
            <li>
              <a href="https://idealhighschool.org/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span>Ideal High School Partner</span>
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>Instagram Profile</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-4">
        <div>&copy; {new Date().getFullYear()} Mohammed Ashfaq. All rights reserved.</div>
        <div>Designed with Apple-Inspired Minimalism</div>
      </div>
    </footer>
  );
}
