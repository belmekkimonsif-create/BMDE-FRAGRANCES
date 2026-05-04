import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Collection', page: 'collection' as Page },
    { label: 'La Maison', page: 'story' as Page },
    { label: 'Concierge', page: 'concierge' as Page },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-midnight/95 backdrop-blur-md py-6' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1400px] mx-auto px-12 flex items-center justify-between">
        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-alabaster hover:text-gold transition-colors"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`text-[10px] uppercase letter-spacing-wide font-medium transition-all hover:text-gold ${currentPage === item.page ? 'text-gold' : 'text-alabaster/70'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Logo */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-3xl font-serif tracking-[0.2em] font-light text-alabaster hover:text-gold transition-all ml-[-20px]"
        >
          BMDE
        </button>

        {/* Utility Icons */}
        <div className="flex items-center space-x-12">
          <div className="hidden md:flex space-x-12">
            <button
              onClick={() => setCurrentPage('concierge')}
              className={`text-[10px] uppercase letter-spacing-wide font-medium transition-all hover:text-gold ${currentPage === 'concierge' ? 'text-gold' : 'text-alabaster/70'}`}
            >
              Concierge
            </button>
          </div>
          <button 
            onClick={() => setCurrentPage('bag')} 
            className={`text-[10px] uppercase letter-spacing-wide font-medium transition-colors ${currentPage === 'bag' ? 'text-gold' : 'text-alabaster/70 hover:text-gold'}`}
          >
            The Bag (0)
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-midnight z-40 flex flex-col items-center justify-center space-y-12"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 text-alabaster"
            >
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsOpen(false);
                }}
                className="text-4xl font-serif text-alabaster hover:text-gold transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-12 border-t border-alabaster/10 w-48 flex justify-center">
              <button className="text-xs uppercase tracking-[0.2em]">Enter the Inner Circle</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
