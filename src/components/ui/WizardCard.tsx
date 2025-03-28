/**
 * WizardCard.tsx
 * Created: 2025-03-19
 * Description: Card component that triggers a wizard flow when clicked
 * Updated: 2025-03-19 - Made the entire card clickable, not just the button
 * Updated: 2025-03-21 - Updated styling to match other card components
 */
import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface WizardCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  highlighted?: boolean;
  className?: string;
}

const WizardCard = memo(({
  title,
  description,
  buttonText,
  onButtonClick,
  highlighted = false,
  className = '',
}: WizardCardProps) => {
  return (
    <motion.div
      onClick={onButtonClick}
      className={`relative bg-[#f9f9f9] border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer ${
        highlighted ? 'border-primary/30' : ''
      } ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.01,
        borderColor: highlighted ? 'rgba(255, 92, 57, 0.5)' : 'rgba(255, 92, 57, 0.3)'
      }}
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="font-serif text-xl mb-3">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
        </div>
        
        <div className="mt-auto">
          <div 
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            {buttonText}
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

WizardCard.displayName = 'WizardCard';

export default WizardCard;
