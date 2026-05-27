import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Activity,
  Sun,
  Crown,
  ArrowRight
} from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      num: '01',
      icon: <Crown className="w-5 h-5" />,
      title: 'Dental Implants',
      description: 'Single or multiple tooth restoration using medical-grade titanium implants with surgical precision templates.',
      features: ['Immediate Loading Implants', 'Guided Computer Surgery', 'Lifetime Warranty Stamp'],
    },
    {
      num: '02',
      icon: <Layers className="w-5 h-5" />,
      title: 'Full Mouth Rehabilitation',
      description: 'Reconstructing the complete bite structure, restoring masticatory mechanics and facial vertical height.',
      features: ['All-on-4 / All-on-6 Systems', 'Custom Zirconia Bridges', 'Occlusal Splints & Splines'],
    },
    {
      num: '03',
      icon: <Activity className="w-5 h-5" />,
      title: 'Root Canal Treatment',
      description: 'Single-visit pain-free procedures employing digital apex locators and advanced micro-rotary files.',
      features: ['Microscopic Endodontics', 'Apex Locator Accuracy', 'Same-day Zirconia Crowns'],
    },
    {
      num: '04',
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Smile Makeover',
      description: 'Bespoke smile design aligning dental lines, tooth shade, proportions, and gum margins beautifully.',
      features: ['Digital Smile Design (DSD)', 'Ultra-thin E-Max Veneers', 'Minimal Prep Laminates'],
    },
    {
      num: '05',
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Cosmetic Dentistry',
      description: 'Restorative aesthetic contouring, gum depigmentation, and alignment enhancements.',
      features: ['Direct Composite Bonding', 'Aesthetic Gum Sculpting', 'Luxury Tooth Artistry'],
    },
    {
      num: '06',
      icon: <Sun className="w-5 h-5" />,
      title: 'Teeth Whitening',
      description: 'Advanced clinical cold light lasers to lift deep enamel staining safely and immediately.',
      features: ['Philips Zoom Laser Whitening', 'Zero-Sensitivity Formula', 'Take-home Touch-up Kits'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="treatments" className="py-10 md:py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Expertise
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Premium Treatments & <span className="green-text">Implantology</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            We deliver international standard dental solutions using state-of-the-art procedures and FDA-approved biocompatible implants.
          </p>
        </div>

        {/* Treatment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {treatments.map((tr) => (
            <motion.div
              key={tr.title}
              variants={itemVariants}
              className="luxury-hover-effect flex flex-col justify-between bg-slate-50 border border-slate-200/50 p-8 md:p-10 rounded-[32px] hover:border-brand-gold/30 hover:bg-white shadow-sm hover:shadow-2xl transition-all duration-500 relative group"
            >
              {/* Giant background styling layout numbers */}
              <span className="absolute top-4 right-8 text-7xl font-black text-slate-100/60 font-display group-hover:text-brand-gold/10 transition-colors pointer-events-none -z-0 select-none">
                {tr.num}
              </span>

              <div className="relative z-10 text-left">
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-sm text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <div className="transition-colors duration-300">
                    {tr.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-brand-navy mb-3 group-hover:text-brand-teal transition-colors tracking-wide">
                  {tr.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                  {tr.description}
                </p>
              </div>

              {/* Bullet Features */}
              <div className="border-t border-slate-200/40 pt-5 mt-auto relative z-10">
                <ul className="space-y-2.5 text-left">
                  {tr.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-2 text-xs font-black text-brand-navy">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Callout */}
        <div className="text-center mt-16 relative z-10">
          <a href="#contact" className="inline-flex items-center space-x-2 text-sm font-black text-brand-teal hover:text-brand-gold-dark uppercase tracking-wider transition-colors group">
            <span>Inquire for custom rehabilitation plan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
