import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Cart from "./Pages/Cart";
import Card from "./Pages/Card";
import Footer from "./Components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);

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
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Card products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} isOpen={isCartOpen} toggleCart={toggleCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
