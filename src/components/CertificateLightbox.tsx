/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink } from 'lucide-react';

interface CertificateLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl?: string;
  title: string;
  recipient: string;
  date: string;
}

export function CertificateLightbox({ isOpen, onClose, certificateUrl, title, recipient, date }: CertificateLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-neutral-900 rounded-[2rem] max-w-3xl w-full p-6 sm:p-8 space-y-6 relative border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>NASA Space Apps Challenge Recognition</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{title}</h3>
              <p className="text-xs text-neutral-500">Recipient: {recipient} · {date}</p>
            </div>

            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden flex items-center justify-center">
              {certificateUrl ? (
                <img src={certificateUrl} alt={title} className="w-full h-full object-contain" />
              ) : (
                <div className="text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white">Galactic Problem Solver Certificate</h4>
                    <p className="text-xs text-neutral-500 mt-1">2026 NASA Space Apps Challenge</p>
                  </div>
                  <p className="text-xs text-neutral-400 italic">Upload official certificate image in admin mode.</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 text-xs font-mono text-neutral-500">
              <span>Press ESC or click outside to close</span>
              <a href="https://www.spaceappschallenge.org/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                <span>NASA Space Apps Official</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
