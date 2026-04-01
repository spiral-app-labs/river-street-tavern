"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end, suffix = "", label, icon }: { end: number; suffix?: string; label: string; icon: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const totalSteps = duration / 16;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            // Ease out curve
            const progress = 1 - Math.pow(1 - step / totalSteps, 3);
            const current = Math.round(end * progress);
            setCount(current);
            if (step >= totalSteps) {
              setCount(end);
              clearInterval(timer);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center group"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-4xl md:text-5xl font-serif font-bold text-amber group-hover:scale-110 transition-transform duration-300">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-cream/55 text-sm mt-2 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-charcoal-dark relative overflow-hidden">
      {/* Amber glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,79,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        <Counter end={9} suffix="+" label="Years Strong" icon="🏆" />
        <Counter end={4} suffix=".3★" label="Star Rating" icon="⭐" />
        <Counter end={7053} suffix="+" label="Check-ins" icon="📍" />
        <Counter end={4207} suffix="+" label="Facebook Fans" icon="❤️" />
      </div>
    </section>
  );
}
