/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Instagram, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface InteractiveCTAProps {
  email: string;
  instagramUrl: string;
}

export function InteractiveCTA({ email, instagramUrl }: InteractiveCTAProps) {
  return (
    <section id="contact" className="py-28 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-10 relative z-10">
        
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800 text-amber-400 text-xs font-mono tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Let's turn curiosity into something meaningful.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Always exploring, always learning, always building. Get in touch for media partnerships, space apps collaboration, or project inquiries.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <MagneticButton>
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-xl"
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neutral-800 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors inline-flex items-center gap-2 border border-neutral-700"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Instagram Message</span>
            </a>
          </MagneticButton>
        </ScrollReveal>

      </div>
    </section>
  );
}
