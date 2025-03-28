import React from 'react';
import { motion } from 'framer-motion';
import Highlight from '../components/ui/Highlight';
import Card from '../components/ui/Card';
import { Calendar, Coffee, Utensils, Users } from 'lucide-react';

const OurApproachPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-8">our approach.</h1>
        
        <p className="text-xl mb-8">
          At Belong, we focus on creating a <Highlight>genuine home environment</Highlight>,
          not just providing clinical care. Our approach emphasizes personalized care, cultural
          inclusivity, and community connection.
        </p>
        
        <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm mb-12">
          <div className="flex items-center mb-4">
            <Calendar size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">a day in the life.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-video lg:aspect-square bg-gray-100 overflow-hidden rounded-md">
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Daily life at Belong" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <p className="mb-4">
                We maintain a balance of structure and flexibility, with regular activities and outings.
                <Highlight> We go out at least once or twice a week</Highlight>, especially during summer.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">7:00-9:00am</div>
                  <div>Flexible wake-up times with breakfast available</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">9:30am</div>
                  <div>Morning check-in and medication</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">10:00am</div>
                  <div>Morning activities (art, walking, gardening)</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">12:00pm</div>
                  <div>Lunch together</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">1:00pm</div>
                  <div>Quiet time or individual appointments</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">3:00pm</div>
                  <div>Afternoon activities or community outings</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">5:30pm</div>
                  <div>Dinner together</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">7:00pm</div>
                  <div>Evening social time (games, movies, relaxation)</div>
                </div>
                <div className="flex">
                  <div className="text-sm font-medium w-20 text-primary">9:00pm</div>
                  <div>Evening medication and wind-down</div>
                </div>
              </div>
              
              <p>
                Our schedule includes a mix of group activities, individual hobbies, and community outings. 
                Residents help plan activities based on their interests and preferences.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card 
            primaryLabel="Approach:" 
            category="Nutrition" 
            title="our food philosophy" 
            locationPin="Dining"
            initiallyExpanded={true}
          >
            <div>
              <p className="mb-4">
                <Highlight>We don't do microwaved food or leftovers</Highlight>. Every meal is 
                home-cooked from scratch, with special attention to cultural foods and residents' preferences.
              </p>
              
              <div className="aspect-video bg-gray-100 overflow-hidden rounded-md mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Home-cooked meal being prepared" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="mb-4">
                When someone moves in, we learn about their favorite foods and cultural background. 
                Our weekly menus include dishes that reflect the diversity of our residents.
              </p>
              
              <h3 className="font-serif text-xl mb-3">Sample Weekly Menu</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Monday:</span> Somali spiced rice with vegetables and chicken
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Tuesday:</span> Homemade lasagna with garden salad
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Wednesday:</span> Tater tot hotdish (Minnesota classic!)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Thursday:</span> Ethiopian doro wat with injera bread
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Friday:</span> Fish tacos with fresh salsa
                  </div>
                </li>
              </ul>
            </div>
          </Card>
          
          <Card 
            primaryLabel="Approach:" 
            category="Care Model" 
            title="mental health support" 
            locationPin="Support services"
            initiallyExpanded={true}
          >
            <div>
              <p className="mb-4">
                Our care approach balances professional mental health support with the warmth and 
                personalization of a family-like environment.
              </p>
              
              <h3 className="font-serif text-xl mb-3">Our Care Approach</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Medication Management</span>
                    <p className="mt-1">Careful oversight of psychiatric medications with regular reviews</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Emotional Support</span>
                    <p className="mt-1">Staff trained in mental health first aid and crisis prevention</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Structured Routine</span>
                    <p className="mt-1">Predictable schedules that provide security and reduce anxiety</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <div>
                    <span className="font-medium">Coordination with Providers</span>
                    <p className="mt-1">Regular communication with psychiatrists and therapists</p>
                  </div>
                </li>
              </ul>
              
              <p>
                What makes us different is our focus on <Highlight>personal connection</Highlight>. 
                Our staff know each resident as an individual, not just their diagnosis.
              </p>
            </div>
          </Card>
        </div>
        
        <div className="bg-white border border-gray-200 p-6 rounded-md shadow-sm mb-12">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-primary mr-3" />
            <h2 className="font-serif text-3xl">our team.</h2>
          </div>
          
          <div>
            <p className="mb-4">
              Our team consists of compassionate professionals who share my vision of creating homes where
              <Highlight> I wanted somewhere people felt like family</Highlight> rather than patients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="aspect-video md:aspect-square bg-gray-100 overflow-hidden rounded-md">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-medium">Frances Johnson, RN</h4>
                  <p className="text-sm text-text/70">Founder & Director of Care</p>
                  <p className="mt-1">
                    With over 10 years as a psychiatric nurse, I oversee all aspects of care and operations.
                    Belong is my vision of what mental health care should be.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-serif font-medium">Our Care Team</h4>
                  <p className="mt-1">
                    Our homes are staffed 24/7 by trained mental health professionals, including:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Licensed Practical Nurses (medication management)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mental Health Practitioners (daily support and activities)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Residential Counselors (overnight support)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Culinary Staff (home-cooked meals)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p>
              We maintain a high staff-to-resident ratio to ensure everyone receives personalized attention. 
              Many of our team members have been with us for years, creating consistency and trust with our residents.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="/contact" 
            className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block text-lg"
          >
            Learn More About Our Approach
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default OurApproachPage;