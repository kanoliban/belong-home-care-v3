/**
 * Generic Card Component
 * 
 * Purpose: Provides a reusable card structure for displaying content sections.
 *          Intended for use in masonry or grid layouts.
 * 
 * Planned Updates (2025-03-30):
 * - May need adjustments to support expandable content based on PRD.
 * - Styling updates to align with new brand colors and overall visual consistency.
 * - Ensure adaptability for different content types (text, images, lists).
 */
/**
 * Card.tsx
 * Updated: 2025-03-19
 * Description: Updated to use a lighter gray background for all cards and ensure independent expansion
 * Updated: 2025-03-19 - Modified to allow multiple cards to remain open simultaneously for a better user experience
 */
import React, { useState, memo, ReactNode, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X } from 'lucide-react';

interface CardProps {
  category: string;
  primaryLabel?: string;   // e.g. "Belong:", "Home:", "Approach:"
  title: string;           // Descriptive title that complements the category
  locationPin?: string;
  children: ReactNode;
  className?: string;
  initiallyExpanded?: boolean; // For non-homepage pages where content should be visible by default
  id?: string; // Optional unique identifier for the card
}

// Create a context to manage expanded card state
const CardContext = React.createContext<{
  expandedCardIds: Set<string>;
  toggleCardExpansion: (id: string) => void;
}>({
  expandedCardIds: new Set(),
  toggleCardExpansion: () => {},
});

// Provider component to wrap around cards
export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [expandedCardIds, setExpandedCardIds] = useState<Set<string>>(new Set());
  
  const toggleCardExpansion = (id: string) => {
    setExpandedCardIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  
  return (
    <CardContext.Provider value={{ expandedCardIds, toggleCardExpansion }}>
      {children}
    </CardContext.Provider>
  );
};

const Card = memo(({ 
  category, 
  primaryLabel = "", 
  title, 
  locationPin, 
  children, 
  className = '',
  initiallyExpanded = false,
  id
}: CardProps) => {
  // Generate a unique ID if none provided
  const cardRef = useRef<HTMLDivElement>(null);
  const uniqueId = useRef<string>(id || `card-${Math.random().toString(36).substr(2, 9)}`);
  
  // Use the context for expansion state
  const { expandedCardIds, toggleCardExpansion } = React.useContext(CardContext);
  const isExpanded = initiallyExpanded || expandedCardIds.has(uniqueId.current);
  
  // Memoize the toggle function to prevent unnecessary re-renders
  const toggleExpand = React.useCallback(() => {
    toggleCardExpansion(uniqueId.current);
  }, [toggleCardExpansion]);

  // Prevent card click when clicking on the toggle button directly
  const handleToggleClick = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    toggleExpand();
  }, [toggleExpand]);

  return (
    <div className={`${className}`}>
      <motion.div 
        ref={cardRef}
        onClick={toggleExpand}
        className="relative bg-[#f9f9f9] border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ 
          scale: 1.01,
          borderColor: 'rgba(255, 92, 57, 0.3)'
        }}
        data-card-id={uniqueId.current}
        layout="position"
      >
        <div className="flex justify-between items-center text-sm mb-3">
          <span className="text-text/70">{primaryLabel} {category}</span>
          <button
            onClick={handleToggleClick}
            aria-label={isExpanded ? "Collapse" : "Expand"}
            className="text-primary hover:text-primary/80 transition-colors z-10"
          >
            {isExpanded ? <X size={16} /> : <ArrowUpRight size={16} />}
          </button>
        </div>
        
        <h2 className="font-serif text-2xl mb-4">{title}.</h2>
        
        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div 
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut",
                opacity: { duration: 0.2 }
              }}
            >
              {children}
            </motion.div>
          ) : (
            <motion.div 
              className="overflow-hidden relative"
              style={{ height: '160px' }}
            >
              {children}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f9f9f9] to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="mt-4 flex justify-between items-center">
          {!isExpanded && (
            <span className="text-sm text-primary">
              Read more...
            </span>
          )}
          
          {locationPin && (
            <div className="flex items-center ml-auto text-xs text-text/60">
              <MapPin size={12} className="mr-1" />
              <span>{locationPin}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;