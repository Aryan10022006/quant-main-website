'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PartnerLogos: React.FC = () => {
  const partners = [
    { name: 'Citadel Securities', logo: 'Citadel Securities' },
    { name: 'AlgoBulls', logo: 'AlgoBulls' },
    { name: 'IMC Trading', logo: 'IMC Trading' },
    { name: 'QuantInsti', logo: 'QuantInsti' },
  ];

  return (
    <section className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-dark-50 mb-4"
          >
            Empowering Our Vision with{' '}
            <span className="gradient-text">Leading Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            Collaborating with industry leaders to bring real-world insights to our community
          </motion.p>
        </div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-dark-900 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <p className="text-xl font-bold text-dark-300 group-hover:text-primary-400 transition-colors">
                {partner.logo}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 rounded-2xl p-8 md:p-12 text-center border border-primary-500/30 overflow-hidden group hover:border-primary-500/50 transition-all duration-300"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-accent-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
              IITB-Citadel Securities{' '}
              <span className="text-primary-400">Quantitative Research Lab</span>
            </h3>
            <p className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Our flagship collaboration brings cutting-edge quantitative research infrastructure 
              to IIT Bombay, providing students with world-class resources for algorithmic trading 
              and financial modeling research.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;