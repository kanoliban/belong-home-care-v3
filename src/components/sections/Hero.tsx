/**
 * Hero.tsx
 * Created: 2025-03-20
 * Description: Hero section for the homepage with a large image and headline
 * Updated: 2025-03-21 - Replaced descriptive paragraph with a direct call-to-action
 * Updated: 2025-03-21 - Reduced vertical height by 30% and adjusted elements accordingly
 */
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      className="relative h-[49vh] min-h-[350px] w-full mb-6 overflow-hidden rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Belong Home Care - A place everyone belongs" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3">
            A place everyone <span className="text-primary">belongs</span>.
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-3xl mb-4">
            Discover our residential homes and see if <span className="text-primary">Belong</span> is right for you or your loved one.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="#tour" 
              className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Take a Tour
            </a>
            <a 
              href="#contact" 
              className="bg-white text-primary px-5 py-2 rounded-md hover:bg-white/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default React.memo(Hero);
