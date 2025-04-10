import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import nextlogo from '../assets/icons8-next.js-48.png'

export const projects = [
    {
      avatar: <img src={reactlogo} alt="react logo" height={48}/>,
      name: 'Three Sixty Sessions',
      image: `${process.env.PUBLIC_URL}/images/360Home.png`,
      project: 'Atlanta-based Music producer\'s site showcasing audio samples',
      url: 'https://threesixtysessions.com/',
      testimonial:
        "Music Producer needed a website to advertise his services and showcase his work",
      width: '40%',
      navigation: 'Go to Live site'
    },
    {
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
      avatar:<img src={reactlogo} alt="react logo" height={48}/>,
      name: 'Cart & Stripe Pay component',
      project: 'Shopping cart with Stripe payment',
      image: `${process.env.PUBLIC_URL}/images/ProductPageCleanskin.png`,
      url: 'https://github.com/JJLindsey/checkout-stripe',
      testimonial:
        "",
      width: '40%',
      navigation: 'GitHub'
    },
    {
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