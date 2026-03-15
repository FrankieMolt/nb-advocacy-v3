import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Systemic Failure: The New Brunswick Crisis | Reform NB",
  description:
    "Investigating the systemic governance failure in New Brunswick. Exposing the truth about healthcare collapse, corporate monopoly, and government corruption.",
  openGraph: {
    title: "Systemic Failure: The New Brunswick Crisis | Reform NB",
    description:
      "Investigating the systemic governance failure in New Brunswick. Exposing the truth about healthcare collapse, corporate monopoly, and government corruption.",
    url: "https://reformnb.ca",
    siteName: "Reform NB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systemic Failure: The New Brunswick Crisis | Reform NB",
    description:
      "Investigating the systemic governance failure in New Brunswick.",
  },
};

export const viewport = "width=device-width, initial-scale=1";

const navLinks = [
  { href: "/healthcare", label: "Healthcare" },
  { href: "/housing", label: "Housing" },
  { href: "/economy", label: "Economy" },
  { href: "/oligarchy", label: "The Oligarchy" },
  { href: "/take-action", label: "Take Action", accent: true },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://reformnb.ca" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans relative`}
      >
        <div className="noise-overlay" />
        <header className="main-header border-b border-neutral-900 bg-black/80 backdrop-blur-xl py-6 sticky top-0 z-50 relative">
          <div className="container mx-auto px-8 flex justify-between items-center max-w-5xl">
            <Link
              href="/"
              className="text-2xl font-black uppercase text-black dark:text-white hover:text-crisis-red transition-colors"
              aria-label="Reform NB Home"
            >
              Reform NB
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold uppercase transition-colors ${
                    link.accent
                      ? "text-crisis-red hover:text-black dark:hover:text-white"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Hamburger (Client Component) */}
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="py-16 text-center text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800 dark:bg-black mt-20">
          <nav
            className="flex justify-center gap-8 mb-4 flex-wrap"
            aria-label="Footer navigation"
          >
            <a href="/about" className="hover:text-crisis-red transition-colors">
              About Us
            </a>
            <a
              href="/sources"
              className="hover:text-crisis-red transition-colors"
            >
              Sources & Data
            </a>
            <a
              href="/contact"
              className="hover:text-crisis-red transition-colors"
            >
              Contact
            </a>
          </nav>
          <p>
            &copy; {new Date().getFullYear()} Reform NB. Uncovering the
            systemic failure.
          </p>
        </footer>
      </body>
    </html>
  );
}
