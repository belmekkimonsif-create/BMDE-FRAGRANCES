import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "A masterclass in olfactory architecture. BMDE doesn't just craft perfumes; they craft auras.",
    author: "Niche Review Quarterly",
    date: "Mars 2026"
  },
  {
    quote: "AZEL is the most potent oud I've encountered in a decade. It is dark, animalic, and utterly sophisticated.",
    author: "L'Essence Magazine",
    date: "Feb 2026"
  },
  {
    quote: "There's a specific soul in these bottles. You can feel the Mediterranean heat and the desert chill in every spray.",
    author: "Global Fragrance Guild",
    date: "Jan 2026"
  }
];

export const SocialProof: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-32 px-6 bg-midnight/50">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="mx-auto text-gold/30 mb-12" size={48} strokeWidth={1} />
        
        <div className="relative h-64 md:h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-xl md:text-3xl font-serif italic mb-12 leading-relaxed text-alabaster/90">
                "{TESTIMONIALS[current].quote}"
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mb-1">
                  {TESTIMONIALS[current].author}
                </p>
                <p className="text-[10px] uppercase tracking-[0.1em] text-alabaster/30">
                  {TESTIMONIALS[current].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center space-x-12 mt-12">
          <button onClick={prev} className="text-alabaster/40 hover:text-gold transition-colors">
            <ChevronLeft size={24} strokeWidth={1} />
          </button>
          <div className="flex space-x-3">
            {TESTIMONIALS.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-gold w-4' : 'bg-gold/20'}`} 
              />
            ))}
          </div>
          <button onClick={next} className="text-alabaster/40 hover:text-gold transition-colors">
            <ChevronRight size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
};
