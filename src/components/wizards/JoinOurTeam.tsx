/**
 * JoinOurTeam.tsx
 * Created: 2025-03-21
 * Description: Wizard component for job applications
 * This component provides a step-by-step process for users to apply for jobs at Belong
 */
import React, { useState } from 'react';
import WizardCard from '../ui/WizardCard';
import WizardModal, { WizardFormData, WizardStepContentProps } from '../ui/WizardModal';
import { Heart } from 'lucide-react';

// Sample job openings data
const jobOpenings = [
  {
    title: "Residential Care Coordinator",
    location: "Aspen Grove House, Brooklyn Park, MN",
    type: "Full-time",
    description: "We're looking for a compassionate and organized Residential Care Coordinator to oversee daily operations at our Aspen Grove House.",
    requirements: [
      "Licensed Practical Nurse (LPN) or Registered Nurse (RN) certification",
      "Minimum 2 years experience in mental health care",
      "Strong organizational and documentation skills",
      "Excellent interpersonal and communication abilities",
      "Genuine passion for creating home-like environments for people with mental health conditions"
    ]
  }
];

// Create empty components that will be populated with props by the WizardModal
const PersonalInfoStep = React.forwardRef<HTMLDivElement, WizardStepContentProps>((props, ref) => {
  const { formData, updateFormData } = props;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-1">Your Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="(123) 456-7890"
        />
      </div>
    </div>
  );
});

const JobPreferencesStep = React.forwardRef<HTMLDivElement, WizardStepContentProps>((props, ref) => {
  const { formData, updateFormData } = props;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ [e.target.name]: e.target.checked });
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="position" className="block text-sm font-medium mb-1">Position of Interest</label>
        <select
          id="position"
          name="position"
          value={formData.position as string || ''}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a position</option>
          {jobOpenings.map((job, index) => (
            <option key={index} value={job.title}>{job.title}</option>
          ))}
          <option value="other">Other/Not Listed</option>
        </select>
      </div>
      
      {formData.position === 'other' && (
        <div>
          <label htmlFor="otherPosition" className="block text-sm font-medium mb-1">Please Specify</label>
          <input
            type="text"
            id="otherPosition"
            name="otherPosition"
            value={formData.otherPosition as string || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Position you're interested in"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="experience" className="block text-sm font-medium mb-1">Relevant Experience</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience as string || ''}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Briefly describe your relevant experience"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Availability</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="fullTime"
              name="fullTime"
              checked={!!formData.fullTime}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="fullTime" className="text-sm">Full-time</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="partTime"
              name="partTime"
              checked={!!formData.partTime}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="partTime" className="text-sm">Part-time</label>
          </div>
        </div>
      </div>
    </div>
  );
});

const ConfirmationStep = React.forwardRef<HTMLDivElement, WizardStepContentProps>((props, ref) => {
  const { formData } = props;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <Heart size={18} className="text-primary mr-2" />
        <h3 className="font-serif text-lg">Frances's Hiring Philosophy</h3>
      </div>
      
      <p className="mb-4">
        "I hire for heart first, skills second. Technical abilities can be taught, but genuine compassion and respect for our residents is essential." - Frances, Founder
      </p>
      
      <div className="bg-gray-50 p-4 rounded-sm">
        <h4 className="font-medium mb-2">Your Application Summary</h4>
        <ul className="space-y-2 text-sm">
          <li><span className="font-medium">Name:</span> {formData.fullName}</li>
          <li><span className="font-medium">Email:</span> {formData.email}</li>
          <li><span className="font-medium">Phone:</span> {formData.phone}</li>
          <li><span className="font-medium">Position:</span> {formData.position === 'other' ? formData.otherPosition : formData.position}</li>
        </ul>
      </div>
      
      <p className="text-sm text-text/70 mt-4">
        After submitting, we'll review your application and contact you within 3-5 business days to discuss next steps.
      </p>
    </div>
  );
});

const JoinOurTeam = () => {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  
  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };
  
  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };
  
  const handleComplete = (data: WizardFormData) => {
    console.log('Job application submitted:', data);
    // Here you would typically send the data to your backend
    setIsWizardOpen(false);
    // Show success message or redirect
  };
  
  const wizardSteps = [
    {
      title: "Your Information",
      description: "Tell us about yourself",
      content: <PersonalInfoStep />
    },
    {
      title: "Job Preferences",
      description: "What position interests you?",
      content: <JobPreferencesStep />
    },
    {
      title: "Confirm Application",
      description: "Review your information",
      content: <ConfirmationStep />
    }
  ];
  
  return (
    <>
      <WizardCard
        title="join our team"
        description="We hire people who believe in creating genuine homes, not institutions. Join a team that's making a real difference."
        buttonText="Apply Now"
        onButtonClick={handleOpenWizard}
      />
      
      <WizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        title="Join Our Team"
        steps={wizardSteps}
        onComplete={handleComplete}
      />
    </>
  );
};

export default JoinOurTeam;
