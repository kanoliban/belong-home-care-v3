/**
 * ExpandableCard.tsx
 * Created: 2025-03-20
 * Description: A card component that can expand to show additional content
 * Updated: 2025-03-20 - Made the entire card clickable to expand/collapse content
 * Updated: 2025-03-21 - Adjusted to use full height of container
 * Updated: 2025-03-21 - Added highlighting for the word "Belong" in the branded orange color
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  summary: React.ReactNode;
  expandedContent: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  wideCard?: boolean;
  imageUrl?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  summary,
  expandedContent,
  icon,
  className = '',
  wideCard = false,
  imageUrl
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to highlight the word "Belong" in the title
  const renderTitle = () => {
    // Split the title by spaces to find the word "Belong"
    const words = title.split(' ');
    return (
      <>
        {words.map((word, index) => {
          // Check if the word is "Belong" or "belong" (case insensitive)
          if (word.toLowerCase() === 'belong') {
            return (
              <React.Fragment key={index}>
                {index > 0 && ' '}
                <span className="text-primary">{word}</span>
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={index}>
              {index > 0 && ' '}
              {word}
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <motion.div 
      className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm overflow-hidden cursor-pointer flex flex-col ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      layout
      onClick={toggleExpand}
      whileHover={{ scale: 1.01 }}
    >
      <div className={`${imageUrl && wideCard ? 'md:flex' : ''} h-full`}>
        {imageUrl && (
          <div className={`${wideCard ? 'md:w-2/5' : 'w-full'} aspect-video md:aspect-auto overflow-hidden`}>
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className={`${wideCard && imageUrl ? 'md:w-3/5' : 'w-full'} p-5 flex flex-col h-full`}>
          <div className="flex justify-between items-start mb-3">
            {icon && <div className="mr-3">{icon}</div>}
            <h3 className="font-serif text-xl flex-grow">{renderTitle()}</h3>
          </div>
          
          <div className="mb-4 flex-grow">{summary}</div>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                {expandedContent}
              </motion.div>
            )}
          </AnimatePresence>
          
          <div
            className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp size={16} className="ml-1" />
              </>
            ) : (
              <>
                Read more <ChevronDown size={16} className="ml-1" />
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
