"use client";

import { motion } from "framer-motion";

const events = [
  {
    emoji: "🍔",
    day: "Sunday",
    title: "Dollar Burger Sundays",
    desc: "Every Sunday, our hand-pressed burgers are just $1. Yes, really. Stack 'em up — nobody's judging.",
    color: "from-amber/20 to-amber/5",
    border: "border-amber/30",
    badge: "Every Sunday",
    badgeColor: "bg-amber text-charcoal",
  },
  {
    emoji: "🌮",
    day: "Tuesday",
    title: "Taco Nights",
    desc: "The Fox River Valley's favorite taco night. Three kinds, craft beer pairings, and zero apologies.",
    color: "from-red/20 to-red/5",
    border: "border-red/30",
    badge: "Every Tuesday",
    badgeColor: "bg-red text-cream",
  },
  {
    emoji: "🎤",
    day: "Thursday",
    title: "Karaoke Night",
    desc: "You've been practicing in the car. This is your moment. Live it out on the River Street stage.",
    color: "from-amber-light/15 to-amber/5",
    border: "border-amber-light/25",
    badge: "Thursdays",
    badgeColor: "bg-amber-dark text-cream",
  },
  {
    emoji: "🧠",
    day: "Wednesday",
    title: "Trivia Night",
    desc: "Assemble your crew. Test your knowledge. Earn bragging rights over craft cocktails.",
    color: "from-cream/10 to-cream/5",
    border: "border-cream/15",
    badge: "Wednesdays",
    badgeColor: "bg-charcoal-light text-amber border border-amber/40",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function EventsSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-dark relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(212,160,79,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,79,0.5) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Weekly Happenings
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Events &amp; Specials
          </h2>
          <p className="text-cream/60 mt-4 max-w-xl mx-auto text-lg">
            This isn&apos;t just a bar. It&apos;s a weekly tradition.
          </p>
          <div className="section-divider mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {events.map((evt) => (
            <motion.div
              key={evt.title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl border ${evt.border} bg-gradient-to-b ${evt.color} p-6 flex flex-col gap-4 cursor-default`}
            >
              <div className="text-5xl">{evt.emoji}</div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${evt.badgeColor}`}>
                  {evt.badge}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-cream">{evt.title}</h3>
              <p className="text-cream/65 text-sm leading-relaxed">{evt.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-cream/50 text-sm">
            Follow us on{" "}
            <a
              href="https://www.facebook.com/RSTavern/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:text-amber-light transition-colors"
            >
              Facebook
            </a>{" "}
            for special event updates
          </p>
        </motion.div>
      </div>
    </section>
  );
}
