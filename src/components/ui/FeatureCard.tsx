/**
 * FeatureCard.tsx
 * Created: 2025-03-20
 * Description: A card component that highlights a key feature or differentiator
 * Updated: 2025-03-20 - Made the entire card clickable
 * Updated: 2025-03-31 - Made imageUrl optional and adjusted layout.
 * Updated: 2025-03-31 - Completely removed the icon prop and rendering.
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: React.ReactNode;
  imageUrl?: string; // Made optional
  className?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  className = '',
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <motion.div 
      className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm overflow-hidden ${className} ${onClick ? 'cursor-pointer' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conditionally render image if imageUrl is provided */}
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content Area - Set to relative for absolute positioning of icon */}
      <div className="p-5 relative"> 
        {/* Text Content */}
        <div> 
          <h3 className="font-serif text-xl mb-3">{title}</h3>
          <div className="text-gray-600 text-sm">{description}</div>
        </div>
        
        {onClick && isHovered && (
          <div className="mt-3 flex items-center text-primary text-sm font-medium">
            <span>Learn more</span>
            <ExternalLink size={14} className="ml-1" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
