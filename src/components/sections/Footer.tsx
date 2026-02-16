'use client';

import {
  Mail, MapPin, Instagram, Facebook, Twitter,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-primary text-white overflow-hidden">

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="footerNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#footerNoise)" />
        </svg>
      </div>

      {/* Mission Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-8">
        <div className="text-center mb-16 lg:mb-20">
          <img
            src="/logo.svg"
            alt=""
            className="h-14 lg:h-16 w-auto mx-auto mb-6 opacity-80"
            aria-hidden="true"
          />
          <p className="font-serif text-xl lg:text-2xl text-white/70 italic max-w-xl mx-auto leading-relaxed">
            Honoring a life. Building a legacy.
          </p>
        </div>

        {/* Main Content Grid — wider gaps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white tracking-wide">The Latif Foundation</h2>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              Empowering communities in Nigeria and The Gambia through education, food security, and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-[15px]">About Us</Link></li>
              <li><Link to="/partners" className="text-white/60 hover:text-white transition-colors text-[15px]">Our Partners</Link></li>
              <li><Link to="/memorial" className="text-white/60 hover:text-white transition-colors text-[15px]">In Memoriam</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-[15px]">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-6">Connect</h4>
            <div className="space-y-4 md:flex md:flex-col md:items-end">
              <a href="mailto:info@latiffoundation.org" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group rounded-sm">
                <Mail className="h-5 w-5 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
                <span className="text-[15px]">info@latiffoundation.org</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-5 w-5 text-brand-gold" />
                <span className="text-[15px]">Abuja, Nigeria</span>
              </div>
            </div>

            {/* Socials — larger touch targets */}
            <div className="flex gap-3 mt-8 md:justify-end">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Gold accent divider */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pb-4">
          <div className="text-xs text-white/30">
            <span>&copy; {currentYear} The Latif Foundation. All rights reserved.</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="ghost"
            className="group flex items-center gap-2 text-xs text-white/40 hover:text-white hover:bg-transparent transition-colors uppercase tracking-wider font-medium p-0"
          >
            Back to Top
            <span className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ml-2">
              <ArrowUp className="h-3 w-3" />
            </span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
