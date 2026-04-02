"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OrderOnline() {
  return (
    <section className="py-16 bg-charcoal-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,160,79,0.07)_0%,transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Can&apos;t Make It In?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Order Online
          </h2>
          <p className="text-cream/60 mb-10 max-w-lg mx-auto">
            Get River Street Tavern delivered to your door, or order ahead for pickup.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.a
              href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-[#FF3008] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-[#FF3008]/30 hover:shadow-2xl transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.583.583 0 00.1 6.191L6.63 12.72a4.927 4.927 0 003.49 1.445h.086a4.927 4.927 0 003.49-1.445l2.393-2.394a2.178 2.178 0 013.079 0 2.178 2.178 0 010 3.08L12.7 19.874a.583.583 0 00.413.996h5.463a6.09 6.09 0 004.31-1.786l.185-.185a6.09 6.09 0 000-8.612z" />
              </svg>
              Order on DoorDash
            </motion.a>

            <motion.a
              href="https://www.ubereats.com/store/river-street-tavern/LhejvC46SWOiGs4j5rqtuw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 bg-[#06C167] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-green-500/30 hover:shadow-2xl transition-all"
            >
              🛵 Order on Uber Eats
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/menu"
                className="flex items-center justify-center gap-3 bg-amber text-charcoal font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-amber-light hover:shadow-amber/30 hover:shadow-2xl transition-all"
              >
                🥡 Order for Pickup
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
