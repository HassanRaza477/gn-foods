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
