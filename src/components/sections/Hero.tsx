import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../../constants';

interface HeroProps {
  onDiscover: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscover }) => {
  return (
    <section className="relative h-screen w-full flex items-center px-12 lg:px-24 overflow-hidden bg-midnight">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow opacity-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-[1400px] mx-auto items-center z-10 gap-12">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] uppercase letter-spacing-v-wide opacity-60 mb-6 block">Extrait de Parfum</span>
            <h1 className="text-6xl md:text-[84px] leading-[0.9] font-light mb-10 tracking-tight">
              A Signature <br />
              <span className="italic">Woven in</span> <br />
              Shadow.
            </h1>
            <p className="max-w-md text-sm md:text-base leading-relaxed opacity-80 mb-12 tracking-wide font-sans">
              Born from ancestral Algerian memories and distilled for the modern avant-garde. BMDE is an exercise in alchemy—bottling the essence of presence.
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <button 
                onClick={onDiscover}
                className="px-12 py-5 border border-gold text-gold text-[10px] uppercase letter-spacing-wide hover:bg-gold hover:text-midnight transition-all duration-500 font-medium"
              >
                Acquire Signature
              </button>
              <button 
                onClick={onDiscover}
                className="text-serif italic opacity-60 hover:opacity-100 transition-opacity flex items-center group"
              >
                Explore the notes 
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -3, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[280px] h-[480px] bottle-gradient border-[0.5px] border-gold/40 relative shadow-glow flex flex-col items-center justify-between py-16"
          >
            <div className="w-16 h-[1px] bg-gold opacity-40"></div>
            <div className="text-center">
              <div className="font-serif text-3xl tracking-[0.3em] font-light mb-2">AZEL</div>
              <div className="text-[9px] uppercase letter-spacing-v-wide opacity-50">The Midnight Silhouette</div>
            </div>
            <div className="font-serif italic text-sm gold-text">Batch No. 04</div>
          </motion.div>
          
          {/* Decorative floating indicators */}
          <div className="absolute -right-12 top-1/4 flex flex-col gap-12 text-right">
            <div className="group cursor-pointer">
              <div className="text-[9px] uppercase letter-spacing-wide opacity-40 mb-1">01</div>
              <div className="font-serif text-xl opacity-100">AZEL</div>
              <div className="text-[9px] text-gold mt-1 italic">Oud & Desert Spice</div>
            </div>
            <div className="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <div className="text-[9px] uppercase letter-spacing-wide opacity-40 mb-1">02</div>
              <div className="font-serif text-xl">TILAS</div>
              <div className="text-[9px] text-gold mt-1 italic hidden group-hover:block">Amber & Terracotta</div>
            </div>
            <div className="group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <div className="text-[9px] uppercase letter-spacing-wide opacity-40 mb-1">03</div>
              <div className="font-serif text-xl">AYLA</div>
              <div className="text-[9px] text-gold mt-1 italic hidden group-hover:block">Nocturnal Florals</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-12 h-[1px] w-32 gold-line opacity-20"></div>
    </section>
  );
};
