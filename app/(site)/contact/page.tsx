'use client'
import { useState, FormEvent } from 'react';

export default function ContactUs() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Contact form submitted:', { name, email, message });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-thin text-gray-800 mb-4 tracking-tight bozos-header">
            Contact US
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            We love to hear from our customers, so please feel free to contact us with any feedback or questions
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-0 py-3 bg-white border-0 border-b border-gray-300 focus:outline-none focus:border-black text-gray-900 placeholder:text-gray-700"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full px-0 py-3 bg-white border-0 border-b border-gray-300 focus:outline-none focus:border-black text-gray-900 placeholder:text-gray-700"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Here..."
                rows={6}
                className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-black text-gray-900 placeholder:text-gray-700 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 uppercase"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}