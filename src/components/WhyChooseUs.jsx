import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Target,
  Smile,
  UserCheck,
  FileText,
  CreditCard
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Digital 3D Infrastructure',
      desc: 'Equipped with digital CBCT scanners, micro-surgical gear, and low-radiation imaging systems.',
      badge: 'High-Tech'
    },
    {
      icon: <Target className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Guided Computer Placement',
      desc: 'Expert implant fixtures mapping via 3D guide templates, reducing recovery time to days.',
      badge: 'Advanced'
    },
    {
      icon: <Smile className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Spa-Like Ambience Suite',
      desc: 'A boutique healthcare layout crafted with relaxing acoustics, neutral shades, and aromatherapy.',
      badge: 'Boutique'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Certified Safety Codes',
      desc: 'Absolute adherence to class-B sterile parameters, hygiene, and full disposable protocols.',
      badge: 'Certified'
    },
    {
      icon: <FileText className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Transparent Dental Reports',
      desc: 'Step-by-step diagnostic breakdown with clear breakdown of material warranty cards.',
      badge: 'Honest'
    },
    {
      icon: <CreditCard className="w-5 h-5 text-brand-gold-dark" />,
      title: 'Flexible Payment Suite',
      desc: 'Premium care systems at fair prices with flexible EMI dental financing and card options.',
      badge: 'Fair Price'
    },
  ];

  return (
    <section id="why-choose-us" className="pt-20 pb-10 md:pt-32 md:pb-16 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Standards
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Why Patients Choose <span className="text-brand-teal">Pulp Dental Clinic</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            We deliver international standard dental solutions with top-tier comfort, cutting-edge technology, and transparent treatment pricing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white hover:shadow-xl border border-slate-200/50 p-8 md:p-10 rounded-[32px] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="text-left">
                {/* Floating Tag */}
                <div className="absolute top-8 right-8">
                  <span className="text-[9px] font-black uppercase tracking-wider text-brand-teal bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
                    {point.badge}
                  </span>
                </div>

                {/* Icon inside gold circle */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-50 to-brand-gold/15 flex items-center justify-center mb-6 text-brand-gold shadow-sm group-hover:scale-105 transition-transform">
                  {point.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-black text-brand-navy mb-3 group-hover:text-brand-teal transition-colors tracking-wide">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {point.desc}
                </p>
              </div>

              {/* Gold gradient bottom glow */}
              <div className="w-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold-light mt-6 transition-all duration-300 group-hover:w-full rounded-full"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
