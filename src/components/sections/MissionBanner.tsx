/**
 * MissionBanner.tsx
 * Created: 2025-03-21
 * Description: A subtle, indented mission statement component positioned between the hero section and main content
 * Updated: 2025-03-21 - Redesigned to be more subtle and less attention-seeking
 * Updated: 2025-03-21 - Made the statement more explicit about what Belong is
 */
import { motion } from 'framer-motion';

const MissionBanner = () => {
  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto px-6 py-3 mb-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-text/70 text-sm md:text-base text-center italic font-serif">
        <span className="text-primary">Belong</span> Home Care provides residential homes where adults with mental health conditions 
        can live with dignity and receive the care they need.
      </p>
    </motion.div>
  );
};

export default MissionBanner;
