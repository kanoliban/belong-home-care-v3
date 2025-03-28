/**
 * MasonryGrid.tsx
 * Created: 2025-03-19
 * Description: A responsive masonry grid layout for displaying cards
 * Updated: 2025-03-19 - Reduced gap between cards for a more compact layout
 */
import React, { ReactNode, ReactElement } from 'react';

interface WithClassName {
  className?: string;
}

interface MasonryGridProps {
  children: ReactNode;
  className?: string;
}

const MasonryGrid = ({ children, className = '' }: MasonryGridProps) => {
  // Convert children to array
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ${className}`}>
      {React.Children.map(childrenArray, (child, index) => {
        let spanClasses = '';
        
        // Create a more varied and interesting masonry pattern similar to Chester's site
        if (index === 0) {
          spanClasses = 'md:col-span-2';
        } else if (index === 3) {
          spanClasses = 'lg:col-span-2';
        } else if (index === 5) {
          spanClasses = 'md:row-span-2';
        } else if (index === 7) {
          spanClasses = 'lg:col-span-3';
        }
        
        // Clone the child element with additional classes
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<WithClassName>, {
            className: `${(child as ReactElement<WithClassName>).props.className || ''} ${spanClasses}`,
          });
        }
        return child;
      })}
    </div>
  );
};

export default React.memo(MasonryGrid);