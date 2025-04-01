/**
 * @file families.tsx
 * @description Page providing information specifically for families of potential residents.
 * @updated 2025-03-31 - Refactored content for clarity, empathy, and conciseness. Added testimonial. Redesigned FAQ/Amenities layout.
 * @updated 2025-03-31 - Applied visual consistency adjustments based on HomePage patterns (spacing, headings, card styles).
 * @updated 2025-04-01 - Reorganized page order, moved Comforts of Home section higher, enhanced Daily Life section division,
 *                       and added one more FAQ question for balance.
 * @updated 2025-04-01 - Added "Life at Belong" gallery section to showcase community events and activities.
 * @updated 2025-04-01 - Removed "Daily Life & Staying Connected" section and moved "Life at Belong" section higher.
 * @updated 2025-04-01 - Fixed lint errors by removing unused imports.
 * @updated 2025-04-01 - Improved page layout: moved all headings inside cards, removed CTA section, connected FAQ title with cards.
 * @updated 2025-04-01 - Added main page heading with consistent styling across site.
 * @updated 2025-04-01 - Standardized all section headers for visual consistency.
 */
import React from 'react';
// Removed Link import as it's no longer used
// Updated icons - removed unused imports
import { HelpCircle, ShieldCheck, HeartHandshake, Users, BedDouble, Utensils, Car, Wifi, Tv, Film, Camera, Calendar } from 'lucide-react';
import ExpandableCard from '../components/ui/ExpandableCard';

// FAQs data
const faqs = [
  {
    question: "What are the visiting hours?",
    answer: (
      <p>
        Families are welcome to visit anytime during reasonable hours. We encourage visits between 9 AM and 8 PM to ensure residents' rest and routine. Please coordinate with staff for visits outside these times.
      </p>
    ),
  },
  {
    question: "How can families stay involved in care?",
    answer: (
      <p>
        We encourage family participation in care planning meetings and regular updates. Open communication is key, and we provide multiple channels for families to connect with our care team.
      </p>
    ),
  },
  {
    question: "What happens if my loved one's needs change?",
    answer: (
      <p>
        Our care plans are regularly reviewed and adjusted based on the resident's evolving needs. We work closely with families and healthcare providers to ensure the appropriate level of care is always provided.
      </p>
    ),
  },
  {
    question: "Are there activities for residents and families?",
    answer: (
      <p>
        Yes, we host various activities and events where families are encouraged to participate. Check our monthly calendar for details on upcoming gatherings.
      </p>
    ),
  },
  {
    question: "How is communication handled regarding resident updates?",
    answer: (
      <p>
        We maintain open lines of communication through regular phone calls, emails, and scheduled family meetings. Urgent updates are communicated immediately to the designated family contact.
      </p>
    ),
  },
  {
    question: "What makes Belong different from other care homes?",
    answer: (
      <p>
        Belong offers a uniquely personalized approach to mental health care in a home-like setting. Our small resident-to-staff ratio allows for individual attention, and our founder Frances Tyler brings both professional expertise and personal experience to our care philosophy. We focus on creating a true sense of belonging and community rather than an institutional environment.
      </p>
    ),
  },
];

const FamiliesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content Area - Added pt-16, adjusted spacing to space-y-4 */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Main Page Heading */}
        <h1 className="font-serif text-6xl md:text-7xl mb-8">for families.</h1>

        {/* Our Commitment Section - Move heading inside a container */}
        <section aria-labelledby="commitment-heading">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200 mb-6">
            <div className="flex items-center mb-4">
              <HeartHandshake className="text-primary mr-2" size={20} />
              <h3 id="commitment-heading" className="font-serif text-xl">our commitment to your family</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center"> {/* Changed gap to 4 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <ShieldCheck className="mx-auto h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Security</h3>
                <p className="text-gray-600">A secure, well-maintained home with trained staff dedicated to resident well-being.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <HeartHandshake className="mx-auto h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compassionate Care</h3>
                <p className="text-gray-600">Person-centered care focusing on dignity, respect, and individual needs.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Users className="mx-auto h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Partnership</h3>
                <p className="text-gray-600">Open communication and collaboration to ensure the best outcomes for your loved one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Life at Belong Gallery Section - Moved to be second in order */}
        <section aria-labelledby="gallery-heading" className="mb-8">          
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <Camera className="text-primary mr-2" size={20} />
              <h3 id="gallery-heading" className="font-serif text-xl">life at belong</h3>
            </div>
            
            <p className="text-center text-gray-700 mb-6">
              At Belong, we create a vibrant, engaging environment where residents enjoy a variety of activities, 
              celebrations, and outings. These moments help build meaningful connections and create a true sense of community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Birthday celebration" 
                  className="w-full h-40 object-cover rounded-md shadow-sm group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b-md">
                  <p className="text-white text-xs font-medium">Birthday Celebrations</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Community dinner" 
                  className="w-full h-40 object-cover rounded-md shadow-sm group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b-md">
                  <p className="text-white text-xs font-medium">Community Meals</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Group activities" 
                  className="w-full h-40 object-cover rounded-md shadow-sm group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b-md">
                  <p className="text-white text-xs font-medium">Group Activities</p>
                </div>
              </div>
              
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Community outings" 
                  className="w-full h-40 object-cover rounded-md shadow-sm group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b-md">
                  <p className="text-white text-xs font-medium">Community Outings</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <Calendar className="text-primary mr-2" size={20} />
                  <h4 className="font-serif text-lg">regular events</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">Weekly game nights to encourage social interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">Monthly birthday celebrations for all residents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">Holiday gatherings with families welcome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">Seasonal outdoor activities as weather permits</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center mb-3">
                  <Users className="text-primary mr-2" size={20} />
                  <h4 className="font-serif text-lg">family participation</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  We encourage family members to participate in our community events. Your presence adds to the joy 
                  of these occasions and helps create lasting memories for your loved ones.
                </p>
                <p className="text-gray-700">
                  Ask our staff about upcoming events during your next visit or check our monthly calendar!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section - Updated to match heading pattern */}
        <section aria-labelledby="amenities-heading">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <BedDouble className="text-primary mr-2" size={20} />
              <h3 id="amenities-heading" className="font-serif text-xl">comforts of home included</h3>
            </div>
            
            <p className="text-center text-gray-600 mb-8">Your <span className="font-semibold text-primary-700">$500 monthly rate</span> covers a private room and all these essential amenities:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[ // Define amenities inline for simplicity
                { icon: BedDouble, label: 'Furnished Room' },
                { icon: Utensils, label: 'Meals & Snacks' },
                { icon: Car, label: 'Transportation' },
                { icon: Wifi, label: 'Free WiFi' },
                { icon: Tv, label: 'Cable TV' },
                { icon: Film, label: 'Streaming Access' }, // Generic icon for Netflix/Prime
              ].map((amenity, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col items-center text-center">
                  <amenity.icon className="h-10 w-10 text-primary-600 mb-2" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-700">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section - Updated with blue background */}
        <section aria-labelledby="testimonial-heading">
          <div className="bg-primary/5 border border-primary/30 p-6 rounded-md shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              <h3 id="testimonial-heading" className="font-serif text-xl">what our families say</h3>
            </div>
            <blockquote className="text-gray-700 italic">
              <p className="mb-4">"I have a son that lives at Belong Health Care... I am more than satisfied with this place. It's a very nice & well kept house and the staff are wonderful. They have taken very good care of my son. They are very caring people and go out of their way to help... They also specialize in mental health... take the guys on outings & out to eat... I would highly recommend this home. It gives me peace of mind."</p>
              <footer className="font-semibold text-gray-800">- Debra Poellinger</footer>
            </blockquote>
          </div>
        </section>

        {/* FAQ Section - Fix the connection between title and cards */}
        <section aria-labelledby="faq-heading">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <HelpCircle className="text-primary mr-2" size={20} />
              <h3 id="faq-heading" className="font-serif text-xl">frequently asked questions</h3>
            </div>
            <p className="text-center text-gray-700 mb-6">
              Find answers to common questions about our care approach, visitation, and family involvement.
            </p>
          
            {/* Added grid layout for FAQs inside the same card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Changed gap to 4 */}
              {faqs.map((faq, index) => (
                <ExpandableCard 
                  key={index} 
                  title={faq.question} 
                  summary={<></>} 
                  expandedContent={faq.answer} 
                  initialExpanded={false}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FamiliesPage;
