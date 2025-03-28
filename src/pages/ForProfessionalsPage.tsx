import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import { FileText, ClipboardCheck, Home, Users } from 'lucide-react';
import ReferralTimeline from '../components/sections/ReferralTimeline';
import CareersSection from '../components/sections/CareersSection';

const ForProfessionalsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">for professionals.</h1>
        
        <div className="bg-primary/10 p-6 rounded-sm mb-10">
          <div className="flex items-center">
            <Users size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-2xl">Current Availability</h2>
          </div>
          <p className="text-lg mt-2">
            <Highlight className="font-semibold">We currently have 3 beds available in our 55+ home</Highlight> 
            (Willow Stream Residence) and are actively accepting referrals. For the fastest response, 
            please call Frances directly at <Highlight className="font-semibold">(612) 555-7890</Highlight>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <FileText size={22} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">Referral Process</h2>
            </div>
            
            <p className="mb-4">
              As a case manager or healthcare provider, you play a crucial role in helping individuals 
              find appropriate care settings. We aim to make the referral process straightforward while 
              ensuring proper assessment for fit.
            </p>
            
            <ReferralTimeline />
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <ClipboardCheck size={22} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">Eligibility Criteria</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl mb-2">Aspen Grove House (18+)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Adults aged 18+ with primary mental health diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Medically stable and able to participate in activities of daily living with support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Able to navigate stairs and two-story living environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Willing to participate in medication management program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>No recent history of severe aggression or self-harm requiring hospitalization</span>
                  </li>
                </ul>
                <p className="mt-2 text-sm text-text/70">Currently full with waitlist available</p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-2">Willow Stream Residence (55+)</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Adults aged 55+ with mental health diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>May have co-occurring physical health needs that don't require skilled nursing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Medically stable with medication management needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Able to perform basic ADLs with minimal to moderate assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>No current substance use disorder requiring primary treatment</span>
                  </li>
                </ul>
                <p className="mt-2 text-sm font-medium text-primary">Currently 3 beds available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Home size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">Our Services & Support</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-5 rounded-sm">
              <h3 className="font-serif text-xl mb-3">24/7 Residential Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Medication management and monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Symptom monitoring and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>ADL support and skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Nutritious home-cooked meals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transportation to appointments</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-5 rounded-sm">
              <h3 className="font-serif text-xl mb-3">Treatment Coordination</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Regular communication with providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Attendance at care conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Detailed documentation of care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Coordination with therapy services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaboration with case managers</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 p-5 rounded-sm">
              <h3 className="font-serif text-xl mb-3">Social & Community</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Structured daily activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Community outings and integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Life skills development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Family involvement opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cultural and holiday celebrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-sm mb-12">
          <h3 className="font-serif text-2xl mb-4">Payment & Insurance</h3>
          <p className="mb-4">
            We accept a variety of funding sources to make our care accessible to those who need it:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Medical Assistance (Medicaid)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>County-based funding programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Private pay options with flexible terms</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Some private insurance plans (verification required)</span>
            </li>
          </ul>
          <p className="text-sm text-text/70">
            We're happy to work with case managers to determine the best funding approach for each individual. 
            Please contact us to discuss specific payment options.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="font-serif text-2xl mb-4">Documentation & Reporting</h3>
          <p className="mb-4">
            We provide comprehensive documentation to support care coordination:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Regular Reports</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Monthly progress summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Medication administration records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Incident reports (as needed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Behavioral tracking data</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Care Coordination</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quarterly care conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Treatment plan participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Discharge planning support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Regular provider communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-sm mb-12">
          <h3 className="font-serif text-2xl mb-4">Make a Referral</h3>
          <p className="mb-4">
            Ready to refer a client to Belong? We aim to make the process as smooth as possible:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Contact Options</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Phone:</strong> Call Frances directly at <a href="tel:+16125557890" className="text-primary hover:underline">(612) 555-7890</a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Email:</strong> Send referral information to <a href="mailto:referrals@belonghomecare.com" className="text-primary hover:underline">referrals@belonghomecare.com</a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Online:</strong> Complete our secure referral form on this website
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Fax:</strong> Send documentation to (612) 555-7891
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">What We Need</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Basic demographic information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Current diagnosis and medications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Recent assessments or evaluations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Insurance or funding information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Current living situation</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a 
              href="#referral-form" 
              className="inline-block bg-primary text-white px-6 py-2 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Complete Online Referral
            </a>
          </div>
        </div>
        
        {/* Careers Section */}
        <CareersSection />
      </section>
    </motion.div>
  );
};

export default ForProfessionalsPage;