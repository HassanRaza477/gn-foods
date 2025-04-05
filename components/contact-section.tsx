import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faInstagram, 
  faTwitter, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FormData {
  name: string;
  email: string;
  message: string;
}



interface SocialLink {
  icon: IconDefinition;
  url: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks: SocialLink[] = [
    { icon: faFacebook, url: '#' },
    { icon: faInstagram, url: '#' },
    { icon: faTwitter, url: '#' },
    { icon: faLinkedin, url: '#' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-form">
          <h2 className="form-title">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
            <div>
              <h3>Visit Us</h3>
              <p>123 Food Street Culinary City</p>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="info-icon" />
            <div>
              <h3>Call Us</h3>
              <p>0315 2627426</p>
            </div>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
            <div>
              <h3>Email Us</h3>
              <p>m.hassanraza477@gmail.com</p>
            </div>
          </div>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                onMouseEnter={() => setHoveredSocial(link.url)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  transform: hoveredSocial === link.url ? 'translateY(-3px)' : 'none',
                  color: hoveredSocial === link.url ? '#ff4d4d' : 'white'
                }}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-message">
          <FontAwesomeIcon icon={faCheckCircle} />
          <span>Message sent successfully..</span>
        </div>
      )}

      <style jsx global>{`
        :root {
          --dark: #0a0a0a;
          --primary-red: #ff4d4d;
        }

        .contact-section {
          padding: 5rem 1rem;
          background-color: var(--dark);
          color: white;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .contact-form {
          background: #2d2d2d;
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--primary-red);
        }

        .form-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--primary-red);
        }

        .input-group {
          margin-bottom: 1.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          background: #1a1a1a;
          border: 1px solid #333;
          color: white;
          border-radius: 5px;
          transition: 0.3s;
        }

        input:focus, textarea:focus {
          border-color: var(--primary-red);
          outline: none;
        }

        .submit-btn {
          background: var(--primary-red);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
          width: 100%;
        }

        .submit-btn:hover {
          background: #ff3333;
          transform: translateY(-2px);
        }

        .contact-info {
          background: #2d2d2d;
          padding: 2rem;
          border-radius: 10px;
          border: 1px solid var(--primary-red);
        }

        .info-item {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .info-icon {
          font-size: 1.5rem;
          color: var(--primary-red);
          margin-right: 1rem;
          width: 40px;
        }

        .social-links {
          margin-top: 2rem;
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: white;
          font-size: 1.5rem;
          transition: 0.3s;
        }

        .success-message {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #2d2d2d;
          color: var(--primary-red);
          padding: 1rem 2rem;
          border-radius: 5px;
          border: 1px solid var(--primary-red);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;