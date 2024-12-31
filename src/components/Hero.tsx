import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
          alt="Elegant wedding setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative text-center text-white space-y-6 max-w-3xl px-4">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl">
          Curated Floral Excellence
        </h1>
        <p className="text-xl md:text-2xl font-light">
          Connect with premium floral designers for your perfect wedding day
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
          Explore Vendors
        </button>
      </div>
    </div>
  );
}