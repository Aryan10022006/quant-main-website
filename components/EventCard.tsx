'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  type: 'Workshop' | 'Competition' | 'Guest Lecture' | 'Orientation';
  time?: string;
  location?: string;
  attendees?: number;
  eventId?: string;
  link?: string;
  highlights?: string[];
  topics?: string[];
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  description, 
  type,
  time,
  location,
  attendees,
  eventId,
  link,
  highlights,
  topics
}) => {
  const typeVariants: Record<string, { badge: 'blue' | 'emerald' | 'cyan' | 'teal', color: string }> = {
    Workshop: { badge: 'blue', color: 'from-primary-500 to-accent-cyan' },
    Competition: { badge: 'cyan', color: 'from-accent-cyan to-accent-teal' },
    'Guest Lecture': { badge: 'teal', color: 'from-accent-teal to-accent-emerald' },
    Orientation: { badge: 'emerald', color: 'from-accent-emerald to-primary-500' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="h-full group"
    >
      <Card className="relative overflow-hidden h-full bg-dark-900/50 hover:bg-dark-900/70 border-dark-800 hover:border-primary-500/30 transition-all duration-500">
        {/* Gradient Top Border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${typeVariants[type].color}`}></div>

        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <Badge variant={typeVariants[type].badge} className="text-xs font-bold">
              {type}
            </Badge>
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-br ${typeVariants[type].color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              whileHover={{ rotate: 12, scale: 1.1 }}
            >
              <Calendar className="w-5 h-5 text-primary-400" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Event Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-primary-400 font-medium">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            {time && (
              <div className="flex items-center gap-2 text-sm text-dark-400">
                <Clock className="w-4 h-4" />
                <span>{time}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-sm text-dark-400">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
            {attendees && (
              <div className="flex items-center gap-2 text-sm text-dark-400">
                <Users className="w-4 h-4" />
                <span>{attendees}+ participants</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-dark-300 leading-relaxed text-sm mb-4">
            {description}
          </p>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {highlights.map((highlight, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          {/* Topics */}
          {topics && topics.length > 0 && (
            <div className="mb-4">
              <div className="text-xs text-dark-500 mb-2 font-semibold">Topics Covered:</div>
              <div className="flex flex-wrap gap-1.5">
                {topics.map((topic, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 text-xs rounded bg-dark-800 text-dark-400"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {link ? (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-3 px-4 rounded-xl bg-dark-800/50 hover:bg-dark-800 text-dark-300 hover:text-primary-400 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-dark-700 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <motion.button
              onClick={() => {
                // Create modal or navigate to detail page
                if (eventId) {
                  window.location.href = `/events/${eventId}`;
                }
              }}
              className="w-full mt-auto py-3 px-4 rounded-xl bg-dark-800/50 hover:bg-dark-800 text-dark-300 hover:text-primary-400 font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 border border-dark-700 hover:border-primary-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </div>

        {/* Hover Effect - Animated Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${typeVariants[type].color} opacity-10 blur-3xl rounded-full`}></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default EventCard;
