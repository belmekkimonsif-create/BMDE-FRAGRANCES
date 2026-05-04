import React from 'react';
import { motion } from 'motion/react';
import { COLLECTION } from '../../constants';
import { Fragrance } from '../../types';

interface VanguardProps {
  onSelectProduct: (fragrance: Fragrance) => void;
}

export const Vanguard: React.FC<VanguardProps> = ({ onSelectProduct }) => {
  return (
    <section className="py-32 px-6 bg-midnight overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold/60 mb-4 block">The Selection</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">The Vanguard</h2>
          </div>
          <p className="text-alabaster/40 text-sm max-w-xs leading-relaxed italic">
            Three extraits. Three identities. One indelible sillage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {COLLECTION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="group cursor-pointer p-8 bottle-gradient border border-white/5 transition-all duration-700 hover:border-gold/20 shadow-glow"
              onClick={() => onSelectProduct(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 border border-white/5">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Reveal Price on Hover */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs tracking-widest py-2 px-4 bg-midnight/80 backdrop-blur-sm border border-gold/20 rounded-full">
                    {item.price}
                  </span>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-midnight/80 to-transparent">
                  <p className="text-xs uppercase tracking-widest text-gold mb-2">View Scent Profile</p>
                </div>
              </div>

              <h3 className="text-2xl font-serif tracking-[0.2em] mb-2">{item.name}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-alabaster/50 mb-6 italic">{item.subtitle}</p>
              <p className="text-sm text-alabaster/70 leading-relaxed max-w-xs">{item.description}</p>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className="h-px w-8 bg-gold/30 group-hover:w-16 transition-all duration-500" />
                <span className="text-[10px] uppercase letter-spacing-wide font-medium group-hover:text-gold transition-colors">Acquire Signature</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
