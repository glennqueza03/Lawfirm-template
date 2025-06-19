'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    pageTitle: 'Personal Injury Law',
    heading: 'Personal Injury: Seeking Justice for the Injured',
    description1: 'At Williamson Lawfirm, we understand the profound impact a personal injury can have on your life. From medical bills and lost wages to emotional distress and long-term suffering, the aftermath of an accident can be overwhelming. Our dedicated team of personal injury attorneys is committed to helping you navigate this challenging time and secure the compensation you rightfully deserve.',
    description2: 'We handle a wide range of personal injury cases, including:',
    case1: 'Car Accidents',
    case2: 'Truck Accidents',
    case3: 'Motorcycle Accidents',
    case4: 'Slip and Fall Injuries',
    case5: 'Workplace Injuries',
    case6: 'Medical Malpractice',
    description3: 'Our approach is centered on comprehensive investigation, aggressive negotiation, and relentless litigation when necessary. We gather crucial evidence, consult with experts, and build a strong case designed to achieve the best possible outcome for you. We work on a contingency fee basis, meaning you pay nothing unless we win your case.',
    description4: 'If you or a loved one has been injured due to someone else\'s negligence, don\'t hesitate to contact us for a free, no-obligation consultation. We are here to listen to your story, explain your legal options, and advocate fiercely on your behalf.',
  },
  es: {
    pageTitle: 'Derecho de Lesiones Personales',
    heading: 'Lesiones Personales: Buscando Justicia para los Lesionados',
    description1: 'En Williamson Lawfirm, entendemos el profundo impacto que una lesión personal puede tener en su vida. Desde facturas médicas y salarios perdidos hasta angustia emocional y sufrimiento a largo plazo, las secuelas de un accidente pueden ser abrumadoras. Nuestro dedicado equipo de abogados de lesiones personales se compromete a ayudarle a navegar por este momento difícil y asegurar la compensación que legítimamente merece.',
    description2: 'Manejamos una amplia gama de casos de lesiones personales, incluyendo:',
    case1: 'Accidentes Automovilísticos',
    case2: 'Accidentes de Camiones',
    case3: 'Accidentes de Motocicletas',
    case4: 'Lesiones por Resbalones y Caídas',
    case5: 'Lesiones en el Lugar de Trabajo',
    case6: 'Negligencia Médica',
    description3: 'Nuestro enfoque se centra en la investigación exhaustiva, la negociación agresiva y el litigio implacable cuando sea necesario. Recopilamos pruebas cruciales, consultamos con expertos y construimos un caso sólido diseñado para lograr el mejor resultado posible para usted. Trabajamos con honorarios de contingencia, lo que significa que no paga nada a menos que ganemos su caso.',
    description4: 'Si usted o un ser querido ha resultado herido debido a la negligencia de otra persona, no dude en ponerse en contacto con nosotros para una consulta gratuita y sin compromiso. Estamos aquí para escuchar su historia, explicarle sus opciones legales y abogar ferozmente en su nombre.',
  },
};

export default function PersonalInjuryPage() {
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