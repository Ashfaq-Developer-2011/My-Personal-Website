/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Rocket, Sparkles, User, Camera, Instagram, Mail, Globe } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { ScrollReveal } from './ScrollReveal';
import { MagneticButton } from './MagneticButton';

interface HeroSectionProps {
  profile: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    avatarUrl: string;
    email: string;
    instagramUrl: string;
  };
  isAdminMode: boolean;
  onAvatarUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExploreClick: () => void;
  onProjectsClick: () => void;
}

export function HeroSection({ profile, isAdminMode, onAvatarUpload, onExploreClick, onProjectsClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-neutral-200/50 to-neutral-100/20 dark:from-neutral-900/50 dark:to-neutral-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            
            <ScrollReveal direction="fade" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono tracking-widest text-neutral-600 dark:text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>HELLO, I'M</span>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
                <TextReveal text="MOHAMMED ASHFAQ." delay={0.2} />
              </h1>
              
              <ScrollReveal delay={0.4}>
                <p className="text-xl sm:text-2xl font-medium text-neutral-700 dark:text-neutral-300 font-mono tracking-tight">
                  Student. AI Enthusiast. Future Innovator.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.5}>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl font-normal">
                {profile.bio}
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal delay={0.6} className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton>
                <button
                  onClick={onExploreClick}
                  className="px-7 py-3.5 text-sm font-medium text-white dark:text-neutral-900 bg-neutral-900 dark:bg-white rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Explore My World</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={onProjectsClick}
                  className="px-7 py-3.5 text-sm font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-2"
                >
                  <Rocket className="w-4 h-4 text-neutral-500" />
                  <span>View My Projects</span>
                </button>
              </MagneticButton>
            </ScrollReveal>

            {/* Quick Social & Trust Footer */}
            <ScrollReveal delay={0.7} className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-6 text-xs text-neutral-500 font-mono">
              <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a href={`mailto:${profile.email}`} className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
              <a href="https://idealhighschool.org/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Ideal High School Media Partner</span>
              </a>
            </ScrollReveal>

          </div>

          {/* Right Column: Profile Composition & Interactive Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ScrollReveal direction="right" delay={0.3} className="w-full">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl group">
                
                {profile.avatarUrl ? (
                  <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950">
                    <div className="w-28 h-28 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center mb-6 shadow-md">
                      <User className="w-12 h-12 text-neutral-600 dark:text-neutral-300" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Mohammed Ashfaq</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Student & Developer Portfolio</p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-4 italic max-w-xs">
                      Upload your official photograph in Edit Mode to display it here.
                    </p>
                  </div>
                )}

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs">
                      NASA
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">Space Apps Challenge</div>
                      <div className="text-[10px] text-neutral-500">Galactic Problem Solver</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    2026
                  </span>
                </div>

                {isAdminMode && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex flex-col items-center justify-center">
                    <label className="cursor-pointer px-5 py-3 bg-white text-neutral-900 font-medium text-xs rounded-full shadow-xl hover:bg-neutral-50 flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      <span>Upload Profile Photo</span>
                      <input type="file" accept="image/*" onChange={onAvatarUpload} className="hidden" />
                    </label>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

    </section>
  );
}
