import React from "react";

export default function Hero() {
  return (
    <section className="pt-24 bg-gray-50 flex justify-evenly items-center px-10 py-16">
  <div className="w-[40%]">
    <h2 className="text-[37px] font-bold text-gray-900">The Flower Company Tale</h2>
    <p className="text-[17px] text-gray-500 my-15">Each milestone, each relationship, every kind of bond calls for a unique celebration. A celebration of moments and emotions that are just blooming, even celebrating those that have already blossomed. For such moments, there are luxury flower arrangements by The Flower Company.</p>
    <p className="text-[17px] text-gray-500 my-8">Aesthetically appealing to the eye, these flower arrangements mark the strength of a bond, bring out the butterfly-blushed smile of an 18-year-old girl, highlight the rouge on a mother's face when she hears from her distant son. These flowers laden this moment with beauty, luxury and panache and evoke a part of you that only poetry can do justice to.</p>
    <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
      Shop Now
    </button>
  </div>

  <img
    src="https://theflowercompany.in/cdn/shop/files/WhatsApp_Image_2019-08-22_at_1.16.03_AM_1000x.jpeg?v=1613788265"
    alt="Flower bouquet"
    className="rounded-lg h-120 shadow-lg"
  />
</section>
  );
}
