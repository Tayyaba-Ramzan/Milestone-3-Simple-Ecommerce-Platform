// components/Slider.tsx
import React from 'react';

const sliderImages = [
  '/images/jewellery1.jpg',
  '/images/jewellery2.jpg',
  '/images/jewellery3.jpg',
  '/images/jewellery4.jpg',
];

const Slider: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === 0 ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-md p-4">
        <h2 className="text-2xl font-bold text-center">Discover Our Stunning Jewellery Collection</h2>
      </div>
    </div>
  );
};

export default Slider;
