/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Sparkles, Globe, Terminal, Layers, Cpu, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';

interface BentoGridProps {
  onGameClick: () => void;
}

export function BentoGrid({ onGameClick }: BentoGridProps) {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="max-w-xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Capabilities & Focus</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            A little about what I do.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI & Technology */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-8 bg-white dark:bg-neutral-900">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">AI & Technology</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Exploring artificial intelligence, modern developer toolsets, and emerging technologies to build smarter applications.
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400">01 // INNOVATION</div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 2: Creative Development */}
          <ScrollReveal delay={0.2}>
            <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-8 bg-white dark:bg-neutral-900">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Creative Development</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Turning creative ideas into digital experiences with React, TypeScript, and Apple-inspired minimalist design principles.
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400">02 // ENGINEERING</div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 3: NASA Space Apps */}
          <ScrollReveal delay={0.3}>
            <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-8 bg-white dark:bg-neutral-900">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                  <Rocket className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">NASA Space Apps</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Official participation in the 2026 NASA Space Apps Challenge, developing educational space exploration tools.
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400">03 // CHALLENGE</div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 4: Featured Project - Oops! I'm an Astronaut (Spans 2 columns on md) */}
          <ScrollReveal delay={0.4} className="md:col-span-2">
            <SpotlightCard className="p-8 sm:p-12 h-full flex flex-col justify-between space-y-8 bg-gradient-to-br from-neutral-900 to-neutral-950 text-white border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-3 max-w-lg">
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Project</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">Oops! I'm an Astronaut</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    An educational astronaut training game developed for the NASA Space Apps Challenge, introducing students to space exploration through interactive gameplay.
                  </p>
                </div>

                <a
                  href="https://oops-im-an-astronaut.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-neutral-900 text-xs font-semibold rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-lg"
                >
                  <span>Launch Live Game</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>NASA Space Apps Challenge Entry</span>
                <span>Live on Vercel</span>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Card 5: Media Partnership */}
          <ScrollReveal delay={0.5}>
            <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-8 bg-white dark:bg-neutral-900">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Media Partnership</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Proudly serving as Media Partner for <a href="https://idealhighschool.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-neutral-900 dark:hover:text-white">Ideal High School</a>.
                </p>
              </div>
              <div className="text-xs font-mono text-neutral-400">05 // COMMUNITY</div>
            </SpotlightCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
