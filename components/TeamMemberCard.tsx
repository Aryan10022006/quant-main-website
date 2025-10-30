'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface TeamMemberCardProps {
  name: string;
  role: string;
  department?: string;
  linkedIn?: string;
  github?: string;
  email?: string;
  bio?: string;
  image?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  department,
  linkedIn,
  github,
  email,
  bio,
  image
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="h-full perspective-1000"
      onHoverStart={() => bio && setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <div className="relative h-full" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="text-center h-full bg-dark-900/50 hover:bg-dark-900/70 border-dark-800 hover:border-primary-500/50 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] transition-all duration-500">
                {/* Avatar */}
                <div className="mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-32 h-32 mx-auto group"
                  >
                    {image ? (
                      <div className="w-full h-full rounded-2xl overflow-hidden ring-2 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-500/20 via-accent-cyan/20 to-accent-teal/20 flex items-center justify-center ring-2 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all duration-300 backdrop-blur-sm">
                        <span className="text-4xl font-black bg-gradient-to-br from-primary-400 to-accent-cyan bg-clip-text text-transparent">
                          {initials}
                        </span>
                      </div>
                    )}
                    {/* Decorative gradient ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-dark-50 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {name}
                </h3>

                {/* Role */}
                <p className="text-primary-400 font-semibold mb-3 text-sm">
                  {role}
                </p>

                {/* Department Badge */}
                {department && (
                  <div className="mb-4">
                    <Badge variant="cyan" className="text-xs">
                      {department}
                    </Badge>
                  </div>
                )}

                {/* Social Links */}
                {(linkedIn || github || email) && (
                  <div className="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-dark-800/50">
                    {linkedIn && (
                      <motion.a
                        href={linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-dark-800/50 hover:bg-primary-500/10 border border-dark-700 hover:border-primary-500/50 text-dark-400 hover:text-primary-400 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    )}
                    {github && (
                      <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-dark-800/50 hover:bg-accent-slate/10 border border-dark-700 hover:border-accent-slate/50 text-dark-400 hover:text-accent-slate transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {email && (
                      <motion.a
                        href={`mailto:${email}`}
                        className="p-2.5 rounded-xl bg-dark-800/50 hover:bg-accent-cyan/10 border border-dark-700 hover:border-accent-cyan/50 text-dark-400 hover:text-accent-cyan transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                )}

                {/* Flip Hint */}
                {bio && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    className="absolute bottom-2 right-2 text-xs text-dark-500 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Hover</span>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="h-full bg-dark-900/70 border-primary-500/30 backdrop-blur-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-primary-400">About</h4>
                    <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-400">{initials}</span>
                    </div>
                  </div>
                  <p className="text-sm text-dark-300 leading-relaxed flex-grow">
                    {bio}
                  </p>
                  <div className="mt-4 pt-4 border-t border-dark-800/50">
                    <p className="text-xs text-dark-500 text-center">
                      {name} • {role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
