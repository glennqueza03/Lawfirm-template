'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { usePathname } from 'next/navigation';

const navLabels = {
  en: {
    home: 'Home',
    practices: 'Practice Areas',
    about: 'About Us',
    testimonials: 'Client Testimonials',
    contact: 'Contact Us',
    lang: 'ESPAÑOL',
    personalInjury: 'Personal Injury',
    criminalDefense: 'Criminal Defense',
    familyLaw: 'Family Law',
  },
  es: {
    home: 'Inicio',
    practices: 'Áreas de Práctica',
    about: 'Sobre Nosotros',
    testimonials: 'Testimonios',
    contact: 'Contáctenos',
    lang: 'English',
    personalInjury: 'Lesiones Personales',
    criminalDefense: 'Defensa Criminal',
    familyLaw: 'Derecho Familiar',
  },
};

export default function Navigation() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceDropdown, setPracticeDropdown] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const t = navLabels[language];
  const isHomePage = pathname === '/';

  const handleSpanishClick = () => {
    setIsSpanish(!isSpanish);
    // Placeholder for translation logic
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu on navigation
  };

  const handleSectionClick = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage with anchor
      window.location.href = `/#${sectionId}`;
    }
    setMenuOpen(false);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setPracticeDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setPracticeDropdown(false);
    }, 150); // 150ms delay
  };

  return (
    <nav className="fixed top-0 w-full bg-white h-16 flex items-center justify-between px-4 md:px-12 shadow-md z-50">
      <div className="flex items-center space-x-3">
        <Image src="/styles/pictures/balances.jpg" alt="Logo" width={40} height={40} className="object-contain" />
        <span className="text-xl md:text-2xl font-extrabold font-quattrocento tracking-wide">
          LOCAL LAWFIRM
        </span>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-black font-quattrocento font-medium">{t.home}</Link>
        <div className="relative group inline-flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="text-black font-quattrocento font-medium flex items-center gap-1">{t.practices}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {practiceDropdown && (
            <div className="absolute left-0 top-full w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <a href="/practice/personal-injury" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.personalInjury}</a>
              <a href="/practice/criminal-defense" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.criminalDefense}</a>
              <a href="/practice/family-law" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.familyLaw}</a>
            </div>
          )}
        </div>
        <button onClick={() => handleSectionClick('about')} className="text-black font-quattrocento font-medium">{t.about}</button>
        <button onClick={() => handleSectionClick('testimonials')} className="text-black font-quattrocento font-medium">{t.testimonials}</button>
        <button onClick={() => handleSectionClick('contact')} className="text-black font-quattrocento font-medium">{t.contact}</button>
        <button
          onClick={toggleLanguage}
          className="bg-white border border-black text-black font-bold px-5 py-2 rounded-md shadow hover:bg-gray-100 transition-colors font-quattrocento"
        >
          {t.lang}
        </button>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
          aria-label="Open menu"
        >
          <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden z-50 animate-fade-in">
          <Link href="/" className="text-black font-quattrocento font-medium text-lg">{t.home}</Link>
          <div className="w-full">
            <button onClick={() => setPracticeDropdown(!practiceDropdown)} className="text-black font-quattrocento font-medium text-lg flex items-center gap-1 w-full justify-center">
              {t.practices}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {practiceDropdown && (
              <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <a href="/practice/personal-injury" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.personalInjury}</a>
                <a href="/practice/criminal-defense" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.criminalDefense}</a>
                <a href="/practice/family-law" className="block px-6 py-3 text-[#6B4F27] hover:bg-[#f8f5f0] font-quattrocento">{t.familyLaw}</a>
              </div>
            )}
          </div>
          <button onClick={() => handleSectionClick('about')} className="text-black font-quattrocento font-medium text-lg">{t.about}</button>
          <button onClick={() => handleSectionClick('testimonials')} className="text-black font-quattrocento font-medium text-lg">{t.testimonials}</button>
          <button onClick={() => handleSectionClick('contact')} className="text-black font-quattrocento font-medium text-lg">{t.contact}</button>
          <button
            onClick={toggleLanguage}
            className="bg-white border border-black text-black font-bold px-5 py-2 rounded-md shadow hover:bg-gray-100 transition-colors font-quattrocento"
          >
            {t.lang}
          </button>
        </div>
      )}
    </nav>
  );
} 