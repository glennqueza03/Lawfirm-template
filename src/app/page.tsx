'use client';

import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import ConsultationForm from '@/components/ConsultationForm';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import Footer from '@/components/Footer';

const translations = {
  en: {
    requestConsult: 'REQUEST A FREE\nCONSULTATION',
    firstName: 'FULL NAME',
    phone: 'PHONE NUMBER',
    email: 'EMAIL ADDRESS',
    message: 'MESSAGE',
    submit: 'Submit',
    quote1: 'Your Case',
    quote2: 'Our Commitment.',
    about: 'About Us',
    aboutText: 'Williamson Lawfirm has served the community for over 20 years, providing expert legal counsel in personal injury, criminal defense, and more. Our mission is to fight for your rights with integrity and dedication.',
    practices: 'Practice Areas',
    personalInjury: 'Personal Injury',
    personalInjuryText: 'We fight for victims of accidents and negligence, ensuring you receive the compensation you deserve.',
    criminalDefense: 'Criminal Defense',
    criminalDefenseText: 'Strong defense representation for all types of criminal cases, protecting your rights and future.',
    familyLaw: 'Family Law',
    familyLawText: 'Compassionate guidance through divorce, custody, and other family law matters.',
    testimonials: 'Client Testimonials',
    testimonial1: '"The team was incredibly professional and helped me get the compensation I deserved after my accident."',
    testimonial1Name: 'John Smith',
    testimonial2: '"I\'m grateful for their expertise and dedication. They fought tirelessly for my case."',
    testimonial2Name: 'Sarah Johnson',
    contact: 'Contact Us',
    address: 'Address',
    addressText: '123 Legal Street, Suite 100, City, State 12345',
    hours: 'Hours of Operation',
    hoursText: 'Mon-Fri: 9:00am - 5:00pm\nSat-Sun: Closed',
    phoneLabel: 'Phone',
    phoneText: '(555) 123-4567',
    emailLabel: 'Email',
    emailText: 'contact@lawfirm.com',
    map: 'Map',
  },
  es: {
    requestConsult: 'SOLICITE UNA\nCONSULTA GRATUITA',
    firstName: 'NOMBRE',
    lastName: 'APELLIDO',
    phone: 'TELÉFONO',
    email: 'CORREO ELECTRÓNICO',
    message: 'MENSAJE',
    submit: 'Enviar',
    quote1: 'Su Caso',
    quote2: 'Nuestro Compromiso.',
    about: 'Sobre Nosotros',
    aboutText: 'Williamson Lawfirm ha servido a la comunidad por más de 20 años, brindando asesoría legal experta en lesiones personales, defensa criminal y más. Nuestra misión es luchar por sus derechos con integridad y dedicación.',
    practices: 'Áreas de Práctica',
    personalInjury: 'Lesiones Personales',
    personalInjuryText: 'Luchamos por las víctimas de accidentes y negligencia, asegurando que reciba la compensación que merece.',
    criminalDefense: 'Defensa Criminal',
    criminalDefenseText: 'Representación sólida para todo tipo de casos criminales, protegiendo sus derechos y su futuro.',
    familyLaw: 'Derecho Familiar',
    familyLawText: 'Orientación compasiva en divorcios, custodia y otros asuntos de derecho familiar.',
    testimonials: 'Testimonios',
    testimonial1: '"El equipo fue increíblemente profesional y me ayudó a obtener la compensación que merecía después de mi accidente."',
    testimonial1Name: 'Juan Pérez',
    testimonial2: '"Estoy agradecido por su experiencia y dedicación. Lucharon incansablemente por mi caso."',
    testimonial2Name: 'Sara Gómez',
    contact: 'Contáctenos',
    address: 'Dirección',
    addressText: '123 Calle Legal, Suite 100, Ciudad, Estado 12345',
    hours: 'Horario de Atención',
    hoursText: 'Lun-Vie: 9:00am - 5:00pm\nSáb-Dom: Cerrado',
    phoneLabel: 'Teléfono',
    phoneText: '(555) 123-4567',
    emailLabel: 'Correo',
    emailText: 'contacto@lawfirm.com',
    map: 'Mapa',
  },
};

export default function Home() {
  const [bgVisible, setBgVisible] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formEmphasized, setFormEmphasized] = useState(false);

  useEffect(() => { setBgVisible(true); }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (res.ok) {
        setShowModal(true);
        setForm({ fullName: '', email: '', phone: '', message: '' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleConsultationClick = () => {
    setFormEmphasized(true);
    setTimeout(() => setFormEmphasized(false), 2000);
  };

  return (
    <>
      <Navigation />
      {/* Call Us Button floating top right below the banner */}
      <a
        href="tel:5551234567"
        className="fixed top-20 right-4 md:right-12 bg-black text-white font-bold font-quattrocento px-6 py-2 rounded-md shadow hover:bg-gray-800 transition-colors text-base md:text-lg z-50"
        style={{ minWidth: 'max-content' }}
      >
        Call Us: (555) 123-4567
      </a>
      {/* Modern Hero Section */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 bg-black/80">
        {/* Background image with dark overlay, both fade in */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${bgVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/styles/pictures/new_gavel.jpg" alt="Gavel background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000 ease-in-out" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-12 py-16 gap-12">
          {/* Left: Headline, subheadline, CTA */}
          <div className="flex-1 flex flex-col items-start justify-center text-left space-y-8 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quattrocento font-bold text-white leading-tight">
              Your Case,<br />
              <span className="text-[#bfa14a]">Our Commitment.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-quattrocento max-w-lg">
              Williamson Lawfirm provides expert legal counsel and representation with integrity and dedication. Let us fight for your rights.
            </p>
            <button
              onClick={handleConsultationClick}
              className="bg-[#bfa14a] text-black font-bold font-quattrocento px-8 py-4 rounded-md shadow hover:bg-[#a88d3c] transition-colors text-lg mt-2"
            >
              Request a Free Consultation
            </button>
          </div>
          {/* Right: Floating Consultation Form */}
          <div className="flex-1 flex justify-center items-center w-full max-w-md lg:-mr-16 mt-8 lg:mt-0">
            <div 
              id="consultation-form"
              className={`bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 w-full transition-all duration-500 ease-in-out ${
                formEmphasized ? 'scale-105 shadow-3xl ring-4 ring-[#bfa14a]' : 'scale-100'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-quattrocento">{t.requestConsult.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h2>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-semibold mb-1">{t.firstName}</label>
                  <input name="fullName" value={form.fullName} onChange={handleFormChange} type="text" className="w-full border border-gray-400 rounded-md px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">{t.email}</label>
                  <input name="email" value={form.email} onChange={handleFormChange} type="email" className="w-full border border-gray-400 rounded-md px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">{t.phone}</label>
                  <input name="phone" value={form.phone} onChange={handleFormChange} type="text" className="w-full border border-gray-400 rounded-md px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">{t.message}</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleFormChange} 
                    className="w-full border border-gray-400 rounded-md px-3 py-2 h-24 resize-none" 
                    placeholder="Tell us about your case..."
                  />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-md mt-4" disabled={submitting}>{submitting ? 'Sending...' : t.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <FadeInOnScroll>
        <section id="about" className="bg-white pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#6B4F27] font-quattrocento">{t.about}</h2>
            <p className="text-gray-700 text-lg">{t.aboutText}</p>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Practice Areas Section */}
      <FadeInOnScroll>
        <section id="practices" className="bg-[#f8f5f0] pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-[#6B4F27] font-quattrocento">{t.practices}</h2>
            <div className="flex flex-col space-y-4">
              <a href="/practice/personal-injury" className="block w-full text-center bg-white border border-[#bfa14a] text-[#6B4F27] font-quattrocento font-bold text-xl py-6 rounded-lg shadow hover:bg-[#bfa14a] hover:text-white transition-colors">{t.personalInjury}</a>
              <a href="/practice/criminal-defense" className="block w-full text-center bg-white border border-[#bfa14a] text-[#6B4F27] font-quattrocento font-bold text-xl py-6 rounded-lg shadow hover:bg-[#bfa14a] hover:text-white transition-colors">{t.criminalDefense}</a>
              <a href="/practice/family-law" className="block w-full text-center bg-white border border-[#bfa14a] text-[#6B4F27] font-quattrocento font-bold text-xl py-6 rounded-lg shadow hover:bg-[#bfa14a] hover:text-white transition-colors">{t.familyLaw}</a>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Client Testimonials Section */}
      <FadeInOnScroll>
        <section id="testimonials" className="bg-white pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#6B4F27] font-quattrocento">{t.testimonials}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="text-gray-700 mb-2">{t.testimonial1}</p>
                <p className="font-semibold text-[#6B4F27]">{t.testimonial1Name}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="text-gray-700 mb-2">{t.testimonial2}</p>
                <p className="font-semibold text-[#6B4F27]">{t.testimonial2Name}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Contact Section */}
      <FadeInOnScroll>
        <section id="contact" className="bg-[#f8f5f0] pt-24 pb-16 px-4">
          <div className="max-w-4xl mx-auto rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-[#6B4F27] font-quattrocento">{t.contact}</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 mb-6 md:mb-0">
                <h3 className="font-semibold mb-2 font-quattrocento">{t.address}</h3>
                <p className="text-gray-700">{t.addressText}</p>
                <h3 className="font-semibold mt-4 mb-2 font-quattrocento">{t.hours}</h3>
                <p className="text-gray-700 whitespace-pre-line">{t.hoursText}</p>
                <h3 className="font-semibold mt-4 mb-2 font-quattrocento">{t.phoneLabel}</h3>
                <p className="text-gray-700">{t.phoneText}</p>
                <h3 className="font-semibold mt-4 mb-2 font-quattrocento">{t.emailLabel}</h3>
                <p className="text-gray-700">{t.emailText}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2 font-quattrocento">{t.map}</h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=123+Legal+Street,+City,+State+12345&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Law Firm Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Modal for success */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center font-quattrocento">
            <h3 className="text-2xl font-bold mb-4">Consultation request sent</h3>
            <p className="mb-6">Our office will reach out as soon as possible.</p>
            <button onClick={() => setShowModal(false)} className="bg-primary text-white px-6 py-2 rounded font-bold">OK</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
} 