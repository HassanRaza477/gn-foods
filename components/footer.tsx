'use client'
import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Menu', path: '#menu' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  const socialLinks = [
    { icon: faFacebookF, url: '#' },
    { icon: faInstagram, url: '#' },
    { icon: faTwitter, url: '#' },
    { icon: faLinkedinIn, url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">GN Foods</h3>
          <p className="footer-text">Crafting memorable dining experiences with passion and perfection since 2010.</p>
          <div className="opening-hours">
            <FontAwesomeIcon icon={faClock} className="footer-icon" />
            <span>Mon to Sun: 8:00 AM to 11:00 PM</span>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              <span>Baraboard Near Warsi Masjid Karachi </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <span>0315 2627426</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <span>m.hassanraza477@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} GN Foods. All rights reserved.</p>
      </div>

      <style jsx global>{`
        .footer {
          background: var(--dark-bg);
          color: var(--text-white);
          padding: 4rem 2rem 2rem;
          border-top: 3px solid var(--primary-red);
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          padding-bottom: 3rem;
        }

        .footer-section {
          margin-bottom: 2rem;
        }

        .footer-heading {
          color: var(--primary-red);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .footer-text {
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-link {
          color: var(--text-white);
          text-decoration: none;
          padding: 0.5rem 0;
          display: block;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary-red);
        }

        .contact-info {
          list-style: none;
          padding: 0;
        }

        .contact-info li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .footer-icon {
          color: var(--primary-red);
          width: 20px;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          color: var(--text-white);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: var(--primary-red);
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #333;
          margin-top: 2rem;
          opacity: 0.8;
        }

        .opening-hours {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .contact-info li {
            justify-content: center;
          }

          .social-icons {
            justify-content: center;
          }

          .opening-hours {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;