/**
 * src/pages/ForProfessionalsPage.tsx
 * Purpose: Provides information for healthcare professionals, case managers, and potential employees,
 *          including referral process, eligibility criteria, and career opportunities.
 * 
 * Date: 2025-04-01
 * Description: Updated to match the visual style and component structure of the HomePage, AboutPage, and ForFamiliesPage.
 *              Implemented consistent card-based styling for visual consistency.
 *              Adjusted spacing between sections to be more consistent with other pages.
 *              Moved section headings inside cards for visual consistency.
 *              Maintained existing content but restructured for better visual flow.
 *              Updated 2025-04-01: Ensured all titles are inside their respective cards and adjusted spacing.
 *              Updated: 2025-04-01 - Updated phone number.
 *              Updated: 2025-04-01 - Increased header font size to match AboutPage styling but larger.
 */
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import { FileText, ClipboardCheck, Home, Users, Briefcase } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-serif text-6xl md:text-7xl mb-4">for professionals.</h1>
        
        {/* Current Availability Section */}
        <div className="bg-primary/10 p-6 rounded-sm mb-4">
          <h2 className="font-serif text-2xl mb-4">Current Availability</h2>
          <div className="flex items-center">
            <Users size={24} className="text-primary mr-3" />
          </div>
          <p className="text-lg mt-2">
            <Highlight className="font-semibold">We currently have 3 beds available in our 55+ home</Highlight> 
            (Willow Stream Residence) and are actively accepting referrals. For the fastest response, 
            please call Frances directly at <Highlight className="font-semibold">(651) 705-6625</Highlight>.
          </p>
        </div>
        
        {/* Referral Process and Eligibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Referral Process Card */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
            <h2 className="font-serif text-2xl mb-4">Referral Process</h2>
            <div className="flex items-center">
              <FileText size={22} className="text-primary mr-3" />
            </div>
            
            <p className="mb-4">
              As a case manager or healthcare provider, you play a crucial role in helping individuals 
              find appropriate care settings. We aim to make the referral process straightforward while 
              ensuring proper assessment for fit.
            </p>
            
            <ReferralTimeline />
          </div>
          
          {/* Eligibility Criteria Card */}
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
            <h2 className="font-serif text-2xl mb-4">Eligibility Criteria</h2>
            <div className="flex items-center">
              <ClipboardCheck size={22} className="text-primary mr-3" />
            </div>
            
            <p className="mb-3">
              Our residences serve adults with mental health conditions who need 
              supervised care but can participate in their recovery journey.
            </p>
            
            <h3 className="font-medium text-lg mb-2">Aspen Grove House (18+)</h3>
            <ul className="space-y-1 mb-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Adults 18+ with mental health diagnoses</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Stable enough for community living</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Need medication management</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Able to engage in treatment plans</span>
              </li>
            </ul>
            
            <h3 className="font-medium text-lg mb-2">Willow Stream Residence (55+)</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Adults 55+ with mental health needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>May have mild cognitive impairment</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Need daily living assistance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Can participate in home routines</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Our Services Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
          <h2 className="font-serif text-2xl mb-4">Services & Support Provided</h2>
          <div className="flex items-center">
            <Home size={24} className="text-primary mr-3" />
          </div>
            
          <p className="mb-4">
            We provide comprehensive support tailored to each resident's needs. All services are 
            delivered with dignity and respect, focusing on both recovery and quality of life:
          </p>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-sm border border-gray-200 mb-4">
              <h3 className="font-serif text-xl mb-3">Daily Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 staffing and supervision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Medication management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Assistance with ADLs as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Nutritious meals and snacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transportation to appointments</span>
                </li>
              </ul>
            </div>
              
            <div className="bg-white p-5 rounded-sm border border-gray-200 mb-4">
              <h3 className="font-serif text-xl mb-3">Clinical Support</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Medication monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Health status observation</span>
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
              </ul>
            </div>
              
            <div className="bg-white p-5 rounded-sm border border-gray-200 mb-4">
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
        
        {/* Payment & Insurance Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
          <h2 className="font-serif text-2xl mb-4">Payment & Insurance</h2>
          <div className="flex items-center">
            <Briefcase size={22} className="text-primary mr-3" />
          </div>
            
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
        
        {/* Documentation & Reporting Section */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-4">
          <h2 className="font-serif text-2xl mb-4">Documentation & Reporting</h2>
          <div className="flex items-center">
            <FileText size={22} className="text-primary mr-3" />
          </div>
            
          <p className="mb-4">
            We provide comprehensive documentation to support care coordination:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        
        {/* Make a Referral Section */}
        <div className="bg-primary/5 p-6 rounded-sm mb-4">
          <h2 className="font-serif text-2xl mb-4">Make a Referral</h2>
          <div className="flex items-center">
            <Users size={24} className="text-primary mr-3" />
          </div>
          <p className="mb-4">
            Ready to refer a client to Belong? We aim to make the process as smooth as possible:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Contact Options</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Phone:</strong> Call Frances directly at <a href="tel:+16517056625" className="text-primary hover:underline">(651) 705-6625</a>
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
      </div>
    </motion.div>
  );
};

export default ForProfessionalsPage;