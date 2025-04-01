/**
 * src/pages/ForFamiliesPage.tsx
 * Purpose: Provides information for families of potential and current residents, including FAQs, visit scheduling, and resources.
 * 
 * Date: 2025-04-01
 * Description: Initial modification to match the visual style and component structure of the HomePage.
 *              Updated with ExpandableCard and FeatureCard components for visual consistency.
 *              Organized content into visually consistent sections with proper spacing and imagery.
 *              Updated 2025-04-01: Added "Daily Life & Staying Connected" and "Comforts of Home" sections based on feedback.
 *              Added one additional FAQ question for an even number of questions.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, HelpCircle, Home, Users, Coffee } from 'lucide-react';

// Import specialized card components used in HomePage
import ExpandableCard from '../components/ui/ExpandableCard';
import FeatureCard from '../components/ui/FeatureCard';

const FAQItem = ({ question, children }: { question: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="text-primary ml-2">{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-text/90">
          {children}
        </div>
      )}
    </div>
  );
};

const ForFamiliesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">for families.</h1>
        
        {/* Introduction Section with ExpandableCard */}
        <section className="mb-12">
          <ExpandableCard
            title="supporting your loved ones."
            summary={
              <p>
                I understand that finding the right home for your loved one with mental health 
                challenges can be overwhelming. At Belong, we strive to make this process as 
                smooth and reassuring as possible.
              </p>
            }
            expandedContent={
              <>
                <p className="mb-3">
                  Families are an integral part of our community. We encourage regular visits, 
                  welcome your involvement in care decisions, and value your insights about your 
                  loved one's needs and preferences.
                </p>
                <p>
                  Our goal is to create a true partnership with families, working together to ensure 
                  your loved one thrives in an environment where they feel safe, valued, and truly at home.
                </p>
              </>
            }
            wideCard={true}
            imageUrl="https://images.unsplash.com/photo-1591343395082-e120087004b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            className="mb-10"
          />
          
          {/* Comforts of Home Included - Moved higher on the page as requested */}
          <div className="bg-primary/10 p-6 rounded-sm mb-8">
            <div className="flex items-center mb-4">
              <Coffee size={22} className="text-primary mr-3" />
              <h3 className="font-serif text-2xl">Comforts of Home Included</h3>
            </div>
            
            <p className="mb-3">
              We believe in creating an environment that truly feels like home. Each resident enjoys:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Private or semi-private bedroom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Home-cooked meals with dietary accommodations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cozy common areas for socializing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Entertainment options (TV, games, music)</span>
                </li>
              </ul>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Laundry and cleaning services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Transportation to appointments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Outdoor spaces for relaxation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Internet access for staying connected</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Our Promise to Families */}
          <div className="bg-primary/10 p-6 rounded-sm mb-10">
            <div className="flex items-center mb-4">
              <Heart size={22} className="text-primary mr-3" />
              <h3 className="font-serif text-2xl">Our Promise to Families</h3>
            </div>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Regular updates on your loved one's well-being</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Transparent communication about care and medications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Respect for family relationships and dynamics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Inclusion in care planning when appropriate</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Support and resources for family members</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Home size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">What We Offer</h2>
          </div>
          
          {/* Feature cards with images - similar to HomePage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <FeatureCard
              title="visiting hours"
              description={
                <div>
                  <p className="mb-2">We welcome family visits during our generous hours:</p>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00am - 8:00pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekends:</span>
                      <span>10:00am - 8:00pm</span>
                    </div>
                  </div>
                </div>
              }
              imageUrl="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
            <FeatureCard
              title="family involvement"
              description={
                <p>We encourage families to participate in care planning, join special events, and maintain strong connections with their loved ones in our homes.</p>
              }
              imageUrl="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
            <FeatureCard
              title="communication"
              description={
                <p>Regular updates, scheduled family meetings, and open channels for questions or concerns ensure you're always informed about your loved one's care.</p>
              }
              imageUrl="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
          </div>
          
          {/* Daily Life & Staying Connected Card - Split into two sections but on the same card */}
          <FeatureCard
            title="daily life & staying connected"
            description={
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-primary">Daily Life</h4>
                  <p className="mb-2">
                    Residents enjoy a structured but flexible routine that includes:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Nutritious meals and snacks</li>
                    <li>• Group activities and outings</li>
                    <li>• Quiet time for personal hobbies</li>
                    <li>• Medication management</li>
                    <li>• Light household chores as appropriate</li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="font-medium mb-2 text-primary">Staying Connected</h4>
                  <p className="mb-2">
                    We help residents maintain meaningful connections through:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Wi-Fi access throughout our homes</li>
                    <li>• Assistance with video calls to family</li>
                    <li>• Regular family events and holiday celebrations</li>
                    <li>• Support for community involvement</li>
                  </ul>
                </div>
              </div>
            }
            imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="mb-6"
          />
        </section>
        
        {/* FAQs Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <HelpCircle size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-2">
            <FAQItem question="How do I know if Belong is right for my loved one?">
              <p>
                Belong is ideal for adults with mental health conditions who need a supportive 
                living environment but don't require hospital-level care. We're a good fit for 
                people who:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Need daily structure and support</li>
                <li>Benefit from medication management</li>
                <li>Thrive in a family-like environment</li>
                <li>Want to feel like part of a community</li>
              </ul>
              <p className="mt-2">
                The best way to determine if we're a good match is to schedule a visit and meet 
                with me to discuss your loved one's specific needs.
              </p>
            </FAQItem>
            
            <FAQItem question="What mental health conditions do you support?">
              <p>
                We support adults with a range of mental health conditions, including but not limited to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Schizophrenia and schizoaffective disorder</li>
                <li>Bipolar disorder</li>
                <li>Major depression</li>
                <li>Anxiety disorders</li>
                <li>PTSD and trauma-related conditions</li>
              </ul>
              <p className="mt-2">
                We evaluate each person individually to ensure we can meet their specific needs.
              </p>
            </FAQItem>
            
            <FAQItem question="How do you handle medications?">
              <p>
                Medication management is a core part of our care. Our approach includes:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Storage and administration of all medications by trained staff</li>
                <li>Careful documentation of all medications given</li>
                <li>Regular medication reviews with healthcare providers</li>
                <li>Monitoring for side effects and effectiveness</li>
                <li>Coordination with pharmacies for refills</li>
              </ul>
              <p className="mt-2">
                We work closely with each resident's psychiatrist and primary care provider to 
                ensure proper medication management.
              </p>
            </FAQItem>
            
            <FAQItem question="What happens in case of a crisis or emergency?">
              <p>
                We have established protocols for handling various types of emergencies:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Medical emergencies: Staff trained in first aid; immediate 911 contact when needed</li>
                <li>Mental health crises: Staff trained in crisis de-escalation; access to crisis response teams</li>
                <li>Natural disasters: Emergency preparedness plans and regular drills</li>
              </ul>
              <p className="mt-2">
                Family members are notified promptly of any significant incidents, and we maintain 
                detailed documentation of all events and interventions.
              </p>
            </FAQItem>
            
            <FAQItem question="How are rooms furnished? What can residents bring?">
              <p>
                Each room comes with basic furnishings:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Twin bed with comfortable mattress</li>
                <li>Dresser and small closet</li>
                <li>Nightstand</li>
                <li>Chair</li>
              </ul>
              <p className="mt-2">
                Residents are encouraged to personalize their spaces with:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personal bedding and pillows</li>
                <li>Photos and wall decorations (non-damaging methods)</li>
                <li>Small personal items and mementos</li>
                <li>Small electronics (TV, radio, etc.)</li>
              </ul>
              <p className="mt-2">
                We work with each resident to create a space that feels comfortable and personal 
                while maintaining safety and appropriate boundaries.
              </p>
            </FAQItem>
            
            {/* Added new FAQ question for an even number */}
            <FAQItem question="How do you maintain the quality of care?">
              <p>
                Quality care is our highest priority at Belong. We maintain our standards through:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Continuous training for all staff members</li>
                <li>Regular care plan reviews and adjustments</li>
                <li>Feedback mechanisms for residents and families</li>
                <li>Adherence to all state and local regulations</li>
                <li>Partnerships with healthcare providers and specialists</li>
                <li>Ongoing assessment of resident satisfaction and outcomes</li>
              </ul>
              <p className="mt-2">
                We believe that exceptional care requires both professional expertise and genuine compassion,
                and we are committed to providing both to every resident in our homes.
              </p>
            </FAQItem>
          </div>
        </section>
        
        {/* Family Resources Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Users size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">Family Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="schedule a family visit"
              description={
                <div>
                  <p className="mb-4">
                    We encourage families to visit and see our homes firsthand. This gives you the opportunity 
                    to meet our staff, ask questions, and get a feel for our community.
                  </p>
                  <a 
                    href="/contact" 
                    className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors inline-block"
                  >
                    Schedule a Visit
                  </a>
                </div>
              }
              imageUrl="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
            
            <FeatureCard
              title="family resource packet"
              description={
                <div>
                  <p className="mb-4">
                    We've compiled helpful information for families, including our handbook, 
                    care philosophy, policies, and useful resources about mental health care.
                  </p>
                  <button 
                    className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors inline-block"
                  >
                    Request Family Resource Packet
                  </button>
                </div>
              }
              imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </section>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center italic text-gray-700">
            "The difference at Belong is that Frances treats our son like family, 
            not just a resident. He's happier and more stable than we've seen him in years."
            <span className="block mt-2 font-medium">— Parent of an Aspen Grove resident</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ForFamiliesPage;