import React from "react";
import { MapPin, Search, ShoppingCart } from "lucide-react";

export default function Nav({ cartCount, toggleCart }) {
  return (
    <nav className="flex items-center justify-between text-[#654321] px-8 py-4 shadow-md bg-white sticky top-0 z-50">
      <img src="https://cococart.in/cdn/shop/files/cococart_logo_-_2025-04.svg?v=1752764179&width=330" className="h-14" alt="CocoCart Logo"/>

      <div className="flex items-center gap-6 font-semibold text-[14px] uppercase">
        <span className="hover:text-[#8b5a2b] cursor-pointer transition">Shop All</span>
        <span className="hover:text-[#8b5a2b] cursor-pointer transition">Best Deals</span>
        <span className="hover:text-[#8b5a2b] cursor-pointer transition">Gifting</span>
        <span className="hover:text-[#8b5a2b] cursor-pointer transition">New Launches</span>
        <img src="https://cococart.in/cdn/shop/files/Venchi_Logo_26f780de-6e1d-4474-acc8-ef72c7e37fe0_1024x1024.png?v=1710926952" className="h-11" alt="Venchi"/>
        <img src="https://cdn.shopify.com/s/files/1/0656/5412/8891/files/neuhaus-logo_1024x1024.png?v=1710951350" className="h-11" alt="Neuhaus"/>
        <img src="https://cdn.shopify.com/s/files/1/0656/5412/8891/files/cafe-logo.png?v=1723813861" className="h-11" alt="Café Logo"/>
      </div>

      <div className="flex items-center gap-6">
        <Search className="cursor-pointer hover:text-[#8b5a2b] transition" />
        <div className="relative cursor-pointer" onClick={toggleCart}>
          <ShoppingCart className="hover:text-[#8b5a2b] transition" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#654422] text-white text-[10px] rounded-full px-1.5">{cartCount} </span>
          )}
        </div>
        <MapPin className="cursor-pointer hover:text-[#8b5a2b] transition" />
      </div>
    </nav>
  );
}
