import React from 'react';
import Highlight from '../ui/Highlight';

const OurHomes = () => {
  return (
    <div>
      <p className="mb-4">
        We have two beautiful homes in Brooklyn Park designed to provide a true sense of 
        belonging and comfort for our residents.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="border border-gray-200 p-4 rounded-sm">
          <div className="mb-4 aspect-video bg-gray-100 overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Aspen Grove House exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-xl mb-2">Aspen Grove House (18+)</h3>
          <p className="mb-2">5 bedrooms, currently full</p>
          <p>
            Our 18+ home has a large backyard with a garden area where residents help grow 
            vegetables in the summer. The common areas are spacious with natural light.
          </p>
        </div>
        
        <div className="border border-gray-200 p-4 rounded-sm">
          <div className="mb-4 aspect-video bg-gray-100 overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Willow Stream Residence exterior" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-serif text-xl mb-2">Willow Stream Residence (55+)</h3>
          <p className="mb-2"><Highlight className="font-semibold">5 bedrooms, 3 beds available</Highlight></p>
          <p>
            Our 55+ home features single-level living with wider doorways and accessible 
            bathrooms. The sunroom is perfect for reading or having your morning coffee.
          </p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-100 aspect-square overflow-hidden rounded-sm shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Living room interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 aspect-square overflow-hidden rounded-sm shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Kitchen interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 aspect-square overflow-hidden rounded-sm shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Bedroom interior" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="mt-6">
        Both homes are staffed 24/7 with caring professionals who share my commitment to 
        creating spaces where residents feel valued and respected.
      </p>
    </div>
  );
};

export default React.memo(OurHomes);