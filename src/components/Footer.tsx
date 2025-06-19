import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Logo and Site Links */}
        <div className="flex flex-col items-start space-y-4">
          <Image src="/styles/pictures/balances.jpg" alt="Law Firm Logo" width={80} height={80} className="mb-2" />
          <Link href="/site-map" className="hover:underline">Site Map</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-3 tracking-wider text-gray-500 uppercase">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#practices" className="hover:underline">Practice Areas</a></li>
            <li><a href="#testimonials" className="hover:underline">Client Testimonials</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Address */}
        <div>
          <h4 className="font-bold mb-3 tracking-wider text-gray-500 uppercase">Address</h4>
          <address className="not-italic mb-2">
            123 Legal Street,<br />
            Suite 100<br />
            City, State 12345
          </address>
          <a href="#" className="flex items-center text-primary hover:underline">
            <svg className="w-5 h-5 mr-1 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Map & Directions
          </a>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="font-bold mb-3 tracking-wider text-gray-500 uppercase">Follow</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pb-8 text-xs text-gray-500">
        <p className="mb-2">
          The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link href="/site-map" className="hover:underline">Site Map</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 