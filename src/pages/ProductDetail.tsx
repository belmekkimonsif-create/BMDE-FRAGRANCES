import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Fragrance, Page } from '../types';
import { ShieldCheck, Truck, RefreshCcw, ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  fragrance: Fragrance;
  onBack: () => void;
  setCurrentPage: (page: Page) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ fragrance, onBack, setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-midnight min-h-screen pt-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest text-alabaster/40 hover:text-gold transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Collection</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-32">
        {/* Sticky Left: Gallery */}
        <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-140px)] space-y-4 no-scrollbar lg:overflow-y-auto">
          {fragrance.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] w-full"
            >
              <img 
                src={img} 
                alt={`${fragrance.name} gallery ${i}`} 
                className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Scrolling Right: Details */}
        <div className="space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">Extrait de Parfum</span>
              <div className="h-px w-8 bg-gold/30" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">{fragrance.id === 'azel' ? 'Batch No. 04' : 'Batch No. 02'}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight uppercase">{fragrance.name}</h1>
            <p className="text-xl font-serif italic text-alabaster/60">{fragrance.subtitle}</p>
            <p className="text-2xl mt-4">{fragrance.price}</p>
          </div>

          {/* Vibe Tags */}
          <div className="flex flex-wrap gap-4">
            {fragrance.vibe.map((v) => (
              <span key={v} className="px-6 py-2 border border-alabaster/10 text-[10px] uppercase tracking-widest italic">
                {v}
              </span>
            ))}
          </div>

          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">The Story</h3>
            <p className="text-lg leading-relaxed text-alabaster/80 font-serif italic">
              {fragrance.story}
            </p>
          </div>

          {/* Scent Pyramid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-alabaster/10">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-alabaster/40">Top Notes</h4>
              <ul className="text-sm space-y-2">
                {fragrance.topNotes.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-alabaster/40">Heart Notes</h4>
              <ul className="text-sm space-y-2">
                {fragrance.heartNotes.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-alabaster/40">Base Notes</h4>
              <ul className="text-sm space-y-2">
                {fragrance.baseNotes.map(n => <li key={n}>{n}</li>)}
              </ul>
            </div>
          </div>

          {/* Power Scale */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Projection</h4>
                <span className="text-[10px] uppercase tracking-widest text-gold">{fragrance.projection}/10</span>
              </div>
              <div className="h-1 w-full bg-alabaster/10 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${fragrance.projection * 10}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-gold"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold">Longevity</h4>
                <span className="text-[10px] uppercase tracking-widest text-gold">{fragrance.longevity}</span>
              </div>
              <div className="h-1 w-full bg-alabaster/10 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 bg-gold"
                />
              </div>
            </div>
          </div>

          {/* CTA & Guarantee */}
          <div className="space-y-8">
            <button className="w-full py-6 bg-gold text-midnight text-[10px] uppercase letter-spacing-wide font-bold hover:bg-gold/90 transition-all shadow-glow">
              Acquire for Collection
            </button>
            <div className="bg-alabaster/5 p-8 border border-white/5 space-y-6">
              <div className="flex items-start space-x-6">
                <RefreshCcw size={20} className="text-gold shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h5 className="text-[10px] uppercase letter-spacing-wide font-bold mb-2">The BMDE Risk Reversal</h5>
                  <p className="text-xs text-alabaster/40 leading-relaxed max-w-sm">
                    Complimentary 2ml sample included. Try the sample first. If it is not your signature, return the unopened full-size bottle for a complete refund.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <Truck size={20} className="text-gold shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h5 className="text-[10px] uppercase letter-spacing-wide font-bold mb-2">White-Glove Concierge</h5>
                  <p className="text-xs text-alabaster/40 leading-relaxed max-w-sm">
                    Complimentary secure shipping and handling on all full-size extraits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
