/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowUpRight, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface ProjectShowcaseProps {
  imageUrl?: string;
  onUploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAdminMode?: boolean;
}

export function ProjectShowcase({ imageUrl, onUploadImage, isAdminMode }: ProjectShowcaseProps) {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Featured Showcase</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Oops! I'm an Astronaut
            </h2>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
            NASA Space Apps Challenge 2026 participant project designed for interactive astronaut training and space education.
          </div>
        </div>

        {/* Dominant Showcase Card */}
        <ScrollReveal>
          <div className="rounded-[2.5rem] bg-neutral-900 text-white overflow-hidden border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-amber-400 font-semibold">NASA Space Apps Challenge</span>
                  <span>·</span>
                  <span>Junior Astronaut Mission Trainer</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Educational Astronaut Training & Space Exploration Game
                </h3>

                <p className="text-neutral-300 text-base leading-relaxed">
                  "An educational astronaut training game developed for the NASA Space Apps Challenge, designed to introduce students to astronaut training and space exploration through interactive gameplay."
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['React 19', 'TypeScript', 'Tailwind CSS', 'Simulation Engine', 'NASA APIs'].map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-neutral-800 text-neutral-200 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-neutral-800 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a
                    href="https://oops-im-an-astronaut.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-neutral-900 text-xs font-semibold rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-lg"
                  >
                    <Rocket className="w-4 h-4 text-amber-600" />
                    <span>View Live Game</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://www.spaceappschallenge.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-neutral-800 text-white text-xs font-medium rounded-full hover:bg-neutral-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>NASA Space Apps Challenge</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </MagneticButton>
              </div>

            </div>

            {/* Right Visual / Screenshot area */}
            <div className="lg:col-span-5 bg-neutral-950 p-8 flex flex-col items-center justify-center relative min-h-[360px] border-l border-neutral-800">
              {imageUrl ? (
                <img src={imageUrl} alt="Oops! I'm an Astronaut" className="w-full h-full object-cover rounded-2xl shadow-xl" />
              ) : (
                <div className="text-center p-8 space-y-4">
                  <div className="w-20 h-20 rounded-3xl bg-neutral-900 border border-neutral-700 flex items-center justify-center mx-auto shadow-inner">
                    <Rocket className="w-10 h-10 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Oops! I'm an Astronaut</h4>
                    <p className="text-xs text-neutral-400 mt-1">Interactive Simulation Preview</p>
                  </div>
                  <a
                    href="https://oops-im-an-astronaut.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-medium rounded-full border border-neutral-700 transition-colors"
                  >
                    <span>Open Live App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
