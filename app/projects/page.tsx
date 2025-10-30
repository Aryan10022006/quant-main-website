'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, TerminalSquare, AreaChart } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AlphaGen Strategy',
      description:
        'A machine learning-based alpha generation model that identifies market inefficiencies using advanced feature engineering and ensemble methods. Achieved 15% annual returns with a Sharpe ratio of 1.8.',
      tags: ['Python', 'Machine Learning', 'Backtesting', 'Portfolio Optimization'],
    },
    {
      title: 'Volatility Arbitrage',
      description:
        'Statistical arbitrage strategy exploiting the difference between implied and realized volatility. Implements delta-neutral hedging and real-time risk management across multiple asset classes.',
      tags: ['Options Trading', 'Risk Management', 'Statistical Arbitrage', 'C++'],
    },
    {
      title: 'NLP Sentiment Analysis',
      description:
        'Natural language processing model that extracts trading signals from news articles, social media, and earnings calls. Processes over 10,000 documents daily to generate actionable insights.',
      tags: ['NLP', 'Deep Learning', 'Python', 'Real-time Analysis'],
    },
    {
      title: 'High-Frequency Market Making',
      description:
        'Low-latency market making algorithm that provides liquidity in cryptocurrency markets. Optimizes bid-ask spreads while managing inventory risk and maintaining profitability.',
      tags: ['HFT', 'Market Making', 'C++', 'WebSocket'],
    },
    {
      title: 'Pairs Trading Engine',
      description:
        'Cointegration-based pairs trading system that identifies and exploits mean-reverting relationships between correlated securities. Includes automated position sizing and stop-loss mechanisms.',
      tags: ['Statistical Arbitrage', 'Python', 'Backtesting', 'Risk Management'],
    },
    {
      title: 'Factor Investing Model',
      description:
        'Multi-factor equity model combining value, momentum, quality, and low volatility factors. Implements Fama-French methodology with custom risk attribution and portfolio construction.',
      tags: ['Factor Models', 'Portfolio Construction', 'R', 'Quantitative Research'],
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 border-b border-dark-800/50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-950/90 z-10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/quantb2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950 z-10" />
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 glass border border-primary-500/20 rounded-2xl mb-8"
            >
              <TerminalSquare className="w-5 h-5 text-primary-400" />
              <span className="text-sm font-semibold text-primary-400">Our Projects</span>
              <Sparkles className="w-4 h-4 text-accent-cyan" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
              The Summer of <span className="gradient-text">Quant</span> (SoQ) <AreaChart className="w-12 h-12 md:w-16 md:h-16 inline-block text-accent-cyan ml-2" />
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed font-medium">
              SoQ is our premier, summer-long research program where members form teams to 
              develop, backtest, and present a complete{' '}
              <span className="text-primary-400 font-bold">quantitative trading strategy</span>. 
              This is where ideas become reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About SoQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What Makes SoQ <span className="gradient-text">Special</span>?
            </h2>
            <p className="text-lg text-dark-300 leading-relaxed">
              Unlike typical academic projects, SoQ teams work with{' '}
              <span className="text-primary-400 font-bold">real financial data</span>, 
              implement professional-grade backtesting frameworks, and present their findings 
              to industry experts. It's the closest experience to working at a quantitative 
              trading firm while still in college.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center justify-center gap-3">
              <TerminalSquare className="w-10 h-10 text-primary-400" />
              <span>Past <span className="gradient-text">Projects</span></span>
            </h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              A showcase of innovative quantitative strategies developed by our members
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-cyan"></div>
        <div className="absolute inset-0 mesh-bg opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Build Your Own Strategy?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-medium">
              Join us and be part of the next cohort of quantitative researchers
            </p>
            <motion.a
              href="/join"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl bg-white text-primary-600 hover:bg-dark-50 transition-all duration-200 shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Join the Community
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
