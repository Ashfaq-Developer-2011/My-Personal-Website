/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Rocket, Globe, ExternalLink, ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import { ScrollReveal } from './ScrollReveal';

interface SocialLinksProps {
  instagramUrl: string;
}

export function SocialLinks({ instagramUrl }: SocialLinksProps) {
  const socials = [
    {
      title: 'Instagram Profile',
      subtitle: 'mohammed.ashfaq.2011',
      url: instagramUrl,
      icon: Instagram,
      description: 'Official personal Instagram profile for updates and creative moments.',
      color: 'text-pink-500'
    },
    {
      title: 'Oops! I\'m an Astronaut',
      subtitle: 'oops-im-an-astronaut.vercel.app',
      url: 'https://oops-im-an-astronaut.vercel.app/',
      icon: Rocket,
      description: 'Play the NASA Space Apps Challenge astronaut training game live.',
      color: 'text-amber-500'
    },
    {
      title: 'NASA Space Apps Challenge',
      subtitle: 'spaceappschallenge.org',
      url: 'https://www.spaceappschallenge.org/',
      icon: Globe,
      description: 'Official global hackathon and space exploration challenge portal.',
      color: 'text-blue-500'
    },
    {
      title: 'Ideal High School',
      subtitle: 'idealhighschool.org',
      url: 'https://idealhighschool.org/',
      icon: Globe,
      description: 'Official website for Ideal High School media partnership.',
      color: 'text-emerald-500'
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="max-w-xl space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Connections & Portals</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Find me around the internet.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                  <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-6 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all">
                    
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2">
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-xs font-mono text-neutral-500">{item.subtitle}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>External Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>

                  </SpotlightCard>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
