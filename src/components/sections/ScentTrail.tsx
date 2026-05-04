import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IMAGES } from '../../constants';
import { useRef } from 'react';

export const ScentTrail: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img 
          src={IMAGES.scentTrail} 
          alt="The Scent Trail" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-midnight/40" />
      </motion.div>

      <div className="relative z-10 max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 block">Projection & Power</span>
          <h2 className="text-4xl md:text-6xl font-medium mb-8">The Art of the Trail.</h2>
          <p className="text-alabaster/70 text-sm md:text-base leading-relaxed tracking-wide">
            True luxury lingers. Our high-concentration formulas are engineered for unprecedented projection and an enduring sillage. Leave an indelible mark long after you've left the room. A perfume that waits for no one, yet stays with everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
