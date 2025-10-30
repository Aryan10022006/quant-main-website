'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Users2 } from 'lucide-react';
import TeamMemberCard from '@/components/TeamMemberCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function TeamPage() {
  const managers = [
    {
      name: 'Siva Chinta Madhav',
      role: 'Manager',
      linkedIn: 'https://www.linkedin.com/in/siva-madhav-chinta-94a25024a/',
      image: '/images/team_members/siva.png',
    },
    {
      name: 'Prabhat Dubey',
      role: 'Manager',
      linkedIn: 'https://www.linkedin.com/in/prabhat-dubey-87392b367/',
      image: '/images/team_members/prabhat.png',
    },
  ];

  const coreTeam = [
    {
      name: 'Aryan Tamboli',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com/in/aryan-tamboli-a28a74310/',
      image: '/images/team_members/aryan.png',
    },
    {
      name: 'Mudil',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com/in/mudil-goel/',
      image: '/images/team_members/mudil.png',
    },
    {
      name: 'Swayam Raj',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com/in/swayam-raj-8a6680368/',
      image: '/images/team_members/swayam.png',
    },
    {
      name: 'Hrisika Agarwal',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com/in/hrishika-agrawal-145828317/',
      image: '/images/team_members/hrishika.png',
    },
    {
      name: 'Abhinav',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com',
      image: '/images/team_members/abhinav.png',
    },
    {
      name: 'Devansh',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com',
      image: '/images/team_members/devansh.png',
    },
    {
      name: 'Raaj',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com',
      image: '/images/team_members/raaj.png',
    },
    {
      name: 'Gurnoor',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com',
      image: '/images/team_members/gurnoor.png',
    },
    {
      name: 'Divyansh Chaudhary',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com/in/divyanshchaudhary1108/',
      image: '/images/team_members/divyansh.png',
    },
    {
      name: 'Namish',
      role: 'Core Team Member',
      linkedIn: 'https://www.linkedin.com',
      image: '/images/team_members/namish.png',
    },
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dark-950 py-24 pt-32 border-b border-dark-800/50">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-950/90 z-10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/quantb1.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950 z-10" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 mesh-bg opacity-20 z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl z-10" />
        
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
              <Users2 className="w-5 h-5 text-accent-cyan" />
              <span className="text-sm font-medium text-accent-cyan">Our Team</span>
              <Sparkles className="w-4 h-4 text-primary-400" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-50 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="flex items-center gap-2">
                Meet Our <span className="gradient-text">Team</span>
              </span>
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-accent-cyan" />
            </h1>
            <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed px-4">
              Passionate individuals driving{' '}
              <span className="text-accent-cyan font-semibold">innovation</span> and{' '}
              <span className="text-primary-400 font-semibold">excellence</span> in quantitative finance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managers Section */}
      <section className="py-16 border-b border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 border border-primary-500/30 rounded-2xl mb-3 sm:mb-4">
              <Users2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-400 to-accent-cyan bg-clip-text text-transparent">
                Managers
              </h2>
            </div>
            <p className="text-dark-400 text-xs sm:text-sm">Leading the Quant Community</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {managers.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  image={member.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent-cyan/10 to-accent-teal/10 border border-accent-cyan/30 rounded-2xl mb-3 sm:mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent-cyan" />
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-cyan to-accent-teal bg-clip-text text-transparent">
                Core Team Members
              </h2>
            </div>
            <p className="text-dark-400 text-xs sm:text-sm">The backbone of our community</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  linkedIn={member.linkedIn}
                  image={member.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="relative py-20 border-t border-dark-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-cyan/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Sparkles className="w-16 h-16 text-accent-cyan mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark-50 mb-6">
              Want to Join Our <span className="gradient-text">Core Team</span>?
            </h2>
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              We recruit passionate sophomores every year through our annual recruitment drive
            </p>
            <Link href="/join">
              <Button variant="primary" size="lg">
                Learn About Recruitment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
