import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Dental Implants',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Dental Implants',
        message: '',
      });
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest text-brand-teal">
            The Booking Suite
          </h3>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight font-serif">
            Visit Our Clinic & <span className="green-text">Book Consultation</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base leading-relaxed font-semibold">
            Connect with us to schedule an appointment. We offer comprehensive support, including travel planning coordinates.
          </p>
        </div>

        {/* Contact Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Contact Info & Map Details */}
          <div className="lg:col-span-5 space-y-8 text-left">

            <div className="space-y-6">
              <h3 className="text-xl font-black text-brand-navy font-serif tracking-wide">
                Clinic Location
              </h3>

              <div className="space-y-5">

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Address</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      No:126, Cuddalore Road, Thavalakuppam, Puducherry 605007
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Phone Call</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      +91 94435 34244
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Email Inquiry</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      pulpdental@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-brand-teal shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-brand-navy tracking-wider">Hours of Operation</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold mt-1">
                      Mon - Sat: 9:30 AM - 1:30 PM, 4:30 PM - 8:30 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Styled Map frame */}
            <div className="rounded-[32px] overflow-hidden shadow-lg border border-slate-200/50 aspect-[4/3] w-full bg-slate-50">
              <iframe
                title="Pulp Dental Clinic & Implant Centre Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.4285817882255!2d79.800045!3d11.8752538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53606b00000001%3A0x6b306b3e34a6ef2f!2sCuddalore%20Road%2C%20Thavalakuppam%2C%20Puducherry!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right: Booking Card (Executive Suite style) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/50 p-8 sm:p-12 rounded-[40px] text-left relative overflow-hidden shadow-sm">
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-brand-navy font-serif mb-2 tracking-wide">
                Consultation Request Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-550 mb-8 leading-relaxed font-semibold">
                Submit details below. Our treatment concierge will contact you to align your preferred scheduling layout.
              </p>

              {submitted ? (
                <div className="bg-white border border-teal-100 p-8 rounded-3xl text-center space-y-4 shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-brand-teal mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-brand-navy">
                    Request Received Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed font-semibold">
                    Thank you. Dr. Senthil’s concierge office will reach out within 2-4 hours to confirm your treatment schedule.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white teal-gradient-bg shadow-md hover:scale-102 transition-transform"
                  >
                    New Consultation Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. +91 9876543210"
                        className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. jdoe@domain.com"
                        className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all font-semibold"
                      />
                    </div>

                  </div>

                  {/* Select Treatment */}
                  <div>
                    <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Preferred Treatment Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all cursor-pointer font-black text-brand-navy uppercase tracking-wider"
                    >
                      <option value="Dental Implants">Dental Implants & Rehab</option>
                      <option value="Full Mouth Rehabilitation">Full Mouth Restoration</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Smile Makeover">Smile Makeover / Designs</option>
                      <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="General Inquiries">General Consultations</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Medical Message / Travel Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="List details regarding previous extractions, scan reports, or if you need travel coordination assistance..."
                      className="w-full bg-white border border-slate-200/60 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal px-4 py-3.5 rounded-xl text-xs sm:text-sm outline-none transition-all resize-none font-semibold"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="luxury-hover-effect w-full inline-flex items-center justify-center space-x-2 px-8 py-4.5 rounded-xl text-white font-black uppercase tracking-wider shadow-md teal-gradient-bg hover:opacity-95 text-xs sm:text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
