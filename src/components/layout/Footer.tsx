import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-midnight pt-20 pb-12">
      <div className="gold-line w-full opacity-20 mb-20"></div>
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex gap-20">
            <div className="flex flex-col space-y-3">
              <span className="text-[8px] uppercase letter-spacing-wide opacity-40 font-bold">Projection</span>
              <div className="w-40 h-[1.5px] bg-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  className="h-full bg-gold" 
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-[8px] uppercase letter-spacing-wide opacity-40 font-bold">Sillage</span>
              <div className="w-40 h-[1.5px] bg-white/10">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: '85%' }}
                   className="h-full bg-gold" 
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[10px] letter-spacing-wide">
            <span className="opacity-40 font-medium">Enter the Inner Circle</span>
            <div className="border-b border-white/20 pb-1 flex gap-6 items-center">
              <input 
                type="email" 
                placeholder="Your email..." 
                className="bg-transparent border-none outline-none opacity-30 focus:opacity-100 transition-opacity w-48"
              />
              <button className="text-gold font-bold uppercase transition-transform hover:translate-x-1">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 space-y-4 md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-xl font-serif tracking-[0.2em] font-light mb-2">BMDE</h3>
            <p className="text-[9px] uppercase letter-spacing-wide opacity-30">
              © 2026 BMDE Fragrances. Crafted in Shadows.
            </p>
          </div>
          <div className="flex space-x-12 text-[9px] uppercase letter-spacing-wide opacity-30">
            <button onClick={() => setCurrentPage('collection')} className="hover:text-gold transition-colors">Collection</button>
            <button onClick={() => setCurrentPage('story')} className="hover:text-gold transition-colors">La Maison</button>
            <button onClick={() => setCurrentPage('concierge')} className="hover:text-gold transition-colors">Concierge</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
