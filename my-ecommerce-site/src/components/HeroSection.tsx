"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-slate-100 max-auto">
      <section className="text-gray-600 body-font flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-5 py-10 bg-slate-100">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center mb-16 md:mb-0">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Luxurious Jewellery
            </h1>
            <p className="text-black text-base md:text-lg mb-8 max-w-2xl mt-4">
              Discover timeless elegance with our exclusive range of jewellery, crafted with passion and precision to complement your style.
            </p>
            <div className="flex flex-col md:flex-row">
              <Link href="/allCategory">
                <button className="bg-gray-900 text-white py-3 px-8 rounded-full mr-4 font-semibold mb-4 md:mb-0 mb-10">
                  Shop Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-[#FFD700] text-gray-900 py-3 px-8 rounded-full font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 w-full">
            <Image
              className="object-cover md:h-[447px] h-[340px] rounded-3xl hover:scale-105 transition-transform duration-500"
              alt="Hero"
              src={"/bg.jpg"}
              layout="responsive"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
