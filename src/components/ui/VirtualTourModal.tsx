/**
 * VirtualTourModal.tsx
 * Created: 2025-03-20
 * Description: A modal component that displays a virtual tour of a home with image gallery
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeImage {
  url: string;
  caption: string;
}

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  homeName: string;
  images: HomeImage[];
}

const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  homeName,
  images
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-serif text-xl">{homeName} Virtual Tour</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="relative flex-grow overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={images[currentImageIndex].url}
                  alt={images[currentImageIndex].caption}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <button
                onClick={goToPrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="p-4 bg-gray-50">
              <p className="text-center">{images[currentImageIndex].caption}</p>
              <p className="text-center text-sm text-gray-500 mt-1">
                Image {currentImageIndex + 1} of {images.length}
              </p>
            </div>
            
            <div className="p-4 border-t flex justify-center">
              <div className="flex space-x-2 overflow-x-auto max-w-full">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VirtualTourModal;
