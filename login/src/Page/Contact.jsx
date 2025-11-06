import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h3 className="text-3xl font-bold text-indigo-700">Get in Touch</h3>
        <p className="text-gray-600">
          We’d love to hear from you! Whether it’s a custom bouquet or event inquiry,
          we’re here to help you bloom beautifully.
        </p>

        <form className="space-y-5 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
          ></textarea>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
