import { Caveat, Mulish } from 'next/font/google';

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caveat'
});

const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mulish'
});

export const metadata = {
  title: "Publision",
  description: "", // Falta descripcion y Metadata SEO
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${caveat.variable} ${mulish.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};