"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VibeSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const rect = imgRef.current.parentElement?.getBoundingClientRect();
        if (rect) {
          const offset = (rect.top / window.innerHeight) * 30;
          imgRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&h=900&fit=crop&q=80"
          alt="River Street Tavern atmosphere"
          fill
          className="object-cover"
        />
      </div>

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/65 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-left md:text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-amber uppercase text-sm font-semibold mb-6 tracking-[0.3em]"
        >
          The Atmosphere
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-cream leading-tight mb-8"
        >
          Karaoke Nights<br />
          <span className="text-amber">Taco Tuesdays</span><br />
          Private Events
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-col md:flex-row gap-4 justify-center md:justify-start md:justify-center"
        >
          <a
            href="https://www.facebook.com/RSTavern/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            See What&apos;s On
          </a>
          <a
            href="mailto:info@rstavern.com"
            className="btn-secondary"
          >
            Book Private Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
