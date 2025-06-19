"use client";

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Family Law',
    heading: 'Family Law: Compassionate Guidance for Families',
    description1: 'Family law matters are deeply personal and often emotionally charged. At Williamson Lawfirm, we provide compassionate and knowledgeable legal support for families navigating divorce, child custody, support, and other sensitive issues. Our goal is to protect your interests and help you achieve the best possible outcome for your family.',
    description2: 'We assist clients with a variety of family law matters, including:',
    case1: 'Divorce & Separation',
    case2: 'Child Custody & Visitation',
    case3: 'Child & Spousal Support',
    case4: 'Adoption',
    case5: 'Domestic Violence Protection',
    case6: 'Prenuptial Agreements',
    description3: 'We approach every case with empathy, discretion, and a commitment to resolving disputes efficiently. Whether through negotiation or litigation, we strive to minimize conflict and achieve results that serve your family\'s best interests.',
    description4: 'If you need guidance with a family law issue, contact us today for a confidential consultation. We are here to support you every step of the way.',
  },
  es: {
    pageTitle: 'Derecho Familiar',
    heading: 'Derecho Familiar: Orientación Compasiva para Familias',
    description1: 'Los asuntos de derecho familiar son profundamente personales y, a menudo, emocionalmente difíciles. En Williamson Lawfirm, brindamos apoyo legal compasivo y experto para familias que enfrentan divorcios, custodia de hijos, manutención y otros temas delicados. Nuestro objetivo es proteger sus intereses y ayudarle a lograr el mejor resultado posible para su familia.',
    description2: 'Asistimos a clientes en una variedad de asuntos de derecho familiar, incluyendo:',
    case1: 'Divorcio y Separación',
    case2: 'Custodia y Visitas de Menores',
    case3: 'Manutención de Menores y Cónyuge',
    case4: 'Adopción',
    case5: 'Protección contra Violencia Doméstica',
    case6: 'Acuerdos Prenupciales',
    description3: 'Abordamos cada caso con empatía, discreción y un compromiso de resolver disputas de manera eficiente. Ya sea mediante negociación o litigio, buscamos minimizar el conflicto y lograr resultados que beneficien a su familia.',
    description4: 'Si necesita orientación en un asunto de derecho familiar, contáctenos hoy para una consulta confidencial. Estamos aquí para apoyarle en cada paso del camino.',
  },
};

export default function FamilyLawPage() {
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