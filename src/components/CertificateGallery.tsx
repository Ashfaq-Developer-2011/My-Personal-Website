/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Camera, Eye } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CertificateLightbox } from './CertificateLightbox';

interface CertificateGalleryProps {
  certificateUrl?: string;
  onUploadCertificate?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAdminMode?: boolean;
}

export function CertificateGallery({ certificateUrl, onUploadCertificate, isAdminMode }: CertificateGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-24 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">Achievements & Credentials</div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Galactic Problem Solver
            </h2>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
            Official recognition from the 2026 NASA Space Apps Challenge for Mohammed Ashfaq.
          </div>
        </div>

        {/* Certificate Card */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 space-y-8 shadow-sm">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">NASA Space Apps Challenge</h3>
                  <p className="text-xs font-mono text-neutral-500 mt-0.5">November 14–15, 2026 · Recipient: Mohammed Ashfaq</p>
                </div>
              </div>

              <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold self-start sm:self-auto">
                Galactic Problem Solver
              </span>
            </div>

            {/* Thumbnail Preview Box */}
            <div 
              onClick={() => setLightboxOpen(true)}
              className="aspect-[4/3] rounded-2xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 overflow-hidden relative cursor-pointer group shadow-inner flex items-center justify-center"
            >
              {certificateUrl ? (
                <img src={certificateUrl} alt="NASA Certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="text-center p-8 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mx-auto shadow-sm">
                    <Award className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-white">NASA Space Apps Certificate</h4>
                    <p className="text-xs text-neutral-500 mt-1">Click to view full certificate</p>
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-xs">
                <Eye className="w-4 h-4" />
                <span>Click to Expand Certificate</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                onClick={() => setLightboxOpen(true)}
                className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Open Certificate Lightbox</span>
              </button>

              {isAdminMode && (
                <label className="cursor-pointer px-5 py-3 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-medium rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 inline-flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span>{certificateUrl ? 'Change Certificate Image' : 'Upload Certificate Image'}</span>
                  <input type="file" accept="image/*" onChange={onUploadCertificate} className="hidden" />
                </label>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>

      <CertificateLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        certificateUrl={certificateUrl}
        title="Galactic Problem Solver Recognition"
        recipient="Mohammed Ashfaq"
        date="November 14–15, 2026"
      />
    </section>
  );
}
