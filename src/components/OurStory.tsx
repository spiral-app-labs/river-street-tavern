"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=1000&fit=crop&q=85"
                alt="Craft cocktails at River Street Tavern"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 to-transparent" />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-amber text-charcoal px-6 py-4 rounded-xl shadow-2xl"
            >
              <div className="font-serif text-3xl font-bold">2017</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-0.5">Est. East Dundee</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight">
              East Dundee&apos;s First<br />
              <span className="text-amber">Gastro Pub</span>
            </h2>

            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                In 2017, we opened our doors on the banks of the Fox River with
                a simple conviction: the Fox River Valley deserved better than
                average bar food. River Street Tavern was born — East Dundee&apos;s
                first Gastro Pub, and we haven&apos;t looked back since.
              </p>
              <p>
                We source fresh ingredients, take pride in every plate, and
                believe a great burger is an art form. From smoked wings and
                disco fries to craft cocktails built with care — the menu
                reflects what we love to eat and drink.
              </p>
              <p>
                But what really keeps people coming back? The community.
                Over 7,000 check-ins later, we&apos;ve become more than a
                restaurant. We&apos;re a gathering place — for Dollar Burger
                Sundays, karaoke nights, trivia wars, and the kind of
                conversations that last until last call.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 my-8 py-6 border-y border-amber/20">
              {[
                { value: "9+", label: "Years Open" },
                { value: "7K+", label: "Check-ins" },
                { value: "4.3★", label: "Rated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl font-bold text-amber">{stat.value}</div>
                  <div className="text-cream/50 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-secondary">
              Our Full Story →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
