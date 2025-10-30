'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';
import EventModal from '@/components/EventModal';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const eventsData = [
    {
      title: "International Quant Championship 2025",
      partner: "WorldQuant BRAIN",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1743663211_3602430577403374593_66127583775.heic",
      date: "March - September 2025",
      prize: "US$100,000 Pool",
      platform: "WorldQuant BRAIN",
      team: "Solo or Teams up to 4",
      description: "The IQC is WorldQuant's flagship competition. We also hosted an on-campus workshop with the BRAIN team (and pizza!) to help students compete.",
    },
    {
      title: "Mystery Planet",
      partner: "Jane Street",
      image: "/images/instagram_photos/quant.iitb/mystery_planet.webp",
      date: "April 4-5, 2025",
      platform: "IITB LHC & Novotel Mumbai",
      eligibility: "Open ONLY for Years 1-3 (CSE, EE, Physics, Maths)",
      description: "A two-part event for curious problem-solvers: an on-campus Estimathon & Info Session, followed by an exclusive, off-campus 'Mystery Planet' team challenge.",
    },
    {
      title: "QuantQuest",
      partner: "Qube Research & Technologies (QRT)",
      image: "/images/instagram_photos/quant.iitb/quantquest.webp",
      date: "March 29-30, 2025",
      platform: "Online Comp & LHC",
      team: "Teams of 2",
      description: "A weekend gateway for tech-savvies! An epic competition to tackle real market challenges and win an EXCLUSIVE DINNER with the QRT Team.",
    },
    {
      title: "3rd Annual Data Challenge",
      partner: "Tower Research Capital (Limestone)",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1742192013_3590089273671621021_66127583775.webp",
      date: "March 22, 2025",
      prize: "INR 18,00,000/-",
      platform: "HackerRank",
      team: "Teams of 2",
      description: "An excellent opportunity to apply data-driven problem-solving skills with prizes worth 18 Lacs. Top performers were invited for a face-to-face interaction and an opportunity to visit the Tower Office.",
    },
    {
      title: "Winter School of Quant",
      partner: "WorldQuant",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1733856776_3520168240357831360_66127583775.jpg",
      date: "December 16, 2024",
      platform: "Online",
      description: "An exclusive session on Quantitative Research. Featured speaker Aditya Chaturvedi (Senior Researcher at WorldQuant) covered stock markets, hedge funds, the quant ecosystem, and understanding alphas.",
    },
    {
      title: "Session on OPTION THEORY 101",
      partner: "IMC",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1729963229_3487506800576714359_66127583775.webp",
      date: "September 24, 2024",
      platform: "Venue: LA202 (In-person)",
      description: "An exclusive in-person session with IMC traders to learn financial derivatives, pick-up strategies for high returns, and interact with market leaders. Plus freebies and merch!",
    },
    {
      title: "Guest Lecture on VIX Options",
      partner: "Taranjit Singh (MIT, Wharton)",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1725104451_3446748417937398140_66127583775.webp",
      date: "August 18, 2024",
      platform: "MS Teams",
      description: "A golden opportunity featuring Taranjit Singh, former Head VIX Options trader at DRW. He shared unparalleled industry insights from his stellar academic and professional background.",
    },
    {
      title: "Summer of Quant 2024 (Wrap-up)",
      partner: "Zelta Labs, CQF Institute, IMC",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1724082731_3438177603882604566_66127583775.webp",
      date: "August 8, 2024",
      platform: "Online Program",
      description: "Our 2024 flagship program with over 1000+ participants. It featured courses on Time Series Analysis, Derivatives Pricing, and a Probability Primer, with guest lectures from Zelta Labs, IMC, and sessions by Dr. Riaz Ahmed and Sonia Arora from the CQF Institute.",
    },
    {
      title: "QC Newsletter",
      partner: "Quant Community Initiative",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1723830475_3436061525666308261_66127583775.webp",
      date: "Launched July 24, 2024",
      platform: "Online",
      description: "Our curated content compass! We deliver the hottest trends, insightful research, educational resources, and exclusive opportunities straight to your inbox.",
    },
    {
      title: "SoQ: Careers in Quant Finance",
      partner: "CQF Institute (Sonia Arora)",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1721832993_3419305434076992761_66127583775.webp",
      date: "July 11, 2024",
      platform: "Zoom",
      description: "A session from 'Summer of Quant' featuring Sonia Arora (Manager, Fitch Learning) on careers in quant finance and resume building.",
    },
    {
      title: "SoQ: Stochastic Calculus",
      partner: "CQF Institute (Dr. Riaz Ahmed)",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1720188535_3405510724492018561_66127583775.jpg",
      date: "July 10, 2024",
      platform: "Zoom",
      description: "A special one-shot session from 'Summer of Quant' on Stochastic Calculus for Quant Finance by Dr. Riaz Ahmed (PhD, University College London).",
    },
    {
      title: "SoQ: Guest Lecture on Backtesting",
      partner: "ZELTA LABS",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1720188362_3405509271266403183_66127583775.jpg",
      date: "July 5, 2024",
      platform: "MS Teams",
      description: "An exclusive 'Summer of Quant' guest lecture on the essential practice of backtesting in quantitative trading, in collaboration with Zelta Labs.",
    },
    {
      title: "SoQ: Options Pricing Masterclass",
      partner: "IMC Trading",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1719940987_3403434141870481472_66127583775.jpg",
      date: "July 4, 2024",
      platform: "Zoom",
      description: "A 'Summer of Quant' exclusive guest lecture with IMC Trading, featuring Tejas Bhalla (Trader at IMC), to dive into the fundamentals of options pricing.",
    },
    {
      title: "Trade-a-thon",
      partner: "Optiver",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1718483472_3391207614799523171_66127583775.heic",
      date: "May 28, 2024",
      platform: "Zoom (Virtual Event)",
      description: "Optiver's virtual trade-a-thon to compete for top prizes and challenge quantitative skills by solving puzzles on the fair theoretical value of a stock.",
    },
    {
      title: "Quant Community Orientation 2024",
      partner: "Citadel Securities",
      image: "/images/instagram_photos/quant.iitb/quant.iitb_1714924457_3361352432536621281_66127583775.heic",
      date: "May 8, 2024",
      platform: "MS Teams",
      description: "Our annual orientation to explore the recent collaboration of Citadel Securities with IITB. Featured Prof. Piyush Pandey and Prof. Sudeep Bapat.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <section className="relative overflow-hidden bg-[#0A0A0A] py-24 pt-32 border-b border-white/5">
        <div className="absolute inset-0 mesh-bg opacity-20" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#00BFFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0891B2]/10 rounded-full blur-3xl" />
        
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BFFF]/10 border border-[#00BFFF]/30 rounded-full mb-6"
            >
              <Calendar className="w-4 h-4 text-[#00BFFF]" />
              <span className="text-sm font-medium text-[#00BFFF]">Events & Workshops</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Events & <span className="bg-gradient-to-r from-[#00BFFF] via-[#0EA5E9] to-[#0891B2] bg-clip-text text-transparent">Workshops</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our journey through competitions, workshops, and industry collaborations that have shaped our community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00BFFF]/20 via-[#0EA5E9]/10 to-[#0891B2]/20 border border-[#00BFFF]/30 p-6 sm:p-8 md:p-12"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFFF]/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                <span className="text-xs sm:text-sm font-bold text-[#00BFFF] uppercase tracking-wider">Flagship Program</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">
                Summer of Quant 2025
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4">
                <span className="text-[#00BFFF] font-semibold">June 9 - July 27</span> | Online
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-3xl">
                Our flagship program with a hands-on capstone project, sessions by top quant firms, and prizes + Quant Team selection for top performers.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Probability & Statistics', 'Basics of Finance', 'Time Series Analysis', 'Financial Derivatives', 'Capstone Project'].map((course, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#00BFFF]/20 border border-[#00BFFF]/30 text-sm text-[#00BFFF] font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-12 text-center">
            Past Events & <span className="bg-gradient-to-r from-[#00BFFF] to-[#0891B2] bg-clip-text text-transparent">Workshops</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsData.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() => {
                  setSelectedEvent(event);
                  setIsModalOpen(true);
                }}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-[#00BFFF]/50 transition-all duration-300">
                  <div className="relative h-full w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <p className="text-xs text-[#00BFFF] font-semibold uppercase tracking-wider">
                        {event.partner}
                      </p>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#00BFFF]/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF]/5 to-[#0891B2]/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Sparkles className="w-16 h-16 text-[#00BFFF] mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don&apos;t Miss Out on <span className="bg-gradient-to-r from-[#00BFFF] to-[#0891B2] bg-clip-text text-transparent">Future Events</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join our community to get notified about upcoming workshops, competitions, and guest lectures
            </p>
            <motion.a
              href="/join"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BFFF] text-[#0A0A0A] font-bold rounded-xl hover:bg-[#0EA5E9] transition-colors duration-300 shadow-glow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
