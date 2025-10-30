'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, BookOpen, Code, Briefcase } from 'lucide-react';
import Image from 'next/image';

const WhatWeDoSection: React.FC = () => {
  const initiatives = [
    {
      icon: TrendingUp,
      title: 'Algorithmic Trading',
      description: 'Develop and backtest quantitative trading strategies using cutting-edge algorithms and machine learning.',
      image: '/images/quantb2.jpg',
      color: 'from-[#00BFFF] to-[#0EA5E9]',
    },
    {
      icon: Code,
      title: 'Quantitative Research',
      description: 'Conduct rigorous research in financial modeling, derivatives pricing, and risk management.',
      image: '/images/quantb3.jpg',
      color: 'from-[#0891B2] to-[#0D9488]',
    },
    {
      icon: Users,
      title: 'Workshops & Events',
      description: 'Regular hands-on workshops, guest lectures, and competitions to sharpen quantitative skills.',
      image: '/images/quantb1.jpg',
      color: 'from-[#0D9488] to-[#059669]',
    },
  ];

  const stats = [
    { icon: Users, value: '100+', label: 'Active Members', color: '#00BFFF' },
    { icon: Award, value: '15+', label: 'Projects Completed', color: '#0891B2' },
    { icon: BookOpen, value: '20+', label: 'Workshops Held', color: '#0D9488' },
    { icon: Briefcase, value: '10+', label: 'Industry Partners', color: '#059669' },
  ];

  return (
    <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-border mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              What We Do
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Building the Future of
            <br />
            <span className="bg-gradient-to-r from-[#00BFFF] via-[#0EA5E9] to-[#0891B2] bg-clip-text text-transparent">
              Quantitative Finance
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're a community of passionate students exploring the intersection of mathematics,
            computer science, and finance through hands-on projects and research.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {initiatives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#111111] border border-[#27272A] hover:border-[#00BFFF]/30 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    style={{ filter: 'grayscale(50%) brightness(60%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 rounded-xl glass-border backdrop-blur-xl">
                    <item.icon className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#00BFFF]/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl glass-border hover:border-[#00BFFF]/30 transition-all duration-300 text-center">
                <stat.icon 
                  className="w-8 h-8 mx-auto mb-3 transition-colors duration-300" 
                  style={{ color: stat.color }}
                />
                <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{ backgroundColor: `${stat.color}20` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
