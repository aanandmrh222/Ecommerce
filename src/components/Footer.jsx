import {
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">ShopHub</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Your one-stop destination for premium products at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white dark:text-gray-100 font-semibold mb-4">
              Stay Updated
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 dark:bg-gray-700 border border-gray-700 dark:border-gray-600 text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 dark:text-gray-300 hover:text-indigo-400 dark:hover:text-indigo-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
