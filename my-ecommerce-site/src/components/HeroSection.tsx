"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-slate-100 max-h-screen">
      <section className="text-gray-600 body-font  items-center">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-center  items-center bg-slate-100">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-black text-5xl md:text-6xl font-bold mb-4 text-center">
              Welcome to Luxurious Jewellery
            </h1>
            <p className="text-black text-lg mb-8 text-center max-w-2xl mt-4">
              Discover timeless elegance with our exclusive range of jewellery, crafted with passion and precision to complement your style.
            </p>
            <div>
              <Link href="/">
                <button className="bg-gray-900 text-white py-3 px-8 rounded-full mr-4 font-semibold">
                  Shop Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white text-gray-900 py-3 px-8 rounded-full mt-6 font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>

          </div>
          <div className="lg:max-w-lg md:pr-20 lg:w-full md:w-1/2 w-5/6 ">
            <Image
              className="object-contain md:h-[447px] h-[340px] object-center rounded-3xl hover:scale-105 duration-500 hover:duration-500"
              alt="Hero"
              src={require("../../public/bg.jpg")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
