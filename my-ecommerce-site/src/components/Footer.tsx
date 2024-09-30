import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About JewelStore</h3>
            <p className="text-gray-400">
              JewelStore offers an exquisite collection of fine jewelry, crafted with elegance and sophistication. Discover timeless designs that suit every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition duration-30 lg:text-xl">
                Home
              </Link></li>
              <li><Link
                href="/allCategory"
                className="text-gray-400 hover:text-white transition duration-30 lg:text-xl"
              >
                Products
              </Link></li>
              <li><Link
                href="/contact"
                className="text-gray-400 hover:text-white transition duration-30 lg:text-xl"
              >
                Contact Us
              </Link></li>


            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300" aria-label="GitHub">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} JewelStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
