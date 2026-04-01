"use client";

import { motion } from "framer-motion";

const hours = [
  { day: "Sunday", time: "11am – 1am" },
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "4pm – 1am" },
  { day: "Wednesday", time: "4pm – 1am" },
  { day: "Thursday", time: "4pm – 1am" },
  { day: "Friday", time: "11am – 2am" },
  { day: "Saturday", time: "11am – 2am" },
];

export default function LocationSection() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Location &amp; Hours
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map embed / address */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map placeholder with link */}
            <a
              href="https://maps.google.com/?q=102+N+River+St+East+Dundee+IL+60118"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden border border-amber/15 hover:border-amber/35 transition-colors group"
            >
              <div className="aspect-[4/3] bg-charcoal-dark flex flex-col items-center justify-center gap-4 text-center px-8">
                <div className="text-6xl">📍</div>
                <div>
                  <div className="font-serif text-2xl font-bold text-cream">102 N River St</div>
                  <div className="text-cream/60 mt-1">East Dundee, IL 60118</div>
                </div>
                <div className="mt-2 text-amber text-sm font-semibold uppercase tracking-wider group-hover:text-amber-light transition-colors">
                  Open in Google Maps →
                </div>
              </div>
            </a>

            {/* Phone / directions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18478440474"
                className="flex-1 bg-charcoal-light border border-amber/15 rounded-xl p-4 flex items-center gap-3 hover:border-amber/35 transition-colors"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-cream font-semibold">(847) 844-0474</div>
                  <div className="text-cream/50 text-xs">Call Us</div>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=102+N+River+St+East+Dundee+IL+60118"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-charcoal-light border border-amber/15 rounded-xl p-4 flex items-center gap-3 hover:border-amber/35 transition-colors"
              >
                <span className="text-2xl">🗺️</span>
                <div>
                  <div className="text-cream font-semibold">Get Directions</div>
                  <div className="text-cream/50 text-xs">On the Fox River</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-charcoal-light rounded-2xl border border-amber/15 p-8"
          >
            <h3 className="font-serif text-xl font-bold text-amber mb-6">Hours of Operation</h3>
            <div className="space-y-3">
              {hours.map((h) => {
                const isToday = h.day === today;
                return (
                  <div
                    key={h.day}
                    className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                      isToday ? "bg-amber/10 border border-amber/25" : ""
                    }`}
                  >
                    <span className={`font-medium text-sm ${isToday ? "text-amber" : "text-cream/70"}`}>
                      {h.day}
                      {isToday && (
                        <span className="ml-2 text-xs bg-amber text-charcoal px-2 py-0.5 rounded-full font-bold uppercase">
                          Today
                        </span>
                      )}
                    </span>
                    <span className={`font-semibold text-sm ${h.time === "Closed" ? "text-red-light" : isToday ? "text-amber" : "text-cream"}`}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-amber/15">
              <p className="text-cream/50 text-xs text-center">
                Kitchen hours vary · Call ahead for large parties<br />
                102 N River St, East Dundee, IL 60118
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
