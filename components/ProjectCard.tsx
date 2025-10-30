'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  image,
  githubUrl,
  liveUrl 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="h-full group"
    >
      <Card className="relative overflow-hidden h-full bg-dark-900/50 hover:bg-dark-900/70 border-dark-800 hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
        {/* Image Section with Gradient Overlay */}
        {image && (
          <div className="relative h-48 overflow-hidden rounded-t-2xl -mt-6 -mx-6 mb-4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/90 z-10"></div>
            <motion.div
              className="w-full h-full bg-gradient-to-br from-primary-500/20 via-accent-cyan/20 to-accent-teal/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-primary-500/40" />
              </div>
            </motion.div>
          </div>
        )}

        <div className="flex flex-col h-full">
          {/* Title with Icon */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors duration-300 flex-1">
              {title}
            </h3>
            {(githubUrl || liveUrl) && (
              <div className="flex gap-2 ml-2">
                {githubUrl && (
                  <motion.a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-800/50 hover:bg-dark-800 text-dark-400 hover:text-primary-400 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                )}
                {liveUrl && (
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-800/50 hover:bg-dark-800 text-dark-400 hover:text-accent-cyan transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-dark-300 mb-4 flex-grow leading-relaxed text-sm">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-800/50">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'cyan' : 'teal'}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-cyan/20 blur-3xl rounded-full"></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
