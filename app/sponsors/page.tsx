'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Handshake } from 'lucide-react';

const SponsorsPage: React.FC = () => {
  const collaborators = [
    {
      name: 'IMC Trading',
      logo: '/images/imc.png',
      description: 'Global market maker and liquidity provider across multiple asset classes.',
      website: 'https://www.imc.com',
      type: 'Primary Partner',
    },
    {
      name: 'Optiver',
      logo: '/images/optiver.png',
      description: 'Leading global market maker, focused on pricing, execution and risk management.',
      website: 'https://www.optiver.com',
      type: 'Primary Partner',
    },
    {
      name: 'Tower Research Capital',
      logo: '/images/tower_research_capital.png',
      description: 'High-frequency proprietary trading firm that thrives on data, technology, and innovation.',
      website: 'https://www.tower-research.com',
      type: 'Industry Partner',
    },
    {
      name: 'CQF Institute',
      logo: '/images/CQF_institute.png',
      description: 'The CQF program provides practical training in quantitative finance for professionals.',
      website: 'https://www.cqfinstitute.org',
      type: 'Academic Partner',
    },
    {
      name: 'QR Capital',
      logo: '/images/qrt.png',
      description: 'Investment firm specializing in quantitative research and systematic strategies.',
      website: '#',
      type: 'Industry Partner',
    },
    {
      name: 'DTL (Dynamic Technology Lab)',
      logo: '/images/dtl.png',
      description: 'Technology-driven research and development laboratory focused on algorithmic solutions.',
      website: '#',
      type: 'Research Partner',
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0A] pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-border mb-6"
          >
            <Handshake className="w-5 h-5 text-[#00BFFF]" />
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Our Collaborations
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">
            Partners &{' '}
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#0EA5E9] to-[#0891B2] bg-clip-text text-transparent">
              Sponsors
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to collaborate with industry leaders, academic institutions, and innovative firms 
            that share our vision for quantitative excellence.
          </p>
        </motion.div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {collaborators.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-[#111111] border border-[#27272A] hover:border-[#00BFFF]/30 transition-all duration-500 flex flex-col items-center justify-center min-h-[180px]">
                {/* Logo Container - The "Box" */}
                <div className="h-20 w-full flex items-center justify-center px-4 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className={`object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 ${
                      partner.name === 'CQF Institute' ? 'w-32' : 'max-w-full max-h-12'
                    }`}
                  />
                </div>

                {/* Name */}
                <h3 className="text-center text-sm font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#00BFFF]/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-12 rounded-3xl glass-border">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Partnering?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking to collaborate with organizations that align with our mission 
              of advancing quantitative finance education and research.
            </p>
            <motion.a
              href="mailto:quant.iitb@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BFFF] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#0EA5E9] transition-colors duration-300 shadow-glow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Handshake className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default SponsorsPage;
