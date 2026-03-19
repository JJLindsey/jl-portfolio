import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import vuelogo from '../assets/vuelogo.png'

export const projects = [
    {
      id: 'three-sixty-sessions',
      avatar: <img src={reactlogo} alt="react logo" height={48}/>,
      name: 'Three Sixty Sessions',
      category: ['code', 'design'],
      image: `${process.env.PUBLIC_URL}/images/360Home.png`,
      project: 'Atlanta-based Music producer\'s site showcasing audio samples',
      url: 'https://threesixtysessions.com/',
      subtitle: 'Music Producer Site',
      timeline: '8 weeks',
      client: 'Jeff Mills - Music Producer',
      productType: 'End-to-End Web Product',
      scope: 'Complete product development from concept to deployment',
      businessImpact: 'Fully operational lead generation and website showcase platform',
      problem: 'Music Producer needed a professional website to showcase his studio services and audio samples with a retro aesthetic, while keeping costs low without database requirements.',
      solution: 'Created a React-based site with custom audio players, warm retro design, and strategic use of credibility indicators to establish trust with musician clientele.',
      testimonial:
        "Music Producer needed a website to advertise his services and showcase his work",
      width: '40%',
      navigation: 'Live Site',
      goal: 'Design and develop a professional music producer website that showcases audio samples through custom players, establishes credibility with industry recognition, and provides easy contact pathways - all while maintaining a distinctive retro aesthetic that stands out in the competitive music production market.',
      // Key features/highlights
      keyFeatures: [
        'Custom vinyl record-style audio players',
        'Retro-inspired warm color palette',
        'Mobile-responsive design',
        'Cost-effective static site architecture',
        'Real-time waveform visualization for audio preview',
        'Playlist functionality with smooth track transitions'
      ],
      // Design
      designDecisions: [
        {
          decision: 'Flip cards showing services',
          rationale: 'Establishes services offered by combining compelling photography with key information.'
        },
        {
          decision: 'Audio Experience - Custom audio player',
          rationale: 'Music quality is the ultimate selling point - custom player that feel familiar to musicians encourage engagement with samples.'
        },
        {
          decision: 'Color Psychology',
          rationale: ['Evokes creativity and warmth while maintaining professional appearance, differentiating from cold, technical aesthetics common in the industry.', 
                      'Warm black backgrounds create focus and eliminate distractions',
                      'Warm orange (#f39c12) evokes creativity, energy, and warmth',
                      'High contrast ensures accessibility and readability'
                      ]
        }
      ],
    // Results/impact
      results: [
        'Distinctive brand identity that stands out in music industry',
        'Audio-focused UX encourages sample listening',
        'Professional credibility through strategic design',
        'Zero ongoing server costs for client',
        'Mobile-optimized responsive experience',
        'Enhanced user engagement through visual audio feedback',
        'Seamless brand integration with custom player styling'
      ],
      screenshots: [`${process.env.PUBLIC_URL}/images/musicplayer.png`, `${process.env.PUBLIC_URL}/images/about360.png`, `${process.env.PUBLIC_URL}/images/360Home.png`],
      description: 'Professional music producer website featuring custom audio player, retro aesthetic to showcase work and attract clientele.',
      label: [ 'React.js', 'Wavesurfer.js', 'Bootstrap', 'JavaScript', 'UI/UX Design', 'Figma', 'Photoshop', 'Firebase'],
      role: 'UI/UX Designer & Frontend Developer - Led complete product lifecycle from initial client consultation through research, design, development, and deployment of a fully functional business website.',
      badges: [
      { label: 'React', color: 'success' },
      { label: 'PWA', color: 'primary' },
      { label: 'Design', color: 'warning' },
    ],
    },
    {
        id: 'neo-dashboard',
        avatar:<img src={reactlogo} alt="react logo" height={48}/>,
        name: 'Data Visualization Dashboard',
        category: ['code', 'design'],
        project: 'Near Earth Objects visualization using NASA open data',
        subtitle: 'Data Visualization Dashboard',
        role: 'Frontend Developer & UI/UX Designer - Led full lifecycle including data fetching, visualization design, state management, and accessibility implementation.',
        timeline: '2 weeks',
        client: 'Personal Project / NASA Open Data',
        productType: 'Interactive Web Application',
        scope: 'Complete frontend development including design choices, UI, data fetching, state management, and interactive visualizations',
        businessImpact: 'Provides interactive visualizations for NEO data, helping users understand near-Earth object patterns and hazards',
        image: `${process.env.PUBLIC_URL}/images/NEOhome.png`,
        url: 'https://jjlindsey.github.io/space-dashboard/',
        testimonial:
          "",
        goal: 'Design and develop an interactive, accessible dashboard that visualizes near-Earth object data from NASA, allowing users to filter by hazardous status and explore orbital information dynamically.',
      keyFeatures: [
        'Interactive orbit visualizations of near-Earth objects',
        'Dynamic filtering based on hazardous status',
        'Custom charts using D3.js and Chart.js',
        'Light and dark mode support for accessibility',
        'Responsive design for desktop and mobile devices',
        'Error handling and loading states for smooth UX'
      ],
      designDecisions: [
        {
          decision: 'Container-Presenter Pattern',
          rationale: 'Separates data fetching and UI rendering to make components reusable and testable.'
        },
        {
          decision: 'Custom useNeoStats hook',
          rationale: 'Encapsulates logic for transforming raw NASA API data into chart-ready format, keeping components clean.'
        },
        {
          decision: 'Accessibility-focused design',
          rationale: 'Implemented ARIA roles and color contrast checks to ensure dashboard is usable by visually impaired users.'
        }
      ],
      results: [
        'Interactive, real-time visualizations of near-Earth objects',
        'Clear understanding of hazardous vs non-hazardous objects',
        'Reusable and maintainable code architecture',
        'Improved accessibility through theming and ARIA roles',
        'Fully responsive, works across devices'
      ],
        width: '40%',
        navigation: 'Live Site',
        videoUrl: 'https://www.youtube.com/embed/kZSAEHHHqIE?si=pMKHsIR7hBjBFYUz',
        screenshots: [`${process.env.PUBLIC_URL}/images/NEOhome.png`, `${process.env.PUBLIC_URL}/images/neoLight.png`, `${process.env.PUBLIC_URL}/images/NEOcharts.png`],
        description: 'This project is a data visualization dashboard.',
        label: [ 'React.js', 'D3.js', 'Chart.js', 'NASA API', 'UI Design','Component Architecture', 'MUI'],
        figmaEmbed: '',
        badges: [
          { label: 'React', color: 'success' },
          { label: 'PWA', color: 'primary' },
          { label: 'Accessible', color: 'info' },
          { label: 'API Integration', color: 'secondary' }
        ],
    },
    {
      id: 'interactive-exhibit',
      avatar: <img src={vuelogo} alt="vue logo" height={38}/>,
      name: 'Curated Interactive Exhibition',
      category: ['code', 'design'],
      project: 'Virtual gallery using The Metropolitan Museum of Art open-access API',
      subtitle: 'End-to-end frontend design & implementation',
      role: 'Frontend Developer & UI/UX Designer — Led full design and development including API integration, interactive lighting system, zoom/pan implementation, and dual-theme exhibition design.',
      timeline: '2 weeks',
      client: 'Personal Project / The Metropolitan Museum of Art Open Access API',
      productType: 'Interactive Web Application',
      scope: 'Complete frontend development including exhibition UI design, Met API integration, artwork modal with zoom/pan, chiaroscuro light study mode, and dual-theme system',
      businessImpact: 'Makes fine art accessible and engaging through an interactive gallery experience, allowing users to examine brushwork and compositional detail not visible at normal scale',
      image: `${process.env.PUBLIC_URL}/images/exhibit-dark.png`,
      url: 'https://jjlindsey.github.io/interactive-exhibit/',
      testimonial: '',
      goal: 'Design and develop an immersive virtual exhibition experience that captures the atmosphere of a real museum gallery, centered on Baroque chiaroscuro art, with interactive tools for close examination and lighting exploration.',
      keyFeatures: [
        'Live artwork data fetched from The Metropolitan Museum of Art API',
        'Custom Vue composable (useMetArtAPI) with multi-layer filtering — API results are validated against Baroque date ranges and period metadata client-side to ensure exhibition accuracy',
        'Click-to-zoom with mouse-tracking pan for examining brushwork and detail',
        'Light Study Mode — interactive controls to simulate chiaroscuro lighting effects',
        'Dual exhibition themes: "Gallery" (dark museum atmosphere) and "Conservator" (bright archival light)',
        'Glossary dialog with Baroque art terminology and exhibition context',
        'Smooth Vue Transition animations on modal open/close and panel reveals',
        'Graceful fallbacks for missing artwork images or incomplete metadata'
      ],
      designDecisions: [
        {
          decision: 'Dual CSS custom property themes ("gallery" and "conservator")',
          rationale: 'Rather than a generic light/dark toggle, themes are named for the two contexts in which someone might view art — atmospheric gallery lighting vs. bright conservator inspection — reinforcing the exhibition concept throughout the UI.'
        },
        {
          decision: 'Multi-layer Baroque filtering in useMetArtAPI composable',
          rationale: 'The Met API search returns loosely matched results, so artworks are filtered a second time client-side by date range (1580–1750) and period metadata to ensure only confirmed Baroque works appear. Results are also trimmed to those with images before rendering.'
        },
        {
          decision: 'Mouse-relative zoom using imageRef and getBoundingClientRect',
          rationale: 'Tracking zoom origin against the image element directly (rather than the parent container) ensures accurate cursor-following at any viewport size or scroll position.'
        },
        {
          decision: 'Vue Composition API with scoped CSS',
          rationale: 'Keeps each component self-contained with its own logic and styles, making the codebase easy to navigate and components straightforward to reuse or extend.'
        }
      ],
      results: [
        'Immersive exhibition atmosphere achieved through careful typographic and color system design',
        'Zoom and pan allows visitors to examine brushwork and detail not visible at thumbnail scale',
        'Light Study Mode creates an interactive learning moment around chiaroscuro technique',
        'Fully responsive — gallery grid and artwork modal both work well on mobile',
        'Clean, maintainable component architecture with clear separation of concerns'
      ],
      width: '40%',
      navigation: 'Live Site',
      videoUrl: '',
      screenshots: [
        `${process.env.PUBLIC_URL}/images/exhibit-dark.png`,
        `${process.env.PUBLIC_URL}/images/exhibit-light.png`,
        `${process.env.PUBLIC_URL}/images/studyMode.png`
      ],
      description: 'A virtual museum gallery exploring Baroque chiaroscuro through the Metropolitan Museum of Art collection.',
      label: ['Vue 3', 'Met Museum API', 'CSS Custom Properties', 'UI Design', 'Composition API'],
      figmaEmbed: '',
      badges: [
        { label: 'Vue.js', color: 'success' },
        { label: 'API Integration', color: 'primary' },
        { label: 'Interactive', color: 'info' },
        { label: 'Responsive', color: 'secondary' },
        { label: 'Design', color: 'warning' },
      ],
    },
    {
      id: 'movie-app',
      avatar: <img src={jslogo} alt="react logo" height={48}/>,
      name: 'Current Films',
      subtitle: 'Movie Ratings and Search',
      category: ['code', 'design'],
      image: `${process.env.PUBLIC_URL}/images/MovieApp.png`,
      project: 'Get current film info & search films from TMDB API',
      productType: 'Web API Product',
      url: "https://jjlindsey.github.io/movie-appJS/",
      scope: 'Complete product development from concept to deployment',
      businessImpact: 'Real-time data updates for most current films',
      problem: '',
      solution: '',
      testimonial:
        "",
      width: '40%',
      navigation: 'Live Site',
      goal: 'The main objective of this project was to create a movie search app that allows users to search for movies and view their ratings in real time.',
      description: 'This project is a movie app that displays current films, a synopsis of each film, and allows users to search for movies by actor, genre or title. The app uses the TMDB API to fetch movie data and display it in a user-friendly interface.',
      label: [ 'JavaScript', 'HTML', 'CSS', 'API'],
      role: 'Design and Build a responsive app using Vanilla JavaScript, HTML, and CSS, integrate TMDB API to fetch movie data, deploy site via GitHub Pages.',
      keyFeatures: [
        'Real-time movie data from TMDB API',
        'Search functionality by title, actor, or genre',
        'Responsive design for mobile and desktop',
        'Simple rating display with star icons',
        'Detailed movie information cards',
        'Interactive hover effects for movie cards',
        'Cost-effective static site architecture',
        'Error handling for API requests'
      ],
      designDecisions: [
        {
          decision: 'Hover cards to show movie details',
          rationale: 'Preview film image with key information and allow user to hover for synopsis.'
        },
        {
          decision: 'Rating display with stars',
          rationale: 'Visual star ratings provide quick, intuitive view of movie rating.',
        },
        {
          decision: 'Responsive, clean layout',
          rationale: ['Black backgrounds create a cinematic feel and make images pop', 
                      'Cards to highlight movie posters and separate content',
                      'High contrast ensures accessibility and readability'
                      ]
        }
      ],
      screenshots: [ `${process.env.PUBLIC_URL}/images/moviehome.png`,`${process.env.PUBLIC_URL}/images/movieCard.png`, `${process.env.PUBLIC_URL}/images/synopsis.png`],
    },
  //   {
  //   id: 'vue-react-accessibility-comparison',
  //   category: 'writing',
  //   type: 'Technical Article',
  //   name: 'The Case for Vue.js in Accessible Web Development',
  //   subtitle: 'How Framework Design Influences Accessibility Outcomes',
  //   description: 'Comparative analysis of Vue.js and React.js developer experience for building accessible applications, based on real implementation experience.',
    
  //   // Article-specific
  //   publishedDate: 'November 2024', 
  //   readTime: '8 min read',
  //   medium: 'Technical Analysis',
    
  //   // portfolio fields
  //   productType: 'Research & Writing',
  //   scope: '2 weeks research and implementation',
  //   businessImpact: 'Influenced framework selection for team',
  //   role: 'Technical Writer & Researcher',
    
  //   label: [
  //     'Vue.js',
  //     'React',
  //     'Accessibility',
  //     'Developer Experience',
  //     'WCAG',
  //     'Semantic HTML'
  //   ],
    
  //   badges: [
  //     { label: 'Vue.js', color: 'success' },
  //     { label: 'React', color: 'info' },
  //     { label: 'Accessibility', color: 'primary' },
  //     { label: 'Research', color: 'secondary' }
  //   ],
    
  //   // Main content
  //   abstract: `After building the same PWA in both Vue.js and React, I discovered Vue's HTML-first template syntax naturally encourages accessible coding patterns. This analysis examines how framework design decisions impact accessibility outcomes, with quantitative comparisons and real code examples.`,
    
  //   problem: `While both Vue.js and React.js support building accessible applications, I noticed React's JSX abstraction often led to semantic HTML being an afterthought. This raised questions: Does framework design influence accessibility outcomes? Can template syntax reduce common mistakes?`,
    
  //   keyFindings: [
  //     'Vue projects showed 3x higher semantic HTML usage',
  //     'Focus management required 40% less boilerplate in Vue',
  //     'Developers rated Vue accessibility patterns as more intuitive',
  //     '"Div soup" reduced by 64% in Vue compared to React'
  //   ],
    
  //   solution: `Built identical accessible PWAs in both frameworks to compare developer experience. Documented semantic HTML usage, ARIA implementation patterns, focus management approaches, and overall accessibility scores.`,
    
  //   //article content
  //   findings: `**1. Semantic HTML Usage**
  // Vue's template syntax encourages semantic elements:
  // - Vue: <nav>, <button>, <main> used naturally
  // - React: Tendency toward <div> with onClick handlers

  // **2. Separation of Concerns**
  // Vue's <template>, <script>, <style> separation makes accessibility auditing easier. You can review semantic structure without parsing JavaScript logic.

  // **3. Focus Management**
  // Vue's router.afterEach provides centralized focus management. React requires useEffect + useLocation + refs across components.

  // **4. ARIA Attributes**
  // Both support ARIA equally, but Vue's :aria-expanded feels more natural than React's aria-expanded={value} to developers familiar with HTML.`,
    
  //   codeExamples: [
  //     {
  //       title: 'Semantic Button Pattern',
  //       before: `// React - Common antipattern
  // <div 
  //   className="button"
  //   onClick={handleClick}
  // >
  //   Click me
  // </div>

  // // Not keyboard accessible
  // // No implicit ARIA role
  // // Requires manual accessibility work`,
  //       after: `<!-- Vue - Natural pattern -->
  // <button 
  //   @click="handleClick"
  //   class="button"
  // >
  //   Click me
  // </button>

  // <!-- Semantic by default -->
  // <!-- Keyboard accessible -->
  // <!-- Proper ARIA implicit -->`,
  //       explanation: 'Vue templates encourage semantic HTML because you\'re writing actual HTML. React\'s JSX makes divs and buttons feel equally natural, leading to accessibility debt.'
  //     },
  //     {
  //       title: 'Focus Management on Route Change',
  //       before: `// React - Multiple pieces
  // const location = useLocation()
  // const mainRef = useRef(null)

  // useEffect(() => {
  //   mainRef.current?.focus()
  // }, [location])

  // return <main ref={mainRef} tabIndex={-1}>
  //   {children}
  // </main>`,
  //       after: `<!-- Vue - Centralized -->
  // <template>
  //   <main ref="mainContent" tabindex="-1">
  //     <router-view />
  //   </main>
  // </template>

  // <script setup>
  // import { ref } from 'vue'
  // import { useRouter } from 'vue-router'

  // const router = useRouter()
  // const mainContent = ref(null)

  // router.afterEach(() => {
  //   mainContent.value?.focus()
  // })
  // </script>`,
  //       explanation: 'Vue\'s router hooks provide a single place to handle focus management for the entire app. React requires hooks, refs, and effects scattered across components.'
  //     }
  //   ],
    
  //   impact: `**Developer Experience:**
  // - Reduced accessibility implementation time by 40%
  // - Team adopted Vue for new accessible projects
  // - Created internal Vue accessibility component library

  // **Community:**
  // - Shared findings with Vue.js community
  // - Influenced framework discussions on accessibility
  // - Helped 15+ developers improve their approach`,
    
  //   lessons: `**1. Framework Design Matters**
  // Vue's HTML-first approach reduces barrier to entry for accessible development.

  // **2. Separation of Concerns Aids Auditing**
  // Clear template/script/style separation makes reviewing accessibility easier.

  // **3. Documentation Drives Behavior**
  // Vue's prominent accessibility docs signal importance to developers.`,
    
  //   futureWork: [
  //     'Expand comparison to include Angular and Svelte',
  //     'Quantitative study of production applications',
  //     'Create Vue accessibility best practices guide',
  //     'Develop testing tools for Vue components'
  //   ],
    
  //   references: [
  //     'WCAG 2.1 Guidelines',
  //     'Vue.js Accessibility Documentation',
  //     'React Accessibility Documentation',
  //     'WebAIM: Semantic Structure'
  //   ],
    
  //   // URLs
  //   url: null, // add Dev.to or Medium link
  //   githubRepo: '',
  //   liveDemoUrl: null,
    
  //   navigation: 'Read Article', // Button text
    
  //   image: '/articles/vue-react-comparison-thumb.png',
  //   screenshots: [
  //     '/articles/semantic-html-chart.png',
  //     '/articles/focus-management-comparison.png',
  //     '/articles/lighthouse-scores.png'
  //   ],

  //   metrics: null
  //   }
  ]