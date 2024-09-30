"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const cartCount = useAppSelector((state) => state.cart);

  return (
    <div className="bg-gray-900 text-white py-4 sticky top-0 z-10 px-4 sm:px-8 md:px-16 shadow-md">
      <div className="w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-4xl font-extrabold hover:text-white transition duration-300 flex-1 text-center sm:text-left pt-1"
        >
          Jewel&apos;s Store
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-1 justify-center gap-3 md:gap-14  font-medium items-center mt-2">
          <Link href="/" className="navLink hover:text-white transition duration-30 lg:text-xl">
            Home
          </Link>
          <Link
            href="/allCategory"
            className="navLink hover:text-white transition duration-30 lg:text-xl"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="navLink hover:text-white transition duration-30 lg:text-xl mr-4"
          >
            Contact
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href={"/card"} className="navLink">
          <div className="flex gap-4 sm:ml-8 text-[26px]">
            <div className="relative cursor-pointer">
              <AiOutlineShoppingCart />
              {cartCount.length > 0 && (
                <div
                  className="absolute top-[-15px] right-[-10px]  text-gray-400-500 w-[24px] h-[23px] rounded-full
             text-black text-[14px] grid place-items-center  "
                >
                  {cartCount.length}
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;