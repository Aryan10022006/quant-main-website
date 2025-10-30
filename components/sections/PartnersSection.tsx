'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection: React.FC = () => {
  const partners = [
    { name: 'Citadel Securities', logo: 'Citadel' },
    { name: 'AlgoBulls', logo: 'AlgoBulls' },
    { name: 'IMC Trading', logo: 'IMC' },
    { name: 'QuantInsti', logo: 'QuantInsti' },
  ];

  return (
    <section className="py-20 bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-50 mb-4">
            Our Industry Partners & Collaborators
          </h2>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            We collaborate with leading firms in quantitative finance and algorithmic trading 
            to bring real-world insights to our community.
          </p>
        </div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-dark-900 rounded-lg border border-dark-800 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="text-center">
                <p className="text-xl font-bold text-dark-300">
                  {partner.logo}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-500/20 to-accent-cyan/20 rounded-2xl p-8 md:p-12 text-center border border-primary-500/30 shadow-cyan"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-50 mb-4">
            IITB-Citadel Securities Quantitative Research Lab
          </h3>
          <p className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            Our flagship collaboration brings cutting-edge quantitative research infrastructure 
            to IIT Bombay, providing students with world-class resources for algorithmic trading 
            and financial modeling research.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
