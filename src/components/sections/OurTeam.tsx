import React from 'react';
import Highlight from '../ui/Highlight';

const OurTeam = () => {
  return (
    <div>
      <p className="mb-4">
        Our team consists of compassionate professionals who share my vision of creating homes where
        <Highlight> I wanted somewhere people felt like family</Highlight> rather than patients.
      </p>
      
      <div className="my-6">
        <h3 className="font-serif text-xl mb-3">Our Staff</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-serif font-medium">Frances Johnson, RN</h4>
            <p className="text-sm text-text/70">Founder & Director of Care</p>
            <p className="mt-1">
              With over 10 years as a psychiatric nurse, I oversee all aspects of care and operations.
              Belong is my vision of what mental health care should be.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-medium">Our Care Team</h4>
            <p className="mt-1">
              Our homes are staffed 24/7 by trained mental health professionals, including:
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Licensed Practical Nurses (medication management)</li>
              <li>• Mental Health Practitioners (daily support and activities)</li>
              <li>• Residential Counselors (overnight support)</li>
              <li>• Culinary Staff (home-cooked meals)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <p>
        We maintain a high staff-to-resident ratio to ensure everyone receives personalized attention. 
        Many of our team members have been with us for years, creating consistency and trust with our residents.
      </p>
    </div>
  );
};

export default React.memo(OurTeam);