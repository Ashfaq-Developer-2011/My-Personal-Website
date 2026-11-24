/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SectionIndicatorProps {
  activeSection: string;
  onSelect: (id: string) => void;
}

export function SectionIndicator({ activeSection, onSelect }: SectionIndicatorProps) {
  const sections = ['home', 'about', 'experience', 'projects', 'contact'];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      {sections.map((sec) => (
        <button
          key={sec}
          onClick={() => {
            onSelect(sec);
            document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`w-3 h-3 rounded-full transition-all ${
            activeSection === sec
              ? 'bg-neutral-900 dark:bg-white scale-125'
              : 'bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
          }`}
          aria-label={`Scroll to ${sec}`}
        />
      ))}
    </div>
  );
}
