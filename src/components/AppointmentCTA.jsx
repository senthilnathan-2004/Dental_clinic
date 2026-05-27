import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function AppointmentCTA() {
  return (
    <section className="py-12 relative overflow-hidden bg-brand-navy border-y border-brand-gold/10">
      
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Luxury gold border layout lines */}
      <div className="absolute inset-0 border-2 border-brand-gold/10 rounded-[40px] m-6 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
        
        {/* Subtitle / tag */}
        <span className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
          Experience Restored Confidence
        </span>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-serif">
          Book Your Consultation Today
        </h2>
        
        {/* Description */}
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
          Discuss your dental conditions directly with Dr. Senthil Nathan. Learn about digital treatment previews, scheduling options, and get a clear upfront price assessment.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          
          <a
            href="tel:+919443534244"
            className="luxury-hover-effect inline-flex items-center space-x-2.5 px-8 py-4.5 rounded-full bg-white text-brand-blue font-black uppercase tracking-wider shadow-lg hover:bg-slate-50 transition-all text-sm w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5 text-brand-teal" />
            <span>Call Clinic: +91 94435 34244</span>
          </a>

          <a
            href="https://wa.me/919443534244?text=Hello%20Pulp%20Dental%20Clinic,%20I%20would%20like%20to%2520inquire%20about%20implants."
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-hover-effect inline-flex items-center space-x-2.5 px-8 py-4.5 rounded-full bg-emerald-500 text-white font-black uppercase tracking-wider shadow-lg hover:bg-emerald-600 transition-all text-sm w-full sm:w-auto justify-center"
          >
            <MessageSquare className="w-5 h-5 fill-white/10" />
            <span>Consult on WhatsApp</span>
          </a>

        </div>

        {/* Additional assurance text */}
        <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pt-2">
          🔒 Strict clinical confidentiality guaranteed
        </p>

      </div>
    </section>
  );
}
