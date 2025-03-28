/**
 * CareersSection.tsx
 * Created: 2025-03-21
 * Description: A comprehensive careers section for the ForProfessionalsPage
 * This section provides detailed information about working at Belong and current job openings
 */

import { useState } from 'react';
import { UserPlus, Heart, Clock, Award, Briefcase } from 'lucide-react';
import Modal from '../ui/Modal';

// Sample job openings data - in a real app, this would come from an API or CMS
const jobOpenings = [
  {
    title: "Residential Care Coordinator",
    location: "Aspen Grove House, Brooklyn Park, MN",
    type: "Full-time",
    description: "We're looking for a compassionate and organized Residential Care Coordinator to oversee daily operations at our Aspen Grove House. This role involves managing medication administration, coordinating resident activities, and ensuring a warm, supportive environment for our residents.",
    requirements: [
      "Licensed Practical Nurse (LPN) or Registered Nurse (RN) certification",
      "Minimum 2 years experience in mental health care",
      "Strong organizational and documentation skills",
      "Excellent interpersonal and communication abilities",
      "Genuine passion for creating home-like environments for people with mental health conditions"
    ]
  },
  {
    title: "Overnight Support Staff",
    location: "Willow Stream Residence, Brooklyn Park, MN",
    type: "Part-time",
    description: "Join our team as an Overnight Support Staff member at our 55+ residence. This role involves providing overnight supervision, responding to resident needs, medication management, and maintaining a safe, comfortable environment during night hours.",
    requirements: [
      "Certified Nursing Assistant (CNA) or related certification preferred",
      "Experience working with older adults",
      "Ability to work overnight shifts (10pm-6am)",
      "Reliable transportation",
      "Excellent observation and documentation skills",
      "Calm demeanor and good judgment in responding to emergencies"
    ]
  }
];

// Staff testimonials
const testimonials = [
  {
    quote: "Working at Belong is completely different from my previous jobs in larger facilities. Here, I actually get to know each resident personally and can provide truly individualized care.",
    name: "Maria J.",
    role: "Care Coordinator, 3 years at Belong"
  },
  {
    quote: "Frances has created a workplace where staff are valued just as much as residents. I've never felt more supported in my career, and that makes me better at supporting our residents.",
    name: "David T.",
    role: "Support Staff, 2 years at Belong"
  }
];

const CareersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);

  const openJobModal = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <section className="mb-16" id="careers">
      <div className="flex items-center mb-6">
        <UserPlus size={24} className="text-primary mr-3" />
        <h2 className="font-serif text-3xl">Join Our Team</h2>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-sm mb-8">
        <div className="flex items-center mb-4">
          <Heart size={20} className="text-primary mr-2" />
          <h3 className="font-serif text-xl">Frances's Hiring Philosophy</h3>
        </div>
        
        <p className="mb-4">
          "I hire people who believe in creating genuine homes, not institutions. At Belong, we look for team members who share our vision of dignity, community, and personalized care. Technical skills can be taught, but genuine compassion and respect for our residents is essential."
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-sm shadow-sm">
            <div className="flex items-center mb-3">
              <Clock size={18} className="text-primary mr-2" />
              <h4 className="font-medium">Staff-to-Resident Ratio</h4>
            </div>
            <p className="text-sm">
              We maintain a 1:4 staff-to-resident ratio during day hours and 1:8 during overnight hours, significantly better than industry standards, allowing for more personalized care.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-sm shadow-sm">
            <div className="flex items-center mb-3">
              <Award size={18} className="text-primary mr-2" />
              <h4 className="font-medium">Training & Development</h4>
            </div>
            <p className="text-sm">
              All staff receive comprehensive initial training and ongoing professional development in mental health care, crisis prevention, and person-centered approaches.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-sm shadow-sm">
            <div className="flex items-center mb-3">
              <Briefcase size={18} className="text-primary mr-2" />
              <h4 className="font-medium">Work Environment</h4>
            </div>
            <p className="text-sm">
              Our small, home-like settings create a more intimate work environment where staff can build meaningful relationships with residents and truly make a difference.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="font-serif text-xl mb-4">A Day in the Life at Belong</h3>
          
          <div className="space-y-4">
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-medium text-primary">Morning (7am-11am)</h4>
              <p className="text-sm mt-1">
                Assist residents with morning routines, medication administration, and breakfast. 
                Facilitate morning activities or community outings. Document observations and update care plans.
              </p>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-medium text-primary">Afternoon (11am-5pm)</h4>
              <p className="text-sm mt-1">
                Prepare and serve lunch, coordinate appointments and transportation. 
                Support residents with personal errands and afternoon activities. 
                Collaborate with healthcare providers and case managers.
              </p>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-medium text-primary">Evening (5pm-10pm)</h4>
              <p className="text-sm mt-1">
                Prepare dinner and facilitate family-style dining. 
                Support evening routines and social activities. 
                Evening medication administration and documentation.
              </p>
            </div>
            
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-medium text-primary">Overnight (10pm-7am)</h4>
              <p className="text-sm mt-1">
                Maintain safe, quiet environment. Respond to resident needs as they arise. 
                Complete required documentation and prepare for morning shift.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-xl mb-4">Staff Testimonials</h3>
          
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-sm">
                <p className="italic text-text/80 mb-2">"{testimonial.quote}"</p>
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="text-xs text-text/60">{testimonial.role}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h3 className="font-serif text-xl mb-4">Required Credentials</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm">Care Coordinators:</h4>
                <p className="text-sm">LPN, RN, or equivalent healthcare certification with mental health experience</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm">Support Staff:</h4>
                <p className="text-sm">CNA preferred, high school diploma required, experience in mental health settings valued</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm">All Positions:</h4>
                <p className="text-sm">Background check, drug screening, CPR certification, and commitment to person-centered care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="font-serif text-xl mb-4">Current Openings</h3>
        
        {jobOpenings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-sm hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{job.title}</h4>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <p className="text-sm text-text/70 mb-3">{job.location}</p>
                <p className="text-sm mb-4 line-clamp-2">{job.description}</p>
                <button
                  onClick={() => openJobModal(job)}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 p-6 rounded-sm text-center">
            <p className="mb-4">
              We don't have any specific openings at the moment, but we're always looking for exceptional people to join our team.
            </p>
            <a 
              href="mailto:careers@belonghomecare.com" 
              className="inline-block bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Join Our Talent Pool
            </a>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-sm">
        <h3 className="font-serif text-xl mb-4">Application Process</h3>
        
        <ol className="space-y-4">
          <li className="flex">
            <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <div>
              <h4 className="font-medium">Submit Application</h4>
              <p className="text-sm text-text/70">
                Email your resume and cover letter to <a href="mailto:careers@belonghomecare.com" className="text-primary hover:underline">careers@belonghomecare.com</a>
              </p>
            </div>
          </li>
          
          <li className="flex">
            <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <div>
              <h4 className="font-medium">Initial Phone Screening</h4>
              <p className="text-sm text-text/70">
                A brief call to discuss your experience and interest in Belong
              </p>
            </div>
          </li>
          
          <li className="flex">
            <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
            <div>
              <h4 className="font-medium">In-Person Interview</h4>
              <p className="text-sm text-text/70">
                Meet with Frances and tour one of our homes
              </p>
            </div>
          </li>
          
          <li className="flex">
            <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
            <div>
              <h4 className="font-medium">Background Check & References</h4>
              <p className="text-sm text-text/70">
                Standard screening process for all healthcare positions
              </p>
            </div>
          </li>
          
          <li className="flex">
            <span className="bg-primary/20 text-primary font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
            <div>
              <h4 className="font-medium">Offer & Onboarding</h4>
              <p className="text-sm text-text/70">
                Comprehensive training and orientation to our approach
              </p>
            </div>
          </li>
        </ol>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedJob?.title || "Job Details"}
        primaryLabel={selectedJob?.type}
        locationPin={selectedJob?.location}
      >
        <div className="overflow-y-auto max-h-[60vh]">
          {selectedJob && (
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
                  You can also call Frances directly at <a href="tel:+16125557890" className="text-primary hover:underline">(612) 555-7890</a> to learn more about this position.
                </p>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default CareersSection;
