'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, BookOpen, Award, Mail, Check, Sparkles } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-950 py-24 pt-32 border-b border-dark-800/50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-950/92 z-10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/quantb3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/85 via-dark-950/70 to-dark-950 z-10" />
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full mb-6"
            >
              <UserPlus className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-accent-cyan">Join Our Community</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-dark-50 mb-6">
              Join the <span className="gradient-text">Quant Community</span>
            </h1>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              Connect with IIT Bombay&apos;s premier{' '}
              <span className="text-accent-cyan font-semibold">quantitative finance</span> community.
              Stay updated on workshops, competitions, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-dark-50 mb-4">
              Community <span className="gradient-text">Engagement</span>
            </h2>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              Connect with us and explore opportunities to grow in quantitative finance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For All Members */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-primary-500/30">
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-lg flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-50">For All Members</h3>
                      <p className="text-sm text-primary-400 font-medium">Open to Everyone</p>
                    </div>
                  </div>

                  <div className="bg-dark-900/50 rounded-lg p-4 border border-dark-800">
                    <h4 className="font-bold text-dark-50 mb-3 text-sm">ELIGIBILITY</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Any IIT Bombay student (all years, all departments)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">No prior knowledge of finance or trading required</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Simply join our WhatsApp group to stay connected</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark-50 mb-3 text-sm flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      WHAT YOU GET
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Event Notifications:</strong> First access to workshops, guest lectures, and competitions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Learning Resources:</strong> Curated materials on quantitative finance, algorithmic trading, and Python programming</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Expert Workshops:</strong> Attend sessions by industry professionals from top firms (IMC, Citadel, QuantInsti)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Competition Access:</strong> Participate in trading competitions like Trade-a-thon</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Community Support:</strong> Connect with peers interested in quantitative finance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Career Guidance:</strong> Learn about internships and full-time roles in quant trading/research</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary-500/5 rounded-lg p-4 border border-primary-500/20">
                    <p className="text-xs text-dark-400">
                      <strong className="text-primary-400">Perfect for:</strong> Students exploring quantitative finance, beginners wanting to learn algorithmic trading, or anyone interested in market dynamics
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* For Core Researchers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-accent-cyan/30 relative overflow-hidden">
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-cyan/20 border border-accent-cyan/40 rounded-full text-xs font-bold text-accent-cyan">
                  SELECTIVE
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-cyan/10 border border-accent-cyan/30 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-50">For Core Researchers</h3>
                      <p className="text-sm text-accent-cyan font-medium">Application-Based</p>
                    </div>
                  </div>

                  <div className="bg-dark-900/50 rounded-lg p-4 border border-dark-800">
                    <h4 className="font-bold text-dark-50 mb-3 text-sm">ELIGIBILITY</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Strong quantitative background (Math, Stats, CS, or Finance)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Proficiency in Python/R and data analysis libraries</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Genuine interest in quantitative research and trading strategies</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Commitment: 6-8 hours/week for research projects</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300">Selection via: Interview + Problem Solving Test + Past Project Review</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark-50 mb-3 text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent-cyan" />
                      EXCLUSIVE BENEFITS
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Research Projects:</strong> Work on cutting-edge strategies (stat arb, factor models, ML-based trading)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Mentorship:</strong> Guidance from alumni at Jane Street, Citadel, WorldQuant, Tower Research</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Advanced Workshops:</strong> Deep-dives into options pricing, HFT, portfolio optimization, risk analytics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Paper Publications:</strong> Co-author research papers and present at community seminars</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Industry Connections:</strong> Direct networking with recruiters and researchers from top firms</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-accent-emerald mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-300"><strong>Resume Boost:</strong> Recognized role, tangible projects, strong referrals for quant roles</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent-cyan/5 rounded-lg p-4 border border-accent-cyan/20">
                    <p className="text-xs text-dark-400">
                      <strong className="text-accent-cyan">Applications Open:</strong> September (for Fall recruitment) and January (for Spring recruitment). Watch for announcements in the community group.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Join Section */}
      <section className="relative py-20 border-y border-dark-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="mb-6">
              <Mail className="w-16 h-16 text-accent-cyan mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-6">
              Ready to <span className="gradient-text">Get Started</span>?
            </h2>
            <p className="text-lg text-dark-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect with our community managers to learn more and get started
            </p>

            {/* Community Managers Contact Details */}
            <div className="mb-10 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-dark-50 mb-6">Contact Our Managers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Siva Shankar Chitlanchya Madhav */}
                <div className="glass p-6 rounded-xl border border-accent-cyan/30">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-bold text-dark-50 mb-2">Siva Shankar Chitlanchya Madhav</h4>
                  <a 
                    href="tel:+918639147440" 
                    className="text-accent-cyan hover:text-accent-cyan/80 transition-colors text-sm font-medium"
                  >
                    +91 86391 47440
                  </a>
                </div>

                {/* Prabhat Dubey */}
                <div className="glass p-6 rounded-xl border border-accent-cyan/30">
                  <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <h4 className="text-lg font-bold text-dark-50 mb-2">Prabhat Dubey</h4>
                  <a 
                    href="tel:+919076373141" 
                    className="text-accent-cyan hover:text-accent-cyan/80 transition-colors text-sm font-medium"
                  >
                    +91 90763 73141
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                href="https://chat.whatsapp.com/YOUR_GROUP_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass p-6 rounded-xl border border-accent-cyan/30 hover:border-accent-cyan/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                  <svg className="w-6 h-6 text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-dark-50 mb-2">WhatsApp Group</h3>
                <p className="text-sm text-dark-300">Join our community group for instant updates</p>
              </motion.a>

              <motion.a
                href="mailto:quantcommunity@iitb.ac.in"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass p-6 rounded-xl border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-dark-50 mb-2">Email Us</h3>
                <p className="text-sm text-dark-300">quantcommunity@iitb.ac.in</p>
              </motion.a>
            </div>

            <div className="pt-6">
              <p className="text-sm text-dark-400">
                For recruitment and core team opportunities, watch for announcements in the community group
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
