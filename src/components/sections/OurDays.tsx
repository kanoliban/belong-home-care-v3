import React from 'react';
import Highlight from '../ui/Highlight';

const OurDays = () => {
  return (
    <div>
      <p className="mb-4">
        We maintain a balance of structure and flexibility, with regular activities and outings.
        <Highlight> We go out at least once or twice a week</Highlight>, especially during summer.
      </p>
      
      <div className="mb-6 aspect-video bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Group activity" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">A Typical Day</h3>
        <ul className="space-y-2">
          <li>• <strong>7:00-9:00am:</strong> Flexible wake-up times with breakfast available</li>
          <li>• <strong>9:30am:</strong> Morning check-in and medication</li>
          <li>• <strong>10:00am-12:00pm:</strong> Morning activities (art, walking, gardening)</li>
          <li>• <strong>12:00-1:00pm:</strong> Lunch together</li>
          <li>• <strong>1:00-3:00pm:</strong> Quiet time or individual appointments</li>
          <li>• <strong>3:00-5:00pm:</strong> Afternoon activities or community outings</li>
          <li>• <strong>5:30-6:30pm:</strong> Dinner together</li>
          <li>• <strong>7:00-9:00pm:</strong> Evening social time (games, movies, relaxation)</li>
          <li>• <strong>9:00pm:</strong> Evening medication and wind-down</li>
        </ul>
      </div>
      
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-gray-100 aspect-square overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Outdoor activity" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 aspect-square overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="Arts and crafts" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <p className="mb-4">
        Our schedule includes a mix of group activities, individual hobbies, and community outings. 
        Residents help plan activities based on their interests and preferences.
      </p>
      
      <p>
        During warmer months, we enjoy picnics at local parks, trips to farmers markets, and occasionally 
        visits to museums or community events. We believe that staying connected to the community is essential 
        for mental well-being.
      </p>
    </div>
  );
};

export default React.memo(OurDays);