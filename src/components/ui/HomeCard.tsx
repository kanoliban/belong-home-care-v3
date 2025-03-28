/**
 * HomeCard.tsx
 * Created: 2025-03-20
 * Description: A card component that displays information about a home with virtual tour option
 * Updated: 2025-03-20 - Made tour marker more prominent
 * Updated: 2025-03-20 - Made the entire card clickable
 * Updated: 2025-03-20 - Changed terminology from 'beds' to 'rooms'
 * Updated: 2025-03-21 - Updated tour marker text to be lowercase
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Image, MapPin } from 'lucide-react';
import VirtualTourModal from './VirtualTourModal';

interface HomeImage {
  url: string;
  caption: string;
}

interface HomeCardProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  ageGroup: string;
  roomsAvailable?: number;
  isHighlighted?: boolean;
  tourImages: HomeImage[];
  className?: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  imageUrl,
  ageGroup,
  roomsAvailable,
  isHighlighted = false,
  tourImages,
  className = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <motion.div 
        onClick={() => setIsModalOpen(true)}
        className={`
          border rounded-md shadow-sm overflow-hidden cursor-pointer
          ${isHighlighted ? 'bg-primary/5 border-primary/30' : 'bg-[#f9f9f9] border-gray-200'}
          ${className}
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <motion.div 
              className="bg-primary text-white px-2 py-1 rounded-md text-xs font-medium flex items-center shadow-md"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPin size={12} className="mr-1" />
              tour available
            </motion.div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <Home size={18} className={`${isHighlighted ? 'text-primary' : 'text-gray-600'} mr-2`} />
              <h3 className="font-serif text-xl">{title}</h3>
            </div>
            
            {roomsAvailable !== undefined && roomsAvailable > 0 && (
              <div className="flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-600 text-sm font-medium">{roomsAvailable} rooms available</span>
              </div>
            )}
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2">For residents {ageGroup}</p>
            <div>{description}</div>
          </div>
          
          <div
            className={`
              flex items-center text-sm font-medium
              ${isHighlighted ? 'text-primary hover:text-primary/80' : 'text-gray-600 hover:text-gray-800'}
              transition-colors
            `}
          >
            <Image size={16} className="mr-1" />
            view virtual tour
          </div>
        </div>
      </motion.div>
      
      <VirtualTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        homeName={title}
        images={tourImages}
      />
    </>
  );
};

export default HomeCard;
