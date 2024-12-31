import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">Floral Society</h3>
            <p className="text-gray-400">Creating unforgettable wedding experiences with elegant floral designs.</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/vendors" className="text-gray-400 hover:text-white">Vendors</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@floralsociety.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Wedding Lane</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-400"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-400"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Floral Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}