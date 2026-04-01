"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1920&h=600&fit=crop"
            alt="Cocktails at River Street Tavern"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Since 2017
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream mb-4">
            Our Story
          </h1>
          <p className="text-cream/70 text-lg">
            More than a restaurant — it&apos;s your place
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
                East Dundee&apos;s First Gastropub
              </h2>
              <div className="space-y-4 text-cream/70 leading-relaxed">
                <p>
                  In 2017, River Street Tavern opened its doors at 102 N River
                  Street in the heart of East Dundee&apos;s charming Depot Park
                  restaurant district. The vision was simple: bring elevated
                  American pub grub, craft cocktails, and a welcoming atmosphere
                  to the Fox River Valley.
                </p>
                <p>
                  What started as East Dundee&apos;s first gastropub quickly became
                  the neighborhood&apos;s living room. A place where the bartender
                  knows your name and your favorite drink. Where the food is
                  made with craft and care — from our signature Five Star
                  Burgers to our slow-smoked wings.
                </p>
                <p>
                  Today, with over 4,200 Facebook fans, 7,000+ check-ins, and a
                  4.6-star rating across platforms, River Street Tavern isn&apos;t
                  just a restaurant. It&apos;s a community gathering place where great
                  food, great drinks, and great people come together.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop"
                alt="River Street Tavern atmosphere"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We're Known For */}
      <section className="py-20 md:py-28 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
                What We&apos;re Known For
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craft Cocktails",
                desc: "Hand-crafted cocktails made with premium spirits and fresh ingredients. Our bartenders are artists who take pride in every pour.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Five Star Burgers",
                desc: "Two 100% USDA Angus Chuck patties piled high with premium toppings. The Farmhouse, Tavern, Curd Cobain, and 'Merica are local legends.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Good Times",
                desc: "Weekly karaoke nights, trivia, taco nights, and a staff that treats you like family. There's always something happening at RST.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 150}>
                <div className="bg-charcoal border border-amber/10 rounded-xl p-8 text-center hover:border-amber/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center text-amber mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
                The Vibe
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=600&fit=crop", alt: "Gourmet burger" },
              { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=600&fit=crop", alt: "Craft cocktail" },
              { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop", alt: "Restaurant interior" },
              { src: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=600&fit=crop", alt: "Wings" },
              { src: "https://images.unsplash.com/photo-1575444758702-4a6b9222c016?w=600&h=600&fit=crop", alt: "Beer on tap" },
              { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=600&fit=crop", alt: "Bar atmosphere" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 100}>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
              Come See What the Buzz Is About
            </h2>
            <p className="text-cream/70 mb-8">
              Check out our menu and reserve your table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="btn-primary">
                View Menu
              </Link>
              <Link href="/contact" className="btn-secondary">
                Visit Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
