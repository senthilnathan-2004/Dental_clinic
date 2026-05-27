import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, HeartHandshake, Eye, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '99%', label: 'Implant Success' },
    { value: '10+', label: 'Years Experience' },
    { value: 'Class-B', label: 'Sterile Standards' }
  ];

  const values = [
    {
      icon: <Compass className="w-5 h-5 text-brand-teal" />,
      title: 'Modern Infrastructure',
      desc: 'Integrating advanced low-radiation CBCT 3D scanners and digital dental operatory systems.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-teal" />,
      title: 'Comfortable Amience',
      desc: 'Boutique waiting lounge and relaxing surgical rooms designed to ease clinical anxiety.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />,
      title: 'Precision Surgical Guides',
      desc: 'Computed placement layout ensures minimal incisions, low pain, and rapid dental osseointegration.'
    },
    {
      icon: <Eye className="w-5 h-5 text-brand-teal" />,
      title: 'Patient-First Focus',
      desc: 'Transparent pricing guides, dedicated relationship managers, and comprehensive global post-op care.'
    }
  ];

  return (
    <section id="about" className="py-10 md:py-16 bg-white overflow-hidden relative">

      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-teal-50/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Philosophy
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-blue leading-[1.2] font-serif">
            A Luxury Approach to <span className="green-text">World-Class Dentistry</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold rounded-full mt-4 mx-auto"></div>
        </div>

        {/* Content Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Image collage with overlays */}
          <div className="lg:col-span-6 relative">

            {/* Offset Gold Backdrop Frame */}
            <div className="absolute -inset-4 border-2 border-brand-gold/30 rounded-3xl transform -rotate-2 pointer-events-none -z-10"></div>

            {/* Main Lobby Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="/images/clinic-lobby.png"
                alt="Pulp Dental Clinic premium reception suite"
                className="w-full h-[450px] object-cover"
              />

              {/* Inner frame styling */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none m-3"></div>
            </motion.div>

            {/* Suspended Stats Card Grid Overlay */}
            <div className="absolute -bottom-8 right-6 left-6 grid grid-cols-3 gap-3 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-2 border-r border-slate-100 last:border-0">
                  <span className="block text-lg sm:text-xl font-black text-brand-teal font-display">{stat.value}</span>
                  <span className="block text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Values and Quote */}
          <div className="lg:col-span-6 space-y-8 text-left">

            {/* Lead Quote */}
            <div className="border-l-4 border-brand-gold pl-6 space-y-2">
              <p className="text-lg font-serif italic text-brand-navy font-semibold">
                “Our mission is to combine medical-grade precision with hospitality that rivals the finest boutique hotels, ensuring absolute peace of mind.”
              </p>
              <span className="block text-xs font-black uppercase tracking-widest text-brand-gold-dark mt-2">
                - Dr. Senthil Nathan, Clinical Director
              </span>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="space-y-2.5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h4 className="text-sm font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors uppercase tracking-wider">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
