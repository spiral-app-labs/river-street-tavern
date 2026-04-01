"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay * 0.2, ease: "easeOut" as const },
  }),
};

export default function ParallaxHero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax image layer */}
      <div ref={imgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1200&fit=crop&q=85"
          alt="River Street Tavern — East Dundee's First Gastropub"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/55 to-charcoal z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-amber uppercase tracking-[0.35em] text-sm font-semibold mb-4"
        >
          Est. 2017 &bull; East Dundee, IL
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6"
        >
          Meet, Drink<br />
          <span className="text-amber">&amp; Eat</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          East Dundee&apos;s original Gastro Pub — elevated American pub grub,
          craft cocktails, and a vibe that keeps you coming back.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2.5}
          className="text-amber/90 text-sm md:text-base font-semibold tracking-widest uppercase mb-10"
        >
          Karaoke Nights &bull; Dollar Burger Sundays &bull; Taco Tuesdays
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            🛵 Order Delivery
          </a>
          <Link href="/menu" className="btn-secondary text-lg">
            Explore Menu
          </Link>
          <a
            href="https://maps.google.com/?q=102+N+River+St+East+Dundee+IL"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-lg"
          >
            📍 Visit Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <svg className="w-6 h-6 text-amber/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
