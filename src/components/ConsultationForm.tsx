'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  caseType: string;
  description: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    caseType: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        caseType: '',
        description: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">Request a Free Consultation</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your consultation request. We will contact you shortly to confirm your appointment.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          There was an error submitting your request. Please try again later.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="input-field mt-1"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="input-field mt-1"
            />
          </div>
        </div>

        <div>
          <label htmlFor="caseType" className="block text-sm font-medium text-gray-700">
            Case Type
          </label>
          <select
            id="caseType"
            name="caseType"
            required
            value={formData.caseType}
            onChange={handleChange}
            className="input-field mt-1"
          >
            <option value="">Select a case type</option>
            <option value="immigration">Immigration</option>
            <option value="family">Family Law</option>
            <option value="criminal">Criminal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="input-field mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Request Consultation'}
        </button>
      </form>
    </div>
  );
} 