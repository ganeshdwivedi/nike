"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroAfter from "@/components/HeroAfter";
import ProductCrousel from "@/components/ProductCrousel";
import Products from "@/components/Products";
import Essentials from "@/components/Essentials";
import ShopByCat from "@/components/ShopByCat";
import VoiceflowChat from "@/components/VoiceFlowAI";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <HeroAfter />
    <VoiceflowChat/>
      <ProductCrousel />
      <Products />
      <ShopByCat />
      <Essentials />
      <Footer />
    </div>
  );
}
