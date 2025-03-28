/**
 * ContactCard.tsx
 * Created: 2025-03-20
 * Description: A card component with an integrated contact form
 * Updated: 2025-03-20 - Added id prop for anchor links
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';

interface ContactCardProps {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
  phoneNumber: string;
  email: string;
  className?: string;
  id?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  imageUrl,
  phoneNumber,
  email,
  className = '',
  id
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <motion.div 
      id={id}
      className={`bg-[#f9f9f9] border border-gray-200 rounded-md shadow-sm overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md:flex">
        <div className="md:w-2/5">
          <div className="h-full relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="font-serif text-2xl mb-2">{title}</h3>
              <div className="space-y-2">
                <a 
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="flex items-center text-white hover:text-primary transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  {phoneNumber}
                </a>
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center text-white hover:text-primary transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 p-5">
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <MessageSquare size={20} className="text-primary mr-2" />
              <h3 className="font-serif text-xl">Send a Message</h3>
            </div>
            <div>{description}</div>
          </div>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 text-center">
              <p className="text-green-700 font-medium">Thank you for your message!</p>
              <p className="text-green-600 text-sm mt-1">Frances will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={16} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
