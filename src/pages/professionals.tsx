/**
 * Professionals Page
 * 
 * Purpose: Provides information specifically for case managers and other professionals,
 *          including referral processes, services, team approach, and contact details.
 * 
 * Updated: 2025-03-30 - Populated referrer and careers sections, added icons, structured job openings.
 * Updated: 2025-03-30 - Refactored using FeatureCard and ExpandableCard, shortened text content.
 * Updated: 2025-03-30 - Reordered sections to prioritize Case Manager needs (Referral, Availability first).
 * Updated: 2025-03-31 - Added 'True Home Environment' FeatureCard to Services section.
 * Updated: 2025-03-31 - Redesigned Careers section using cards, prioritizing openings & benefits.
 * Updated: 2025-03-31 - Simplified Careers section: shortened job details and benefit descriptions.
 * Updated: 2025-03-31 - Made job openings directly visible (no expand), shrunk benefit cards, updated apply links.
 * Updated: 2025-03-31 - Removed images from benefit cards for better height alignment.
 * Updated: 2025-03-31 - Fixed FeatureCard prop requirement after making imageUrl optional.
 * Updated: 2025-03-31 - Removed icons from benefit cards.
 * Updated: 2025-03-31 - Increased vertical padding on benefit cards for height symmetry.
 * Updated: 2025-03-31 - Re-applied increased vertical padding to 'Why Work With Us' FeatureCards.
 * Updated: 2025-03-31 - Explicitly targeted lines to ensure padding update.
 * Updated: 2025-03-31 - Added min-height instead of padding to force height increase.
 * Updated: 2025-03-31 - Removed min-height and lengthened descriptions for height symmetry.
 * Updated: 2025-03-31 - Slightly shortened descriptions to fine-tune height symmetry.
 * Updated: 2025-03-31 - Removed subtle page background gradient, replaced with solid bg-gray-50.
 */
// TODO: Update header comment when page is finalized (Date: YYYY-MM-DD)
import React from 'react';
import CaseManagerReferral from '../components/wizards/CaseManagerReferral';
import { Phone, Mail, ClipboardList } from 'lucide-react';
import ExpandableCard from '../components/ui/ExpandableCard';
import FeatureCard from '../components/ui/FeatureCard';

const ProfessionalsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-10">

        {/* --- Section for Referrers --- */}
        <section aria-labelledby="referrers-heading">
          <h2 id="referrers-heading" className="text-3xl font-bold text-center text-gray-900 mb-8">
            Information for Referrers & Case Managers
          </h2>

          {/* Row 1: Referral Wizard & Availability/Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
            {/* Left: Referral Wizard (takes more space) */}
            <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">Make a Referral</h3>
              <CaseManagerReferral />
            </div>

            {/* Right: Availability & Contact Card */}
            <div className="lg:col-span-2 bg-blue-50 p-6 rounded-lg shadow-lg border border-blue-200 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Availability</h3>
                <p className="text-lg text-gray-700">
                  Aspen Grove House (18+): <span className="font-medium text-orange-600">Currently Full</span>
                </p>
                <p className="text-lg text-gray-700">
                  Willow Stream Residence (55+): <span className="font-medium text-green-600">1 Bed Available</span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Direct Contact for Referrals</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-lg text-gray-700">(651) 705 6625 (Attn: Frances)</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-lg text-gray-700">frances@belonghomecare.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Services (Feature Cards) */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">Services & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard
                title="Medication Management"
                description="Reliable administration and reminders per MAR."
                imageUrl="https://images.unsplash.com/photo-1584515933487-759800531224?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder
              />
              <FeatureCard
                title="ADL Support"
                description="Assistance with daily living activities tailored to individual needs."
                imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder
              />
              <FeatureCard
                title="Homemaking Help"
                description="Support with daily room upkeep and light housekeeping."
                imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder
              />
              <FeatureCard
                title="Provider Coordination"
                description="Collaboration with healthcare providers and case managers."
                imageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder
              />
              <FeatureCard
                title="24/7 Staffing"
                description="Around-the-clock on-site staff for support and safety."
                imageUrl="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder
              />
              <FeatureCard
                title="A True Home Environment"
                description="We cultivate independence and community in real homes, not impersonal facilities. Residents enjoy personalized spaces, shared activities, and genuine connections."
                imageUrl="https://images.unsplash.com/photo-1489156013499-81c8480414f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" // Placeholder for home environment
              />
              {/* Add more service cards if needed */}
            </div>
          </div>

          {/* Row 3: Criteria & About (Expandable Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ExpandableCard
              title="Admission Criteria"
              summary={<p>Key criteria for joining our community homes.</p>}
              expandedContent={
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Primary mental health diagnosis</li>
                  <li>Ambulatory or able to self-transfer</li>
                  <li>Appropriate funding source (e.g., CADI waiver, Private Pay)</li>
                  <li>Seeking residency in Brooklyn Park area</li>
                  <li>Willingness to participate in community living</li>
                </ul>
              }
              icon={<ClipboardList size={20} className="text-primary" />} // Example icon
            />
            <ExpandableCard
              title="About Belong's Homes"
              summary={
                <p>We offer supportive, home-like settings for adults (18+ and 55+) with mental health conditions, focusing on community, dignity, and personalized care.</p>
              }
              expandedContent={
                <>
                  <p className="mb-3">Belong provides a supportive, home-like environment for adults aged 18+ (Aspen Grove House) and 55+ (Willow Stream Residence) primarily managing mental health conditions. We focus on individuals seeking community integration and personalized support for daily living.</p>
                  <p>We believe in a person-centered approach, fostering independence while providing tailored assistance. Our core values are dignity, respect, community, and creating a true sense of belonging for everyone.</p>
                </>
              }
              // Add imageUrl if desired
            />
          </div>
        </section> {/* End of Referrers Section */}

        {/* --- Section for Careers --- */}
        <section aria-labelledby="careers-heading" className="pt-10">
          <h2 id="careers-heading" className="text-3xl font-bold text-center text-gray-900 mb-8">
            Careers at Belong
          </h2>

          {/* Row 1: Openings & Why Work Here */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Left Column: Current Openings (Direct Display) */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Current Openings</h3>
              {/* Opening 1: Residential Care Coordinator */}
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Residential Care Coordinator</h4>
                <p className="text-sm"><strong>Full-time | Aspen Grove House (18+), Brooklyn Park</strong></p>
                <p className="text-gray-700 text-sm">
                  Core duties: medication management, care coordination, ensuring a positive home atmosphere. LPN/RN required.
                </p>
                {/* <a href="#" className="text-xs text-primary hover:underline block mb-2">View Full Job Description</a> */} {/* Optional link if needed later */}
                <a href="mailto:careers@belonghomecare.com?subject=Application: Residential Care Coordinator" className="inline-block bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition duration-200 text-sm">Apply Now</a>
              </div>

              {/* Opening 2: Overnight Support Staff */}
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Overnight Support Staff</h4>
                <p className="text-sm"><strong>Part-time (10pm-6am) | Willow Stream Residence (55+), Brooklyn Park</strong></p>
                <p className="text-gray-700 text-sm">
                  Key tasks: overnight supervision, resident support, medication assistance, safety checks. CNA preferred.
                </p>
                {/* <a href="#" className="text-xs text-primary hover:underline block mb-2">View Full Job Description</a> */} {/* Optional link if needed later */}
                <a href="mailto:careers@belonghomecare.com?subject=Application: Overnight Support Staff" className="inline-block bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition duration-200 text-sm">Apply Now</a>
              </div>
              {/* Add more openings as needed */}
            </div>

            {/* Right Column: Why Work With Us (Feature Cards - Smaller) */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Work With Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                <FeatureCard
                  title="Make a Genuine Difference"
                  description="Impact residents' lives by fostering independence in a true home."
                  className="p-3 text-sm"
                />
                <FeatureCard
                  title="Supportive Team Environment"
                  description="Join a collaborative, respectful, family-like team."
                  className="p-3 text-sm"
                />
                <FeatureCard
                  title="Growth Opportunities"
                  description="Develop professionally in a growing organization. We offer pathways for advancement."
                  className="p-3 text-sm"
                />
                <FeatureCard
                  title="Positive Work Culture"
                  description="Help create a warm, dignified, and respectful environment. We value teamwork."
                  className="p-3 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Join Our Team Intro (Takes full width now) */}
          <div className="mt-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Join Our Team</h3>
              <p className="text-lg text-gray-600">
                At Belong, we're more than just a care provider – we're a family creating homes where everyone feels they belong. We seek compassionate individuals dedicated to helping residents with their daily tasks and special care needs. Our Resident Assistants administer medications, assist with ADLs (dressing, showering, grooming, etc.), help with room order, and carefully document resident well-being, reporting changes to the RN Supervisor. If you're passionate about making a difference in a supportive environment, we invite you to explore opportunities with us.
              </p>
            </div>
          </div>
          {/* Removed the separate "How to Apply" section, handled by mailto links in job listings */}
        </section> {/* End of Careers Section */}
      </div>
    </div>
  );
};

export default ProfessionalsPage;
