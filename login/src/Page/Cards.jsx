import React from "react";

export default function Cards() {
  const flowers = [
    {
      name: "Wild Mix - Petite Cubo",
      price: "$150",
      img: "https://theflowercompany.in/cdn/shop/products/Wild-Mix_dfa76d31-59fe-4267-b378-89759c9d3dc4_600x.jpg?v=1571737876",
    },
    {
      name: "Spring Mix - Mega Grande",
      price: "$750",
      img: "https://theflowercompany.in/cdn/shop/products/Spring-Mix_400x.jpg?v=1571737876",
    },
    {
      name: "Roses - Petite Cubo",
      price: "$150",
      img: "https://theflowercompany.in/cdn/shop/products/Roses_8a4e7526-6fc8-47cb-82c8-0cdff418247d_600x.jpg?v=1571737876",
    },
    {
      name: "Vibrant Gypsos - Bunch",
      price: "$200",
      img: "https://theflowercompany.in/cdn/shop/files/VibrantGypsos-Bunch_600x.jpg?v=1683399959",
    },
    {
      name: "Sweet Valentine - Classic Ronde",
      price: "$400",
      img: "https://theflowercompany.in/cdn/shop/products/Sweet-Valentine_600x.jpg?v=1571737875",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-10 text-center">
      <h2 className="text-4xl font-bold text-indigo-500 mb-12">
        Featured Products 🌼
      </h2>

      <div className="flex justify-evenly flex-wrap gap-10">
        {flowers.map((flower, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 hover:shadow-xl "
          >
            <img
              src={flower.img}
              alt={flower.name}
              className="h-62 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-600">
                {flower.name}
              </h3>
              <p className="text-gray-400 font-medium mt-2">
                {flower.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-500 text-gray-100 hover:text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
