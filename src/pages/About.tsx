import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white">About Us</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg">
            <p>Welcome to Floral Society, where we transform wedding dreams into reality through exquisite floral designs and decor. Our passion lies in creating unforgettable experiences that reflect the unique style and personality of each couple.</p>
            
            <h2>Our Story</h2>
            <p>Founded in 2020, Floral Society has quickly become a leading platform connecting couples with premium wedding decor vendors. We believe that every wedding deserves to be extraordinary, and we work tirelessly to make that vision come true.</p>
            
            <h2>Our Mission</h2>
            <p>Our mission is to simplify the wedding planning process by providing a curated marketplace of exceptional floral and decor vendors. We strive to inspire couples with innovative designs while ensuring a seamless experience from concept to creation.</p>
            
            <h2>Why Choose Us</h2>
            <ul>
              <li>Carefully vetted vendors</li>
              <li>Personalized service</li>
              <li>Innovative designs</li>
              <li>Seamless planning experience</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}