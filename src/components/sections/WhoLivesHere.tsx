import React from 'react';
import Highlight from '../ui/Highlight';

const WhoLivesHere = () => {
  return (
    <div>
      <p className="mb-4">
        Our residents come from diverse backgrounds and ages, each with unique mental health needs. 
        What they share is that <Highlight>people feel like they belong here</Highlight>, as part 
        of our extended family.
      </p>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">Our Residents</h3>
        <p className="mb-4">
          In our 18+ home, most residents are in their 30s-50s. Many have diagnoses like schizophrenia, 
          bipolar disorder, or schizoaffective disorder.
        </p>
        <p>
          Our 55+ home serves older adults who need additional support with mental health conditions, 
          often alongside physical health needs.
        </p>
      </div>
      
      <div className="my-6 border-l-2 border-primary pl-4 italic">
        <p>"Before I came to Belong, I was in and out of hospitals. Here, I've been stable for three years. 
        I actually feel like I have a home now, not just a place to stay."</p>
        <p className="text-right">— Resident, Aspen Grove House</p>
      </div>
      
      <p>
        We respect everyone's privacy while celebrating their individuality. Many of our residents 
        stay with us for years, creating a stable community where meaningful relationships develop 
        naturally.
      </p>
    </div>
  );
};

export default React.memo(WhoLivesHere);