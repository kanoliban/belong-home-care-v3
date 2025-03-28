import React from 'react';
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import { Heart, HelpCircle, Calendar, Mail } from 'lucide-react';

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
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">for families.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg mb-6">
              I understand that finding the right home for your loved one with mental health 
              challenges can be overwhelming. At Belong, we strive to make this process as 
              smooth and reassuring as possible.
            </p>
            
            <p className="mb-4">
              Families are an integral part of our community. We encourage regular visits, 
              welcome your involvement in care decisions, and value your insights about your 
              loved one's needs and preferences.
            </p>
            
            <div className="bg-primary/10 p-5 rounded-sm mb-6">
              <div className="flex items-center mb-3">
                <Heart size={20} className="text-primary mr-2" />
                <h3 className="font-serif text-xl">Our Promise to Families</h3>
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
          </div>
          
          <div className="space-y-6">
            <div className="aspect-video bg-gray-100 overflow-hidden rounded-sm shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Family visiting" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="border border-gray-200 p-5 rounded-sm">
              <div className="flex items-center mb-3">
                <Calendar size={20} className="text-primary mr-2" />
                <h3 className="font-serif text-xl">Visiting Hours</h3>
              </div>
              <p className="mb-3">
                We welcome family visits and encourage maintaining strong connections. Our general 
                visiting hours are:
              </p>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00am - 8:00pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Weekends:</span>
                  <span>10:00am - 8:00pm</span>
                </li>
              </ul>
              <p className="mt-3 text-sm">
                Special arrangements can be made for birthdays, holidays, or other important occasions.
                Please call ahead if you'd like to join us for a meal.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
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
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="border border-gray-200 p-6 rounded-sm">
            <div className="flex items-center mb-4">
              <Calendar size={20} className="text-primary mr-3" />
              <h3 className="font-serif text-xl">Schedule a Family Visit</h3>
            </div>
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
          
          <div className="border border-gray-200 p-6 rounded-sm">
            <div className="flex items-center mb-4">
              <Mail size={20} className="text-primary mr-3" />
              <h3 className="font-serif text-xl">Family Resource Packet</h3>
            </div>
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
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center italic">
            "The difference at Belong is that Frances treats our son like family, 
            not just a resident. He's happier and more stable than we've seen him in years."
            <span className="block mt-2">— Parent of an Aspen Grove resident</span>
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default ForFamiliesPage;