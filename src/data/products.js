export const products = [
    {
      id: 'accessible-meditation',
      name: 'Mindful Pose',
      slug: 'mindful-pose',
      logo: `${process.env.PUBLIC_URL}/images/MindfulPoseLogo2.png`,
      tagline: 'Visual-First Meditation for Accessibility',
      type: 'Inclusive Product Strategy & Accessibility Research',
      timeline: '4 months - Case Study Project',
      role: 'Product Manager & UX Researcher',
      problem: 'The 48M Americans with hearing loss are excluded from the $4.2B meditation app market...',
      opportunity: 'Untapped $273M market...',
      userResearch: 'Secondary research synthesis of 7+ academic studies...',
      keyInsights: '1) D/HH users experience cognitive exhaustion...',
      solution: 'Visual-first meditation app with concentration fatigue recovery features...',
      impact: 'Identified underserved market with 400K potential users...',
      lessons: 'Importance of designing accessibility-first rather than retrofitting features.',
  
      description: 'Research-backed case study exploring accessibility-focused product innovation...',
      metrics: [
        { value: '400K', label: 'Potential Users' },
        { value: '$24M', label: 'Market Value' },
      ],
      methods: [
        'Accessibility Audit', 'RICE Prioritization', 'Persona Development',
      ],
      navigation: 'Read Case Study',
      url: 'https://example.com/case-study/restorevision',
      image: `${process.env.PUBLIC_URL}/images/Mobile-Home.png`,
      videoUrl: '',
  
      userPersonas: [
        {
          name: 'Maya (Hard of Hearing)',
          description: 'Communicates via lip-reading, struggles with fatigue during meetings and after work.',
          quote: 'By the end of the day, I’m mentally drained from trying to understand people.'
        },
        {
          name: 'Alex (Deaf)',
          description: 'Uses ASL interpreter, finds traditional meditation apps inaccessible.',
          quote: 'I need visual cues to meditate effectively.'
        }
      ],
  
      featureMatrix: [
        {
          name: 'Animated Breathing Guides',
          impact: 'High',
          effort: 'Low',
          priority: 'High'
        },
        {
          name: 'Energy-Level Tracker',
          impact: 'Medium',
          effort: 'Medium',
          priority: 'Medium'
        },
      ],
  
      screenshots: [
        '/images/restore/screen1.png',
        '/images/restore/screen2.png',
      ],
  
      figmaEmbed: '<iframe ...></iframe>'
    },
    // Add more projects
  ];
  