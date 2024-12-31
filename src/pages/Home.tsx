import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Create Your Dream Wedding</h1>
            <p className="text-xl mb-8">Discover exceptional floral designs and wedding decor services for your special day.</p>
            <Link to="/vendors" className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Find Vendors <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Featured Vendors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={`https://images.unsplash.com/photo-151922542198${i}-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt="Vendor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Floral Designer {i}</h3>
                <p className="text-gray-600">Specializing in luxury wedding arrangements</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Wedding Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative h-64 overflow-hidden rounded-lg">
                <img 
                  src={`https://images.unsplash.com/photo-151922542198${i}-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt="Gallery"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center text-gray-900 hover:text-gray-600">
              View Full Gallery <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}