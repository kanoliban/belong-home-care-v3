/**
 * BedsAvailableCard Component
 * 
 * Purpose: Specific card variant to display information about available beds
 *          within the "Our Homes" section.
 * 
 * Planned Updates (2025-03-30):
 * - Ensure styling aligns with the overall Card component and new branding.
 * - Update content source/structure as needed based on backend or data changes.
 */
/**
 * BedsAvailableCard.tsx
 * Created: 2025-03-20
 * Description: A card component that displays current room availability with inquiry modal
 * Updated: 2025-03-20 - Made the entire card clickable
 * Updated: 2025-03-20 - Changed terminology from 'beds' to 'rooms'
 * Updated: 2025-03-21 - Updated titles to be lowercase
 * Updated: 2025-03-21 - Adjusted to use full height of container
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Phone } from 'lucide-react';

interface BedsAvailableCardProps {
  className?: string;
}

const BedsAvailableCard: React.FC<BedsAvailableCardProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // This would typically come from an API or CMS
  const availableRooms = 3;
  const homeWithAvailability = "Willow Stream Residence (55+)";
  
  return (
    <>
      <motion.div
        className={`bg-primary/5 border border-primary/30 p-6 rounded-md shadow-sm hover:shadow-md transition-all cursor-pointer h-full flex flex-col ${className}`}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center mb-4">
          <Home size={24} className="text-primary mr-3" />
          <h3 className="font-serif text-xl">rooms available now</h3>
        </div>
        
        <div className="flex items-center mb-3">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-600 font-medium">{availableRooms} private rooms</span>
        </div>
        
        <p className="text-sm mb-4 flex-grow">
          We currently have openings at our {homeWithAvailability} home.
          Contact us today to schedule a visit.
        </p>
        
        <button
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-full flex items-center justify-center mt-auto"
        >
          <Phone size={16} className="mr-2" />
          Inquire Now
        </button>
      </motion.div>
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-md"
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-serif text-xl">room availability inquiry</h3>
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
              <p className="mb-4">
                We currently have {availableRooms} private rooms available at our {homeWithAvailability} home.
                Please fill out the form below to inquire about availability.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
              </form>
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

export default BedsAvailableCard;
