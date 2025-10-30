'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsors = [
  { name: 'IMC Trading', logo: '/images/imc.png' },
  { name: 'Optiver', logo: '/images/optiver.png' },
  { name: 'Tower Research Capital', logo: '/images/tower_research_capital.png' },
  { name: 'CQF Institute', logo: '/images/CQF_institute.png' },
  { name: 'QR Capital', logo: '/images/qrt.png' },
  { name: 'DTL', logo: '/images/dtl.png' },
];

// Duplicate for seamless loop
const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

export default function SponsorsBanner() {
  return (
    <section className="relative w-full py-8 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
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
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />

        {/* Animated Container - Slower Speed */}
        <motion.div
          className="flex items-center gap-16"
          animate={{
            x: [0, `-${100 * sponsors.length / 3}%`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 80,
              ease: "linear",
            },
          }}
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
                  className={`object-contain ${
                    sponsor.name === 'CQF Institute' ? 'w-32' : 'max-w-full max-h-12'
                  }`}
                  style={{ 
                    filter: 'grayscale(100%) brightness(0.9) contrast(1.1)',
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
