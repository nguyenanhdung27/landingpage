import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onGetStarted, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about' },
    { name: 'Course', id: 'course' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (item) => {
    setActiveItem(item.name);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.id);
    }
  };

  return (
    <header className="relative w-full pt-6 pb-4 px-6 md:px-12 lg:px-16 select-none z-30">
      <div className="flex items-center justify-between">
        {/* LOGO (Matching Image: Blue geometric square icon + LOGO text) */}
        <div 
          onClick={() => handleNavClick({ name: 'Home', id: 'home' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Logo Icon Mark */}
          <div className="relative w-7 h-7 rounded-sm overflow-hidden shadow-sm flex">
            {/* Left lighter blue bar */}
            <div className="w-[38%] h-full bg-[#7584FA] group-hover:bg-[#8593fc] transition-colors" />
            {/* Right dark royal blue body */}
            <div className="w-[62%] h-full bg-[#4143D6] group-hover:bg-[#3435c2] transition-colors" />
          </div>
          {/* Logo Text */}
          <span className="text-xl md:text-2xl font-black tracking-wider text-[#18184c] transition-colors">
            LOGO
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-11">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-sm lg:text-[15px] transition-colors duration-200 cursor-pointer ${
                activeItem === item.name
                  ? 'text-[#18184c] font-bold'
                  : 'text-[#4b5168] font-medium hover:text-[#4A55EE]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right CTA Button ("Get Started") */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onGetStarted}
            className="px-7 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#4E54C8] to-[#5D69F4] hover:from-[#4349BF] hover:to-[#4F5CE6] shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 pb-6 px-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-left py-2 px-3 rounded-lg text-base ${
                activeItem === item.name
                  ? 'text-[#18184c] font-bold bg-indigo-50'
                  : 'text-slate-600 font-medium hover:bg-slate-50'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onGetStarted();
            }}
            className="mt-2 w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#4E54C8] to-[#5D69F4] shadow-md text-center"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
