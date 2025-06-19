"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Criminal Defense Law',
    heading: 'Criminal Defense: Protecting Your Rights and Freedom',
    description1: 'Facing criminal charges can be one of the most stressful experiences in life. At Williamson Lawfirm, we provide aggressive and strategic defense for clients accused of misdemeanors and felonies. Our experienced attorneys are dedicated to safeguarding your rights and achieving the best possible outcome for your case.',
    description2: 'We handle a wide range of criminal cases, including:',
    case1: 'DUI & DWI',
    case2: 'Drug Offenses',
    case3: 'Assault & Battery',
    case4: 'Theft & Burglary',
    case5: 'Domestic Violence',
    case6: 'White Collar Crimes',
    description3: 'We thoroughly investigate every case, challenge the prosecution\'s evidence, and advocate fiercely in court. Our team will guide you through every step of the legal process, ensuring you understand your rights and options.',
    description4: 'If you or a loved one is facing criminal charges, contact us immediately for a confidential consultation. We are here to fight for your future.',
  },
  es: {
    pageTitle: 'Defensa Criminal',
    heading: 'Defensa Criminal: Protegiendo Sus Derechos y Libertad',
    description1: 'Enfrentar cargos criminales puede ser una de las experiencias más estresantes de la vida. En Williamson Lawfirm, brindamos una defensa agresiva y estratégica para clientes acusados de delitos menores y graves. Nuestros abogados experimentados están dedicados a proteger sus derechos y lograr el mejor resultado posible para su caso.',
    description2: 'Manejamos una amplia gama de casos criminales, incluyendo:',
    case1: 'DUI y DWI',
    case2: 'Delitos de Drogas',
    case3: 'Asalto y Agresión',
    case4: 'Robo y Allanamiento',
    case5: 'Violencia Doméstica',
    case6: 'Delitos de Cuello Blanco',
    description3: 'Investigamos a fondo cada caso, desafiamos las pruebas de la fiscalía y abogamos con firmeza en la corte. Nuestro equipo lo guiará en cada paso del proceso legal, asegurando que comprenda sus derechos y opciones.',
    description4: 'Si usted o un ser querido enfrenta cargos criminales, contáctenos de inmediato para una consulta confidencial. Estamos aquí para luchar por su futuro.',
  },
};

export default function CriminalDefensePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-16 bg-white min-h-screen">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-quattrocento text-[#6B4F27]">{t.heading}</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t.description1}</p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">{t.description2}</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6 space-y-3 leading-relaxed">
            <li>{t.case1}</li>
            <li>{t.case2}</li>
            <li>{t.case3}</li>
            <li>{t.case4}</li>
            <li>{t.case5}</li>
            <li>{t.case6}</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{t.description3}</p>
          <p className="text-lg text-gray-700 leading-relaxed">{t.description4}</p>
        </section>
      </main>
      <Footer />
    </>
  );
} 