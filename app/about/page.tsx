'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-950 py-24 pt-32 border-b border-dark-800/50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-950/90 z-10" />
          <div 
            className="absolute inset-0 opacity-25"
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
        <div className="absolute inset-0 mesh-bg opacity-20 z-10" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl z-10" />
        
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">About Us</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-dark-50 mb-6">
              About <span className="gradient-text">Quant Community</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Building the bridge between <span className="text-accent-cyan font-semibold">academia</span> and the{' '}
              <span className="text-primary-400 font-semibold">quantitative finance industry</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-dark-300">
              <p className="leading-relaxed border-l-4 border-primary-500 pl-6">
                The Quant Community at IIT Bombay is a student-led initiative dedicated to 
                pioneering <span className="text-primary-400 font-semibold">quantitative research</span>, 
                <span className="text-primary-400 font-semibold"> algorithmic trading</span>, and 
                <span className="text-primary-400 font-semibold"> data-driven finance</span>. 
                We exist to bridge the gap between academic theory and real-world quantitative 
                finance practice.
              </p>
              <p className="leading-relaxed border-l-4 border-accent-cyan pl-6">
                Our mission is to create a thriving ecosystem where students can{' '}
                <span className="text-accent-cyan font-semibold">learn</span>,{' '}
                <span className="text-accent-cyan font-semibold">build</span>, and{' '}
                <span className="text-accent-cyan font-semibold">compete</span> in the field of quantitative finance. 
                We provide the resources, mentorship, and platform for students to develop practical 
                skills that are directly applicable in the industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Quantitative Finance */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-8">
              What is <span className="gradient-text">Quantitative Finance</span>?
            </h2>
            <div className="space-y-6 text-lg text-dark-300">
              <p className="leading-relaxed">
                Quantitative finance is the use of <span className="text-primary-400 font-semibold">mathematical models</span>, 
                <span className="text-primary-400 font-semibold"> statistical techniques</span>, 
                and <span className="text-primary-400 font-semibold">computational tools</span> to analyze financial markets and securities. 
                It combines elements of mathematics, statistics, computer science, and finance to develop 
                trading strategies, manage risk, and price complex financial instruments.
              </p>
              <p className="leading-relaxed">
                At its core, quantitative finance is about finding{' '}
                <span className="text-accent-cyan font-semibold">patterns in data</span>, building{' '}
                <span className="text-accent-cyan font-semibold">predictive models</span>, and using{' '}
                <span className="text-accent-cyan font-semibold">technology</span> to gain an edge in financial markets. 
                From high-frequency trading to portfolio optimization, quants are at the forefront 
                of modern finance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-4">
              Why <span className="gradient-text">Join</span>?
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Become part of a community that&apos;s shaping the future of quantitative finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-cyan transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 mb-3">Expert Mentorship</h3>
                  <p className="text-dark-300 leading-relaxed">
                    Learn from industry professionals and experienced seniors who have worked 
                    at top quant firms.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-cyan transition-all duration-300">
                    <Sparkles className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 mb-3">Industry Network</h3>
                  <p className="text-dark-300 leading-relaxed">
                    Connect with leading firms like Citadel Securities, IMC Trading, and 
                    QuantInsti through our partnerships.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-teal/10 border border-accent-teal/30 rounded-full flex items-center justify-center mx-auto mb-4 hover:shadow-cyan transition-all duration-300">
                    <Zap className="w-8 h-8 text-accent-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50 mb-3">Real-World Skills</h3>
                  <p className="text-dark-300 leading-relaxed">
                    Build production-ready strategies, backtest with real data, and compete 
                    in national competitions.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 border-y border-dark-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-lg text-dark-300">Active Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent-cyan mb-2">15+</div>
              <div className="text-lg text-dark-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent-teal mb-2">20+</div>
              <div className="text-lg text-dark-300">Workshops Hosted</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent-emerald mb-2">5+</div>
              <div className="text-lg text-dark-300">Competition Wins</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
