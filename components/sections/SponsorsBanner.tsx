'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const sponsors = [
  { name: 'IMC Trading', logo: '/images/imc.png' },
  { name: 'Optiver', logo: '/images/optiver.png' },
  { name: 'Tower Research Capital', logo: '/images/tower_research_capital.png' },
  { name: 'Jane Street', logo: '/images/jane_street.png' },
  { name: 'Da Vinci', logo: '/images/davinci.png' },
  { name: 'Graviton', logo: '/images/graviton.png', light: true },
  { name: 'Quadeye', logo: '/images/quadeye.png', light: true },
  { name: 'QRT', logo: '/images/qrt.png' },
  { name: 'Tradermath', logo: '/images/tradermath.png' },
  { name: 'CQF Institute', logo: '/images/CQF_institute.png' },  
  { name: 'WorldQuant Brain', logo: '/images/worldquant.png' },
  { name: 'DTL', logo: '/images/dtl.png'},
];

// Duplicate for seamless loop
const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];
const ITEM = 244;                      // 180px logo + 64px gap (gap-16)
const SET = sponsors.length * ITEM;    // width of one full set of logos
const SPEED = 50;                      // pixels per second; higher = faster

export default function SponsorsBanner() {
  const x = useMotionValue(-SET);
  const dragging = useRef(false);

  useAnimationFrame((_, delta) => {
    if (dragging.current) return;
    let next = x.get() - (SPEED * Math.min(delta, 50)) / 1000;
    if (next <= -2 * SET) next += SET;
    if (next > -SET) next -= SET;
    x.set(next);
  });
  return (
    <section className="relative w-full py-8 bg-[#0A0A0A] overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-[0.3em] text-gray-400 uppercase mb-2"
        >
          Our Collaborations
        </motion.h3>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />
      </div>

      {/* Scrolling Logos Bar */}
      <div className="relative py-4">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Animated Container - Slower Speed */}
        <motion.div
          className="flex items-center gap-16 cursor-grab active:cursor-grabbing select-none"
          style={{ x }}
          drag="x"
          dragMomentum={false}
          dragElastic={0}
          onDragStart={() => { dragging.current = true; }}
          onDragEnd={() => { dragging.current = false; }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: '180px' }}
            >
              {/* The Container "Box" - 80px (h-20) tall */}
              <div className="h-20 w-full flex items-center justify-center px-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  draggable={false}
                  className={`object-contain ${
                    sponsor.name === 'CQF Institute' ? 'w-32' : 'max-w-full max-h-12'
                  }`}
                  style={sponsor.light ? { filter: 'brightness(0) invert(1)' } : undefined}
                  // style={{ 
                  //   filter: 'grayscale(100%) brightness(0.9) contrast(1.1)',
                  // }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
