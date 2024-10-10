"use client";

import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import ToastAddToCart from "@/components/toastAddToCart";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

// Sample product data
const products = [
  {
    "src": "/pictures/chrysoberyl-pendant.png",
    "alt": "Chrysoberyl Pendant",
    "title": "Chrysoberyl Pendant",
    "description": "Elegant chrysoberyl pendant perfect for any occasion.",
    "price": 150.00,
    "allCategory": "Jewelry",
    "productDetails": "chrysoberyl-pendant",
    "availableColors": ["Gold", "Silver"],
    "quantity": 1
  },
  {
    "src": "/pictures/citrine-earrings.jpg",
    "alt": "Citrine Earrings",
    "title": "Citrine Hoop Earrings",
    "description": "Stunning hoop earrings featuring vibrant citrine stones.",
    "price": 200.00,
    "allCategory": "Jewelry",
    "productDetails": "citrine-earrings",
    "availableColors": ["Gold"],
    "quantity": 1
  },
  {
    "src": "/pictures/elegant-diamond-ring.png",
    "alt": "Diamond Ring",
    "title": "Elegant Diamond Ring",
    "description": "A dazzling diamond ring that adds a touch of luxury.",
    "price": 1200.00,
    "allCategory": "Jewelry",
    "productDetails": "diamond-ring",
    "availableColors": ["White Gold"],
    "quantity": 1
  },
  {
    "src": "/pictures/emerald-brooch.jpg",
    "alt": "Emerald Brooch",
    "title": "Emerald Brooch",
    "description": "Beautiful emerald brooch for a classy look.",
    "price": 300.00,
    "allCategory": "Jewelry",
    "productDetails": "emerald-brooch",
    "availableColors": ["Green"],
    "quantity": 1
  },
  {
    "src": "/pictures/gold-necklace.jpg",
    "alt": "Gold Necklace",
    "title": "Gold Necklace",
    "description": "A delicate gold necklace that shines bright.",
    "price": 350.00,
    "allCategory": "Jewelry",
    "productDetails": "gold-necklace",
    "availableColors": ["Gold"],
    "quantity": 1
  },
  {
    "src": "/pictures/moonstone-ring.jpg",
    "alt": "Moonstone Ring",
    "title": "Moonstone Ring",
    "description": "A mystical moonstone ring for those who love elegance.",
    "price": 600.00,
    "allCategory": "Jewelry",
    "productDetails": "moonstone-ring",
    "availableColors": ["Silver"],
    "quantity": 1
  },
  {
    "src": "/pictures/platinum-anklet.png",
    "alt": "Platinum Anklet",
    "title": "Platinum Anklet",
    "description": "Stylish platinum anklet that complements any outfit.",
    "price": 450.00,
    "allCategory": "Jewelry",
    "productDetails": "platinum-anklet",
    "availableColors": ["Platinum"],
    "quantity": 1
  },
  {
    "src": "/pictures/ruby-earrings.jpg",
    "alt": "Ruby Earrings",
    "title": "Ruby Drop Earrings",
    "description": "Exquisite ruby drop earrings that make a bold statement.",
    "price": 800.00,
    "allCategory": "Jewelry",
    "productDetails": "ruby-earrings",
    "availableColors": ["Red"],
    "quantity": 1
  },
  {
    "src": "/pictures/sapphire-bracelet.jpg",
    "alt": "Sapphire Bracelet",
    "title": "Sapphire Bracelet",
    "description": "Charming sapphire bracelet for a touch of elegance.",
    "price": 400.00,
    "allCategory": "Jewelry",
    "productDetails": "sapphire-bracelet",
    "availableColors": ["Blue"],
    "quantity": 1
  },
  {
    src: "/pictures/tanzanite-ring.jpg",
    alt: "Tanzanite Ring",
    title: "Tanzanite Ring",
    productDetails: "Tanzanite-Ring",
    price: 149.99,
    allCategory: "Jewelry",
    description:
      "Add a touch of elegance with this stunning Tanzanite Ring. With its deep blue hue and exquisite design, it’s the perfect accessory for any occasion. A true masterpiece that makes every moment special.",
    availableColors: ["Blue", "Silver"],
    quantity: 1,
  },

  {
    "src": "/pictures/topaz-bracelet.jpg",
    "alt": "Topaz Bracelet",
    "title": "Topaz Cuff Bracelet",
    "description": "Unique topaz cuff bracelet that adds style to your wrist.",
    "price": 250.00,
    "allCategory": "Jewelry",
    "productDetails": "topaz-bracelet",
    "availableColors": ["Yellow"],
    "quantity": 1
  },
  {
    src: "/pictures/tourmaline-bracelet.jpg",
    alt: "Gold Tourmaline Bracelet",
    title: "Gold Tourmaline Bracelet",
    productDetails: "Gold-Tourmaline-Bracelet",
    price: 490.22,
    allCategory: "Bracelet",
    description:
      "Elegant Gold Tourmaline Bracelet with premium finish, perfect for any occasion.",
    availableColors: ["#FFFBDA", "Black"],
    quantity: 1,
  },
  {
    "src": "/pictures/silver-bracelet.jpg",
    "alt": "Gold + Black Glass Stretch Bracelet",
    "title": "Gold + Black Glass Stretch Bracelet",
    "description": "The mixture of shapes in the gold and black details makes this bracelet an eye-catching accessory. Comfortable and sophisticated, wear yours with dresses or shorter sleeve lengths to keep it on display. Complete the set and match it back to the coordinating necklace and earrings.",
    "price": 45.34,
    "allCategory": "Accessories",
    "productDetails": "Gold-Black-Glass-Stretch-Bracelet",
    "availableColors": ["Black", "#FFFBDA"],
    "quantity": 1
  },
  {
    "src": "/pictures/diamond-cufflinks.jpg",
    "alt": "Woven Black Slingback Heels",
    "title": "Woven Black Slingback Heels",
    "description": "Secure day-to-night looks with these on-trend slingback heels. In an easy, long-hours heel height, the pointed-toe shoes have a comfortable strap that makes for all-day wear. Pair it back to the matching crossbody bag.",
    "price": 1000,
    "allCategory": "Footwear",
    "productDetails": "Woven-Black-Slingback-Heels",
    "availableColors": ["Black"],
    "quantity": 1
  },
  {
    "src": "/pictures/garnet-pendant.jpg",
    "alt": "Garnet Pendant",
    "title": "Garnet Pendant",
    "productDetails": "Garnet-Pendant",
    "price": 566,
    "allCategory": "Jewelry",
    "description": "Beautiful garnet pendant that adds a pop of color to your collection.",
    "availableColors": ["Red"],
    "quantity": 1
  },
  {
    "src": "/pictures/pearl-pendant.jpg",
    "alt": "Pearl Pendant",
    "title": "Pearl Pendant",
    "productDetails": "Pearl-Pendant",
    "price": 35.99,
    "allCategory": "Jewelry",
    "description": "A stunning pearl pendant that adds elegance and sophistication to any outfit.",
    "availableColors": ["White", "Cream", "Gold"],
    "quantity": 1
},
{
  "src": "/pictures/aquamarine-necklace.jpg",
  "alt": "Aquamarine Necklace",
  "title": "Aquamarine Necklace",
  "description": "Stunning aquamarine necklace, perfect for both casual and formal occasions. Features a beautiful design that adds elegance to any outfit.",
  "price": 29.23,
  "allCategory": "Jewelry",
  "productDetails": "Aquamarine-Necklace",
  "availableColors": ["aqua", "silver", "gold"],
  "quantity": 1
},
{
  "src": "/pictures/opal-necklace.jpg",
  "alt": "Opal Necklace",
  "title": "Opal Necklace",
  "productDetails": "Opal-Necklace",
  "price": 98.0,
  "allCategory": "Jewelry",
  "description": "A beautiful opal necklace that adds a touch of elegance to any outfit.",
  "availableColors": ["White", "Blue", "Green"],
  "quantity": 1
}
]

const ProductDetailsPage = () => {
  const params = useParams();
  const { productDetails } = params;

  const product = products.find((p) => p.productDetails === productDetails);

  const initialProduct = product || {
    title: "",
    src: "",
    productDetails: "",
    price: 0,
    allCategory: "",
    availableSizes: [],
    availableColors: [],
    quantity: 1,
  };

  type CartItem = {
    title: string;
    image: string;
    productDetails: string;
    price: number;
    allCategory: string;
    color: string;
    quantity: number;
    size?:string
  };

  const [cartItem, setCartItem] = useState<CartItem>({
    title: initialProduct.title,
    image: initialProduct.src,
    productDetails: initialProduct.productDetails,
    price: initialProduct.price,
    allCategory: initialProduct.allCategory,
    color: initialProduct.availableColors[0] || "", // Ensure default value
    quantity: initialProduct.quantity,
  });

  const handleQuantityChange = (action: "increment" | "decrement") => {
    setCartItem((prev) => {
      let newQuantity = prev.quantity;
      if (action === "increment") newQuantity += 1;
      if (action === "decrement" && newQuantity > 1) newQuantity -= 1; // Prevent negative quantity

      return { ...prev, quantity: newQuantity };
    });
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col md:flex-row lg:space-x-8 space-y-6 lg:space-y-0 lg:w-4/5 mx-auto">
        {/* Product image */}
        <div className="flex-shrink-0 lg:w-1/2 w-1/2 max-h-[500px] ml-16 md:-ml-16 rounded mb-6 lg:mb-0 overflow-hidden">
          <Image
            src={product.src}
            alt={product.alt}
            className="w-full h-full object-contain object-center"
            width={600}
            height={600}
          />
        </div>

        {/* Product details */}
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 flex flex-col">
          <h2 className="text-sm font-semibold text-gray-500 tracking-widest">
            {product.allCategory}
          </h2>
          <h1 className="mt-2 text-2xl lg:text-3xl font-semibold tracking-tight mb-1">
            {product.title}
          </h1>
          <p className="mt-2 leading-relaxed text-base font-normal text-black line-clamp-2">
            {product.description}
          </p>

          {/* Color selection */}
          <div className="flex mt-6 items-center mb-5">
            <span className="mr-3 text-base font-semibold text-black">
              Color
            </span>
            {product.availableColors.map((color, index) => (
              <button
                key={index}
                className="border-2 rounded-full w-6 h-6 focus:border-black focus:outline-none active:border-black mr-1 capitalize"
                style={{ backgroundColor: color }}
                onClick={() => setCartItem({ ...cartItem, color })}
              />
            ))}
          </div>

          {/* Quantity control */}
          <div className="flex items-center mb-5">
            <span className="mr-3 text-base font-semibold text-black">
              Quantity
            </span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3"
              >
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-red-500 duration-300" />
              </button>
              <span className="px-4">{cartItem.quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="group bg-gray-800 flex hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3"
              >
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-red-500 duration-300" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold tracking-tight text-black">
              ${cartItem.price * cartItem.quantity}
            </span>
            <ToastAddToCart cartItem={cartItem} />
          </div>

          {/* Buy now button */}
          <button className="group bg-gray-800 mt-4 w-full flex justify-center hover:bg-transparent text-white rounded-xl hover:text-black text-sm p-3">
            <FaHeart className="mr-2 h-4 w-4 group-hover:text-red-500 duration-300" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;