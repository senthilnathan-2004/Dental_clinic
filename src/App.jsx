import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialist from './components/Specialist';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import DentalTourism from './components/DentalTourism';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-display">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Treatments Section */}
      <Treatments />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Specialist Section */}
      <Specialist />

      {/* Dental Tourism Section */}
      <DentalTourism />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Gallery Section */}
      <Gallery />

      {/* Call to Action Banner */}
      <AppointmentCTA />

      {/* Contact & Map Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
