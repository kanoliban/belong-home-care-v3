/**
 * CaseManagerReferral.tsx
 * Created: 2025-03-19
 * Description: Wizard component for healthcare professionals to make resident referrals
 * Updated: 2025-03-20 - Adjusted layout to be more compact and prevent scrolling
 */
import React, { useState } from 'react';
import WizardModal, { WizardFormData, WizardStepContentProps } from '../ui/WizardModal';
import WizardCard from '../ui/WizardCard';

// Step components
const InitialInfoStep = ({ formData, updateFormData }: WizardStepContentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="caseManagerName" className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            id="caseManagerName"
            name="caseManagerName"
            value={formData.caseManagerName as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your organization"
          />
        </div>
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
        <label htmlFor="role" className="block text-sm font-medium mb-1">Your Role</label>
        <select
          id="role"
          name="role"
          value={formData.role as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select your role</option>
          <option value="case_manager">Case Manager</option>
          <option value="social_worker">Social Worker</option>
          <option value="discharge_planner">Discharge Planner</option>
          <option value="healthcare_provider">Healthcare Provider</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

const ResidentInfoStep = ({ formData, updateFormData }: WizardStepContentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="residentName" className="block text-sm font-medium mb-1">Resident Name</label>
          <input
            type="text"
            id="residentName"
            name="residentName"
            value={formData.residentName as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Resident's full name"
          />
        </div>
        
        <div>
          <label htmlFor="residentAge" className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            id="residentAge"
            name="residentAge"
            value={formData.residentAge as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Resident's age"
            min="55"
            max="120"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="currentLocation" className="block text-sm font-medium mb-1">Current Location</label>
        <select
          id="currentLocation"
          name="currentLocation"
          value={formData.currentLocation as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select current location</option>
          <option value="hospital">Hospital</option>
          <option value="skilled_nursing">Skilled Nursing Facility</option>
          <option value="assisted_living">Assisted Living</option>
          <option value="home">Home</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="careNeeds" className="block text-sm font-medium mb-1">Primary Care Needs</label>
        <select
          id="careNeeds"
          name="careNeeds"
          value={formData.careNeeds as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select primary care needs</option>
          <option value="memory_care">Memory Care</option>
          <option value="mobility_assistance">Mobility Assistance</option>
          <option value="medication_management">Medication Management</option>
          <option value="activities_daily_living">Activities of Daily Living</option>
          <option value="social_engagement">Social Engagement</option>
          <option value="multiple">Multiple Needs</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="timeframe" className="block text-sm font-medium mb-1">Desired Timeframe</label>
        <select
          id="timeframe"
          name="timeframe"
          value={formData.timeframe as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select timeframe</option>
          <option value="immediate">Immediate (within days)</option>
          <option value="soon">Soon (within 2 weeks)</option>
          <option value="planning">Planning (within 1-2 months)</option>
          <option value="future">Future (2+ months)</option>
        </select>
      </div>
    </div>
  );
};

const AdditionalInfoStep = ({ formData, updateFormData }: WizardStepContentProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="medicalNotes" className="block text-sm font-medium mb-1">Medical Notes (Optional)</label>
        <textarea
          id="medicalNotes"
          name="medicalNotes"
          value={formData.medicalNotes as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md h-20"
          placeholder="Relevant medical information (diagnoses, medications, etc.)"
        />
      </div>
      
      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          value={formData.additionalNotes as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md h-20"
          placeholder="Any other information that would be helpful for us to know"
        />
      </div>
    </div>
  );
};

const ConfirmationStep = ({ formData }: WizardStepContentProps) => {
  return (
    <div className="space-y-3">
      <p className="text-sm">Please review the referral information before submitting:</p>
      
      <div className="bg-gray-50 p-3 rounded-md">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="font-medium">Referrer:</p>
            <p>{formData.caseManagerName || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Organization:</p>
            <p>{formData.organization || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Resident:</p>
            <p>{formData.residentName || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Age:</p>
            <p>{formData.residentAge || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Current Location:</p>
            <p>{formData.currentLocation || 'Not provided'}</p>
          </div>
          <div>
            <p className="font-medium">Timeframe:</p>
            <p>{formData.timeframe || 'Not provided'}</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">
        By clicking "Complete", this referral will be sent to our admissions team. We'll contact you within 24 hours to discuss next steps.
      </p>
    </div>
  );
};

const CaseManagerReferral = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };
  
  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };
  
  const handleComplete = (data: WizardFormData) => {
    console.log('Referral submitted:', data);
    // Here you would typically send the data to your backend
    setIsWizardOpen(false);
    // Show success message or redirect
  };
  
  const wizardSteps = [
    {
      title: "Your Information",
      description: "Tell us about yourself",
      content: <InitialInfoStep />
    },
    {
      title: "Resident Information",
      description: "Tell us about the potential resident",
      content: <ResidentInfoStep />
    },
    {
      title: "Additional Information",
      description: "Any other details we should know",
      content: <AdditionalInfoStep />
    },
    {
      title: "Confirm Referral",
      description: "Review and submit your referral",
      content: <ConfirmationStep />
    }
  ];
  
  return (
    <>
      <WizardCard
        title="for healthcare professionals"
        description="We're currently accepting new residents at our 55+ home. Our streamlined referral process makes placement quick and efficient."
        buttonText="Make a Referral"
        highlighted={true}
        onButtonClick={handleOpenWizard}
      />
      
      <WizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        title="Make a Resident Referral"
        steps={wizardSteps}
        onComplete={handleComplete}
      />
    </>
  );
};

export default CaseManagerReferral;
