"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle menu state
  const cartCount = useAppSelector((state) => state.cart);

  return (
    <div className="bg-gray-900 text-white py-3 sticky top-0 z-10 px-3 sm:px-6 md:px-12 shadow-md">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-extrabold hover:text-[#FFD700] transition duration-300 flex-1 text-center sm:text-left"
        >
          Jewel&apos;s Store
        </Link>

        {/* Mobile Menu Button (aligned to the right) */}
        <button
          className="block sm:hidden text-2xl ml-auto" // ml-auto ensures the button is aligned to the right
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex flex-1 justify-center gap-3 md:gap-10 font-medium items-center">
          <Link href="/" className="navLink hover:text-[#FFD700] transition duration-300 text-sm md:text-base">
            Home
          </Link>
          <Link
            href="/allCategory"
            className="navLink hover:text-[#FFD700] transition duration-300 text-sm md:text-base"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="navLink hover:text-[#FFD700] transition duration-300 text-sm md:text-base"
          >
            Contact
          </Link>
        </div>

        {/* Cart Icon */}
        <Link href={"/card"} className="navLink">
          <div className="flex text-[22px] sm:ml-4">
            <div className="relative cursor-pointer hover:text-[#FFD700]">
              <AiOutlineShoppingCart />
              {cartCount.length > 0 && (
                <div
                  className="absolute top-[-10px] right-[-10px] text-gray-400-500 w-[20px] h-[20px] rounded-full
                 text-black text-[12px] grid place-items-center bg-white font-semibold"
                >
                  {cartCount.length}
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="sm:hidden mt-3 space-y-2 text-center">
          <Link
            href="/"
            className="block navLink hover:text-[#FFD700] transition duration-300 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/allCategory"
            className="block navLink hover:text-[#FFD700] transition duration-300 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="block navLink hover:text-[#FFD700] transition duration-300 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
