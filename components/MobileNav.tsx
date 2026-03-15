"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/healthcare", label: "Healthcare" },
  { href: "/housing", label: "Housing" },
  { href: "/economy", label: "Economy" },
  { href: "/oligarchy", label: "The Oligarchy" },
  { href: "/take-action", label: "Take Action", accent: true },
];

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-neutral-400 hover:text-white transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 py-6 absolute top-full left-0 right-0 z-40"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-8 max-w-5xl flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-black uppercase tracking-wider transition-colors py-2 ${
                  link.accent
                    ? "text-crisis-red hover:text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
