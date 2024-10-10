"use client";

import React, { useState, useEffect } from "react";
import BestSellingCard from "@/components/BestSellingCard";

const AllCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const bestSell = [
    {
      "src": "/pictures/chrysoberyl-pendant.png",
      "alt": "Chrysoberyl Pendant",
      "title": "Chrysoberyl Pendant",
      "description": "Elegant chrysoberyl pendant perfect for any occasion.",
      "price": 150.00,
      "allCategory": "Jewelry",
      "productDetails": "chrysoberyl-pendant",
      "availableColors": ["Gold", "Silver"],
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["6", "7", "8"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["6", "7", "8"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["Free Size"],
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
      availableSizes: ["6", "7", "8", "9"],
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
      "availableSizes": ["Free Size"],
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
      availableSizes: ["S", "M", "L", "XL", "XXL"],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": [
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "11"
      ],
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
      "availableSizes": ["Free Size"],
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
      "availableSizes": ["Free Size"],
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
    "availableSizes": ["Free Size"],
    "quantity": 1
}
  

    
    
    

  ];



  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <div className="max-h-screen bg-gray-900 flex justify-center items-center">Loading...</div>
    );
  }

  return (
    <>
      {isLoading ? (
        <div className="flex flex-row mt-64 md:mt-52 justify-center items-center max-h-screen">
          <p className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">
            Loading products...
          </p>
          {/* Loader */}
          <div className="loader border-x-4 ml-5 md:ml-10 border-gray-900 rounded-full w-12 h-12 md:w-16 md:h-16 animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Heading */}
          <div className="text-center mt-4">
            <h1 className="text-black text-2xl font-bold tracking-tight lg:text-4xl capitalize">
              All Products
            </h1>
            <div className="w-28 h-1 mb-2 rounded-full bg-gray-900 inline-flex"></div>
          </div>

          {/* Products */}
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {bestSell.map((item, i) => (
              <div key={i}>
                <BestSellingCard
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  price={item.price}
                  productDetails={item.productDetails}
                  quantity={item.quantity}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AllCategory;