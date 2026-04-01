"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const hours = [
  { day: "Sunday", bar: "11:00am – 1:00am", kitchen: "11:00am – 9:00pm" },
  { day: "Monday", bar: "Closed", kitchen: "Closed" },
  { day: "Tuesday", bar: "4:00pm – 1:00am", kitchen: "4:00pm – 9:00pm" },
  { day: "Wednesday", bar: "4:00pm – 1:00am", kitchen: "4:00pm – 9:00pm" },
  { day: "Thursday", bar: "4:00pm – 1:00am", kitchen: "4:00pm – 10:00pm" },
  { day: "Friday", bar: "11:00am – 2:00am", kitchen: "11:00am – 11:00pm" },
  { day: "Saturday", bar: "11:00am – 2:00am", kitchen: "11:00am – 11:00pm" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=600&fit=crop"
            alt="River Street Tavern"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-amber uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Get In Touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream mb-4">
            Visit Us
          </h1>
          <p className="text-cream/70 text-lg">
            We&apos;d love to see you. Stop by, call, or reserve a table online.
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <Reveal>
              <div className="mb-10">
                <h2 className="font-serif text-3xl font-bold text-cream mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream mb-1">Address</h3>
                      <p className="text-cream/70">
                        102 N River St<br />
                        East Dundee, IL 60118
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream mb-1">Phone</h3>
                      <a
                        href="tel:+18478442384"
                        className="text-amber hover:text-amber-light transition-colors text-lg"
                      >
                        (847) 844-2384
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center text-amber shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cream mb-1">Social</h3>
                      <a
                        href="https://www.facebook.com/RSTavern/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber hover:text-amber-light transition-colors"
                      >
                        Facebook — @RSTavern
                      </a>
                      <p className="text-cream/50 text-sm mt-1">4,207 likes &bull; 7,053 check-ins</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+18478442384"
                  className="btn-primary text-center"
                >
                  Call Us
                </a>
                <a
                  href="https://www.opentable.com/r/river-street-tavern-east-dundee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Reserve on OpenTable
                </a>
                <a
                  href="https://www.doordash.com/store/river-street-tavern-east-dundee-891186/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Order DoorDash
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border border-amber/10 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.5!2d-88.2773!3d42.0989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0a0b0b0b0b0b%3A0x0!2s102+N+River+St%2C+East+Dundee%2C+IL+60118!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="River Street Tavern location"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 md:py-28 bg-charcoal-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
                Hours of Operation
              </h2>
              <div className="section-divider mt-6" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-charcoal border border-amber/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0 px-6 py-4 border-b border-amber/10 bg-charcoal-light">
                <span className="text-amber font-semibold text-sm uppercase tracking-wider">Day</span>
                <span className="text-amber font-semibold text-sm uppercase tracking-wider text-center">Bar</span>
                <span className="text-amber font-semibold text-sm uppercase tracking-wider text-center">Kitchen</span>
              </div>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="grid grid-cols-3 gap-0 px-6 py-4 border-b border-amber/5 last:border-0 hover:bg-charcoal-light/50 transition-colors"
                >
                  <span className="text-cream font-medium">{h.day}</span>
                  <span className={`text-center ${h.bar === "Closed" ? "text-red-light" : "text-cream/70"}`}>
                    {h.bar}
                  </span>
                  <span className={`text-center ${h.kitchen === "Closed" ? "text-red-light" : "text-cream/70"}`}>
                    {h.kitchen}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
