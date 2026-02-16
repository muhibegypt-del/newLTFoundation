'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { MobileMenu } from './MobileMenu';
import { NavigationItem } from './NavigationItem';
import { HamburgerToggle } from './navigation/HamburgerToggle';

// --- MAIN NAVIGATION ---
export function Navigation() {
  const isScrolled = useOptimizedScroll({ threshold: 20 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  // -- DROPDOWN STATE LIFTED UP --
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleNavEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleNavLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClose = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 w-full z-header transition-all duration-300 ${
          isScrolled
            ? 'top-0 shadow-soft bg-brand-primary/95 backdrop-blur-md border-t-2 border-brand-gold'
            : 'top-0 bg-brand-primary'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-18 lg:h-20">

            {/* LOGO — SVG mark + text wordmark */}
            <Link
              to="/"
              className="flex-shrink-0 z-50 focus:outline-none rounded-md"
              aria-label="The Latif Foundation — Home"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/logo.svg"
                  alt=""
                  className="h-10 lg:h-12 w-auto"
                  aria-hidden="true"
                />
                <span className="text-white font-serif text-lg lg:text-xl font-medium tracking-wide">
                  The Latif Foundation
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV — sentence case, medium weight */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {NAV_CONFIG.map((link) => (
                <NavigationItem
                  key={link.label}
                  link={link}
                  isOpen={activeDropdown === link.label}
                  onOpen={() => handleNavEnter(link.label)}
                  onLeave={handleNavLeave}
                  onClose={handleNavClose}
                />
              ))}
            </nav>

            {/* DESKTOP DONATE CTA — gold accent, prominent */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold focus:ring-offset-brand-primary"
              >
                Donate
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="#"
                className="bg-brand-gold text-white font-semibold text-sm px-5 flex items-center min-h-[44px] rounded-full active:scale-95 transition-all duration-200 shadow-md"
              >
                Donate
              </a>
              <HamburgerToggle
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentHash={currentHash}
        navConfig={NAV_CONFIG}
      />
    </>
  );
}
