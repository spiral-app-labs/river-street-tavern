"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxHero from "@/components/ParallaxHero";
import EventsSection from "@/components/EventsSection";
import VibeSection from "@/components/VibeSection";
import StatsSection from "@/components/StatsSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import OurStory from "@/components/OurStory";
import ReviewsSection from "@/components/ReviewsSection";
import SocialSection from "@/components/SocialSection";
import LocationSection from "@/components/LocationSection";
import OrderOnline from "@/components/OrderOnline";

/* ── Quick Menu CTA Bar ── */
function QuickMenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-charcoal-light border-b border-amber/20 py-3 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-4 text-cream/70">
          <span>📍 102 N River St, East Dundee, IL</span>
          <span className="hidden sm:inline text-amber/40">|</span>
          <span className="hidden sm:inline">📞 (847) 844-0474</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber text-xs font-semibold uppercase tracking-wider">
            🍔 Dollar Burger Sundays &bull; 🌮 Taco Tuesdays
          </span>
          <Link
            href="/menu"
            className="bg-amber text-charcoal text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full hover:bg-amber-light transition-colors"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Marquee ── */
function MarqueeBar() {
  return (
    <div className="bg-amber py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-10 text-charcoal font-bold uppercase tracking-widest text-sm">
            🍔 Dollar Burger Sundays &nbsp;•&nbsp; 🌮 Taco Nights &nbsp;•&nbsp; 🎤 Karaoke &nbsp;•&nbsp; 🧠 Trivia Night &nbsp;•&nbsp; 🍺 Craft Beer Always
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <QuickMenuBar />
      <ParallaxHero />
      <MarqueeBar />
      <StatsSection />
      <EventsSection />
      <VibeSection />
      <FeaturedDishes />
      <OurStory />
      <ReviewsSection />
      <SocialSection />
      <LocationSection />
      <OrderOnline />

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,79,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Ready for a Good Time?
            </h2>
            <p className="text-cream/70 text-lg mb-10">
              Whether it&apos;s craft cocktails after work, Dollar Burger Sunday,
              or Thursday karaoke — we&apos;ve got a seat with your name on it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/r/river-street-tavern-east-dundee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Reserve a Table
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
