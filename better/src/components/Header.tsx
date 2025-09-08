"use client"
import React from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-green-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold">Better</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/start" className="hover:text-green-200">Get Started</Link>
            <Link href="/mortgage-calculator" className="hover:text-green-200">Calculator</Link>
            <Link href="/about-us" className="hover:text-green-200">About Us</Link>
            <Link href="/" className="hover:text-green-200">Home</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-5 h-5 border border-white rounded-full p-1" />
          <button className="hover:text-green-200">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
