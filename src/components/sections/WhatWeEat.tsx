import React from 'react';
import Highlight from '../ui/Highlight';

const WhatWeEat = () => {
  return (
    <div>
      <p className="mb-4">
        <Highlight>We don't do microwaved food or leftovers</Highlight>. Every meal is 
        home-cooked from scratch, with special attention to cultural foods and residents' preferences.
      </p>
      
      <div className="mb-6 aspect-video bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Home-cooked meal being prepared" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <p className="mb-4">
        When someone moves in, we learn about their favorite foods and cultural background. 
        Our weekly menus include dishes that reflect the diversity of our residents.
      </p>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">Sample Weekly Menu</h3>
        <ul className="space-y-2">
          <li>• <strong>Monday:</strong> Somali spiced rice with vegetables and chicken</li>
          <li>• <strong>Tuesday:</strong> Homemade lasagna with garden salad</li>
          <li>• <strong>Wednesday:</strong> Tater tot hotdish (Minnesota classic!)</li>
          <li>• <strong>Thursday:</strong> Ethiopian doro wat with injera bread</li>
          <li>• <strong>Friday:</strong> Fish tacos with fresh salsa</li>
          <li>• <strong>Saturday:</strong> Resident's choice day</li>
          <li>• <strong>Sunday:</strong> Traditional roast dinner</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-gray-100 aspect-square overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Cultural dish example" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 aspect-square overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Fresh ingredients" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p>
        Residents are welcome to help with meal preparation if they enjoy cooking. 
        We believe that sharing meals together builds community and creates a true sense of home.
      </p>
    </div>
  );
};

export default React.memo(WhatWeEat);