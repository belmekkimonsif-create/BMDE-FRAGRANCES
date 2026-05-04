/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Vanguard } from './components/sections/Vanguard';
import { Ethos } from './components/sections/Ethos';
import { ScentTrail } from './components/sections/ScentTrail';
import { SocialProof } from './components/sections/SocialProof';
import { ProductDetail } from './pages/ProductDetail';
import { Story } from './pages/Story';
import { Page, Fragrance } from './types';
import { COLLECTION } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Fragrance | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Custom Cursor logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectProduct = (product: Fragrance) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onDiscover={() => setCurrentPage('collection')} />
            <Vanguard onSelectProduct={handleSelectProduct} />
            <Ethos />
            <ScentTrail />
            <SocialProof />
          </>
        );
      case 'collection':
        return (
          <div className="pt-32 pb-32 min-h-screen bg-midnight">
            <Vanguard onSelectProduct={handleSelectProduct} />
          </div>
        );
      case 'product':
        return selectedProduct ? (
          <ProductDetail 
            fragrance={selectedProduct} 
            onBack={() => setCurrentPage('home')} 
            setCurrentPage={setCurrentPage}
          />
        ) : <Hero onDiscover={() => setCurrentPage('collection')} />;
      case 'story':
        return <Story />;
      case 'concierge':
        return (
          <div className="pt-48 pb-48 text-center min-h-screen bg-midnight flex items-center justify-center">
            <div className="max-w-2xl px-6">
              <h1 className="text-5xl font-serif italic mb-8">Client Concierge</h1>
              <p className="text-alabaster/60 mb-12">Our scent advisors are currently attending to other collections. Please reach out via our signature channel.</p>
              <button className="px-12 py-5 border border-gold/30 text-[10px] uppercase tracking-widest hover:bg-gold hover:text-midnight transition-colors">
                Speak with a Scent Advisor
              </button>
            </div>
          </div>
        );
      default:
        return <Hero onDiscover={() => setCurrentPage('collection')} />;
    }
  };

  return (
    <div className="relative selection:bg-gold selection:text-midnight cursor-none">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor hidden md:block" 
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)' }} 
      />
      <div 
        className="custom-cursor-follower hidden md:block" 
        style={{ left: cursorPos.x, top: cursorPos.y, transform: 'translate(-50%, -50%)' }} 
      />

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (selectedProduct?.id || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating Concierge (WhatsApp style) */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative w-12 h-12 bg-midnight border border-gold/40 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-500 shadow-2xl">
          <span className="absolute right-14 bg-midnight/90 backdrop-blur-md px-4 py-2 border border-gold/20 rounded-sm text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Scent Advisor
          </span>
          <div className="w-2 h-2 bg-gold rounded-full group-hover:bg-midnight" />
        </button>
      </div>
    </div>
  );
}
