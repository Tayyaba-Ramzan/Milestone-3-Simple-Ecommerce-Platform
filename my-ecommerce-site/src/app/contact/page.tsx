"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-slate-100 py-10 px-4 min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-lg shadow-lg p-8 bg-gray-900 rounded-3xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white tracking-wide">
          Contact Us
        </h1>
        <p className="text-center mb-6 text-gray-300">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-400 text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-300 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-white focus:outline-none transition-all duration-200"
              placeholder="Tayyaba Ramzan"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-400 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-300 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-white focus:outline-none transition-all duration-200"
              placeholder="tayyabaramzan@gmail.com"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-400 text-sm mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-gray-300 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-white focus:outline-none transition-all duration-200"
              placeholder="(123) 456-7890"
            />
          </div>
          <div className="relative">
            <label className="block text-gray-400 text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-800 text-gray-300 border-none rounded-xl shadow-sm focus:ring-2 focus:ring-white focus:outline-none transition-all duration-200"
              placeholder="Type your message..."
              rows={5}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-gray-900 py-3 px-6 rounded-full font-semibold shadow-md hover:text-white hover:bg-gray-900 transition-colors duration-300 focus:ring-4 focus:ring-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
