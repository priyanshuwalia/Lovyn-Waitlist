import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-8 bg-white w-full max-w-7xl mx-auto">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tight text-black">
        Lovyn
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-10 text-[15px] font-medium text-gray-600">
        <a href="#" className="hover:text-black transition-colors">Features</a>
        <a href="#" className="hover:text-black transition-colors">Our Philosophy</a>
        <a href="#" className="hover:text-black transition-colors">Community</a>
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 hover:shadow-md active:scale-95 transition-all">
        Join Waitlist
      </button>
    </nav>
  );
};

export default Navbar;