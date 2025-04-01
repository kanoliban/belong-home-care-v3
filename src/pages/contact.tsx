/**
 * src/pages/contact.tsx
 * 
 * Purpose: Provides direct contact information (phone, email, addresses)
 *          and a simple form for inquiries.
 *
 * Created: 2025-03-30
 * Updated: 2025-04-01 - Updated to match the visual style and component structure of other pages
 *                       Implemented card-based styling, moved headings inside cards,
 *                       added proper spacing, and incorporated consistent icon usage.
 * Updated: 2025-04-01 - Updated location addresses for both residences.
 */

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  // Add state for form handling if implementing a form
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const handleChange = (e) => { ... };
  // const handleSubmit = (e) => { ... };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">contact us.</h1>
        
        {/* Hours & Quick Response Section */}
        <div className="bg-primary/10 p-6 rounded-sm mb-4">
          <div className="flex items-center mb-4">
            <Clock size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-2xl">Hours & Response Time</h2>
          </div>
          <p className="text-lg">
            Our administrative office is open <strong>Monday through Friday, 9am to 5pm</strong>. 
            We aim to respond to all inquiries within 24 hours during business days.
            For urgent matters related to current residents, our care staff is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Contact Information Card */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <Phone size={22} className="text-primary mr-3" />
              <h2 className="font-serif text-2xl">Get in Touch</h2>
            </div>
            
            <p className="mb-4">
              We're here to answer your questions about our services, scheduling tours, 
              or beginning the referral process.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Phone size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-lg">(612) 555-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:info@belonghomecare.com" className="text-lg text-primary hover:underline">
                    info@belonghomecare.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-serif text-xl mb-4">Our Locations</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Aspen Grove House (18+)</p>
                    <p className="text-gray-700">4809 Oxborough Gardens N</p>
                    <p className="text-gray-700">Brooklyn Park, MN</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={20} className="text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Willow Stream Residence (55+)</p>
                    <p className="text-gray-700">7017 88th Ave N</p>
                    <p className="text-gray-700">Brooklyn Park, MN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <MessageCircle size={22} className="text-primary mr-3" />
              <h2 className="font-serif text-2xl">Send a Message</h2>
            </div>
            
            <p className="mb-4">
              Have a question or want to schedule a tour? Send us a message and we'll get back to you as soon as possible.
            </p>
            
            <form /* onSubmit={handleSubmit} */ className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" 
                />
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
                <select 
                  name="topic" 
                  id="topic" 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="general">General Inquiry</option>
                  <option value="tour">Schedule a Tour</option>
                  <option value="referral">Make a Referral</option>
                  <option value="employment">Employment Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Google Map Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
          <div className="flex items-center mb-4">
            <MapPin size={22} className="text-primary mr-3" />
            <h2 className="font-serif text-2xl">Find Us</h2>
          </div>
          
          <div className="aspect-video bg-gray-200 rounded-sm flex items-center justify-center">
            <p className="text-gray-500">[Google Map Placeholder - Implementation Pending]</p>
            {/* 
            Implementation notes:
            1. Add Google Maps API key to .env file
            2. Install and import the Google Maps React component
            3. Configure with locations of both residences 
            */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
