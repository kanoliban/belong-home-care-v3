/**
 * ReferralTimeline.tsx
 * Created: 2025-03-20
 * Description: A visual, interactive timeline component for the referral process
 * Displays the steps from initial contact to admission in a flowing timeline format
 */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, FileText, ClipboardCheck, CheckCircle, Home } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ReferralTimeline = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps: TimelineStep[] = [
    {
      id: 1,
      title: "Initial Contact",
      description: "Call or email to discuss the potential resident, current availability, and determine if our setting might be appropriate.",
      icon: <Phone size={20} />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Referral Submission",
      description: "Complete and submit our referral form along with relevant medical and psychological history, current medications, and behavioral information.",
      icon: <FileText size={20} />,
      color: "bg-primary"
    },
    {
      id: 3,
      title: "Assessment",
      description: "Our team reviews the referral materials and schedules a face-to-face assessment when possible to determine if we can meet the individual's needs.",
      icon: <ClipboardCheck size={20} />,
      color: "bg-amber-500"
    },
    {
      id: 4,
      title: "Decision & Planning",
      description: "We provide a timely response to referrals, usually within 3-5 business days. If accepted, we work with you to coordinate the transition.",
      icon: <CheckCircle size={20} />,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Admission",
      description: "We schedule a move-in date and work with your team on a smooth transition, including medication transfers and care coordination.",
      icon: <Home size={20} />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="my-8">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        
        {/* Timeline steps */}
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={`relative z-10 mb-12 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-8' : 'md:mr-auto md:ml-[50%] md:pl-8'} md:w-[45%]`}
          >
            {/* Timeline dot */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto 
                        md:right-0 md:translate-y-1/2 md:mr-[-8px] md:mt-[-8px]"
              style={{ 
                [index % 2 === 0 ? 'right' : 'left']: '-8px',
                [index % 2 === 0 ? 'left' : 'right']: 'auto'
              }}
            >
              <motion.div 
                className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} text-white shadow-md
                          cursor-pointer transition-transform hover:scale-110`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                {step.icon}
              </motion.div>
            </div>
            
            {/* Content card */}
            <motion.div 
              className={`bg-[#f9f9f9] border border-gray-200 p-4 rounded-md shadow-sm
                        ${activeStep === step.id ? 'ring-2 ring-primary ring-opacity-50' : ''}`}
              initial={{ opacity: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)" 
              }}
              animate={{ 
                opacity: 1,
                scale: activeStep === step.id ? 1.02 : 1
              }}
              onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
            >
              <div className="flex items-center mb-2">
                <div className={`w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center mr-3`}>
                  {step.id}
                </div>
                <h3 className="font-medium text-lg">{step.title}</h3>
              </div>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeStep === step.id ? 'auto' : 0,
                  opacity: activeStep === step.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-text/90 mt-2">{step.description}</p>
                
                {step.id === 2 && (
                  <div className="mt-4">
                    <button className="bg-primary text-white px-3 py-1.5 rounded-sm text-sm hover:bg-primary/90 transition-colors">
                      Download Referral Form
                    </button>
                  </div>
                )}
                
                {step.id === 1 && (
                  <div className="mt-4">
                    <a href="/contact" className="text-primary hover:underline text-sm">
                      Contact Us Directly →
                    </a>
                  </div>
                )}
              </motion.div>
              
              {activeStep !== step.id && (
                <p className="text-sm text-text/60 mt-1">Click to expand</p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4">
        <button 
          className="bg-primary/10 text-primary px-4 py-2 rounded-sm hover:bg-primary/20 transition-colors"
          onClick={() => setActiveStep(null)}
        >
          Reset Timeline
        </button>
      </div>
    </div>
  );
};

export default ReferralTimeline;
