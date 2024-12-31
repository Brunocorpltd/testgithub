import React from 'react';
import { Search } from 'lucide-react';

export default function Vendors() {
  const vendors = [
    {
      name: "Elegant Blooms",
      specialty: "Luxury Wedding Flowers",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Royal Petals",
      specialty: "Custom Floral Designs",
      rating: 4.8,
      reviews: 96,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Floral Dreams",
      specialty: "Wedding Decorations",
      rating: 4.7,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="w-full max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-8">Find Your Perfect Vendor</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full px-6 py-4 rounded-full text-lg"
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vendors.map((vendor, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">{vendor.name}</h3>
                <p className="text-gray-600 mb-2">{vendor.specialty}</p>
                <div className="flex items-center text-gray-500">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{vendor.rating}</span>
                  <span className="mx-1">·</span>
                  <span>{vendor.reviews} reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}