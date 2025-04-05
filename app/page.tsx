'use client'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/header';
import AboutSection from '@/components/about-section';
import MenuSection from '@/components/menu-section';
import ServicesSection from '@/components/service-section';
import ContactSection from '@/components/contact-section';
import { CartProvider } from '@/components/CartContext';

export default function Home() {
  const [activeSection,] = useState('home');
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartProvider>
    <div className="main-container">
      <Header cartCount={cartCount} activeSection={activeSection}/>
      
      <section className="home" id="home">
        <div className="home-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Welcome to GN Foods</span>
              <div className="title-divider"></div>
            </h1>
            <p className="hero-subtitle">
              Nestled in the heart of the city The Garden Bistro offers a culinary escape 
              where fresh flavors warm ambiance and exceptional service come together.
            </p>
            <button 
              className="cta-button"
              onClick={() => {/* Add menu navigation logic here */}}
            >
              Explore Our Menu
              <FontAwesomeIcon 
                icon={faUtensils} 
                className="button-icon" 
              />
            </button>
          </div>
          <div className="scroll-indicator">
            <div className="mouse-scroll"></div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --primary-red: #ff4d4d;
          --text-white: #ffffff;
          --dark-bg: rgba(14, 14, 14, 0.95);
        }

        .home {
          position: relative;
          width: 100%;
          height: 100vh;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                      url("/images/bg.avif") no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .home-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 1.5rem;
        }

        .hero-title {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fff 60%, var(--primary-red));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-divider {
          width: 100px;
          height: 4px;
          background: var(--primary-red);
          margin: 1.5rem auto;
          border-radius: 2px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          color: rgba(255,255,255,0.9);
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-button {
          padding: 1.2rem 3rem;
          background: var(--primary-red);
          color: var(--text-white);
          border: 2px solid transparent;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255,77,77,0.5);
          background-color:transparent;
          border:2px solid var(--primary-red)
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: rotate(360deg);
        }
          

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .cta-button {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .title-divider {
            width: 60px;
          }
        }
      `}</style>

      <AboutSection />
      <MenuSection setCartCount={setCartCount}/>
      <ServicesSection/>
      <ContactSection/>
    </div>
    </CartProvider>
  );
}