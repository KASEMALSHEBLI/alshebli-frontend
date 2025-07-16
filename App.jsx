// src/App.jsx
import React from 'react';

export default function App() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-white min-h-screen flex flex-col items-center justify-center text-center p-6">
        <img src="/Green Minimalist Home Logo .png" alt="Alshebli Logo" className="w-40 h-40 mb-4" />
        <h1 className="text-4xl font-bold text-green-800">Alshebli Construction</h1>
        <p className="text-lg text-gray-600 mt-2">Reliable Flooring & General Construction Services</p>
        <a
          href="https://wa.me/447442661575"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
        >
          Contact Us on WhatsApp
        </a>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Flooring Installation",
            "Bathroom & Kitchen Renovation",
            "Interior & Exterior Painting",
            "Drywall & Plastering",
            "General Construction",
            "Tiling & Finishing Work"
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-700">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">Customer Reviews</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="text-gray-700 italic">“Excellent flooring job — professional and on time!”</p>
            <p className="text-sm text-gray-500 mt-2">— Sarah A.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="text-gray-700 italic">“They renovated our kitchen beautifully. Highly recommend!”</p>
            <p className="text-sm text-gray-500 mt-2">— John D.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">Have a question? Get in touch via WhatsApp or email us.</p>
        <a
          href="https://wa.me/447442661575"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700"
        >
          Message Us on WhatsApp
        </a>
        <p className="mt-4 text-sm text-gray-600">Email: kasemalshebli1234@gmail.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Alshebli Construction. All rights reserved.
      </footer>
    </div>
  );
}
