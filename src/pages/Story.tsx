import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export const Story: React.FC = () => {
  return (
    <div className="bg-midnight min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] text-gold mb-8"
          >
            La Maison BMDE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-12"
          >
            The Convergence <br /> of <span className="italic serif">Two Worlds.</span>
          </motion.h1>
        </div>

        {/* Narrative */}
        <div className="space-y-32">
          {/* Act I: The Roots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Act I: The Roots</span>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-tight">The Ancient Silence of Algiers.</h2>
              <p className="text-sm md:text-base text-alabaster/60 leading-relaxed tracking-wide">
                BMDE began not in a laboratory, but in the memory of a child watching the sun set over the Casbah. We find our inspiration in the impossible geometry of Algiers, the warmth of the Mediterranean salt, and the deep, ancient silence that only the Sahara can hold. We frame Algerian identity as a source of profound artistic richness—a tapestry of leather, citrus, and smoke.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="order-1 md:order-2 aspect-[4/3] overflow-hidden"
            >
              <img 
                src={IMAGES.algiers} 
                alt="Algerian Landscape" 
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Act II: The Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img 
                src={IMAGES.hero} 
                alt="Modern Metropolis" 
                className="w-full h-full object-cover brightness-50"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Act II: The Vision</span>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-tight">Modern Armor for the Avant-Garde.</h2>
              <p className="text-sm md:text-base text-alabaster/60 leading-relaxed tracking-wide">
                We believe that heritage should not be a museum piece. It should be a weapon. We take these ancient olfactory memories and bring them into the modern global metropolis. BMDE creates a bridge between the artisan traditions of the Atlas Mountains and the sleek, contemporary armor required for the modern world.
              </p>
            </div>
          </div>

          {/* Act III: The Promise */}
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold">Act III: The Promise</span>
            <h2 className="text-4xl md:text-6xl tracking-tight italic serif">Unapologetic Presence.</h2>
            <p className="text-lg text-alabaster/70 leading-relaxed italic font-serif">
              Our promise is simple: a commitment to the highest quality raw materials and the creation of fragrances that do not whisper. We provide you with a signature that lingers, a sillage that announces you before you speak, and an identity that remains long after you depart.
            </p>
            <div className="pt-8">
              <div className="h-px w-24 bg-gold mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
