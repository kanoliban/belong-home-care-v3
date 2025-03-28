import React from 'react';
import Highlight from '../ui/Highlight';

const ComeJoinUs = () => {
  return (
    <div>
      <div className="mb-6 bg-primary/10 p-4 border-l-2 border-primary rounded-r-sm">
        <p className="font-serif text-lg">
          We currently have <Highlight className="font-semibold">3 beds available in our 55+ home</Highlight> (Willow Stream Residence)
          and are accepting referrals.
        </p>
      </div>
      
      <div className="mb-6 aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Willow Stream Residence exterior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">How to Join Us</h3>
        <ol className="space-y-4 list-decimal pl-5">
          <li>
            <strong>Initial Contact:</strong> Call or email us to discuss the potential resident's needs and our availability.
          </li>
          <li>
            <strong>Referral Process:</strong> Case managers can submit a formal referral with medical history and current needs.
          </li>
          <li>
            <strong>Home Visit:</strong> Schedule a tour to see the home and meet some of the staff.
          </li>
          <li>
            <strong>Assessment:</strong> We'll determine if we can meet the individual's needs and if they'll be a good fit for our community.
          </li>
          <li>
            <strong>Moving In:</strong> We'll work with you to make the transition as smooth as possible.
          </li>
        </ol>
      </div>
      
      <p className="mb-4">
        We accept various funding sources, including Medical Assistance, waivers, and private pay. 
        We can help you navigate the financial aspects of care.
      </p>
      
      <div className="bg-gray-50 p-4 border border-gray-200 rounded-sm">
        <p className="font-serif text-lg">Ready to learn more?</p>
        <p className="mt-2">
          Contact me directly at <Highlight className="font-semibold">(612) 555-7890</Highlight> or 
          <Highlight className="font-semibold ml-1">schedule a visit</Highlight> using the form in the "let's talk" section.
        </p>
      </div>
    </div>
  );
};

export default React.memo(ComeJoinUs);