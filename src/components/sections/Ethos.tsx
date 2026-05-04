import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../../constants';

export const Ethos: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-alabaster text-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src={IMAGES.ethos} 
              alt="Raw Ingredients" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-midnight/10 hidden md:block" />
        </div>

        <div className="w-full md:w-1/2 space-y-12">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">The Differentiator</span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
            We Do Not Create <br /> for the <span className="italic">Crowd.</span>
          </h2>
          <div className="space-y-6">
            <p className="text-lg font-serif italic text-midnight/80">
              BMDE is an exercise in alchemy.
            </p>
            <p className="text-sm md:text-base text-midnight/60 leading-relaxed max-w-lg tracking-wide">
              Born from ancestral Algerian memories and distilled for the modern avant-garde, our extraits de parfum are crafted not just to be worn, but to announce your arrival. We source only the rarest resins and most vibrant nocturnal florals, ensuring every drop is a testament to uncompromised luxury.
            </p>
          </div>
          <button className="text-xs uppercase tracking-[0.3em] font-semibold border-b border-gold pb-2 hover:text-gold transition-all">
            Explore our Heritage
          </button>
        </div>
      </div>
    </section>
  );
};
