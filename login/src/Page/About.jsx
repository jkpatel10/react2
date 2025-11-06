import React from "react";

export default function About() {
  return (
    <section className="bg-white py-20 px-8 md:px-20 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src="https://theflowercompany.in/cdn/shop/products/Classic-Mix_1b544a23-fc66-445c-a0ad-fc08230c57cb_400x.jpg?v=1571737876"
          alt="Florist at work"
          className="rounded-lg shadow-lg md:w-1/2"
        />
        <div className="md:w-1/2 space-y-5">
          <h3 className="text-3xl font-bold text-indigo-700">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            We’re passionate about crafting timeless floral pieces that brighten
            your spaces and hearts. Every petal is hand-picked and arranged with
            care, ensuring elegance in every bouquet.
          </p>
          <p className="text-gray-600">
            From birthdays to weddings, our blooms tell stories of love,
            gratitude, and joy — one bouquet at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
