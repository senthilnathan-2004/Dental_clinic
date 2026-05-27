import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, CheckCircle, Heart, Star } from 'lucide-react';

export default function Specialist() {
  const specializations = [
    'Full Mouth Implants & Rehabilitation',
    'Immediate Loading Implants',
    'Smile Restoration & Makeovers',
    'Cosmetic Dentistry & Veneers',
    'Laser Assisted Surgery',
    'Advanced Bone Grafting'
  ];

  return (
    <section id="specialists" className="py-10 md:py-16 bg-slate-50 overflow-hidden relative">

      {/* Background decorations */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Specialists
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Meet Our <span className="green-text">Expert Implantologist</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            Led by clinical expertise and international dental training, our specialists deliver high-precision treatments with care.
          </p>
        </div>

        {/* Doctor Magazine Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Doctor Portrait spread */}
          <div className="lg:col-span-5 flex justify-center relative">

            {/* Offset border back frame */}
            <div className="absolute -inset-4 border-2 border-brand-gold/40 rounded-3xl transform -rotate-3 pointer-events-none -z-10"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
            >
              <img
                src="/images/doctor.png"
                alt="Dr. Senthil Nathan, MDS"
                className="w-full h-[520px] object-cover"
              />

              {/* Profile details cover overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-blue via-brand-blue/95 to-transparent p-8 text-white text-left">
                <span className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
                  Chief Implant Surgeon
                </span>
                <h3 className="text-2xl font-black tracking-tight font-serif mt-1">
                  Dr. Senthil Nathan, MDS
                </h3>
                <p className="text-xs opacity-90 font-bold uppercase tracking-wider mt-1 text-slate-300">
                  Prosthodontics & Implantology Specialist
                </p>
              </div>

              {/* Verified Authority Stamp overlay */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-brand-gold/30 bg-brand-blue/60 backdrop-blur-md flex flex-col items-center justify-center text-white shadow-lg pointer-events-none">
                <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                <span className="text-[7px] font-black uppercase tracking-widest mt-1 text-brand-gold-light">MDS</span>
              </div>

            </motion.div>
          </div>

          {/* Right: Detailed bio and credentials spread */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Bio introduction */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-brand-navy font-serif leading-tight">
                Rebuilding Smiles with Elite Scientific Precision
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Dr. Senthil Nathan is an acclaimed Prosthodontist and Implant Specialist. Known for his technical mastery of immediate-loading dental implants, he offers full mouth restorations that help patients regain their confidence and chew normally within 24 to 72 hours.
              </p>
            </div>

            {/* Academic Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider">MDS Post-Graduate</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Master of Dental Surgery with rigorous prosthodontic surgical residency.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-brand-gold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-navy uppercase tracking-wider">International Protocols</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Certified for global systems like Straumann (Switzerland) and Nobel Biocare.</p>
                </div>
              </div>

            </div>

            {/* Specialist Expertise grid list */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Areas of Clinical Practice
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specializations.map((spec, i) => (
                  <motion.div
                    key={spec}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-slate-200/40 shadow-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-brand-navy">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Signature Block Callout */}
            <div className="bg-white/80 p-5 rounded-[24px] border border-slate-200/50 flex items-center space-x-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 overflow-hidden p-0.5 shrink-0">
                <img src="/images/logo.png" className="w-full h-full object-contain" alt="Pulp Dental Logo" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-black text-brand-blue">
                  “Every smile makeover is a customized fusion of surgical science and fine cosmetic art.”
                </p>
                <span className="block text-[10px] font-black text-brand-gold-dark uppercase tracking-wider mt-1.5">
                  - Dr. Senthil Nathan, Clinical Director
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
