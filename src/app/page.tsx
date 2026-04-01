"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Stats Counter ── */
function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
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
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-amber">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-cream/60 text-sm mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ── Star Rating ── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= Math.floor(rating) ? "text-amber" : i - 0.5 <= rating ? "text-amber" : "text-charcoal-light"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Scroll Reveal ── */
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
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Reviews Data ── */
const reviews = [
  {
    text: "River Street Tavern has great food. But what keeps bringing me back is the staff. They know your name and your favorite drink. They are fun, attentive and fast.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "The menu is full of familiar sounding bar eats, BUT the quality and freshness of the ingredients was spectacular. The preparations and recipes were imaginative and wonderfully executed.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "River Street specializes in customer service, crafted cocktails and Tavern food that is unique and delicious.",
    source: "Yelp",
    rating: 5,
  },
  {
    text: "After many many visits to this place, they have become friends more than service staff.",
    source: "TripAdvisor",
    rating: 5,
  },
];

/* ── Featured Menu Items ── */
const featured = [
  { name: "Farmhouse Burger", price: "$16", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop", desc: "Bacon, fried egg, provolone, crispy onion strings" },
  { name: "Smoked Wings", price: "$14", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=400&fit=crop", desc: "Five full wings with your choice of sauce or rub" },
  { name: "Disco Fries", price: "$12", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&fit=crop", desc: "Bacon, braised pork, sriracha queso, jalapeños" },
  { name: "Crab Cake Sliders", price: "$13", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=400&fit=crop", desc: "Asian aioli on Hawaiian rolls" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop"
            alt="River Street Tavern interior"
            fill
            className="object-cover parallax-hero"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Reveal>
            <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Est. 2017 &bull; East Dundee, IL
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6">
              Meet, Drink<br />
              <span className="text-amber">&amp; Eat</span>
            </h1>
          </Reveal>
          <Reveal delay={400}>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              East Dundee&apos;s original gastropub — elevated American pub grub,
              craft cocktails, and a vibe that keeps you coming back.
            </p>
          </Reveal>
          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="btn-primary text-lg">
                Explore Our Menu
              </Link>
              <a
                href="https://www.opentable.com/r/river-street-tavern-east-dundee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
              >
                Reserve a Table
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-amber/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── Dollar Burger Sundays ── */}
      <section className="bg-amber py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-8 text-charcoal font-bold text-lg uppercase tracking-wider">
              🍔 Dollar Burger Sundays — $1 Burgers Every Sunday! 🍔
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-charcoal-dark">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={9} suffix="+" label="Years Strong" />
          <Counter end={4} suffix=".3★" label="Google Rating" />
          <Counter end={7053} suffix="+" label="Check-ins" />
          <Counter end={4207} suffix="+" label="Facebook Fans" />
        </div>
      </section>

      {/* ── Featured Menu ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                From Our Kitchen
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
                Fan Favorites
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={i * 150}>
                <div className="menu-item-card bg-charcoal-light rounded-xl overflow-hidden border border-amber/10">
                  <div className="relative h-48">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-amber text-charcoal text-sm font-bold px-3 py-1 rounded-full">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-cream mb-1">{item.name}</h3>
                    <p className="text-cream/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={600}>
            <div className="text-center mt-12">
              <Link href="/menu" className="btn-primary">
                View Full Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-20 md:py-28 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=600&fit=crop"
                alt="Craft cocktail at River Street Tavern"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
                East Dundee&apos;s First Gastropub
              </h2>
              <p className="text-cream/70 leading-relaxed mb-4">
                Since 2017, River Street Tavern has been the heart of East Dundee&apos;s
                dining scene. What started as a dream to bring elevated pub fare
                to the Fox River Valley has grown into a beloved neighborhood
                gathering place.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8">
                From our Five Star Burgers to smoked wings, craft cocktails to
                local brews — every dish is made with care. Add in weekly karaoke,
                trivia nights, and a staff that knows your name, and you&apos;ve got
                more than a restaurant. You&apos;ve got your place.
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                What People Are Saying
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
                Loved by Locals
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </Reveal>

          {/* Google rating badge */}
          <Reveal delay={100}>
            <div className="flex justify-center mb-12">
              <div className="bg-charcoal-light border border-amber/20 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="text-4xl font-serif font-bold text-amber">4.3</div>
                <div>
                  <Stars rating={4.3} />
                  <p className="text-cream/60 text-sm mt-1">294+ reviews on Yelp</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="bg-charcoal-light border border-amber/10 rounded-xl p-6 hover:border-amber/30 transition-colors">
                  <Stars rating={review.rating} />
                  <p className="text-cream/80 mt-4 mb-4 leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-amber/10 text-amber">
                      {review.source}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready for a Good Time?
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Whether it&apos;s craft cocktails after work, weekend brunch, or
              Thursday night trivia — we&apos;ve got a seat with your name on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/r/river-street-tavern-east-dundee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Reserve on OpenTable
              </a>
              <a
                href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg"
              >
                Order on DoorDash
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
