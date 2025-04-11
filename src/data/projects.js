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
      testimonial:
        "Music Producer needed a website to advertise his services and showcase his work",
      width: '40%',
      navigation: 'Go to Live site',
      goal: 'The main objective of this project was to create a website for an Atlanta-based music producer to showcase their work. We built a custom audio player using Wavesurfer.js to allow users to listen to sample music.',
      screenshots: [`${process.env.PUBLIC_URL}/images/musicplayer.png`, `${process.env.PUBLIC_URL}/images/about360.png`, `${process.env.PUBLIC_URL}/images/360Home.png`],
      description: 'This project is a website for a music producer that showcases audio samples and allows users to listen to the music directly on the site. Site is built using React and features a custom audio player.',
      label: [ 'React.js', 'Wavesurfer.js', 'Bootstrap', 'JavaScript'],
    },
    {
        id: 'movie-app',
      avatar: <img src={jslogo} alt="react logo" height={48}/>,
      name: 'Current Films',
      image: `${process.env.PUBLIC_URL}/images/MovieApp.png`,
      project: 'Get current film info & search films from TMDB API',
      url: "https://jjlindsey.github.io/movie-appJS/",
      testimonial:
        "",
      width: '40%',
      navigation: 'Go to Live site'
    },
    // {
    //   avatar: <Avatar alt="vue logo" src={vuelogo} height={48}/>,
    //   name: 'Calculator',
    //   project: 'vue.js calculator',
    //   image: 'vue-calculator.png',
    //   testimonial:
    //     "",
    //   },
    {
      id: 'tracking-app',
        avatar: <img alt="next logo" src={nextlogo} height={48}/>,
      name: 'Real Time component',
      project: 'Tracking & Shipping component status updates in real-time',
      image: `${process.env.PUBLIC_URL}/images/orderStatus.png`,
      url: 'https://github.com/JJLindsey/tracking-app',
      testimonial:
        "",
      width: '40%',
      navigation: 'GitHub'
    },
    {
      id: 'checkout-stripe',
        avatar:<img src={reactlogo} alt="react logo" height={48}/>,
      name: 'E-Commerce Product',
      project: 'Shopping cart with Stripe payment',
      image: `${process.env.PUBLIC_URL}/images/ProductPageCleanskin.png`,
      url: 'https://github.com/JJLindsey/checkout-stripe',
      testimonial:
        "",
        goal: 'The main goal of this project was to design an e-comm product page, where a user can add or delete items in the cart on the product card, and implement a seamless Stripe checkout experience in a modern interface.',
      width: '40%',
      navigation: 'GitHub',
      videoUrl: 'https://www.youtube.com/embed/eaEnQw4v3Qo?si=hHukVmUidQIZo_iQ',
      screenshots: [`${process.env.PUBLIC_URL}/images/homeClean.png`, `${process.env.PUBLIC_URL}/images/cart.png`, `${process.env.PUBLIC_URL}/images/addedItems.png`, `${process.env.PUBLIC_URL}/images/stripecheckout.png`],
      description: 'This project is a shopping cart component that allows users to add items to their cart and proceed to checkout using Stripe for payment processing. The component is built using React and integrates with the Stripe API for secure payment handling.',
      label: [ 'React.js', 'Stripe API', 'E-commerce', 'Figma', 'UI Design', 'App Design'],
      figmaEmbed: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/Hn02KhH70ppWphpeEhMejO/EComm-site?node-id=1211-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1211%3A2&embed-host=share" allowfullscreen></iframe>',
      role: 'Design app wireframes and prototypes in Figma, build components in React, implement Stripe API for payment processing.',
    },
    {
      
      id:'password-component',
        avatar: <img src={jslogo} alt="react logo" height={48}/>,
      name: 'Password component',
      project: 'Image clears as password gets stronger',
      image: `${process.env.PUBLIC_URL}/images/passwordPage.png`,
      url: 'https://jjlindsey.github.io/password-str/',
      testimonial:
        "",
      navigation: 'GitHub',
      width: '40%'
    },
    // {
    //   avatar: <Avatar alt="react logo" src={reactlogo}/>,
    //   name: 'In Progress',
    //   project: 'UXUI Design',
    //   image: 'placeholder.png',
    //   testimonial:
    //     "",
    // },
  ]