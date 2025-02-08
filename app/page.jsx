"use client"

import useLenis from "@/hooks/useLenis";
import Hero from "@/components/Hero";

export default function Home() {
  useLenis();

  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
