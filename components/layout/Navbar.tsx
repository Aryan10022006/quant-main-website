'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/70 backdrop-blur-xl shadow-lg border-b border-white/5' 
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative w-16 h-16 flex-shrink-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/images/qc_white_logo.png" 
                alt="Quant Community Logo" 
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
            <div className="hidden sm:flex flex-col">
              <motion.h1 
                className="text-xl font-black tracking-tight leading-none"
                whileHover={{ scale: 1.02 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900 }}
              >
                <span className="bg-gradient-to-r from-white via-[#00BFFF] to-[#0EA5E9] bg-clip-text text-transparent">
                  QUANT COMMUNITY
                </span>
              </motion.h1>
              <p className="text-[9px] text-gray-400 font-bold tracking-[0.3em] mt-0.5 pl-0.5">IIT BOMBAY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 group ${
                    isActive(link.href) 
                      ? 'text-[#00BFFF]' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-[#00BFFF]/10 rounded-lg border border-[#00BFFF]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="ml-4"
            >
              <Button href="/join" size="sm" className="group">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Join Us
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-dark-300 hover:text-dark-50 hover:bg-dark-800/50 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-dark-800">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                        isActive(link.href)
                          ? 'text-primary-400 bg-primary-500/10 border-l-2 border-primary-500 pl-5'
                          : 'text-dark-300 hover:text-dark-50 hover:bg-dark-800/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2 px-4"
                >
                  <Button href="/join" size="sm" className="w-full justify-center">
                    <Sparkles className="w-4 h-4" />
                    Join Us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
