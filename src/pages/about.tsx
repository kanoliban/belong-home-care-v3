/**
 * src/pages/about.tsx
 * Purpose: Displays the About page for Belong Home Health Care, detailing the founder's story, company vision, team, and contact information.
 *
 * Date: 2025-04-01
 * Description: Initial creation. Uses Card components for structure. Layout is applied globally in App.tsx.
 *              Updated 2025-04-01: Removed Layout import and wrapper as it's handled globally in App.tsx.
 *              Updated 2025-04-01: Enhanced visual consistency to match other pages (typography, layout, styling).
 *              Updated 2025-04-01: Revised to use specialized card components (ExpandableCard, FeatureCard) similar to HomePage.
 *              Updated 2025-04-01: Moved section headings inside cards for visual consistency with Families page.
 *              Updated 2025-04-01: Reduced spacing between cards to match HomePage style and added Current Availability section.
 *              Updated 2025-04-01: Replaced Contact section with Current Openings section and fixed linting errors.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Users, Calendar, Briefcase } from 'lucide-react';
import Highlight from '../components/ui/Highlight';

// Import specialized card components used in HomePage
import ExpandableCard from '../components/ui/ExpandableCard';
import FeatureCard from '../components/ui/FeatureCard';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">about belong.</h1>
        
        {/* Current Availability Section - Added from ForProfessionalsPage */}
        <section className="mb-4">
          <div className="bg-primary/10 p-6 rounded-sm">
            <div className="flex items-center">
              <Users size={24} className="text-primary mr-3" />
              <h2 className="font-serif text-2xl">Current Availability</h2>
            </div>
            <p className="text-lg mt-2">
              <Highlight className="font-semibold">We currently have 3 beds available in our 55+ home</Highlight> 
              (Willow Stream Residence) and are actively accepting referrals. For the fastest response, 
              please call Frances directly at <Highlight className="font-semibold">(651) 705-6625</Highlight>.
            </p>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="mb-4">
          {/* Founder's Story Heading - Separate card for heading */}
          <div className="bg-white p-6 rounded-t-lg shadow border border-gray-200 border-b-0 mb-0">
            <div className="flex items-center">
              <User size={24} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">Frances Tyler, Founder</h2>
            </div>
          </div>
          
          {/* Featured expandable card with founder's story - Connected but not nested */}
          <ExpandableCard
            title="creating homes, not facilities."
            summary={
              <p>
                With over 10 years as a psychiatric nurse, I founded Belong Health Care after seeing a critical
                gap in housing options for adults with mental health conditions. My mission is to create homes—not 
                facilities—where everyone feels valued, supported, and part of a community.
              </p>
            }
            expandedContent={
              <>
                <p className="mb-3">
                  After working in institutional settings, I was troubled by the lack of true home environments for people with mental 
                  health conditions. Many "group homes" felt clinical, understaffed, and failed to nurture genuine community.
                </p>
                <p className="mb-3">
                  I asked myself, "If my loved one lived here, would I feel good about it?" For most places, the answer was no.
                  That's when I decided to create Belong—a place that truly feels like home.
                </p>
                <p>
                  With Belong, I've created the kind of supportive homes I wish existed for my own patients years ago - places
                  where residents have their own rooms, share meals together, and build meaningful relationships.
                </p>
              </>
            }
            wideCard={true}
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="rounded-t-none mb-4" // Rounded top removed to connect with header, updated mb-10 to mb-4
          />
          
          {/* Our Journey Card - Already has heading inside */}
          <div className="bg-primary/10 p-6 rounded-sm mb-4">
            <div className="flex items-center mb-4">
              <Calendar size={22} className="text-primary mr-3" />
              <h3 className="font-serif text-2xl">Our Journey</h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <span className="font-semibold mr-4 text-primary">2020:</span>
                <span>Founded Belong Health Care to fill the gap in mental health housing</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold mr-4 text-primary">2020:</span>
                <span>Opened Aspen Grove House, our first home for adults 18+</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold mr-4 text-primary">2022:</span>
                <span>Expanded with Willow Stream Residence, specialized care for adults 55+</span>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 mt-6">
              "We don't run facilities - we create homes where people feel they belong, where they can build relationships and rediscover purpose."
              <footer className="mt-2 font-medium text-primary">— Frances Tyler</footer>
            </blockquote>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="mb-4">
          <div className="bg-white p-6 rounded-t-lg shadow border border-gray-200 border-b-0 mb-0">
            <div className="flex items-center">
              <BookOpen size={24} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">Our Approach</h2>
            </div>
          
            <p className="text-lg mb-8">
              We take a holistic approach to mental health care, recognizing that healing happens best in environments 
              that feel like home. Our care model focuses on:
            </p>
          
            {/* Feature cards with images - similar to HomePage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureCard
                title="community living"
                description={
                  <p>Residents share family-style meals, participate in group activities, and build meaningful relationships with each other and staff.</p>
                }
                imageUrl="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
              <FeatureCard
                title="individualized support"
                description={
                  <p>Each resident has a customized care plan with medication management, skills development, and personalized goals.</p>
                }
                imageUrl="https://images.unsplash.com/photo-1517292987719-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
              <FeatureCard
                title="daily enrichment"
                description={
                  <p>We offer therapeutic activities, community outings, and creative expression opportunities that promote wellness and joy.</p>
                }
                imageUrl="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-4">
          <div className="bg-white p-6 rounded-t-lg shadow border border-gray-200 border-b-0 mb-0">
            <div className="flex items-center">
              <Users size={24} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">Our Team</h2>
            </div>
          </div>
          
          {/* Expandable card for team information - Connected but not nested */}
          <ExpandableCard
            title="the people who make it possible."
            summary={
              <p>
                The heart of Belong is our dedicated team of professionals who share our vision of 
                creating true homes where everyone belongs. We maintain a high staff-to-resident ratio to 
                ensure personalized care and meaningful relationships.
              </p>
            }
            expandedContent={
              <>
                <h3 className="font-serif text-xl mb-3 mt-4">Our Care Team</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Registered Nurses (24/7 availability)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Licensed Practical Nurses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Healthcare Practitioners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Residential Counselors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Culinary Staff</span>
                  </li>
                </ul>
                
                <h3 className="font-serif text-xl mb-3">Our Values</h3>
                <p className="text-gray-700">
                  Many of our team members have been with us for years, creating consistency and trust with our residents.
                  We hire for heart first, skills second. Technical abilities can be taught, but genuine compassion and 
                  respect for our residents is essential.
                </p>
              </>
            }
            imageUrl="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="rounded-t-none mb-4" // Added mb-4
          />
        </section>
        
        {/* Current Openings Section */}
        <section>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <Briefcase size={24} className="text-primary mr-3" />
              <h2 className="font-serif text-3xl">We're hiring!</h2>
            </div>
          
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Residential Care Coordinator</h4>
                <p className="text-sm"><strong>Full-time | Aspen Grove House (18+), Brooklyn Park</strong></p>
                <p className="text-gray-700 text-sm">Core duties: medication management, care coordination, ensuring a positive home atmosphere. LPN/RN required.</p>
                <a href="mailto:careers@belonghealthcare.com?subject=Application: Residential Care Coordinator" className="inline-block bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition duration-200 text-sm">Apply Now</a>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200 space-y-3">
                <h4 className="text-lg font-semibold text-primary">Overnight Support Staff</h4>
                <p className="text-sm"><strong>Part-time (10pm-6am) | Willow Stream Residence (55+), Brooklyn Park</strong></p>
                <p className="text-gray-700 text-sm">Key tasks: overnight supervision, resident support, medication assistance, safety checks. CNA preferred.</p>
                <a href="mailto:careers@belonghealthcare.com?subject=Application: Overnight Support Staff" className="inline-block bg-primary text-white px-3 py-1.5 rounded hover:bg-primary-dark transition duration-200 text-sm">Apply Now</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
