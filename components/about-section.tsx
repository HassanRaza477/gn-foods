import { faSeedling, faGlobe, faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title">About Our Culinary Journey</h2>
                    <div className="text-content">
                        <p className="highlight-text">Transforming Events Through Gastronomic Excellence</p>
                        <p className="description">
                            Since our inception we have redefined event catering by merging culinary artistry with impeccable service.
                            Our chefs craft bespoke menus that elevate weddings corporate galas and intimate gatherings into unforgettable experiences.
                        </p>

                        <div className="key-features">
                            {[
                                { icon: faSeedling, text: 'Farm-to-Table Ingredients' },
                                { icon: faGlobe, text: 'Global Culinary Traditions' },
                                { icon: faHeart, text: 'Dietary-Specific Menus' }
                            ].map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <a className="cta-button">
                            Explore Our Story
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                        </a>
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <div className="image-frame">
                        <Image
                            src="/images/about2.avif"
                            alt="Culinary Team"
                            className="chef-image"
                            width={600}
                            height={800}
                            layout="responsive"
                        />
                        <div className="experience-badge">
                            <span className="years">10+</span>
                            <span className="label">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
      :root {
    --primary-red: #ff4d4d;
    --dark-bg: #0e0e0e;
    --text-white: #ffffff;
    --accent-dark: #1a1a1a;
}

        .about {
          padding: 8rem 0;
          background: linear-gradient(to right, var(--dark-bg) 60%, rgba(14,14,14,0.9));
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 3.5rem;
          color: var(--primary-red);
          margin-bottom: 2.5rem;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 80px;
          height: 3px;
          background: var(--primary-red);
        }

        .highlight-text {
          color: var(--text-white);
          font-size: 1.8rem;
          margin-bottom: 2rem;
          line-height: 1.4;
          font-weight: 300;
        }

        .description {
          color: rgba(255,255,255,0.9);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          border-left: 3px solid var(--primary-red);
          padding-left: 1.5rem;
        }

        .key-features {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
          background-color:
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: var(--accent-dark);
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .feature-item:hover {
          transform: translateX(10px);
        }

        .feature-icon {
          color: var(--primary-red);
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }

        .about-image-wrapper {
          position: relative;
          perspective: 1000px;
        }

        .image-frame {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          transform: rotate3d(0.5, 1, 0, 15deg);
          transition: transform 0.5s ease;
        }

        .image-frame:hover {
          transform: rotate3d(0, 0, 0, 0deg);
        }

        .experience-badge {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background: var(--primary-red);
          padding: 2rem;
          border-radius: 50%;
          width: 150px;
          height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 10px 30px rgba(255,77,77,0.3);
        }

        @media (max-width: 1200px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .about {
            padding: 5rem 0;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default AboutSection;