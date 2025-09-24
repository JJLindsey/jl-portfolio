import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import nextlogo from '../assets/icons8-next.js-48.png'

export const projects = [
    {
      id: 'three-sixty-sessions',
      avatar: <img src={reactlogo} alt="react logo" height={48}/>,
      name: 'Three Sixty Sessions',
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
    },
    {
        id: 'neo-dashboard',
        avatar:<img src={reactlogo} alt="react logo" height={48}/>,
        name: 'Data Visualization Dashboard',
        project: 'Neo Graphs',
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
        label: [ 'React.js', 'D3.js', 'Chart.js', 'NASA API', 'UI Design', 'MUI'],
        figmaEmbed: '',
      },
    //   {
    //     id: 'checkout-stripe',
    //       avatar:<img src={reactlogo} alt="react logo" height={48}/>,
    //     name: 'E-Commerce Product',
    //     project: 'Shopping cart with Stripe payment',
    //     image: `${process.env.PUBLIC_URL}/images/ProductPageCleanskin.png`,
    //     url: 'https://github.com/JJLindsey/checkout-stripe',
    //     testimonial:
    //       "",
    //       goal: 'The main goal of this project was to design an e-comm product page, where a user can add or delete items in the cart on the product card, and implement a seamless Stripe checkout experience in a modern interface.',
    //     width: '40%',
    //     navigation: 'GitHub',
    //     videoUrl: 'https://www.youtube.com/embed/eaEnQw4v3Qo?si=hHukVmUidQIZo_iQ',
    //     screenshots: [`${process.env.PUBLIC_URL}/images/homeClean.png`, `${process.env.PUBLIC_URL}/images/cart.png`, `${process.env.PUBLIC_URL}/images/addedItems.png`, `${process.env.PUBLIC_URL}/images/stripecheckout.png`],
    //     description: 'This project is a shopping cart component that allows users to add items to their cart and proceed to checkout using Stripe for payment processing. The component is built using React and integrates with the Stripe API for secure payment handling.',
    //     label: [ 'React.js', 'Stripe API', 'E-commerce', 'Figma', 'UI Design', 'App Design'],
    //     figmaEmbed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/Hn02KhH70ppWphpeEhMejO/EComm-site?node-id=1211-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1211%3A2&embed-host=share" allowfullscreen></iframe>',
    //     role: 'Design app wireframes and prototypes in Figma, build components in React, implement Stripe API for payment processing.',
    // },
    {
      id: 'movie-app',
      avatar: <img src={jslogo} alt="react logo" height={48}/>,
      name: 'Current Films',
      subtitle: 'Movie Ratings and Search',
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
    // {
    //   id: 'tracking-app',
    //     avatar: <img alt="next logo" src={nextlogo} height={48}/>,
    //   name: 'Real Time component',
    //   project: 'Tracking & Shipping component status updates in real-time',
    //   image: `${process.env.PUBLIC_URL}/images/orderStatus.png`,
    //   url: 'https://github.com/JJLindsey/tracking-app',
    //   testimonial:
    //     "",
    //   width: '40%',
    //   navigation: 'GitHub',
    //   goal: 'The main objective of this project was to create a websocket-based tracking component that allows users to see the status of their order in real-time.',
    //   screenshots: [`${process.env.PUBLIC_URL}/images/preparing.png`, `${process.env.PUBLIC_URL}/images/noconnection.png`, `${process.env.PUBLIC_URL}/images/shipping.png`],
    //   description: 'This project is a real-time app component that tracks the status of an order using websockets. The component is built using Next.js and allows users to see the status of their order in real-time.',
    //   label: [ 'Next', 'Websockets', 'MUI', 'RealTime'],
    //   role: 'Build a real-time app using Next.js and websocket.',
    // },
    // {
    //     id: 'fitness-dashboard',
    //     name: 'Fitness Dashboard',
    //     avatar:<img src={reactlogo} alt="react logo" height={48}/>,
    //     image:`${process.env.PUBLIC_URL}/images/comingsoon.png`,
    //     project: 'Fitness Tracker',
    //   url: '',
    //   testimonial:
    //     "",
    //     goal: 'Coming soon',
    //   width: '40%',
    //   navigation: '',
    //   videoUrl: '',
    //   screenshots: [],
    //   description: 'In Progress',
    //   label: [ 'React.js', 'Typescript', 'TailwindCSS', 'Figma', 'UI Design', 'App Design'],
    //   figmaEmbed: '',
    //   role: 'Design app wireframes and prototypes in Figma. Build Fitness Tracker app using React, Typescript, TailwindCSS.',
    // }
    // {
    //   id:'password-component',
    //     avatar: <img src={jslogo} alt="react logo" height={48}/>,
    //   name: 'Password component',
    //   project: 'Image clears as password gets stronger',
    //   image: `${process.env.PUBLIC_URL}/images/passwordPage.png`,
    //   url: 'https://jjlindsey.github.io/password-str/',
    //   testimonial:
    //     "",
    //   navigation: 'GitHub',
    //   width: '40%'
    // },
    // {
    //   avatar: <Avatar alt="react logo" src={reactlogo}/>,
    //   name: 'In Progress',
    //   project: 'UXUI Design',
    //   image: 'placeholder.png',
    //   testimonial:
    //     "",
    // },
  ]