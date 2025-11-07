export const accessibilityReport = [
     {
    id: 'neo-dashboard',
    name: 'NEO Dashboard',
    slug: 'asteroid-dashboard',
    logo: `${process.env.PUBLIC_URL}`,
    alt: 'Asteroid dashboard data visualization with line and bar charts',
    tagline: 'Accessible Space Data Dashboard',
    description:
      'The Near-Earth Object (NEO) dashboard was enhanced for accessibility, with semantic structure, aria-labels, and focus management for chart regions.',
    before: {
      issues: [
        'Tooltip in charts invisible to screen readers.',
        'Theme mode did not tell user if on/off.',
        'Keyboard navigation not working for map information.',
      ],
      screenshot: `${process.env.PUBLIC_URL}/images/NeoDashWave.png`,
      score: 56
    },
    after: {
      improvements: [
        'Added chart aria-labels and summaries for screen readers.',
        'Improved focus order using logical tab indexing.',
        'Provided text alternatives for visual data insights.',
      ],
      
      screenshot: `${process.env.PUBLIC_URL}/images/NeoDashAccess.png`,
      score: 98
    },
    navigation: 'View Dashboard',
    url: '',
    caseStudyUrl: '/case-studies/asteroid-dashboard',
    focusAreas: ['Keyboard Navigation', 'Chart Accessibility', 'Screen Reader Support'],
  },
]