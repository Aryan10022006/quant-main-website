'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import PreLoader from '@/components/layout/PreLoader';

// Lazy load sections
const HeroSectionV2 = dynamic(() => import('@/components/sections/HeroSectionV2'), { ssr: false });
const WhatWeDoSection = dynamic(() => import('@/components/sections/WhatWeDoSection'), { ssr: false });
const SponsorsBanner = dynamic(() => import('@/components/sections/SponsorsBanner'), { ssr: false });

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pre-loader timing: 1.5s drawing + 2s filling + 0.5s fade = 4s total
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PreLoader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <main className="relative w-full bg-[#0A0A0A]">
          <HeroSectionV2 />
          <WhatWeDoSection />
          <SponsorsBanner />
        </main>
      )}
    </>
  );
}

