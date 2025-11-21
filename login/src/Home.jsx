import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Pages/Card";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const initialProducts = [
    {
      id: 1,
      brand: "Lindt",
      name: "Lindt Dubai Chocolate 145g",
      regularPrice: 1850,
      salePrice: 1710,
      discount: "-8%",
      image:
        "https://cococart.in/cdn/shop/files/WhatsAppImage2025-08-18at1.19.39PM.png?v=1755676592&width=360",
    },
    {
      id: 2,
      brand: "Whisketiers",
      name: "Almond Dark Chocolate 100g",
      regularPrice: 495,
      salePrice: null,
      discount: null,
      image:
        "https://cococart.in/cdn/shop/files/1CH3070.png?v=1759485212&width=360",
    },
    {
      id: 3,
      brand: "Whisketiers",
      name: "Hazelnut Dark Chocolate 100g",
      regularPrice: 495,
      salePrice: null,
      discount: null,
      image:
        "https://cococart.in/cdn/shop/files/1CH3069.png?v=1759486447&width=360",
    },
    {
      id: 4,
      brand: "Whittakers",
      name: "Whittakers Dark Bar 250g",
      regularPrice: 1199,
      salePrice: 1109,
      discount: "-8%",
      image:
        "https://cococart.in/cdn/shop/files/WhatsAppImage2025-08-25at5.20.47PM_2_1.png?v=1756200910&width=360",
    },
    {
      id: 5,
      brand: "Rhine Valley",
      name: "70% Dark Kunafa 100g",
      regularPrice: 699,
      salePrice: 525,
      discount: "-25%",
      image:
        "https://cococart.in/cdn/shop/files/RV70_darkPistachioKunafa-front.png?v=1754293110&width=360",
    },
    {
      id: 6,
      brand: "Werther's",
      name: "Blissful Bites Blueberry Acai 140g",
      regularPrice: 699,
      salePrice: 489,
      discount: "-30%",
      image:
        "https://cococart.in/cdn/shop/files/1CH2766.jpg?v=1748513983&width=360",
    },
    {
      id: 7,
      brand: "Toblerone",
      name: "Toblerone Milk Chocolate 360g",
      regularPrice: 995,
      salePrice: 899,
      discount: "-10%",
      image: "https://cococart.in/cdn/shop/files/1CH0400.png?v=1701164884&width=360",
    },
    {
      id: 8,
      brand: "Ferrero Rocher",
      name: "Ferrero Rocher Box 300g (24pcs)",
      regularPrice: 1195,
      salePrice: 999,
      discount: "-15%",
      image: "https://cococart.in/cdn/shop/products/711xWfTRL._SL1500.jpg?v=1743154575&width=360",
    },
    {
      id: 9,
      brand: "Cadbury",
      name: "Cadbury Dairy Milk Silk Oreo 130g",
      regularPrice: 210,
      salePrice: 189,
      discount: "-10%",
      image: "https://cococart.in/cdn/shop/files/1CH2568.png?v=1728473289&width=360",
    },
    {
      id: 10,
      brand: "Whittakers",
      name: "Whittakers Dark Almond Bar 250g",
      regularPrice: 1199,
      salePrice: 1109,
      discount: "-12%",
      image: "https://cococart.in/cdn/shop/products/Whittaker_s-05.png?v=1659950008&width=360",
    },
    {
      id: 11,
      brand: "Kinder",
      name: "Kinder Mini Bueno T71 400g",
      regularPrice: 2299,
      salePrice: 1839,
      discount: "-20%",
      image: "https://cococart.in/cdn/shop/products/pngimg-23.png?v=1659950449&width=360",
    },
    {
      id: 12,
      brand: "Hershey's",
      name: "Hershey's Cookies 'n' Creme Bar 100g",
      regularPrice: 350,
      salePrice: 310,
      discount: "-11%",
      image: "https://cococart.in/cdn/shop/files/1CH2630.jpg?v=1743774522&width=360",
    },
    {
      id: 13,
      brand: "Leonidas",
      name: "Leonidas Milk 30% Hazelnuts Bar 100g",
      regularPrice: 799,
      salePrice: 719,
      discount: "-12%",
      image: "https://cococart.in/cdn/shop/files/1CH2346_1d9eb05d-f862-4c94-847e-69b1f60150d4.png?v=1714044667&width=360",
    },
    {
      id: 14,
      brand: "Lindt",
      name: "Lindt Excellence 85% Cocoa 100g",
      regularPrice: 550,
      salePrice: 495,
      discount: "-10%",
      image:
        "https://cococart.in/cdn/shop/products/lindt-03.png?v=1659950938&width=360",
    },
    {
      id: 15,
      brand: "After Eight",
      name: "After Eight Mint Chocolate Thins Box 200g",
      regularPrice: 799,
      salePrice: 679,
      discount: "-10%",
      image:
        "https://cococart.in/cdn/shop/products/1CH0257.jpg?v=1659950748&width=360",
    }
  ];

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (!stored) {
      localStorage.setItem("products", JSON.stringify(initialProducts));
      setProducts(initialProducts);
    } else {
      setProducts(JSON.parse(stored));
    }

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (exists) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  let cartCount = 0;
  for (let i = 0; i < cart.length; i++) {
  cartCount += cart[i].quantity || 0;
  }


  return (
    <div className="bg-[#fff9f4] min-h-screen text-gray-900">
      <Nav cartCount={cartCount} toggleCart={toggleCart} />
      <Hero />
      <Card products={products} addToCart={addToCart} />
      <Cart cart={cart} isOpen={isCartOpen} toggleCart={toggleCart} />
      <Footer />
    </div>
  );
}