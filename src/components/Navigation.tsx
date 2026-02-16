'use client';

import { useState, useEffect, useRef } from 'react';
import { User, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_CONFIG } from '../config/navigationConfig';
import { useOptimizedScroll } from '../hooks/useOptimizedScroll';
import { MobileMenu } from './MobileMenu';
import { NavigationItem } from './NavigationItem';
import { HamburgerToggle } from './navigation/HamburgerToggle';
import { Button } from './ui/button';
import CustomLogo from './ui/CustomLogo';

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
    }, 150); // Small delay to allow moving to dropdown content
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
      {/* MAIN HEADER - DARK TEAL AS REQUESTED */}
      <header
        className={`fixed left-0 right-0 w-full z-header transition-all duration-300 ${isScrolled ? 'top-0 shadow-soft bg-brand-primary-dark/95 backdrop-blur-md' : 'top-0 bg-brand-primary-dark'}`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LOGO - flex-shrink-0 prevents compression, min-w ensures space */}
            <Link
              to="/"
              className="flex-shrink-0 z-50 focus:outline-none rounded-md"
              aria-label="The Latif Foundation"
            >
              <div className="flex items-center justify-start h-24 lg:h-32">
                <span className="text-white font-serif text-xl lg:text-2xl font-bold tracking-widest uppercase">
                  The Latif Foundation
                </span>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
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

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Donate CTA */}
              <a
                href="#"
                className="flex items-center gap-2 bg-brand-accent hover:brightness-110 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-brand-primary-darker"
              >
                Donate
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="#"
                className="bg-brand-accent text-white font-bold text-sm px-4 flex items-center min-h-[44px] rounded-full active:scale-95 transition-transform"
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

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentHash={currentHash}
        navConfig={NAV_CONFIG}
      />
    </>
  );
}
