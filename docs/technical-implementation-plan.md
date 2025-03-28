# Technical Implementation Plan: Belong Health Care Website

## Project Overview
Create a personal, authentic website for Belong Health Care, a specialized residential care provider founded by Frances, a psychiatric nurse with over 10 years of experience. The site will follow a Chester-inspired digital garden approach with a masonry card layout and expandable sections.

## Technology Stack

### Core Technologies
- **Frontend Framework**: Next.js with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion (minimal usage)
- **Hosting**: Vercel

### Additional Libraries
- **Form Handling**: React Hook Form
- **Icons**: Lucide React
- **Date Handling**: date-fns (if needed)

## Project Structure

```
belong-health-care/
├── app/
│   ├── layout.tsx           # Main layout with header
│   ├── page.tsx             # Homepage with masonry grid
│   ├── globals.css          # Global styles
│   └── fonts.ts             # Font declarations
├── components/
│   ├── ui/
│   │   ├── Card.tsx         # Expandable card component
│   │   ├── MasonryGrid.tsx  # Grid layout component
│   │   └── Typography.tsx   # Text components (headings, etc.)
│   ├── sections/
│   │   ├── Welcome.tsx      # Frances's greeting section
│   │   ├── WhyIStarted.tsx  # Personal story section
│   │   └── [other sections] # Remaining tour sections
│   └── layout/
│       ├── Header.tsx       # Site header with title
│       └── Footer.tsx       # Minimal footer
├── lib/
│   ├── constants.ts         # Content constants
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Optimized images
└── content/
    └── tour-sections/       # Content for each section
```

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [x] Set up Next.js project with TypeScript
- [ ] Configure Tailwind with custom color palette
- [ ] Implement base layout and typography
- [ ] Create Card and MasonryGrid components
- [ ] Set up project structure

### Phase 2: Core Content (Week 2)
- [ ] Implement welcome section
- [ ] Create first 3-4 tour section components
- [ ] Develop card expansion functionality
- [ ] Implement mobile responsiveness

### Phase 3: Complete Content (Week 3)
- [ ] Implement remaining tour sections
- [ ] Add all images and optimize
- [ ] Create contact form functionality
- [ ] Polish animations and interactions

### Phase 4: Testing & Refinement (Week 4)
- [ ] Cross-browser testing
- [ ] Accessibility audit and improvements
- [ ] Performance optimization
- [ ] Content review and final adjustments

## Component Specifications

### Card Component
- Expandable container for content sections
- Header with "Projects: [Category]" and expansion arrow
- Collapsible content area with smooth animation
- Consistent typography and spacing

### MasonryGrid Component
- Staggered, non-linear layout
- Responsive behavior (stacked on mobile)
- Variable card sizes for visual interest
- Consistent spacing between cards

### Typography Components
- Heading styles (serif font, consistent sizing)
- Body text styles (sans-serif, readable)
- Highlight text component for orange-red accents
- Consistent spacing and line heights

## Custom Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5C39',
        secondary: '#FFB238',
        background: '#FFFFFF',
        text: '#444444',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        // Custom spacing values if needed
      },
    },
  },
  plugins: [],
}
```

## Accessibility Considerations
- Semantic HTML structure
- Proper ARIA attributes for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus styles for interactive elements

## Performance Optimizations
- Next.js static generation
- Image optimization
- Minimal JavaScript
- Code splitting
- Font optimization

## Testing Strategy
- Component testing with Jest and React Testing Library
- Accessibility testing with axe-core
- Cross-browser testing
- Mobile responsiveness testing
- Performance testing with Lighthouse

## Deployment Strategy
- Build and deploy to Vercel
- Set up continuous integration
- Configure custom domain
- Implement analytics

## Future Enhancement Plan
- Admin interface for Frances to update bed availability
- Blog integration
- Printable resource generation
- Enhanced animation and interactivity