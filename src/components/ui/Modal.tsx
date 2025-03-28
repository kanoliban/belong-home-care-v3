/**
 * Modal.tsx
 * Updated: 2025-03-18
 * Description: A reusable modal component with a more subtle design
 * Updated: 2025-03-20 - Adjusted to prevent scrolling within the modal
 */

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  primaryLabel?: string;
  category?: string;
  locationPin?: string;
}

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  primaryLabel,
  category,
  locationPin
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Close modal when pressing Escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - more subtle with less opacity */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <motion.div
              ref={modalRef}
              className="bg-[#f9f9f9] rounded-md border border-gray-200 shadow-md w-full max-w-2xl flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                <div className="flex items-center">
                  {primaryLabel && (
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mr-2">
                      {primaryLabel}
                    </span>
                  )}
                  <h2 className="font-serif text-xl">{title}</h2>
                  
                  {category && (
                    <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {category}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center">
                  {locationPin && (
                    <div className="flex items-center text-gray-500 mr-3 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {locationPin}
                    </div>
                  )}
                  
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 flex-grow overflow-hidden">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
