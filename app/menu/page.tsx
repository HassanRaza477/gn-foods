// 'use client'
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { useCart } from '@/components/CartContext';
// import { useRouter } from 'next/navigation';
// import Header from '@/components/header';

// const menuData = [
//     {
//         id: 1,
//         category: "fastfood",
//         name: "Shawarma Roll",
//         description: "Thinly sliced chicken or beef wrapped in pita bread with garlic sauce.",
//         price: "250 - 500",
//         image: "roll.jpg"
//     },
//     {
//         id: 2,
//         category: "fastfood",
//         name: "Zinger Burger",
//         price: "300 - 500",
//         description: "J A crispy, deep-fried chicken fillet in a soft bun with lettuce and mayo",
//         image: "zinger.webp"
//     },
//     {
//         id: 3,
//         category: "fastfood",
//         name: "Chicken Tikka Pizza",
//         description: "A fusion of traditional chicken tikka flavors with a cheesy pizza base.",
//         price: "700 - 1500",
//         image: "pizza.jpg"
//     },
//     {
//         id: 4,
//         category: "fastfood",
//         name: "Beef Burger",
//         description: "A juicy beef patty with cheese, lettuce, and sauces in a toasted bun.",
//         price: "500 - 1000",
//         image: "beef.jpg"
//     },
//     {
//         id: 5,
//         category: "fastfood",
//         name: "Loaded Fries",
//         description: "Crispy fries topped with cheese, sauces, and spices.",
//         price: "350 - 600",
//         image: "fries.webp"
//     },
//     {
//         id: 6,
//         category: "fastfood",
//         name: "Chicken Fajita Wrap",
//         description: "Grilled chicken with onions, bell peppers, and spicy sauce in a tortilla.",
//         price: "400 - 700",
//         image: "wrap.jpg"
//     },
//     {
//         id: 7,
//         category: "fastfood",
//         name: "Chapli Burger",
//         description: "A fusion of the traditional Pakistani chapli kebab with burger buns and sauces.",
//         price: "500 - 800",
//         image: "chapli.webp"
//     },
//     {
//         id: 8,
//         category: "fastfood",
//         name: "Crispy Fried Chicken",
//         description: "Spicy, crunchy, deep-fried chicken pieces.",
//         price: "400 - 800",
//         image: "fried.jpg"
//     },
//     {
//         id: 9,
//         category: "fastfood",
//         name: "Stuffed Paratha Roll",
//         description: "A crispy paratha filled with spicy chicken, beef, or vegetables.",
//         price: "300 - 600",
//         image: "paratha.jpg"
//     },
//     {
//         id: 10,
//         category: "bbq",
//         name: "Seekh Kebabs",
//         description: "Minced beef or chicken mixed with spices, shaped onto skewers, and grilled to perfection.",
//         price: "PKR 400-800 per serving",
//         image: "seekh.jpg"
//     },
//     {
//         id: 11,
//         category: "bbq",
//         name: "Beef Bihari Boti",
//         description: "Tender beef pieces marinated in a rich, spicy, and creamy bihari-style masala, grilled over open flames.",
//         price: "PKR 500-1,000 per plate",
//         image: "bihari.webp"
//     },
//     {
//         id: 12,
//         category: "bbq",
//         name: "Malai Boti",
//         description: "Soft and juicy boneless chicken pieces marinated in a creamy, mildly spiced mixture and grilled.",
//         price: "PKR 450-900 per plate",
//         image: "malai.avif"
//     },
//     {
//         id: 13,
//         category: "bbq",
//         name: "Reshmi Kebabs",
//         description: "Delicate, silky-textured chicken kebabs made with a smooth blend of minced chicken and cream.",
//         price: "PKR 400-800 per plate",
//         image: "reshmi.jpg"
//     },
//     {
//         id: 15,
//         category: "bbq",
//         name: "Gola Kebabs",
//         description: "Round-shaped, juicy beef kebabs infused with aromatic spices and grilled to smoky perfection.",
//         price: "PKR 450-900 per dozen",
//         image: "gola.jpg"
//     },
//     {
//         id: 16,
//         category: "bbq",
//         name: "Mutton Chops",
//         description: "Succulent mutton chops marinated in traditional spices and grilled until tender and flavorful.",
//         price: "PKR 700-1,500 per plate",
//         image: "mutton.jpg"
//     },
//     {
//         id: 17,
//         category: "bbq",
//         name: "Chapli Kebab",
//         description: "A crispy, spicy, and juicy kebab made with minced beef, coriander, and tomatoes, grilled on a flat pan.",
//         price: "PKR 300-700 per piece",
//         image: "chapli2.webp"
//     },
//     {
//         id: 18,
//         category: "bbq",
//         name: "Fish Tikka",
//         description: "Fresh fish fillets marinated in spicy masala and cooked over charcoal for a smoky flavor.",
//         price: "PKR 600-1,200 per plate",
//         image: "fish.jpg"
//     },
//     {
//         id: 19,
//         category: "bbq",
//         name: "Chicken Tikka",
//         description: "A classic BBQ dish with bone-in chicken marinated in yogurt, spices, and grilled over charcoal.",
//         price: "PKR 400-800 per serving",
//         image: "tikka2.jpg"
//     },
//     {
//         id: 20,
//         category: "desi",
//         name: "Biryani",
//         description: "A fragrant rice dish cooked with spiced meat (chicken, beef, or mutton), saffron, and herbs.",
//         price: "PKR 300-800 per plate",
//         image: "biryani.avif"
//     },
//     {
//         id: 21,
//         category: "desi",
//         name: "Nihari",
//         description: "A slow-cooked, rich and spicy beef or mutton stew, often eaten with naan.",
//         price: "PKR 400-900 per bowl",
//         image: "nihari.jpg"
//     },
//     {
//         id: 22,
//         category: "desi",
//         name: "Haleem",
//         description: "A thick, flavorful stew made of wheat, barley, lentils, and slow-cooked meat.",
//         price: "PKR 300-700 per plate",
//         image: "haleem.webp"
//     },
//     {
//         id: 23,
//         category: "desi",
//         name: "Paya",
//         description: "A traditional soup-like dish made from slow-cooked trotters (goat or cow), served with naan.",
//         price: "PKR 400-1,000 per bowl",
//         image: "paya.jpg"
//     },
//     {
//         id: 24,
//         category: "desi",
//         name: "Karahi",
//         description: "A spicy, tomato-based meat dish (chicken, mutton, or beef) cooked in a wok-style pan.",
//         price: "PKR 600-1,500 per serving",
//         image: "karahi.jpg"
//     },
//     {
//         id: 25,
//         category: "desi",
//         name: "Daal Chawal",
//         description: "Simple yet delicious lentils cooked with spices, served with steamed rice.",
//         price: "PKR 200-500 per plate",
//         image: "daal.jpg"
//     },
//     {
//         id: 26,
//         category: "desi",
//         name: "Pulao",
//         description: "A simple yet flavorful rice dish made with spices and meat or vegetables.",
//         price: "PKR 300-600 per plate",
//         image: "pulao.jpg"
//     },
// ];

// const MenuPage = () => {
//     const { addToCart } = useCart();
//     const [activeCategory, setActiveCategory] = useState('all');
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const sliderImages = [
//         '/images/slid1.avif',
//         '/images/slid2.avif',
//         '/images/karahi1.jpg'
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide(prev => (prev + 1) % sliderImages.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const filteredMenu = menuData.filter(item =>
//         activeCategory === 'all' || item.category === activeCategory
//     );

//     const handleAddToCart = (item: any) => {
//         addToCart(item);
//         alert(`${item.name} added to cart!`);
//     };
//      const [activeSection, setActiveSection] = useState('home');
//       const [cartCount, setCartCount] = useState(0);

//     return (
//         <>
//         <Header cartCount={cartCount} activeSection={activeSection}/>
//         <div className="menu-container">
//             {/* Slider Section */}
//             <div className="slider-container">
//                 <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
//                     {sliderImages.map((img, index) => (
//                         <div key={index} className="slide">
//                             <Image
//                                 src={img}
//                                 alt={`Slide ${index + 1}`}
//                                 fill
//                                 style={{ objectFit: 'cover' }}
//                                 quality={100}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="slider-nav">
//                     {sliderImages.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
//                             onClick={() => setCurrentSlide(index)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* Category Tabs */}
//             <div className="category-tabs">
//                 {['all', 'fastfood', 'bbq', 'desi', 'deserts'].map((category) => (
//                     <button
//                         key={category}
//                         className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
//                         onClick={() => setActiveCategory(category)}
//                     >
//                         {category.charAt(0).toUpperCase() + category.slice(1)}
//                     </button>
//                 ))}
//             </div>

//             {/* Menu Grid */}
//             <div className="menu-grid">
//                 {filteredMenu.map((item) => (
//                     <div key={item.id} className="menu-item" data-category={item.category}>
//                         <div className="item-image">
//                             <Image
//                                 src={`/images/${item.image}`}
//                                 alt={item.name}
//                                 fill
//                                 style={{ objectFit: 'cover' }}
//                             />
//                             <div className="item-overlay">
//                                 <h3 className="item-name">{item.name}</h3>
//                                 <p className="item-price">{item.price}</p>
//                             </div>
//                         </div>
//                         <div className="item-details">
//                             <p className="item-description">{item.description}</p>
//                             <button
//                                 className="add-to-cart"
//                                 onClick={() => handleAddToCart(item)}
//                             >
//                                 <FontAwesomeIcon icon={faCartPlus} />
//                                 Add to Cart
//                             </button>
//                         </div>
//                     </div>
//                 ))}

//             </div>


//             {/* Styles */}
//             <style jsx global>{`
//         :root {
//           --primary-red: #ff4d4d;
//           --dark-bg: #0e0e0e;
//           --text-white: #ffffff;
//         }

//         .menu-container {
//           background: var(--dark-bg);
//           color: var(--text-white);
//           min-height: 100vh;
//         }

//         .slider-container {
//           height: 70vh;
//           position: relative;
//           overflow: hidden;
//         }

//         .slider {
//           height: 100%;
//           display: flex;
//           transition: transform 0.5s ease;
//         }

//         .slide {
//           min-width: 100%;
//           position: relative;
//         }

//         .slider-nav {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           z-index: 1;
//         }

//         .slider-dot {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.5);
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .slider-dot.active {
//           background: var(--primary-red);
//           transform: scale(1.2);
//         }

//         .category-tabs {
//           padding: 2rem;
//           text-align: center;
//         }

//         .tab-btn {
//           background: none;
//           border: 2px solid var(--primary-red);
//           color: var(--text-white);
//           padding: 0.8rem 2rem;
//           margin: 0 1rem;
//           border-radius: 30px;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .tab-btn.active {
//           background: var(--primary-red);
//         }

//         .menu-grid {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//         }

//         .menu-item {
//           background: #1a1a1a;
//           border-radius: 10px;
//           overflow: hidden;
//           transition: transform 0.3s ease;
//         }

//         .menu-item:hover {
//           transform: translateY(-5px);
//         }

//         .item-image {
//           height: 250px;
//           position: relative;
//         }

//         .item-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: linear-gradient(transparent, rgba(0,0,0,0.9));
//           padding: 1rem;
//           z-index: 1;
//         }

//         .item-name {
//           font-size: 1.5rem;
//           margin-bottom: 0.5rem;
//         }

//         .item-price {
//           color: var(--primary-red);
//           font-size: 1.2rem;
//           font-weight: bold;
//         }

//         .item-details {
//           padding: 1.5rem;
//         }

//         .item-description {
//           color: #aaa;
//           margin: 1rem 0;
//         }

//         .add-to-cart {
//           background: var(--primary-red);
//           color: white;
//           border: none;
//           padding: 0.8rem 1.5rem;
//           border-radius: 5px;
//           cursor: pointer;
//           width: 100%;
//           transition: 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//         }

//         .add-to-cart:hover {
//           opacity: 0.9;
//         }

//         @media (max-width: 768px) {
//           .menu-grid {
//             grid-template-columns: 1fr;
//           }

//           .tab-btn {
//             margin: 0.5rem;
//             padding: 0.6rem 1.5rem;
//           }

//           .slider-container {
//             height: 50vh;
//           }
//         }
//       `}</style>
//         </div>
//         </>
//     );
// };

// export default MenuPage;
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/components/CartContext";
import Header from '@/components/header';


const menuData = [
  {
    id: 1,
    category: "fastfood",
    name: "Shawarma Roll",
    description: "Thinly sliced chicken or beef wrapped in pita bread with garlic sauce.",
    price: "250 - 500",
    image: "roll.jpg"
  },
  {
    id: 2,
    category: "fastfood",
    name: "Zinger Burger",
    price: "300 - 500",
    description: "J A crispy, deep-fried chicken fillet in a soft bun with lettuce and mayo",
    image: "zinger.webp"
  },
  {
    id: 3,
    category: "fastfood",
    name: "Chicken Tikka Pizza",
    description: "A fusion of traditional chicken tikka flavors with a cheesy pizza base.",
    price: "700 - 1500",
    image: "pizza.jpg"
  },
  {
    id: 4,
    category: "fastfood",
    name: "Beef Burger",
    description: "A juicy beef patty with cheese, lettuce, and sauces in a toasted bun.",
    price: "500 - 1000",
    image: "beef.jpg"
  },
  {
    id: 5,
    category: "fastfood",
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, sauces, and spices.",
    price: "350 - 600",
    image: "fries.webp"
  },
  {
    id: 6,
    category: "fastfood",
    name: "Chicken Fajita Wrap",
    description: "Grilled chicken with onions, bell peppers, and spicy sauce in a tortilla.",
    price: "400 - 700",
    image: "wrap.jpg"
  },
  {
    id: 7,
    category: "fastfood",
    name: "Chapli Burger",
    description: "A fusion of the traditional Pakistani chapli kebab with burger buns and sauces.",
    price: "500 - 800",
    image: "chapli.webp"
  },
  {
    id: 8,
    category: "fastfood",
    name: "Crispy Fried Chicken",
    description: "Spicy, crunchy, deep-fried chicken pieces.",
    price: "400 - 800",
    image: "fried.jpg"
  },
  {
    id: 9,
    category: "fastfood",
    name: "Stuffed Paratha Roll",
    description: "A crispy paratha filled with spicy chicken, beef, or vegetables.",
    price: "300 - 600",
    image: "paratha.jpg"
  },
  {
    id: 10,
    category: "bbq",
    name: "Seekh Kebabs",
    description: "Minced beef or chicken mixed with spices, shaped onto skewers, and grilled to perfection.",
    price: "PKR 400-800 per serving",
    image: "seekh.jpg"
  },
  {
    id: 11,
    category: "bbq",
    name: "Beef Bihari Boti",
    description: "Tender beef pieces marinated in a rich, spicy, and creamy bihari-style masala, grilled over open flames.",
    price: "PKR 500-1,000 per plate",
    image: "bihari.webp"
  },
  {
    id: 12,
    category: "bbq",
    name: "Malai Boti",
    description: "Soft and juicy boneless chicken pieces marinated in a creamy, mildly spiced mixture and grilled.",
    price: "PKR 450-900 per plate",
    image: "malai.avif"
  },
  {
    id: 13,
    category: "bbq",
    name: "Reshmi Kebabs",
    description: "Delicate, silky-textured chicken kebabs made with a smooth blend of minced chicken and cream.",
    price: "PKR 400-800 per plate",
    image: "reshmi.jpg"
  },
  {
    id: 15,
    category: "bbq",
    name: "Gola Kebabs",
    description: "Round-shaped, juicy beef kebabs infused with aromatic spices and grilled to smoky perfection.",
    price: "PKR 450-900 per dozen",
    image: "gola.jpg"
  },
  {
    id: 16,
    category: "bbq",
    name: "Mutton Chops",
    description: "Succulent mutton chops marinated in traditional spices and grilled until tender and flavorful.",
    price: "PKR 700-1,500 per plate",
    image: "mutton.jpg"
  },
  {
    id: 17,
    category: "bbq",
    name: "Chapli Kebab",
    description: "A crispy, spicy, and juicy kebab made with minced beef, coriander, and tomatoes, grilled on a flat pan.",
    price: "PKR 300-700 per piece",
    image: "chapli2.webp"
  },
  {
    id: 18,
    category: "bbq",
    name: "Fish Tikka",
    description: "Fresh fish fillets marinated in spicy masala and cooked over charcoal for a smoky flavor.",
    price: "PKR 600-1,200 per plate",
    image: "fish.jpg"
  },
  {
    id: 19,
    category: "bbq",
    name: "Chicken Tikka",
    description: "A classic BBQ dish with bone-in chicken marinated in yogurt, spices, and grilled over charcoal.",
    price: "PKR 400-800 per serving",
    image: "tikka2.jpg"
  },
  {
    id: 20,
    category: "desi",
    name: "Biryani",
    description: "A fragrant rice dish cooked with spiced meat (chicken, beef, or mutton), saffron, and herbs.",
    price: "PKR 300-800 per plate",
    image: "biryani.avif"
  },
  {
    id: 21,
    category: "desi",
    name: "Nihari",
    description: "A slow-cooked, rich and spicy beef or mutton stew, often eaten with naan.",
    price: "PKR 400-900 per bowl",
    image: "nihari.jpg"
  },
  {
    id: 22,
    category: "desi",
    name: "Haleem",
    description: "A thick, flavorful stew made of wheat, barley, lentils, and slow-cooked meat.",
    price: "PKR 300-700 per plate",
    image: "haleem.webp"
  },
  {
    id: 23,
    category: "desi",
    name: "Paya",
    description: "A traditional soup-like dish made from slow-cooked trotters (goat or cow), served with naan.",
    price: "PKR 400-1,000 per bowl",
    image: "paya.jpg"
  },
  {
    id: 24,
    category: "desi",
    name: "Karahi",
    description: "A spicy, tomato-based meat dish (chicken, mutton, or beef) cooked in a wok-style pan.",
    price: "PKR 600-1,500 per serving",
    image: "karahi.jpg"
  },
  {
    id: 25,
    category: "desi",
    name: "Daal Chawal",
    description: "Simple yet delicious lentils cooked with spices, served with steamed rice.",
    price: "PKR 200-500 per plate",
    image: "daal.jpg"
  },
  {
    id: 26,
    category: "desi",
    name: "Pulao",
    description: "A simple yet flavorful rice dish made with spices and meat or vegetables.",
    price: "PKR 300-600 per plate",
    image: "pulao.jpg"
  },

];

const sliderImages = [
  "/images/slid1.avif",
  "/images/slid2.avif",
  "/images/karahi1.jpg",
];

const MenuPage = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredMenu = menuData.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const handleAddToCart = (item: any) => {
    addToCart(item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Header cartCount={0} activeSection={""} />
      <div className="bg-neutral-800 text-white p-5 mt-5">
        <div className="relative w-full h-[300px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderImages.map((img, index) => (
              <div key={index} className="min-w-full h-[300px] relative">
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            {sliderImages.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 bg-gray-500 rounded-full mx-1 cursor-pointer ${index === currentSlide ? "bg-red-500" : ""
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          {["all", "fastfood", "bbq", "desi", "desserts"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border-none bg-neutral-900 text-white cursor-pointer rounded-md transition-all duration-300 ${activeCategory === category ? "bg-red-500" : ""
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="border border-gray-700 rounded-lg overflow-hidden bg-neutral-900 shadow-md text-white"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-red-500 font-bold">{item.price}</p>
                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                <button
                  className="mt-3 py-2 w-full border-none bg-red-500 text-white text-lg cursor-pointer rounded-md transition-all duration-300 hover:bg-red-700 flex justify-center items-center gap-2"
                  onClick={() => handleAddToCart(item)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default MenuPage;
