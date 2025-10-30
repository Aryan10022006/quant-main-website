'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Users, Trophy, Rocket, Brain, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: 'Cutting-Edge Research',
      description:
        'Build real-world quantitative strategies in our flagship Summer of Quant (SoQ) program, where teams develop, backtest, and present complete trading systems using advanced machine learning and statistical methods.',
      icon: Brain,
      gradient: 'from-primary-500 to-accent-cyan',
      iconColor: 'text-primary-400',
    },
    {
      title: 'Industry-Aligned Workshops',
      description:
        'Learn from industry leaders through expert-led workshops with QuantInsti, IMC Trading, and Citadel Securities. Gain practical insights into algorithmic trading, risk management, and quantitative modeling.',
      icon: Zap,
      gradient: 'from-accent-cyan to-accent-teal',
      iconColor: 'text-accent-cyan',
    },
    {
      title: 'High-Stakes Competitions',
      description:
        'Compete and win in national competitions including Quant Quest, Goldman Sachs Quant Hackathon, and other prestigious challenges. Test your skills against the best quant minds in India.',
      icon: Trophy,
      gradient: 'from-accent-cyan to-accent-emerald',
      iconColor: 'text-accent-cyan',
    },
  ];

  const stats = [
    { label: 'Research Papers', value: '12+', icon: BarChart3 },
    { label: 'Active Members', value: '100+', icon: Users },
    { label: 'Competitions Won', value: '5+', icon: Trophy },
    { label: 'Projects Launched', value: '15+', icon: Rocket },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 bg-dark-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
          >
            <Rocket className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-400">What We Do</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            <span className="gradient-text">Our Core Pillars</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-dark-300 max-w-3xl mx-auto font-medium"
          >
            Building the future of quantitative finance through research, education, and competition
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="relative h-full group overflow-hidden bg-dark-900/50 hover:bg-dark-900/70 border-dark-800 hover:border-primary-500/30">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>
                  
                  <div className="flex flex-col items-start h-full">
                    {/* Icon */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                        <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-dark-300 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="card p-6 text-center bg-dark-900/30 hover:bg-dark-900/50">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;