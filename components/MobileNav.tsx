"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navGroups, takeActionLink } from "@/lib/navGroups";

export function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenGroups(new Set());
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white hover:text-white transition-colors p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-crisis-red focus:ring-offset-2 focus:ring-offset-black rounded"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 py-4 absolute top-full left-0 right-0 z-40 max-h-[85vh] overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-6 max-w-5xl flex flex-col">
            {navGroups.map((group) => (
              <div key={group.label} className="border-b border-neutral-800 last:border-b-0">
                {/* Group header — acts as accordion toggle */}
                <button
                  className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-crisis-red rounded"
                  onClick={() => toggleGroup(group.label)}
                  aria-expanded={openGroups.has(group.label)}
                >
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400">
                    {group.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-neutral-500 transition-transform ${
                      openGroups.has(group.label) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Collapsible links */}
                {openGroups.has(group.label) && (
                  <div className="pb-4 pl-2 flex flex-col gap-1">
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="text-lg font-bold uppercase tracking-wider text-white hover:text-crisis-gold transition-colors py-2 focus:outline-none focus:text-crisis-gold focus:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Take Action — always visible */}
            <a
              href={takeActionLink.href}
              onClick={closeMenu}
              className="mt-4 text-center text-lg font-black uppercase tracking-wider text-white bg-crisis-red hover:bg-red-800 transition-colors py-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
            >
              {takeActionLink.label}
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
