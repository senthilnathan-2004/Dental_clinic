import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, Heart, MessageSquare, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Specialist', href: '#specialists' },
    { name: 'Tourism', href: '#dental-tourism' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 px-0 pt-0 md:px-4 md:pt-6">
      <nav className={`w-full max-w-7xl transition-all duration-500 ${
        scrolled 
          ? 'glassmorphism shadow-2xl py-3 px-4 md:px-8 border-b border-slate-200/80 md:border md:border-brand-gold/20 backdrop-blur-xl max-w-6xl rounded-none md:rounded-full' 
          : 'bg-white md:bg-white/10 md:backdrop-blur-sm py-4 px-4 md:px-10 border-b border-slate-200/80 md:border md:border-slate-100/10 rounded-none md:rounded-full'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100 group-hover:scale-105 transition-transform duration-500 overflow-hidden p-0.5">
              <img src="/images/logo.png" className="w-full h-full object-contain" alt="Pulp Dental Logo" />
            </div>
            <div className="text-left">
              <span className="block text-lg md:text-xl font-black tracking-tight text-brand-navy font-display group-hover:text-brand-teal transition-colors">
                PULP <span className="text-brand-teal">DENTAL</span>
              </span>
              <span className="block text-[8px] font-bold tracking-widest text-brand-gold-dark uppercase -mt-1">
                & IMPLANT CENTRE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-extrabold text-brand-navy hover:text-brand-teal transition-all duration-300 relative group py-1.5 uppercase tracking-wider"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact & CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919443534244"
              className="flex items-center space-x-2 text-brand-navy font-bold hover:text-brand-teal transition-colors duration-300 text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              <span>+91 94435 34244</span>
            </a>
            <a
              href="#contact"
              className="luxury-hover-effect inline-flex items-center space-x-2 px-5 py-3 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-md teal-gradient-bg hover:scale-105 active:scale-95 transition-transform"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-brand-navy hover:text-brand-teal p-2 focus:outline-none transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Immersive Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 lg:hidden bg-slate-950/60 backdrop-blur-md flex justify-end"
          >
            {/* Card Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm overflow-hidden p-0.5">
                      <img src="/images/logo.png" className="w-full h-full object-contain" alt="Pulp Dental Logo" />
                    </div>
                    <div className="text-left font-display">
                      <span className="block text-base font-black text-brand-navy tracking-tight uppercase">
                        Pulp Dental
                      </span>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-brand-navy hover:text-brand-teal transition-colors"
                    aria-label="Close Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Animated Navigation Links */}
                <div className="py-8 space-y-2 flex flex-col text-left">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-extrabold uppercase tracking-wider text-brand-navy hover:bg-teal-50/50 hover:text-brand-teal transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="space-y-6 pt-6 border-t border-slate-100 text-left">
                
                {/* Quick Call details */}
                <div className="space-y-3.5">
                  
                  <a
                    href="tel:+919443534244"
                    className="flex items-center space-x-3 text-brand-navy font-bold text-xs uppercase tracking-wider"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 94435 34244</span>
                  </a>

                  <a
                    href="https://wa.me/919443534244?text=Hello%20Pulp%20Dental%20Clinic,%2520I%20would%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-brand-navy font-bold text-xs uppercase tracking-wider"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0">
                      <MessageSquare className="w-4 h-4 fill-emerald-500/10" />
                    </div>
                    <span>WhatsApp Inquiry</span>
                  </a>

                </div>

                {/* Location */}
                <div className="flex items-start space-x-3 text-slate-500">
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold leading-relaxed">
                    No:126, Cuddalore Road, Thavalakuppam, Puducherry 605007
                  </span>
                </div>

                {/* Primary Button */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 rounded-full text-white text-xs font-black uppercase tracking-wider shadow-lg teal-gradient-bg block"
                >
                  Book Appointment
                </a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
