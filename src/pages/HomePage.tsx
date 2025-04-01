/**
 * HomePage.tsx
 * Created: 2025-03-19
 * Description: Main landing page for Belong Home Health Care
 * Updated: 2025-03-19 - Reordered cards to follow a chronological narrative for Frances' tour
 * Updated: 2025-03-20 - Completely redesigned with new narrative flow and card layout
 * Updated: 2025-03-20 - Restored hero section and adjusted card layout spacing
 * Updated: 2025-03-20 - Restored wizard components for forms
 * Updated: 2025-03-21 - Added careers card to community & testimonials section
 * Updated: 2025-03-21 - Moved careers card to Row 3 alongside "Why I Started Belong"
 * Updated: 2025-03-21 - Replaced CareersCard with JoinOurTeam wizard component
 * Updated: 2025-03-21 - Added MissionBanner component between Hero and main content
 * Updated: 2025-03-21 - Removed highlighted "Belong" span from ExpandableCard title
 */

/**
 * HomePage Component
 * 
 * Purpose: Serves as the main landing page for the website.
 *          Organizes and displays key content sections using a card-based layout.
 * 
 * Planned Updates (2025-03-30):
 * - Restructure content based on user notes (move Why I Started, Our Team).
 * - Reorder remaining sections (Homes, Residents, Meals, Days).
 * - Implement chosen layout strategy (Masonry, Grid, etc.) based on tile feedback.
 * - Integrate new sections/components (Testimonials, Amenities).
 * - Apply new branding and ensure visual consistency.
 */

import { Utensils, Bus, Users, UserPlus } from 'lucide-react';

// UI Components
import ExpandableCard from '../components/ui/ExpandableCard';
import BedsAvailableCard from '../components/ui/BedsAvailableCard';
import FeatureCard from '../components/ui/FeatureCard';
import TimelineComparisonCard from '../components/ui/TimelineComparisonCard';
import HomeCard from '../components/ui/HomeCard';
import ContactCard from '../components/ui/ContactCard';

// Sections
import Hero from '../components/sections/Hero';
import MissionBanner from '../components/sections/MissionBanner';

// Wizard Components
import FamilyVisit from '../components/wizards/FamilyVisit';
import CaseManagerReferral from '../components/wizards/CaseManagerReferral';

const HomePage = () => {
  // Sample data for timeline comparison
  const timelineEvents = [
    {
      time: '7:00 AM',
      aloneDescription: 'Wake up alone, may skip breakfast or eat something simple',
      belongDescription: 'Wake up to the smell of fresh coffee and a home-cooked breakfast with others'
    },
    {
      time: '10:00 AM',
      aloneDescription: 'Sitting at home with limited social interaction',
      belongDescription: 'Morning activities: art therapy, gardening, or a community outing'
    },
    {
      time: '12:30 PM',
      aloneDescription: 'Lunch alone, often microwaved or simple food',
      belongDescription: 'Family-style lunch with fresh ingredients and conversation'
    },
    {
      time: '3:00 PM',
      aloneDescription: 'Limited transportation options to go shopping or to appointments',
      belongDescription: 'Transportation available for shopping, appointments, or personal errands'
    },
    {
      time: '6:00 PM',
      aloneDescription: 'Dinner alone, often the same meals repeated',
      belongDescription: 'Diverse dinner menu with cultural options and social dining'
    },
    {
      time: '8:00 PM',
      aloneDescription: 'Evening alone watching TV',
      belongDescription: 'Evening activities, games, or relaxing with housemates'
    }
  ];

  // Sample data for home tours
  const aspenGroveImages = [
    { url: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Aspen Grove House exterior' },
    { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Spacious living room' },
    { url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Comfortable bedroom' },
    { url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Modern kitchen' },
    { url: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Dining area' }
  ];
  
  const willowStreamImages = [
    { url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Willow Stream Residence exterior' },
    { url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Senior-friendly living room' },
    { url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Accessible bedroom' },
    { url: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Community kitchen' },
    { url: 'https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', caption: 'Outdoor garden area' }
  ];

  return (
    <div className="space-y-4 pb-8">
      {/* Hero Section */}
      <Hero />
      
      {/* Mission Banner */}
      <MissionBanner />
      
      {/* Row 1: Frances's Vision & Available Beds */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ExpandableCard
            title="creating homes, not facilities."
            summary={
              <p>
                After 10 years as a psychiatric nurse, I created Belong to provide what I couldn’t find elsewhere – 
                homes where people with mental health conditions are valued as individuals and feel like family.
              </p>
            }
            expandedContent={
              <>
                <p className="mb-3">
                  I saw too many "facilities" that felt institutional and impersonal. At Belong, we've created 
                  actual homes where residents have their own rooms, share meals together, and build meaningful relationships.
                </p>
                <p className="mb-3">
                  Our approach focuses on dignity, independence, and community. We believe that everyone deserves 
                  to live in a place where they feel valued, respected, and truly at home.
                </p>
                <p>
                  Each of our homes has a unique character, but they all share the same commitment to creating 
                  a family-like atmosphere where everyone belongs.
                </p>
              </>
            }
            wideCard={true}
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="h-full"
          />
        </div>
        <div>
          <BedsAvailableCard />
        </div>
      </div>

      {/* Row 2: The Belong Difference */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FeatureCard
          title="home-cooked meals"
          description={
            <p>We don't do microwaved food or leftovers. Our residents enjoy fresh, home-cooked meals prepared daily with quality ingredients.</p>
          }
          icon={<Utensils size={20} className="text-primary" />}
          imageUrl="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        />
        <FeatureCard
          title="daily transportation"
          description={
            <p>Residents can go shopping every day, not just 2-3 times a week like other homes. We provide reliable transportation for all needs.</p>
          }
          icon={<Bus size={20} className="text-primary" />}
          imageUrl="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        />
        <FeatureCard
          title="personalized wellness programs"
          description={
            <p>Each resident has a customized wellness plan with activities, therapy options, and social engagement tailored to their unique interests and needs.</p>
          }
          icon={<Users size={20} className="text-primary" />}
          imageUrl="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        />
      </div>

      {/* Row 4: Daily Life Comparison */}
      <TimelineComparisonCard
        title="a day at belong"
        events={timelineEvents}
      />

      {/* Row 5: Our Homes */}
      <div id="tour" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <HomeCard
          title="aspen grove house (18+)"
          description={
            <p>
              Our Aspen Grove House serves adults 18+ with mental health conditions who need a supportive 
              community environment. Currently at full capacity.
            </p>
          }
          imageUrl="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          ageGroup="18+"
          tourImages={aspenGroveImages}
        />
        <HomeCard
          title="willow stream residence (55+)"
          description={
            <p>
              Our Willow Stream Residence is designed for adults 55+ with mental health conditions who 
              benefit from age-appropriate support and community.
            </p>
          }
          imageUrl="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          ageGroup="55+"
          roomsAvailable={3}
          isHighlighted={true}
          tourImages={willowStreamImages}
        />
      </div>

      {/* Row 6: Community & Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 flex">
          <ExpandableCard
            title="our residents"
            summary={
              <p>
                Our residents come from diverse backgrounds but share a need for a true home where they feel valued.
              </p>
            }
            expandedContent={
              <>
                <p className="mb-3">
                  We serve adults with various mental health conditions, including schizophrenia, bipolar disorder, 
                  major depression, and anxiety disorders. Many have experienced homelessness, hospitalization, 
                  or unsuitable living situations before finding stability at Belong.
                </p>
                <p className="mb-3">
                  "Before moving to Belong, I was in and out of hospitals. Now I have a stable home and people 
                  who care about me. I haven't needed hospitalization in over two years." - Resident, age 42
                </p>
                <p>
                  "My mom has been at Willow Stream for almost a year, and the difference in her well-being is 
                  remarkable. She's engaged, taking her medications regularly, and actually enjoying life again." 
                  - Family member
                </p>
              </>
            }
            icon={<Users size={20} className="text-primary" />}
          />
        </div>
        <div className="md:col-span-8 flex">
          <ExpandableCard
            title="our team"
            summary={
              <p>
                Our team consists of compassionate professionals who share my vision of creating homes where 
                people feel like family rather than patients.
              </p>
            }
            expandedContent={
              <>
                <p className="mb-3">
                  Led by Frances Johnson, RN, our staff includes mental health professionals, support workers, 
                  and activity coordinators who all share a commitment to dignity-centered care.
                </p>
                <p className="mb-3">
                  All staff members receive specialized training in mental health support, crisis de-escalation, 
                  and person-centered care approaches.
                </p>
                <p>
                  We maintain a high staff-to-resident ratio to ensure personalized attention and support 
                  for each person in our care.
                </p>
              </>
            }
            icon={<UserPlus size={20} className="text-primary" />}
          />
        </div>
      </div>

      {/* Row 7: Pathways Forward */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <FamilyVisit />
        </div>
        <div>
          <CaseManagerReferral />
        </div>
      </div>

      {/* Row 8: Direct Contact */}
      <ContactCard
        id="contact"
        title="connect with frances"
        description={
          <p className="mb-3">
            I'd love to hear from you directly about what you're looking for in a home for yourself or your loved one. 
            Feel free to reach out with any questions.
          </p>
        }
        imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        phoneNumber="(612) 555-7890"
        email="frances@belonghomecare.com"
      />
    </div>
  );
};

export default HomePage;