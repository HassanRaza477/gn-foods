import { FC } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const MenuSection: FC<MenuSectionProps> = ({ setCartCount }) => {
  const menuItems: MenuItem[] = [
    { id: 1, name: 'Karachi Biryani', price: 250, image: '/images/biryani.avif' },
    { id: 2, name: 'Chicken Karahi', price: 950, image: '/images/karahi.jpg' },
    { id: 3, name: 'Chicken Tikka', price: 400, image: '/images/tikka.avif' },
  ];

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="heading">Our Special Menu</h2>
        
        <div className="parent-card">
          {menuItems.map((item) => (
            <div key={item.id} className="card">
              <div className="menu-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={250}
                  className="menu-img"
                  layout="responsive"
                />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.price}.Rs</p>
                <button 
                  className="menu-btn"
                  onClick={handleAddToCart}
                >
                  Add to cart
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link href="/menu" className="view-all-btn">
            View All Items
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --primary: #ff4757;
          --dark: #0a0a0a;
          --light-dark: #1a1a1a;
          --text-light: #ffffff;
        }

        .menu {
          width: 100%;
          min-height: 100vh;
          background-color: var(--dark);
          padding: 4rem 0;
        }

        .menu-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .heading {
          text-align: center;
          color: var(--primary);
          font-size: 2.8rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .heading::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: var(--primary);
        }

        .parent-card {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem 0;
        }

        .card {
          background: var(--light-dark);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .menu-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .menu-image:hover img {
          transform: scale(1.1);
        }

        .card-content {
          padding: 1.5rem;
          text-align: center;
        }

        .card h3 {
          font-size: 1.5rem;
          color: var(--text-light);
          margin-bottom: 0.8rem;
        }

        .card p {
          color: var(--primary);
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .menu-btn {
          background: var(--primary);
          color: var(--text-light);
          border: none;
          padding: 0.8rem 1.8rem;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
        }

        .menu-btn:hover {
          background: #ff6b81;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 71, 87, 0.3);
        }

        .view-all-container {
          text-align: center;
          margin-top: 3rem;
        }

        .view-all-btn {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .view-all-btn:hover {
          background: var(--primary);
          color: var(--text-light);
        }

        @media (max-width: 992px) {
          .parent-card {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .parent-card {
            grid-template-columns: 1fr;
          }
          
          .heading {
            font-size: 2.2rem;
          }
          
          .menu-image {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuSection;