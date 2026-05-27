import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: 'Great ambiance, best treatment, worth every penny. Dr. Senthil was extremely patient and detailed with my implant surgery.',
      author: 'Rajesh Kumar',
      location: 'Puducherry, India',
      rating: 5,
      date: '2 months ago',
      avatar: '👨‍💼',
      badge: 'Verified Local'
    },
    {
      text: 'Affordable price and best customer service. Highly recommend Pulp Dental Clinic for anyone looking for dental tourism. Extremely professional!',
      author: 'Sarah Jenkins',
      location: 'Melbourne, Australia',
      rating: 5,
      date: '1 month ago',
      avatar: '👩‍💼',
      badge: 'Verified Travel'
    },
    {
      text: 'Professional and friendly staff. The clinic is absolutely spotless and uses state-of-the-art diagnostic equipment. Very comfortable experience.',
      author: 'Subramanian R.',
      location: 'Chennai, India',
      rating: 5,
      date: '3 weeks ago',
      avatar: '👴',
      badge: 'Verified Patient'
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Trust
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Patient Stories & <span className="green-text">Experiences</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>

          {/* Trust Badge Wrapper */}
          <div className="inline-flex items-center space-x-3 bg-white border border-slate-200/50 px-5 py-2.5 rounded-full shadow-sm mt-4">
            <span className="text-sm font-black text-brand-blue leading-none">4.7</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">
              Google Rating (40+ Reviews)
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={rev.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-slate-200/40 p-8 md:p-10 rounded-[32px] relative text-left shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-8 text-slate-100 pointer-events-none select-none">
                <Quote className="w-12 h-12 text-slate-100 fill-slate-50" />
              </div>

              <div>
                {/* Float Badge Tag */}
                <div className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full text-brand-teal mb-5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-black uppercase tracking-wider">
                    {rev.badge}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-8 relative z-10 font-medium">
                  “{rev.text}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-slate-100 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/50 flex items-center justify-center text-lg shadow-inner">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-black text-brand-navy leading-none">
                    {rev.author}
                  </h4>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                    {rev.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="text-center mt-12">
          <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
            🛡️ Verified reviews collected directly from Google Maps
          </p>
        </div>

      </div>
    </section>
  );
}
