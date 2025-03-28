/**
 * PathwayCard.tsx
 * Created: 2025-03-20
 * Description: A card component for pathway options (families or professionals)
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PathwayCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  buttonText: string;
  modalTitle: string;
  modalContent: React.ReactNode;
  className?: string;
}

const PathwayCard: React.FC<PathwayCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  modalTitle,
  modalContent,
  className = ''
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <motion.div 
        className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm p-5 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center mb-3">
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
            {icon}
          </div>
          <h3 className="font-serif text-xl">{title}</h3>
        </div>
        
        <div className="mb-4">{description}</div>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center"
        >
          {buttonText}
          <ArrowRight size={16} className="ml-2" />
        </button>
      </motion.div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-auto"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-serif text-xl">{modalTitle}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="p-4">
              {modalContent}
            </div>
            
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PathwayCard;
