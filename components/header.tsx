'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';

interface HeaderProps {
  cartCount: number;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ cartCount, activeSection }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle responsive menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  };

  return (
    <header className={`sticky-header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link href="#home" scroll={false} className="logo-link" onClick={(e) => handleSmoothScroll(e, '#home')}>

            <span className="logo-gradient">GN</span> Foods

          </Link>
        </div>

        <nav ref={navRef} className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            {['home', 'about', 'services', 'menu', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                scroll={false}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, `#${section}`)}
              >
                <span className="link-text">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="header-right">
          <div className="cart-icon">
            <Link href="/cart">
              <div className="cart-link">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cart-count">{totalItems}</span>
              </div>
            </Link>
          </div>
          <button
            ref={hamburgerRef}
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .sticky-header.sticky {
          background: rgba(14, 14, 14, 0.98);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .main-nav {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 70%;
            background: var(--dark-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            flex-direction: column;
            padding: 80px 2rem;
            transition: 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
            z-index: 999;
          }

          .main-nav.active {
            right: 0;
          }

          .hamburger.active .bar:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .hamburger.active .bar:nth-child(2) {
            opacity: 0;
          }

          .hamburger.active .bar:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

// function useCart(): { totalItems: any; } {
//   throw new Error('Function not implemented.');
// }
