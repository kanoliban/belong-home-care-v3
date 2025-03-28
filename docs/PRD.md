# Belong Health Care Website
## Product Requirements Document (PRD)

### Overview
Belong Health Care is a specialized residential care provider created by Frances, a psychiatric nurse with over 10 years of experience. The website design follows the personal, authentic approach of Chester's digital garden, presenting Belong as Frances's personal creation rather than a typical healthcare institution.

### Core Design Principles

#### 1. Frances's Authentic Voice
- Personal greeting: "Hey there, I'm Frances 👋"
- First-person narrative throughout all content
- Simple emoji usage (👋, 🏡) adds personality without being overwhelming
- Direct quotes from Frances's voice recording where appropriate

#### 2. Chester-Style Typography & Layout
- Large "belong." title (with period) at top left
- Introduction as plain text without containers or boxes
- Key phrases highlighted in orange-red (like Chester's links)
- Non-linear masonry grid layout with cards in varying positions
- Serif font for headings, sans-serif for body text

#### 3. Card Structure
- Each card has the "Projects:" category label in top left
- Arrow (→) in top right indicates expandability
- Simple white cards with thin borders (no shadows or decorative elements)
- Consistent typography and spacing
- Cards expand in-place when clicked for detailed content

#### 4. Visual Breathing Room
- Generous white space throughout
- Cards arranged with ample spacing between
- Staggered layout creates visual interest and encourages exploration
- Clean, uncluttered aesthetic with minimal decorative elements

### Technical Requirements

#### Development Approach
- Next.js with App Router
- Tailwind CSS for styling
- Minimal JavaScript for interactions
- Static-first approach with progressive enhancement
- Mobile-responsive design (stacked layout on smaller screens)

#### Color Palette
- Primary: #FF5C39 (vibrant orange-red for highlighted text and accents)
- Secondary: #FFB238 (warm yellow for secondary elements)
- Background: #FFFFFF (clean white)
- Text: #444444 (soft black for readability)

#### Typography
- Headings: Georgia, serif (or equivalent)
- Body: Arial, Helvetica, sans-serif
- Minimal font-weight variation (regular with occasional bold)
- Limited font size variations (3-4 sizes total)

### Content Structure (Frances's Tour)

#### 1. welcome.
**Frances greets you at the door**
- Personal introduction: "Hey there, I'm Frances 👋 Welcome to Belong Health Care 🏡"
- Brief statement about creating homes where people with mental health conditions truly belong
- Simple text without containers, following Chester's introduction style
- Key phrases highlighted as text links in primary color

#### 2. why I started belong.
**Frances shares her personal story**
- Card with "Projects: Why I Started Belong →" at top
- Section heading "why I started belong." in lower case
- Frances's full story from the transcript about her cousin with schizophrenia
- Emotional narrative about seeing minimal standard of care and creating something better
- Expandable to show the complete story in Frances's exact words

#### 3. our homes.
**Frances shows you around the physical spaces**
- Card with "Projects: Our Homes →" at top
- Section heading "our homes." in lower case
- Brief overview of the two homes in Brooklyn Park
- Individual cards for each home:
  - Aspen Grove House (18+): 5 bedrooms, full capacity
  - Willow Stream Residence (55+): 5 bedrooms, 3 beds available
- Photos of both exteriors and interior spaces
- Frances's description of what makes each home special
- Prominent indication of availability in the 55+ home

#### 4. what we eat.
**Frances takes you to the kitchen**
- Card with "Projects: What We Eat →" at top
- Section heading "what we eat." in lower case
- Emphasis on home-cooked meals made from scratch daily
- Details about cultural foods and accommodating residents' preferences
- "We don't do microwaved food or leftovers" highlighted
- Photos of meals being prepared or served
- Sample menu items or special cultural dishes

#### 5. our days.
**Frances explains what a typical day is like**
- Card with "Projects: Our Days →" at top
- Section heading "our days." in lower case
- Information about activities and outings (especially in summer)
- Daily routines and scheduled activities
- Focus on community and connection
- Photos of residents engaged in activities (respecting privacy)
- "We go out at least once or twice a week" highlighted

#### 6. who lives here.
**Frances introduces the residents (respecting privacy)**
- Card with "Projects: Who Lives Here →" at top
- Section heading "who lives here." in lower case
- General information about residents without identifying details
- Age ranges, backgrounds, and needs
- Anonymous testimonials or stories showing impact
- "People feel like they belong here" highlighted

#### 7. come join us.
**Frances extends an invitation**
- Card with "Projects: Come Join Us →" at top
- Section heading "come join us." in lower case
- Information for potential residents and families
- Details about the referral process for case managers
- Current availability (3 beds in 55+ home) highlighted
- Call-to-action for scheduling a visit

#### 8. our team.
**Frances introduces her staff**
- Card with "Projects: Our Team →" at top
- Section heading "our team." in lower case
- Brief information about the care team
- Staff qualifications and experience
- Frances's approach to hiring staff who share her values
- "I wanted somewhere people felt like family" highlighted

#### 9. let's talk.
**Frances gives you her contact information**
- Card with "Projects: Let's Talk →" at top
- Section heading "let's talk." in lower case
- Direct contact details (phone, email)
- Address information for both homes
- Simple contact form
- Invitation to reach out with questions or to schedule a visit

### Implementation Plan

#### Phase 1: Core Structure
1. Set up Next.js project with App Router
2. Configure Tailwind CSS with custom color palette
3. Create base layout components:
   - Header with navigation
   - Card component with expandable functionality
   - Typography styles following Chester's approach

#### Phase 2: Homepage Development
1. Implement the introduction section with Frances's greeting
2. Create the masonry grid layout for content cards
3. Build the first few cards (why I started belong, our homes)
4. Implement card expansion functionality

#### Phase 3: Content Sections
1. Complete remaining content sections following the tour structure
2. Implement responsive design for all components
3. Add images and visual content
4. Optimize for performance and accessibility

#### Phase 4: Refinement & Testing
1. Test all interactive elements
2. Optimize for mobile devices
3. Conduct usability testing
4. Final content and design adjustments

### Technical Implementation Notes

#### Card Component
The expandable card component is central to the design:
```jsx
// Basic structure of Card component
const Card = ({ category, title, previewContent, fullContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="card-container">
      <div className="card-header">
        <span className="category">Projects: {category} →</span>
      </div>
      
      <h2 className="card-title">{title}.</h2>
      
      <div className="card-content">
        {isExpanded ? fullContent : previewContent}
      </div>
      
      <button 
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '×' : '→'}
      </button>
    </div>
  );
};
```

#### Masonry Layout
The staggered, non-linear layout will require custom CSS:
```css
/* Basic approach for masonry layout */
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  grid-auto-flow: dense;
}

.masonry-grid .card:nth-child(3n+1) {
  grid-column: span 2;
}

.masonry-grid .card:nth-child(4n+1) {
  grid-row: span 2;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: 1fr;
  }
  
  .masonry-grid .card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}
```

### Content Priorities

The most important content elements are:
1. Frances's personal story (emotional core)
2. Current availability (3 beds in 55+ home)
3. What makes Belong different (cultural foods, activities, personalized care)
4. Contact information for inquiries

All content should maintain Frances's authentic voice and be presented in a way that feels like she's personally guiding visitors through her creation.

### Success Metrics

The website will be successful if it:
1. Clearly communicates Frances's vision and approach
2. Generates inquiries about the available beds
3. Establishes trust with potential residents and families
4. Differentiates Belong from typical healthcare facilities
5. Is easy to navigate and understand for all users

### Future Considerations

After initial implementation, consider:
1. Adding more interactive elements while maintaining simplicity
2. Creating a simple admin interface for Frances to update bed availability
3. Integrating a blog where Frances can share updates and insights
4. Developing printable resources for families and case managers