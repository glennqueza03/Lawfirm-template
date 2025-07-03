import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 pb-16 bg-white min-h-screen">
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-quattrocento text-[#6B4F27]">Privacy Policy</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This Privacy Policy describes how Local Lawfirm collects, uses, and protects your personal information when you use our website. We are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">Information We Collect</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and any other information you provide through our contact or consultation forms.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">How We Use Your Information</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Your information is used solely to respond to your inquiries, provide legal services, and improve our website. We do not sell or share your personal information with third parties except as required by law.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">Data Security</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            We implement appropriate security measures to protect your data from unauthorized access, disclosure, or misuse.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">Your Rights</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us using the information provided on our website.
          </p>
          <h2 className="text-2xl font-bold mb-4 font-quattrocento text-[#6B4F27]">Contact</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at contact@lawfirm.com.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
} 