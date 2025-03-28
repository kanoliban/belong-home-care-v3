/**
 * FamilyVisit.tsx
 * Created: 2025-03-19
 * Description: Wizard component for families to schedule visits
 * Updated: 2025-03-20 - Adjusted layout to be more compact and prevent scrolling
 */
import React, { useState } from 'react';
import WizardCard from '../ui/WizardCard';
import WizardModal, { WizardFormData, WizardStepContentProps } from '../ui/WizardModal';

// Step components
const VisitorInfoStep = ({ formData, updateFormData }: WizardStepContentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="visitorName" className="block text-sm font-medium mb-1">Your Name</label>
        <input
          type="text"
          id="visitorName"
          name="visitorName"
          value={formData.visitorName as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Your full name"
        />
      </div>
      
      <div>
        <label htmlFor="relationship" className="block text-sm font-medium mb-1">Relationship to Potential Resident</label>
        <select
          id="relationship"
          name="relationship"
          value={formData.relationship as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select relationship</option>
          <option value="spouse">Spouse/Partner</option>
          <option value="child">Child/Stepchild</option>
          <option value="sibling">Sibling</option>
          <option value="other-family">Other Family Member</option>
          <option value="friend">Friend</option>
          <option value="self">Self (I am the potential resident)</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your email address"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your phone number"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="groupSize" className="block text-sm font-medium mb-1">Number of People Visiting</label>
        <select
          id="groupSize"
          name="groupSize"
          value={formData.groupSize as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select group size</option>
          <option value="1">Just me (1 person)</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5+">5 or more people</option>
        </select>
      </div>
    </div>
  );
};

const VisitPreferencesStep = ({ formData, updateFormData }: WizardStepContentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">Preferred Visit Date</label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      
      <div>
        <label htmlFor="timePreference" className="block text-sm font-medium mb-1">Preferred Time</label>
        <select
          id="timePreference"
          name="timePreference"
          value={formData.timePreference as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select time preference</option>
          <option value="morning">Morning (10am-12pm)</option>
          <option value="early-afternoon">Early Afternoon (12pm-2pm)</option>
          <option value="late-afternoon">Late Afternoon (2pm-4pm)</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="alternateDate" className="block text-sm font-medium mb-1">Alternate Date (Optional)</label>
        <input
          type="date"
          id="alternateDate"
          name="alternateDate"
          value={formData.alternateDate as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="flexibleTiming"
            checked={formData.flexibleTiming as boolean || false}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-sm">I'm flexible with timing</span>
        </label>
      </div>
      
      <div>
        <label htmlFor="interests" className="block text-sm font-medium mb-1">Areas of Interest</label>
        <textarea
          id="interests"
          name="interests"
          value={formData.interests as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="E.g., bedrooms, common areas, activities, meal plans, etc."
          rows={3}
        />
      </div>
      
      <div>
        <label htmlFor="questions" className="block text-sm font-medium mb-1">Questions for the Visit</label>
        <textarea
          id="questions"
          name="questions"
          value={formData.questions as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Any specific questions you'd like answered during your visit?"
          rows={3}
        />
      </div>
    </div>
  );
};

const ConfirmationStep = ({ formData }: WizardStepContentProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm">Please review your information before submitting:</p>
      
      <div className="bg-gray-50 p-3 rounded-md">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="font-medium">Name:</p>
            <p>{formData.visitorName || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Relationship:</p>
            <p>{formData.relationship || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Email:</p>
            <p>{formData.email || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Phone:</p>
            <p>{formData.phone || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Group Size:</p>
            <p>{formData.groupSize || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Preferred Date:</p>
            <p>{formData.preferredDate || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Preferred Time:</p>
            <p>{formData.timePreference || 'Not provided'}</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">
        By clicking "Complete", your visit request will be sent to our team. We'll contact you within 24 hours to confirm your visit.
      </p>
    </div>
  );
};

const FamilyVisit = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };
  
  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };
  
  const handleComplete = (data: WizardFormData) => {
    console.log('Visit scheduled:', data);
    // Here you would typically send the data to your backend
    setIsWizardOpen(false);
    // Show success message or redirect
  };
  
  const wizardSteps = [
    {
      title: "Your Information",
      description: "Tell us about yourself",
      content: <VisitorInfoStep />
    },
    {
      title: "Visit Preferences",
      description: "When would you like to visit?",
      content: <VisitPreferencesStep />
    },
    {
      title: "Confirm Details",
      description: "Review your information",
      content: <ConfirmationStep />
    }
  ];
  
  return (
    <>
      <WizardCard
        title="for families & loved ones"
        description="We'd love to show you around our homes and answer any questions you have about our services and accommodations."
        buttonText="Schedule a Visit"
        onButtonClick={handleOpenWizard}
      />
      
      <WizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        title="Schedule a Visit"
        steps={wizardSteps}
        onComplete={handleComplete}
      />
    </>
  );
};

export default FamilyVisit;
