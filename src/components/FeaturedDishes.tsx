"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featured = [
  {
    name: "Farmhouse Burger",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&h=500&fit=crop&q=85",
    desc: "Bacon, fried egg, provolone, crispy onion strings on a brioche bun",
    tag: "House Signature",
  },
  {
    name: "Smoked Wings",
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&h=500&fit=crop&q=85",
    desc: "Five full wings, low-and-slow smoked, your choice of sauce or dry rub",
    tag: "Fan Favorite",
  },
  {
    name: "Disco Fries",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&h=500&fit=crop&q=85",
    desc: "Braised pork, bacon, sriracha queso, jalapeños over crispy fries",
    tag: "Must Try",
  },
  {
    name: "Crab Cake Sliders",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&h=500&fit=crop&q=85",
    desc: "Jumbo lump crab cakes, Asian aioli, on pillowy Hawaiian rolls",
    tag: "Chef's Pick",
  },
];

function TiltCard({ item, index }: { item: typeof featured[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(${hovered ? "10px" : "0"})`,
        transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="bg-charcoal-light rounded-2xl overflow-hidden border border-amber/10 hover:border-amber/30 shadow-lg hover:shadow-amber/10 hover:shadow-2xl cursor-pointer"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Tag */}
        <div className="absolute top-3 left-3 bg-charcoal/80 backdrop-blur-sm text-amber text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber/30">
          {item.tag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-cream mb-2">{item.name}</h3>
        <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function FeaturedDishes() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            From Our Kitchen
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Fan Favorites
          </h2>
          <p className="text-cream/60 mt-4 max-w-xl mx-auto">
            Elevated pub grub made with real care. Every dish earns its spot on this menu.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (
            <TiltCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-14"
        >
          <Link href="/menu" className="btn-primary text-lg">
            View Full Menu →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
