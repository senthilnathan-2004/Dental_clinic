import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Clinic', href: '#about' },
    { name: 'Specialist Bio', href: '#specialists' },
    { name: 'Clinic Standards', href: '#why-choose-us' },
    { name: 'Dental Tourism', href: '#dental-tourism' },
    { name: 'Patient Reviews', href: '#testimonials' },
    { name: 'Media Gallery', href: '#gallery' },
  ];

  const treatments = [
    { name: 'Dental Implants', href: '#treatments' },
    { name: 'Full Mouth Restoration', href: '#treatments' },
    { name: 'Root Canal Treatment', href: '#treatments' },
    { name: 'Smile Makeovers', href: '#treatments' },
    { name: 'Cosmetic Dentistry', href: '#treatments' },
    { name: 'Teeth Whitening', href: '#treatments' },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-8 border-t border-brand-gold/10 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand block */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden p-0.5">
                <img src="/images/logo.png" className="w-full h-full object-contain" alt="Pulp Dental Logo" />
              </div>
              <div>
                <span className="block text-xl font-black tracking-tight text-white font-display">
                  PULP <span className="text-brand-teal">DENTAL</span>
                </span>
                <span className="block text-[8px] font-bold tracking-widest text-brand-gold-light uppercase -mt-1">
                  & IMPLANT CENTRE
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-semibold">
              Delivering premium dental implant surgeries, immediate load implant protocols, full mouth rehabilitations, and high-end cosmetic smile restorations in Puducherry under certified MDS specialists.
            </p>

            {/* Social media connections */}
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Instagram">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-teal hover:text-white transition-colors text-slate-400" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links list */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-slate-450 hover:text-white transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments list */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Specialized Care
            </h4>
            <ul className="space-y-2.5">
              {treatments.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-xs sm:text-sm text-slate-450 hover:text-white transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold-light">
              Clinic Contact
            </h4>
            <ul className="space-y-4">
              
              <li className="flex items-start space-x-3 text-slate-450">
                <MapPin className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm leading-relaxed font-semibold">
                  No:126, Cuddalore Road, Thavalakuppam, Puducherry 605007
                </span>
              </li>

              <li className="flex items-center space-x-3 text-slate-450">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">+91 94435 34244</span>
              </li>

              <li className="flex items-center space-x-3 text-slate-450">
                <Mail className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">pulpdental@gmail.com</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Footer bottom details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">
          <p>
            &copy; {currentYear} Pulp Dental Clinic & Implant Centre. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0 flex items-center">
            Designed with <span className="text-rose-500 mx-1">❤️</span> for luxury dental care.
          </p>
        </div>

      </div>
    </footer>
  );
}
