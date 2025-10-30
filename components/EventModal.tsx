'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Award, Users, Globe, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface EventModalProps {
  event: {
    title: string;
    partner: string;
    image: string;
    date: string;
    prize?: string;
    platform?: string;
    team?: string;
    eligibility?: string;
    description: string;
  };
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/70 border border-blue-500/30 rounded-2xl backdrop-blur-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header with Image */}
          <div className="relative h-64 w-full rounded-t-2xl overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Title and Partner */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                {event.title}
              </h2>
              <p className="text-lg text-[#00BFFF] font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                {event.partner}
              </p>
            </div>

            {/* Data Grid - Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date */}
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#00BFFF]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Date</p>
                    <p className="text-white font-semibold">{event.date}</p>
                  </div>
                </div>
              </div>

              {/* Partner */}
              <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Partner</p>
                    <p className="text-white font-semibold">{event.partner}</p>
                  </div>
                </div>
              </div>

              {/* Prize Pool (if exists) */}
              {event.prize && (
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[#00BFFF]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Prize Pool</p>
                      <p className="text-white font-semibold">{event.prize}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Platform (if exists) */}
              {event.platform && (
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#00BFFF]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Platform</p>
                      <p className="text-white font-semibold">{event.platform}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Team Size (if exists) */}
              {event.team && (
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#00BFFF]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Team Size</p>
                      <p className="text-white font-semibold">{event.team}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Eligibility (if exists) */}
              {event.eligibility && (
                <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 md:col-span-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Eligibility</p>
                      <p className="text-white font-semibold">{event.eligibility}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="pt-4 border-t border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-3">About This Event</h3>
              <p className="text-gray-300 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
