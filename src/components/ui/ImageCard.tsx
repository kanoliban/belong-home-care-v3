/**
 * ImageCard.tsx
 * Created: 2025-03-19
 * Description: Simplified card component specifically for displaying images with titles and location indicators
 * Updated: 2025-03-19
 * Description: Updated to use a lighter gray background (#f9f9f9)
 */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface ImageCardProps {
  category: string;
  primaryLabel?: string;
  title?: string;
  locationPin?: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
}

const ImageCard = memo(({
  category,
  primaryLabel = "Belong:",
  title,
  locationPin,
  imageSrc,
  imageAlt,
  className = ''
}: ImageCardProps) => {
  return (
    <motion.div
      className={`relative bg-[#f9f9f9] border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition-all ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.01,
        borderColor: 'rgba(255, 92, 57, 0.3)'
      }}
    >
      <div className="flex justify-between items-center text-sm mb-3">
        <span className="text-text/70">{primaryLabel} {category}</span>
      </div>
      
      {title && <h2 className="font-serif text-2xl mb-4">{title}.</h2>}
      
      <div className="mb-2">
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
        />
      </div>
      
      {locationPin && (
        <div className="flex items-center justify-end text-xs text-text/60 mt-2">
          <MapPin size={12} className="mr-1" />
          <span>{locationPin}</span>
        </div>
      )}
    </motion.div>
  );
});

ImageCard.displayName = 'ImageCard';

export default ImageCard;
