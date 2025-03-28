/**
 * WizardModal.tsx
 * Created: 2025-03-19
 * Description: Multi-step wizard modal component for guided user flows
 * Extends the base Modal component with step navigation and progress tracking
 * Updated: 2025-03-20 - Adjusted layout to prevent scrolling within wizard steps
 */
import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Modal from './Modal';

// Define types for form data and step content props
export interface WizardFormData {
  [key: string]: string | number | boolean | string[] | undefined;
}

export interface WizardStepContentProps {
  formData: WizardFormData;
  updateFormData: (newData: Partial<WizardFormData>) => void;
}

interface WizardStep {
  title: string;
  description?: string;
  content: ReactNode;
}

interface WizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  steps: WizardStep[];
  onComplete: (data: WizardFormData) => void;
}

const WizardModal = ({
  isOpen,
  onClose,
  title,
  steps,
  onComplete
}: WizardModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<WizardFormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleComplete = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onComplete(formData);
      setIsSubmitting(false);
      // Reset for next time
      setCurrentStep(0);
      setFormData({});
    }, 1000);
  };
  
  const updateFormData = (newData: Partial<WizardFormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };
  
  // Add the form data and update function to each step's content
  const stepsWithData = steps.map(step => {
    // Create a new step object with the same properties
    const newStep = { ...step };
    
    // If the content is a React element, clone it with the formData and updateFormData props
    if (React.isValidElement(step.content)) {
      newStep.content = React.cloneElement(step.content as React.ReactElement, {
        formData,
        updateFormData
      });
    }
    
    return newStep;
  });
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="wizard-container flex flex-col h-[500px]">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-4 pt-2 flex-shrink-0">
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-text/60">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
        
        {/* Step content */}
        <div className="flex-grow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <h3 className="text-xl font-serif mb-2 flex-shrink-0">{stepsWithData[currentStep].title}</h3>
              {stepsWithData[currentStep].description && (
                <p className="text-text/70 mb-4 flex-shrink-0">{stepsWithData[currentStep].description}</p>
              )}
              
              <div className="wizard-step-content flex-grow overflow-auto pr-2">
                {stepsWithData[currentStep].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-md transition-colors ${
              currentStep === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-text/70 hover:text-text'
            }`}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex items-center bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            {currentStep < steps.length - 1 ? (
              <>
                Next
                <ArrowRight size={16} className="ml-2" />
              </>
            ) : isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              <>
                Complete
                <Check size={16} className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default WizardModal;
