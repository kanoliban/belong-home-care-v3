/**
 * Header Component
 * 
 * Purpose: Displays the main site navigation and branding.
 * 
 * Planned Updates (2025-03-30):
 * - Replace existing logo with new version.
 * - Update navigation links to include Home, About, Professionals.
 * - Apply new brand colors (Primary Blue, Accent Orange).
 * 
 * Header.tsx
 * Updated: 2025-03-19
 * Description: Updated to capitalize "Belong" in the header logo
 * Updated: 2025-03-20
 * Description: Updated header width and alignment to match content width
 * Updated: 2025-03-20
 * Description: Updated background color to match new layout background
 * Updated: 2025-03-20
 * Description: Adjusted background color to a lighter ivory (#FFF8E1)
 * Updated: 2025-03-20
 * Description: Changed to a very subtle off-white (#FEFCF9) - barely off-white
 * Updated: 2025-03-20
 * Description: Changed to a very subtle blue-gray (#F8FAFC) - cool and minimal
 * Updated: 2025-03-20
 * Description: Constrained header width to match content sections
 */
import React, { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx'; // Added import for clsx utility

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'For Families', path: '/families' },
    { label: 'For Professionals', path: '/professionals' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="py-6 w-full bg-primary text-white shadow-md">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            {/* <img className="h-8 w-auto" src="/path/to/new/logo.svg" alt="Belong Health Care" /> */}
            <Link to="/" className="text-2xl font-bold hover:text-accent transition-colors">
              {/* Placeholder text until logo is ready */}
              Belong Health Care
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'text-base font-medium hover:text-accent transition-colors',
                    isActive
                      ? 'text-white font-semibold underline decoration-accent decoration-2 underline-offset-4'
                      : 'text-white'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 w-full bg-primary z-50 shadow-lg`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-accent',
                  isActive
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);