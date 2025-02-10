"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Navlinks, SocialLinks } from "@/constants";
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {
  const navLinksRef = useRef([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    {open 
      ?  gsap.to(".mobile-nav", {
        translateY: 0,
        ease: "power2.inOut",
        duration: 1,
        delay: .2,
      })
      : gsap.to(".mobile-nav", {
        translateY: "100%",
        ease: "power2.inOut",
        duration: 1,
        delay: .2,
      })
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const showAnim = gsap.from('#navbar', { 
      yPercent: -130,
      paused: true,
      duration: 0.2
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      markers: true,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to('.navlinks', {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      stagger: 0.2,
      delay: 0,
      ease: 'sine.inOut',
      duration: .5,
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full mt-3 paddingX z-40">
      <nav id="navbar" className="bg-white w-full flex flex-row justify-between items-center py-4 font-mulish px-4 rounded-lg">
        <div className="flex gap-2 max-[940px]:hidden">
          {Navlinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[14px] navlinks -translate-y-10 opacity-0 will-change-auto w-auto"
            >
              <span className={`
                ${link.isSpecial 
                  ? 'bg-red rounded-lg px-4 py-2 text-white' 
                  : 'bg-white rounded-lg px-4 py-2 text-black border-white hover:border-red hover:text-red border-2 transition-colors duration-500'
                }`}>{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          {SocialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="navlinks translate-y-10 opacity-0">
              <Image src={link.src} alt={link.name} width={22} height={22} className="hover:scale-105 transition-transform duration-300 will-change-transform" />
            </Link>
          ))}
        </div>

        <div className="max-[940px]:flex hidden">
          <span onClick={handleOpen}>HM</span>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="mobile-nav fixed h-screen w-screen top-0 left-0 bg-red z-50 translate-y-[100%]">
        <span onClick={handleOpen}>HM CLOSE</span>
      </div>
    </header>
  );
};

export default Navbar;
