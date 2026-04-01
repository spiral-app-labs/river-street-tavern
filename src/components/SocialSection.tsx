"use client";

import { motion } from "framer-motion";

export default function SocialSection() {
  return (
    <section className="py-16 bg-charcoal-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
            Follow Us on Facebook
          </h2>
          <p className="text-cream/60 mb-8">
            4,207 fans. 7,053 check-ins. Join the community — daily specials, event announcements, and good vibes.
          </p>

          <motion.a
            href="https://www.facebook.com/RSTavern/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#1877F2] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-[#1877F2]/30 hover:shadow-2xl transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            @RSTavern — 4,207 Likes
          </motion.a>

          <div className="flex justify-center gap-8 mt-10 text-cream/40 text-sm">
            <span>📸 Weekly event photos</span>
            <span>🎉 Special announcements</span>
            <span>🍺 Daily specials</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
