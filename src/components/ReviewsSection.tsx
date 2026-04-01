"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "A. Kowalczyk",
    text: "River Street Tavern has great food. But what keeps bringing me back is the staff. They know your name and your favorite drink. Fun, attentive and fast.",
    source: "TripAdvisor",
    rating: 5,
    initials: "AK",
  },
  {
    name: "M. Harrison",
    text: "The menu is full of familiar bar eats, BUT the quality and freshness of the ingredients was spectacular. Imaginative recipes and wonderfully executed.",
    source: "TripAdvisor",
    rating: 5,
    initials: "MH",
  },
  {
    name: "D. Park",
    text: "River Street specializes in customer service, crafted cocktails, and tavern food that is unique and delicious. My go-to spot.",
    source: "Yelp",
    rating: 5,
    initials: "DP",
  },
  {
    name: "J. O'Brien",
    text: "After many many visits to this place, they have become friends more than service staff. That's hard to find anywhere.",
    source: "TripAdvisor",
    rating: 5,
    initials: "JO",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-amber" : "text-charcoal-light"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
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
            What People Are Saying
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Loved by Locals
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-14"
        >
          <div className="bg-charcoal-light border border-amber/20 rounded-2xl px-8 py-5 flex items-center gap-5">
            <div className="text-5xl font-serif font-bold text-amber">4.3</div>
            <div>
              <Stars rating={4} />
              <p className="text-cream/50 text-sm mt-1.5">Based on 294+ reviews</p>
              <p className="text-amber/70 text-xs mt-0.5 uppercase tracking-wider">Yelp &amp; TripAdvisor</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(212,160,79,0.35)" }}
              className="bg-charcoal-light border border-amber/10 rounded-2xl p-7 flex flex-col gap-4 transition-colors"
            >
              {/* Quote mark */}
              <div className="text-4xl text-amber/20 font-serif leading-none">&ldquo;</div>

              <p className="text-cream/80 leading-relaxed italic -mt-4">
                {review.text}
              </p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full bg-amber/20 flex items-center justify-center text-amber text-xs font-bold border border-amber/30">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-cream text-sm font-semibold">{review.name}</div>
                    <div className="text-xs text-amber/60 uppercase tracking-wider">{review.source}</div>
                  </div>
                </div>
                <Stars rating={review.rating} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
