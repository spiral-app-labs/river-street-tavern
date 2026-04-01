"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center text-charcoal font-bold text-lg font-serif group-hover:scale-110 transition-transform">
              R
            </div>
            <div>
              <span className="text-xl font-serif font-bold text-cream tracking-wide">
                River Street
              </span>
              <span className="block text-xs text-amber tracking-[0.2em] uppercase -mt-1">
                Tavern
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-amber ${
                  pathname === link.href ? "text-amber" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.opentable.com/r/river-street-tavern-east-dundee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm !py-2 !px-5"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-semibold uppercase tracking-wider transition-colors hover:text-amber ${
                  pathname === link.href ? "text-amber" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.opentable.com/r/river-street-tavern-east-dundee"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-sm mt-2"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
