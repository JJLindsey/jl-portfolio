export const caseStudies = [
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
        { value: '~400K', label: 'Potential Users' },
        { value: '~$24M', label: 'Market Value' },
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
      designDecisions: [
        {
           "decision": "Prioritizing Animated Breathing Guides over auditory ones.",
    "rationale": "While most meditation apps rely on sound, this decision was made to ensure the core feature was accessible 'out-of-the-box' for D/HH users. This choice aligns with the core problem statement and serves the target market more effectively than simply adding closed captions."
        },
        {
          "decision": "Visual-first animated breathing guides.",
          "rationale": "Directly addresses the key insight that Deaf and Hard of Hearing (D/HH) users need visual cues to meditate effectively, as traditional auditory guides are inaccessible to them."
        },
        {
          "decision": "Implementation of a brand-specific color palette.",
          "rationale": "Primary color, #13BABA, was selected for its calming and professional qualities, directly supporting the app’s purpose of mental restoration. Secondary and accent colors, #FBD14C and #F87E01, introduce warmth and energy, creating a visually engaging experience that counters the cold, sterile aesthetic common in wellness apps. This palette is designed to be both aesthetically pleasing for users and easily adaptable for social media marketing, ensuring brand consistency and recognizability."
      }
      ],
      screenshots: [
        '/images/restore/screen1.png',
        '/images/restore/screen2.png',
      ],
  
      figmaEmbed: '<iframe ...></iframe>'
    },
    // Add more projects
  ];
  