import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Gap ko kam kar diya */}
          {/* About Section */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">JewelStore</h3>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              JewelStore offers an exquisite collection of fine jewelry, crafted with elegance and sophistication. Discover timeless designs that suit every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FFD700] transition duration-300 text-xs sm:text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/allCategory" className="text-gray-400 hover:text-[#FFD700] transition duration-300 text-xs sm:text-sm md:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FFD700] transition duration-300 text-xs sm:text-sm md:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="Facebook">
                <FaFacebookF className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="Instagram">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="LinkedIn">
                <FaPinterest className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="GitHub">
                <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="GitHub">
                <FaTiktok className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition duration-300" aria-label="GitHub">
                <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-xs sm:text-sm md:text-base">&copy; {new Date().getFullYear()} JewelStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
