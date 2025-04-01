/**
 * Welcome Section Component
 * 
 * Purpose: Displays the initial greeting and introductory text on the homepage.
 *          Introduces user to the Belong Health Care residences, including location photos.
 * 
 * Created: 2025-03-15
 * Updated: 2025-03-17 - Added residence cards with photos and descriptions
 * Updated: 2025-03-18 - Improved mobile layout and text readability
 * Updated: 2025-03-19 - Changed image layout to show two stacked house cards with addresses
 * Updated: 2025-04-01 - Updated residence addresses to correct locations
 */
/**
 * Welcome.tsx
 * Updated: 2025-03-19
 * Description: Removed titles from image cards to create a cleaner, more minimal design
 * Updated: 2025-03-19 - Added visual guide to help visitors navigate the landing page
 * Updated: 2025-03-19 - Replaced NavigationGuide with KeyHighlights component showcasing important information
 * Updated: 2025-03-19 - Updated KeyHighlights with more conversational language in Frances' voice
 * Updated: 2025-03-19 - Changed image layout to show two stacked house cards with addresses
 * Updated: 2025-03-19 - Removed mission statement div
 * Updated: 2025-03-19 - Fixed heading spacing and sizing
 * Updated: 2025-03-19 - Added period at end of heading and made 'Belong.' bold and italic
 * Updated: 2025-03-19 - Added rounded corners and gray background to house cards, made 'Belong' orange in title
 * Updated: 2025-03-19 - Made 'Belong:' text in house card titles orange
 * Updated: 2025-03-20 - Made card styling consistent between KeyHighlights and house cards
 */
import React from 'react';
import Highlight from '../ui/Highlight';
import { Star, Home, Users, Calendar, Phone, MapPin } from 'lucide-react';

const KeyHighlights = () => {
  return (
    <div className="bg-[#f9f9f9] border border-gray-200 p-4 rounded-md shadow-sm">
      <h3 className="font-serif text-lg mb-4 flex items-center">
        <Star size={16} className="text-primary mr-2" />
        A few things I'd love to share...
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start">
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
            <Home size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">We're welcoming new residents</p>
            <p className="text-sm text-text/90">
              Our Willow Stream community has <span className="text-primary font-medium">openings for new members</span> in our 55+ home
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
            <Users size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">The people you'll meet</p>
            <p className="text-sm text-text/90">
              Our residents form a <span className="text-primary font-medium">close-knit family</span> where everyone truly belongs
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
            <Calendar size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">Life at Belong</p>
            <p className="text-sm text-text/90">
              We enjoy <span className="text-primary font-medium">home-cooked meals</span> together and weekly community outings
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white p-2 rounded-full mr-3 shadow-sm">
            <Phone size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-sm">Let's talk soon</p>
            <p className="text-sm text-text/90">
              We'd love to <span className="text-primary font-medium">show you around</span> and introduce you to our community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Welcome = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col h-full">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8">
              <Highlight>Frances</Highlight>
              <span className="block mt-4">Welcome to our residential care communities.</span>
            </h2>
            
            <p className="text-xl mb-6">
              I created <Highlight className="font-bold italic">Belong.</Highlight> to be a place where people with mental health conditions 
              find a true home, not just a facility.
            </p>
            
            <p className="text-lg mb-6">
              After 10 years as a psychiatric nurse, I wanted to create something different—homes where 
              residents <Highlight>feel like family</Highlight> and receive personalized care that goes 
              beyond the minimal standard.
            </p>
            
            <p className="text-lg mb-4">
              I'd love to share with you what makes our community special. Below, you'll find different
              aspects of <span className="text-primary font-medium">Belong</span>—explore whatever interests you most.
            </p>
          </div>
          
          {/* Use flex-grow to push the KeyHighlights to the bottom */}
          <div className="hidden md:block flex-grow"></div>
          
          {/* Added key highlights component showcasing important information */}
          <KeyHighlights />
        </div>
        
        <div className="flex flex-col md:mt-8 h-full">
          {/* Two stacked house cards with minimal spacing */}
          <div className="mb-2">
            <div className="bg-[#f9f9f9] border border-gray-200 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="text-text/70"><span className="text-primary font-medium">Belong:</span> Aspen Grove House (18+)</span>
              </div>
              <div className="mb-4 aspect-video bg-gray-100 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Aspen Grove House exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-end text-xs text-text/60 mt-2">
                <MapPin size={12} className="mr-1" />
                <span>4809 Oxborough Gardens N, Brooklyn Park, MN</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-[#f9f9f9] border border-gray-200 p-4 rounded-md shadow-sm">
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="text-text/70"><span className="text-primary font-medium">Belong:</span> Willow Stream Residence (55+)</span>
              </div>
              <div className="mb-4 aspect-video bg-gray-100 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Willow Stream Residence exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-end text-xs text-text/60 mt-2">
                <MapPin size={12} className="mr-1" />
                <span>7017 88th Ave N, Brooklyn Park, MN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Welcome);