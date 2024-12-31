import React from 'react';
import { Star } from 'lucide-react';

const vendors = [
  {
    id: 1,
    name: "Bloom & Wild",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80",
    specialty: "Ceremony Arrangements"
  },
  {
    id: 2,
    name: "Petal & Sage",
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b1?auto=format&fit=crop&q=80",
    specialty: "Reception Decor"
  },
  {
    id: 3,
    name: "Flora Luxe",
    rating: 5.0,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    specialty: "Bridal Bouquets"
  }
];

export default function VendorGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-serif text-3xl mb-8">Featured Vendors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{vendor.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm">{vendor.rating}</span>
                  <span className="text-sm text-gray-500">({vendor.reviews})</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">{vendor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}