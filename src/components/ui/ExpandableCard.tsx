/**
 * ExpandableCard.tsx
 * Created: 2025-03-20
 * Description: A card component that can expand to show additional content
 * Updated: 2025-03-20 - Made the entire card clickable to expand/collapse content
 * Updated: 2025-03-21 - Adjusted to use full height of container
 * Updated: 2025-03-21 - Added highlighting for the word "Belong" in the branded orange color
 * Updated: 2025-04-01 - Fixed "Read more" button to properly toggle expansion state
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
  initialExpanded?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  summary,
  expandedContent,
  icon,
  className = '',
  wideCard = false,
  imageUrl,
  initialExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);
  
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
      initial={{ opacity: 0 }}
      className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm overflow-hidden cursor-pointer flex flex-col ${className}`}
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
          
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="mb-4 overflow-hidden"
              >
                {expandedContent}
              </motion.div>
            )}
          </AnimatePresence>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
            className="flex items-center text-primary hover:bg-gray-100 transition-colors text-sm font-medium mt-auto cursor-pointer py-1 px-2 rounded"
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
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
