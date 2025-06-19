import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SiteMapPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-16 bg-white min-h-screen">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-quattrocento text-[#6B4F27]">Site Map</h1>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li><Link href="/">Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#practices">Practice Areas</a>
              <ul className="ml-6 list-disc">
                <li><Link href="/practice/personal-injury">Personal Injury</Link></li>
                <li><Link href="/practice/criminal-defense">Criminal Defense</Link></li>
                <li><Link href="/practice/family-law">Family Law</Link></li>
              </ul>
            </li>
            <li><a href="#testimonials">Client Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
} 