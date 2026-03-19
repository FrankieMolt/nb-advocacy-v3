"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { navGroups, takeActionLink } from "@/lib/navGroups";

export function Navigation() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenGroup(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenGroup(null), 150);
  };

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation" ref={navRef}>
      {navGroups.map((group) => (
        <div
          key={group.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(group.label)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-white hover:text-neutral-300 transition-colors px-3 py-2 focus:outline-none focus:ring-2 focus:ring-crisis-red focus:ring-offset-2 focus:ring-offset-black rounded"
            onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
            aria-expanded={openGroup === group.label}
            aria-haspopup="true"
          >
            {group.label}
            <ChevronDown
              size={14}
              className={`transition-transform ${openGroup === group.label ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown */}
          {openGroup === group.label && (
            <div className="absolute top-full left-0 mt-1 min-w-[200px] bg-neutral-900/95 backdrop-blur-xl border border-neutral-800 rounded-lg shadow-2xl py-2 z-50">
              {group.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 hover:text-crisis-gold transition-colors focus:outline-none focus:bg-neutral-800 focus:text-crisis-gold"
                  onClick={() => setOpenGroup(null)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Take Action accent button */}
      <a
        href={takeActionLink.href}
        className="ml-2 text-sm font-black uppercase tracking-wider px-4 py-2 bg-crisis-red text-white hover:bg-red-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        {takeActionLink.label}
      </a>
    </nav>
  );
}
