"use client"

import useLenis from "@/hooks/useLenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Other from "@/components/Other";

export default function Home() {
  useLenis();

  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Other />
    </main>
  );
};