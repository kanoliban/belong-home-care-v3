/**
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { label: 'About', path: '/about' },
    { label: 'Our Homes', path: '/our-homes' },
    { label: 'Our Approach', path: '/our-approach' },
    { label: 'For Families', path: '/for-families' },
    { label: 'For Professionals', path: '/for-professionals' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="py-6 w-full bg-[#F8FAFC]">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="font-serif text-xl font-normal no-underline hover:no-underline">
            Belong.
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-text border border-gray-200 p-2 rounded-md shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <div className="bg-[#f9f9f9] border border-gray-200 rounded-lg shadow-sm">
              <ul className="flex text-sm font-normal">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => 
                        `px-4 py-2 inline-block transition-colors ${
                          isActive ? 'text-primary' : 'text-text hover:text-primary/80'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-[#f9f9f9] border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `block px-4 py-3 transition-colors ${
                        isActive 
                          ? 'text-primary bg-gray-50' 
                          : 'text-text hover:text-primary hover:bg-gray-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);