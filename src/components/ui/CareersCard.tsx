/**
 * CareersCard.tsx
 * Created: 2025-03-21
 * Description: A component for displaying careers information and job openings
 * This card is used on the homepage to highlight career opportunities at Belong
 * Updated: 2025-04-01 - Updated phone number.
 */

import React, { useState } from 'react';
import { UserPlus, Heart } from 'lucide-react';
import Modal from './Modal';

interface JobOpening {
  title: string;
  location: string;
  type: string; // Full-time, Part-time, etc.
  description: string;
  requirements: string[];
}

interface CareersCardProps {
  title?: string;
  description?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  jobOpenings?: JobOpening[];
  isFullWidth?: boolean;
}

const CareersCard = ({
  title = "join our team",
  description,
  imageUrl = "https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  className = "",
  jobOpenings = [],
  isFullWidth = false
}: CareersCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const openJobModal = (job: JobOpening) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const openGeneralModal = () => {
    setSelectedJob(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={`bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow ${isFullWidth ? 'w-full' : ''} ${className}`}>
        <div className={`flex flex-col ${isFullWidth ? 'md:flex-row' : ''}`}>
          {imageUrl && (
            <div className={`${isFullWidth ? 'md:w-1/3' : 'w-full'} h-48 overflow-hidden`}>
              <img 
                src={imageUrl} 
                alt="Belong team members" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className={`p-5 ${isFullWidth ? 'md:w-2/3' : 'w-full'}`}>
            <div className="flex items-center mb-3">
              <UserPlus size={18} className="text-primary mr-2" />
              <h3 className="font-serif text-xl">{title}</h3>
            </div>
            
            {description && (
              <div className="mb-4 text-text/80">
                {description}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-4">
              {jobOpenings.length > 0 ? (
                jobOpenings.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => openJobModal(job)}
                    className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-sm text-sm font-medium transition-colors"
                  >
                    {job.title}
                  </button>
                ))
              ) : (
                <button
                  onClick={openGeneralModal}
                  className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-sm text-sm font-medium transition-colors"
                >
                  View Openings
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedJob ? selectedJob.title : "Careers at Belong"}
        primaryLabel={selectedJob ? selectedJob.type : "Join Our Team"}
        locationPin={selectedJob ? selectedJob.location : "Brooklyn Park, MN"}
      >
        <div className="overflow-y-auto max-h-[60vh]">
          {selectedJob ? (
            <>
              <p className="mb-4">{selectedJob.description}</p>
              
              <h4 className="font-serif text-lg mb-2">Requirements:</h4>
              <ul className="space-y-2 mb-6">
                {selectedJob.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-serif text-lg mb-2">How to Apply:</h4>
                <p className="mb-4">
                  Please send your resume and a brief cover letter explaining why you'd be a great fit for Belong to:
                  <a href="mailto:careers@belonghomecare.com" className="text-primary ml-1 hover:underline">
                    careers@belonghomecare.com
                  </a>
                </p>
                <p>
                  You can also call Frances directly at <a href="tel:+16517056625" className="text-primary hover:underline">(651) 705-6625</a> to learn more about this position.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center mb-4">
                <Heart size={18} className="text-primary mr-2" />
                <h3 className="font-serif text-xl">Frances's Hiring Philosophy</h3>
              </div>
              
              <p className="mb-4">
                At Belong, we hire people who believe in creating genuine homes, not institutions. Our approach to staffing is centered on finding individuals who share our vision of dignity, community, and personalized care.
              </p>
              
              <p className="mb-4">
                "I hire for heart first, skills second. Technical abilities can be taught, but genuine compassion and respect for our residents is essential." - Frances, Founder
              </p>
              
              <h4 className="font-serif text-lg mb-2 mt-6">Current Openings:</h4>
              
              {jobOpenings.length > 0 ? (
                <div className="space-y-4">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="border border-gray-200 p-4 rounded-sm">
                      <div className="flex justify-between items-center mb-2">
                        <h5 className="font-medium">{job.title}</h5>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {job.type}
                        </span>
                      </div>
                      <p className="text-sm text-text/70 mb-3">{job.location}</p>
                      <button
                        onClick={() => openJobModal(job)}
                        className="text-primary text-sm hover:underline"
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-sm">
                  <p className="text-center">
                    We don't have any specific openings at the moment, but we're always looking for exceptional people to join our team.
                  </p>
                  <div className="mt-4 text-center">
                    <a 
                      href="mailto:careers@belonghomecare.com" 
                      className="inline-block bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
                    >
                      Join Our Talent Pool
                    </a>
                  </div>
                </div>
              )}
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h4 className="font-serif text-lg mb-2">Why Work at Belong?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Small, family-like environment with meaningful resident relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Supportive team culture focused on quality care, not bureaucracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Competitive pay and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Professional development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Flexible scheduling options</span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CareersCard;
