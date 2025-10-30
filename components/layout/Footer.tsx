'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Heart, Sparkles, ArrowUpRight, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Events', href: '/events' },
      { name: 'Team', href: '/team' },
      { name: 'Join Us', href: '/join' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/quant-community-iit-bombay',
        icon: Linkedin,
        color: 'hover:text-primary-400 hover:bg-primary-500/10',
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/quant.iitb/',
        icon: Instagram,
        color: 'hover:text-pink-400 hover:bg-pink-500/10',
      },
      {
        name: 'Email',
        href: 'mailto:quant.iitb@gmail.com',
        icon: Mail,
        color: 'hover:text-accent-cyan hover:bg-accent-cyan/10',
      },
    ],
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
      </div>

      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-20 h-20 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/qc_white_logo.png" 
                  alt="Quant Community Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 
                  className="text-lg font-black tracking-tight leading-none" 
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900 }}
                >
                  <span className="bg-gradient-to-r from-white via-[#00BFFF] to-[#0EA5E9] bg-clip-text text-transparent">
                    QUANT COMMUNITY
                  </span>
                </h3>
                <p className="text-[9px] text-gray-500 font-bold tracking-[0.25em] mt-1">IIT BOMBAY</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed max-w-md">
              Pioneering the future of quantitative finance through{' '}
              <span className="text-primary-400 font-semibold">algorithmic trading</span>,{' '}
              <span className="text-accent-cyan font-semibold">data analytics</span>, and{' '}
              <span className="text-accent-teal font-semibold">financial research</span>.
            </p>
            <div className="flex gap-3">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-dark-900/50 border border-dark-800 text-dark-400 transition-all duration-300 ${item.color}`}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-dark-50 uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center text-dark-400 hover:text-primary-400 text-sm transition-all duration-300"
                >
                  <ArrowUpRight className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 -ml-1 group-hover:ml-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-dark-50 uppercase tracking-wider">Get In Touch</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/30 transition-all duration-300">
                <p className="text-xs text-dark-500 mb-1 uppercase tracking-wider">Email</p>
                <a 
                  href="mailto:quant.iitb@gmail.com" 
                  className="text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium break-all"
                >
                  quant.iitb@gmail.com
                </a>
              </div>
              <div className="p-4 rounded-xl bg-dark-900/50 border border-dark-800">
                <p className="text-xs text-dark-500 mb-1 uppercase tracking-wider">Location</p>
                <p className="text-sm text-dark-300">IIT Bombay, Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} Quant Community, IIT Bombay. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-dark-500 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-primary-500" fill="currentColor" />
              </motion.div>
              <span>at IIT Bombay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
