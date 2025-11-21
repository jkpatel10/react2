import React from "react";

export default function Card({ products, addToCart }) {
  return (
    <div className="flex justify-evenly flex-wrap gap-4 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-[#fff9f9] border w-80 h-110 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={product.image} alt={product.name} className="w-full h-50 p-4 object-cover"/>
          <div className="pt-4 px-4">
            <span className="font-bold text-lg">{product.name}</span>
            <p className="text-gray-500">{product.brand}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="font-semibold text-gray-800">
                ₹{product.salePrice || product.regularPrice}
              </span>
              {product.discount && (
                <span className="text-sm text-red-500">{product.discount}</span>
              )}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-[#654321] text-white py-2 rounded-lg hover:bg-[#653311] transition-colors">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

