"use client";

import Link from "next/link";
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold">Marketplace Connect</span>
            </div>
            <p className="text-gray-600">
              Connecting consumers with retailers in large popular markets. Discover the best products and deals from local stores.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/promotions" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Stores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/categories/womens-fashion" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/categories/mens-fashion" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/categories/home-goods" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Home Goods
                </Link>
              </li>
              <li>
                <Link href="/categories/accessories" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-orange-500 transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-gray-600">123 Market Street, City Center, State 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">contact@marketplace-connect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Marketplace Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-gray-600 text-sm hover:text-orange-500 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
