/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe, ExternalLink, Rocket } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function AnimatedTimeline() {
  const experiences = [
    {
      id: 'nasa',
      title: 'NASA Space Apps Challenge 2026',
      role: 'Participant',
      recognition: 'Galactic Problem Solver',
      project: "Oops! I'm an Astronaut",
      projectLink: 'https://oops-im-an-astronaut.vercel.app/',
      period: 'November 2026',
      description: "Participated in the annual NASA Space Apps Challenge developing the 'Oops! I'm an Astronaut' educational game designed to introduce students to astronaut training.",
      icon: Rocket,
      badgeColor: 'text-amber-500 bg-amber-500/10'
    },
    {
      id: 'ideal',
      title: 'Ideal High School',
      role: 'Media Partner',
      website: 'https://idealhighschool.org/',
      period: '2024 – Present',
      description: 'Serving as Media Partner for Ideal High School, contributing digital media production, website management, and school community documentation.',
      icon: Globe,
      badgeColor: 'text-blue-500 bg-blue-500/10'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Timeline & Recognition</div>
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experience & Affiliations
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-neutral-300 dark:border-neutral-800 ml-4 sm:ml-8 space-y-12 py-4">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <ScrollReveal key={exp.id} delay={idx * 0.2} className="relative pl-8 sm:pl-12">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white flex items-center justify-center shadow-md">
                  <Icon className={`w-4 h-4 ${exp.badgeColor.split(' ')[0]}`} />
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                        {exp.id === 'ideal' ? (
                          <a href={exp.website} target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1.5 text-neutral-900 dark:text-white">
                            <span>{exp.title}</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          exp.title
                        )}
                      </h3>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.badgeColor} self-start sm:self-auto`}>
                      {exp.role}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.recognition && (
                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>Recognition: {exp.recognition}</span>
                      </div>

                      {exp.projectLink && (
                        <a
                          href={exp.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
                        >
                          <span>Play: {exp.project}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                </div>

              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
