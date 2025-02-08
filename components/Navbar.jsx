"use client"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Navlinks, SocialLinks } from "@/constants";

const Navbar = () => {
  const navLinksRef = useRef([]);

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

  const handleMouseEnter = (index) => {
    gsap.to(navLinksRef.current[index].querySelector('.underline'), {
      width: '100%',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navLinksRef.current[index].querySelector('.underline'), {
      width: '0%',
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  return (
    <header className="absolute top-0 left-0 w-full">
      <nav className="paddingX w-full flex flex-row justify-between items-center py-8 font-mulish">
        <div className="flex gap-7">
          {Navlinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[14px] navlinks -translate-y-10 opacity-0 will-change-auto"
              ref={(el) => (navLinksRef.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span>{link.name}</span>
              <span className="underline block absolute bottom-0 left-0 w-0 h-[2px] bg-red"></span>
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
      </nav>
    </header>
  );
};

export default Navbar;
