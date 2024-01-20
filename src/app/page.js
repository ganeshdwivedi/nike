"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroAfter from "@/components/HeroAfter";
import ProductCrousel from "@/components/ProductCrousel";
import Products from "@/components/Products";
import Essentials from "@/components/Essentials";
import ShopByCat from "@/components/ShopByCat";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <Fade cascade="true" triggerOnce="true" duration={150} >
      <Navbar />
      <Hero />
      <HeroAfter />
      <ProductCrousel />
      <Products />
      <ShopByCat />
      <Essentials />
      <Footer />
    </Fade >
  );
}
