import React from 'react';
import { motion } from 'framer-motion';
import {
  Laptop,
  FileCheck,
  Plane,
  Sparkles,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingDown,
  Compass,
  Award,
  ShieldCheck,
  Percent
} from 'lucide-react';

export default function DentalTourism() {
  const steps = [
    {
      step: '01',
      icon: <Laptop className="w-5 h-5 text-white" />,
      title: 'Online Video Consult',
      description: 'Upload your dental scans or X-rays. Receive a direct video review assessment from Dr. Senthil Nathan.'
    },
    {
      step: '02',
      icon: <FileCheck className="w-5 h-5 text-white" />,
      title: 'Custom Treatment Plan',
      description: 'Discuss implant brand configurations (Straumann, Nobel), treatment fees, timelines, and hotel stays.'
    },
    {
      step: '03',
      icon: <Plane className="w-5 h-5 text-white" />,
      title: 'Travel & Concierge',
      description: 'Airport pickup coordination from Chennai, heritage hotel bookings, and a local travel concierge layout.'
    },
    {
      step: '04',
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: 'Smile & Vacation',
      description: 'Complete your implant fixtures in 3-5 days. Spend your recovery holiday in coastal French Puducherry.'
    }
  ];

  return (
    <section id="dental-tourism" className="py-10 md:py-16 bg-white overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            Global Concierge
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Dental Tourism for <span className="green-text">International Patients</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            Enjoy an elite dental restoration combined with a relaxing heritage coastal holiday in Pondicherry. Save up to 70% on premium treatments.
          </p>
        </div>

        {/* Savings & Concierge Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">

          {/* Left Column: Description & Saving Metrics */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-gold-dark bg-amber-50 px-4 py-2 rounded-full border border-amber-100/50 shadow-sm inline-block">
                The Dental Getaway
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-brand-navy font-serif leading-[1.15]">
                Combine High-End Care <br />
                <span className="text-brand-teal">with a Coastal Retreat</span>
              </h3>
            </div>

            {/* Redesigned 2x2 Grid of Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Point 1: Coastal Retreat */}
              <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50 border border-slate-200/30 hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform shadow-sm">
                  <Compass className="w-5 h-5 text-brand-teal" />
                </div>
                <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider group-hover:text-brand-teal transition-colors">
                  Coastal French Retreat
                </h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Relax in Puducherry—a scenic seaside French colonial town known for beaches, cobblestone quarters, and Auroville.
                </p>
              </div>

              {/* Point 2: FDA Implants */}
              <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50 border border-slate-200/30 hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform shadow-sm">
                  <Award className="w-5 h-5 text-brand-teal" />
                </div>
                <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider group-hover:text-brand-teal transition-colors">
                  FDA-Approved Systems
                </h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  We use top-tier implant solutions from global leaders: Straumann (Switzerland) and Nobel Biocare (Sweden).
                </p>
              </div>

              {/* Point 3: Sterile Protocols */}
              <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50 border border-slate-200/30 hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-brand-teal" />
                </div>
                <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider group-hover:text-brand-teal transition-colors">
                  Sterilization Standard
                </h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Absolute safety guaranteed through class-B sterile parameters, hygiene, and strict international clinical codes.
                </p>
              </div>

              {/* Point 4: Savings */}
              <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50 border border-slate-200/30 hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform shadow-sm">
                  <Percent className="w-5 h-5 text-brand-teal" />
                </div>
                <h4 className="text-sm font-extrabold text-brand-navy uppercase tracking-wider group-hover:text-brand-teal transition-colors">
                  Elite Cost Savings
                </h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Enjoy custom luxury clinical services and save up to 70% compared to Western pricing layouts.
                </p>
              </div>

            </div>

            {/* Custom styled address pill at the bottom */}
            <div className="inline-flex items-center space-x-3 bg-teal-50/50 border border-teal-100/60 p-4 rounded-2xl shadow-sm w-full sm:w-auto">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MapPin className="w-4 h-4 text-brand-gold" />
              </div>
              <div className="text-left font-display">
                <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400">Clinic Destination</span>
                <span className="block text-xs sm:text-sm font-extrabold text-brand-navy leading-snug">
                  Cuddalore Road, Thavalakuppam, Puducherry 605007
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Cost Widget (Glass Card) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="blue-gradient-bg p-8 md:p-10 rounded-[32px] text-white text-left shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8 pointer-events-none"></div>

              <div className="flex items-center space-x-3 mb-6">
                <TrendingDown className="w-6 h-6 text-brand-gold-light" />
                <h4 className="text-lg font-black font-serif text-brand-gold-light">
                  Average Price Comparison
                </h4>
              </div>

              <div className="space-y-4">
                {/* Implants comparison */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold uppercase text-slate-400">
                    <span>Premium Dental Implant</span>
                    <span>Single Tooth</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-300">USA / Europe:</span>
                    <span className="text-sm line-through text-slate-400">$3,500 - $4,500</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-extrabold text-brand-gold-light">Pulp Dental Clinic:</span>
                    <span className="text-lg font-black text-brand-gold">$700 - $950</span>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 my-4"></div>

                {/* Benefits */}
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start space-x-2.5">
                    <ChevronRight className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold opacity-95">FDA-approved implants with global lifetime warranty cards.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <ChevronRight className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold opacity-95">Airport picks and local heritage stay bookings included.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <ChevronRight className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold opacity-95">Fast-track appointments completed in 3-5 days.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-brand-blue font-black uppercase tracking-wider py-4 rounded-full text-xs shadow-md hover:bg-slate-100 hover:scale-103 transition-transform w-full"
                >
                  <span>Request Custom Quotation</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Concierge Step Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((st, i) => (
            <motion.div
              key={st.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200/40 p-8 rounded-[32px] relative text-left hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              {/* Step count watermark */}
              <span className="absolute top-4 right-8 text-3xl font-black text-slate-200 group-hover:text-brand-gold/20 transition-colors font-display select-none">
                {st.step}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-2xl teal-gradient-bg flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                {st.icon}
              </div>

              {/* Title */}
              <h4 className="text-sm font-black text-brand-navy mb-2 group-hover:text-brand-teal transition-colors tracking-wide uppercase">
                {st.title}
              </h4>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                {st.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
