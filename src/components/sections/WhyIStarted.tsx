import React from 'react';
import Highlight from '../ui/Highlight';

const WhyIStarted = () => {
  return (
    <div>
      <div className="mb-6 aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Caring hands symbolizing support" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <p className="mb-4">
        My cousin was diagnosed with schizophrenia in his early twenties. Watching him navigate 
        the mental healthcare system showed me how <Highlight>people deserve better</Highlight> than 
        the minimal standard of care most places provide.
      </p>
      
      <p className="mb-4">
        After 10 years working as a psychiatric nurse, I saw that most residential care facilities 
        focus on medication management and basic needs, but rarely create a true sense of belonging 
        or family.
      </p>
      
      <p className="mb-4">
        I wanted to create a place where people feel <Highlight>valued as individuals</Highlight>, 
        where their cultural backgrounds and preferences are honored, and where they can truly 
        call it home.
      </p>
      
      <div className="my-6 border-l-2 border-primary pl-4 italic">
        <p>"I remember thinking: if my cousin lived here, would I feel good about it? The answer for most places was no."</p>
      </div>
      
      <p className="mb-4">
        Belong Health Care isn't a facility—it's my vision for what mental health care should be: 
        personal, warm, and focused on creating an environment where people can <Highlight>thrive, 
        not just survive</Highlight>.
      </p>
      
      <p>
        Every aspect of our homes—from the food we cook to the activities we plan—is designed with 
        this vision in mind. I hope you'll get a sense of what makes Belong special as you explore 
        our community.
      </p>
    </div>
  );
};

export default React.memo(WhyIStarted);