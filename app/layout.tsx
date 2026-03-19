import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { WebSiteSchema, OrganizationSchema } from "@/components/StructuredData";
import { MobileNav } from "@/components/MobileNav";
import { Newsletter } from "@/components/Newsletter";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Systemic Failure: The New Brunswick Crisis | Reform NB",
    template: "%s | Reform NB",
  },
  description:
    "Investigating the systemic governance failure in New Brunswick. Exposing the truth about healthcare collapse, corporate monopoly, and government corruption.",
  openGraph: {
    siteName: "Reform NB",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ReformNB",
  },
  metadataBase: new URL("https://reformnb.ca"),
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground font-sans relative`}
      >
        <WebSiteSchema />
        <OrganizationSchema />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-crisis-red focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <div className="noise-overlay" />
        <header className="main-header border-b border-neutral-900 bg-black/80 backdrop-blur-xl py-4 md:py-6 sticky top-0 z-50 relative">
          <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-5xl">
            <Link
              href="/"
              className="text-xl md:text-2xl font-black uppercase text-white hover:text-crisis-text transition-colors"
              aria-label="Reform NB Home"
            >
              Reform NB
            </Link>
            <Navigation />
            <MobileNav />
          </div>
        </header>
        <main id="main-content">{children}</main>
        <BackToTop />
        <footer className="py-16 text-center text-sm text-neutral-400 border-t border-neutral-800 bg-black mt-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-12">
              <Newsletter />
            </div>
            <nav className="flex justify-center gap-6 mb-6 flex-wrap" aria-label="Footer navigation">
              <Link href="/about" className="hover:text-crisis-text transition-colors">About Us</Link>
              <Link href="/sources" className="hover:text-crisis-text transition-colors">Sources & Data</Link>
              <Link href="/contact" className="hover:text-crisis-text transition-colors">Contact</Link>
              <Link href="/take-action" className="hover:text-crisis-text transition-colors">Take Action</Link>
              <Link href="/faq" className="hover:text-crisis-text transition-colors">FAQ</Link>
            </nav>
            <div className="flex justify-center gap-4 mb-6">
              <a href="https://twitter.com/ReformNB" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors" aria-label="Twitter/X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="mailto:reformnb-tips@proton.me" className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-neutral-500">&copy; {new Date().getFullYear()} Reform NB. Uncovering the systemic failure.</p>
            <p className="text-neutral-600 text-xs mt-2">Decentralized investigative journalism. No corporate funding. No government ties.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
