'use client';

import { useState } from 'react';
import { HiPaperAirplane } from 'react-icons/hi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7aed33f2-51e9-4eb2-9d4c-047b067f8fb3',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-600"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-600"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-semibold mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-600"
          placeholder="Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-black bg-white text-black focus:outline-none focus:border-gray-600 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-black text-white px-8 py-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === 'loading' ? (
          'Sending...'
        ) : (
          <>
            <HiPaperAirplane className="text-xl" />
            Send Message
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 text-center font-semibold">
          Message sent successfully! I will get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-3 text-center font-semibold">
          Failed to send message. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}