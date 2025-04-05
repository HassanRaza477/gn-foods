import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRing, 
  faBuildingColumns, 
  faChampagneGlasses, 
  faCakeCandles 
} from '@fortawesome/free-solid-svg-icons';

interface Service {
  icon: any;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services: Service[] = [
    {
      icon: faRing,
      title: 'Luxury Weddings',
      description: 'Tailored menus and flawless execution for your once-in-a-lifetime celebration.'
    },
    {
      icon: faBuildingColumns,
      title: 'Corporate Galas',
      description: 'Elevate business events with gourmet cuisine and sophisticated presentation.'
    },
    {
      icon: faChampagneGlasses,
      title: 'Exclusive Parties',
      description: 'Bespoke culinary experiences for intimate gatherings and VIP events.'
    },
    {
      icon: faCakeCandles,
      title: 'Celebrations',
      description: 'Custom-designed menus for birthdays, anniversaries, and special milestones.'
    }
  ];

  const handleServiceClick = (title: string) => {
    setSelectedService(title);
    setShowModal(true);
  };

  return (
    <section className="services-container" id="services">
      <div className="services-title">
        <h2>Premium Catering Experiences</h2>
        <p>Crafting unforgettable moments with exquisite flavors and impeccable service</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index}
            className="service-card"
            onClick={() => handleServiceClick(service.title)}
          >
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="service-modal">
          <div className="modal-content">
            <h3>{selectedService} Inquiry</h3>
            <p>Our team will contact you shortly to discuss your requirements.</p>
            <button 
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        .services-container {
          padding: 6rem 1rem;
          background-color: #1a1a1a;
        }

        .services-title {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-title h2 {
          font-size: 2.8rem;
          color: #ffffff;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .services-title p {
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .service-card {
          background: #2d2d2d;
          padding: 2rem;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          border: 1px solid #333333;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: #ff4d4d;
          box-shadow: 0 12px 24px rgba(255, 77, 77, 0.1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 77, 77, 0.1), transparent);
          transition: 0.5s;
        }

        .service-card:hover::before {
          animation: borderEffect 3s linear infinite;
        }

        .service-icon {
          font-size: 3rem;
          color: #ff4d4d;
          margin-bottom: 1.5rem;
          transition: 0.3s;
        }

        .service-card:hover .service-icon {
          transform: scale(1.2);
          color: #ffffff;
        }

        .service-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: rgb(53, 30, 30);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid #ff4d4d;
          max-width: 400px;
          width: 90%;
          text-align: center;
        }

        .modal-close-btn {
          margin-top: 1.5rem;
          padding: 0.8rem 2rem;
          background: #ff4d4d;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .modal-close-btn:hover {
          opacity: 0.8;
        }

        @keyframes borderEffect {
          0% { top: -50%; left: -50%; }
          100% { top: 150%; left: 150%; }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            padding: 0;
          }
        }

        @media (max-width: 1023px) and (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .services-title h2 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;