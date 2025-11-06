import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

export default function Home() {
    const navigate = useNavigate()
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
