/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, tagline, description, category, technologies, imageUrl, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <SpotlightCard className="h-full flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
      
      {/* Card Header Image */}
      <div className="aspect-[16/9] bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">{category}</span>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-white mt-2">{title}</h4>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="text-xs font-mono text-neutral-500">{category}</div>
          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">Mohammed Ashfaq</span>
          <div className="flex items-center gap-3">
            {githubUrl && githubUrl !== '#' && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                <Github className="w-4 h-4" />
              </a>
            )}
            {liveUrl && liveUrl !== '#' && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

    </SpotlightCard>
  );
}
