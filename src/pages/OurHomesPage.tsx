import React from 'react';
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import Card from '../components/ui/Card';
import { MapPin, Home, Users } from 'lucide-react';

const OurHomesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">our homes.</h1>
        
        <div className="bg-primary/10 p-6 rounded-md mb-8">
          <div className="flex items-center mb-2">
            <Users size={20} className="text-primary mr-2" />
            <h2 className="font-serif text-2xl">Current Availability</h2>
          </div>
          <p className="text-lg">
            We currently have <Highlight className="font-semibold">3 beds available in our 55+ home</Highlight> (Willow Stream Residence)
            and are accepting referrals. Please <a href="/contact" className="font-semibold hover:underline">contact us</a> to schedule a visit.
          </p>
        </div>
        
        <div className="mb-12">
          <div className="aspect-video bg-gray-100 overflow-hidden rounded-md shadow-sm mb-6">
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
              alt="Belong Health Care homes" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-lg mb-6">
            Our two specialized homes in Brooklyn Park are designed to provide a true sense of 
            belonging and comfort for our residents. Each home has been thoughtfully created to 
            foster a warm, family-like environment where residents can thrive.
          </p>
        </div>
        
        {/* Aspen Grove House */}
        <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm mb-12">
          <div className="flex items-center mb-4">
            <Home size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">aspen grove house (18+).</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Aspen Grove House exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center text-sm text-text/70 mb-4">
                <MapPin size={14} className="mr-1.5" />
                <span>1234 Maple Street, Brooklyn Park, MN 55443</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-xl mb-3">Features & Amenities</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5 private bedrooms (currently full)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Large shared kitchen with ample space for cooking together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Comfortable community living room with TV and games</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Backyard garden where residents help grow vegetables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 staffing with dedicated care professionals</span>
                </li>
              </ul>
              
              <p>
                Our 18+ home hosts residents from diverse backgrounds with a range of mental health 
                conditions. The space is designed to encourage independence while providing the 
                structure and support needed for stability.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Living room interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Kitchen interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Bedroom interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Willow Stream Residence */}
        <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm mb-12">
          <div className="flex items-center mb-4">
            <Home size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">willow stream residence (55+).</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Willow Stream Residence exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center text-sm text-text/70 mb-4">
                <MapPin size={14} className="mr-1.5" />
                <span>5678 River Road, Brooklyn Park, MN 55443</span>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-md mb-4">
                <p className="font-semibold">
                  Currently accepting referrals for <Highlight className="font-semibold">3 available beds</Highlight>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-xl mb-3">Features & Amenities</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5 private bedrooms (3 currently available)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Single-level living with no stairs and wider doorways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Grab bars in bathrooms and accessible shower facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Sunroom perfect for reading or morning coffee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 staffing with experience in both mental health and senior care</span>
                </li>
              </ul>
              
              <p>
                Our 55+ home provides specialized care for older adults with mental health conditions, 
                often alongside physical health needs. We emphasize both independence and appropriate 
                support for this unique population.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Sunroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Accessible bathroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-100 aspect-square overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Senior bedroom interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <Card 
          primaryLabel="Visit:" 
          category="Tour Our Homes" 
          title="schedule a visit" 
          locationPin="Brooklyn Park"
          className="mb-12"
          initiallyExpanded={true}
        >
          <div>
            <p className="mb-4">
              We'd love to show you our homes in person. Visiting is the best way to get a feel for our 
              community and see if Belong might be right for you or your loved one.
            </p>
            
            <div className="aspect-video bg-gray-100 overflow-hidden rounded-md mb-6">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Welcoming entrance" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="mb-4">
              During your visit, I'll personally show you around the home, introduce you to some of our 
              staff, and answer any questions you might have about our approach to care. We can discuss 
              specific needs and determine if we might be a good fit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block text-center"
              >
                Contact Us to Schedule a Tour
              </a>
              <a 
                href="/for-professionals" 
                className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary/10 transition-colors inline-block text-center"
              >
                Referral Information for Professionals
              </a>
            </div>
          </div>
        </Card>
      </section>
    </motion.div>
  );
};

export default OurHomesPage;