import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CardMedia, Button, Divider, CardActions } from '@mui/material'
import {styled} from '@mui/material/styles'
import {motion} from 'framer-motion'

import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import nextlogo from '../assets/icons8-next.js-48.png'
// import clogo from '../assets/icons8-c-sharp-logo-48.png'
// import vuelogo from '../assets/icons8-vue-js-48.png'
import threeSixtyImage from '../assets/360Home.png'
import movieImage from '../assets/MovieApp.png'
import trackingImage from '../assets/orderStatus.png'
import stripePayImage from '../assets/ProductPageCleanskin.png'
import passwordImage from '../assets/passwordPage.png'
import bracketicon from '../assets/bracketPNG.png'
import { CallMade } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  //th: 200,
  height: 300,
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(255, 255, 255, 0.5)',
  borderRadius: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'rgb(255, 255, 255)',
  },
}))

const AnimatedTypography = ({ text, ...props }) => {
  const typeContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }
  return (
    <motion.div style={{overflow: "hidden", display: "flex", justifyContent: "left", fontSize: "2em"}}
      variants={typeContainer}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

const projects = [
  {
    avatar: <img src={reactlogo} alt="react logo" height={48}/>,
    name: 'Three Sixty Sessions',
    image: threeSixtyImage,
    project: 'Atlanta-based Music producer\'s site showcasing audio',
    url: 'https://threesixtysessions.com/',
    testimonial:
      "Music Producer needed a website to advertise his services and showcase his work",
    width: '40%',
    navigation: 'Go to Live site'
  },
  {
    avatar: <img src={jslogo} alt="react logo" height={48}/>,
    name: 'Current Films',
    image: movieImage,
    project: 'Get current films & search films from TMDB API',
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
    avatar: <Avatar alt="next logo" src={nextlogo}/>,
    name: 'Tracking component',
    project: 'Shipping component: updates status in real-time',
    image: trackingImage,
    url: 'https://github.com/JJLindsey/tracking-app',
    testimonial:
      "",
    width: '30%',
    navigation: 'GitHub'
  },
  {
    avatar: <Avatar alt="react logo" src={reactlogo}/>,
    name: 'Cart & Stripe Pay component',
    project: 'Shopping cart with Stripe payment',
    image: stripePayImage,
    url: 'https://github.com/JJLindsey/checkout-stripe',
    testimonial:
      "",
    width: '30%',
    navigation: 'GitHub'
  },
  {
    avatar: <Avatar alt="js logo" src={jslogo} />,
    name: 'Password component',
    project: 'Image clears as password gets stronger',
    image: passwordImage,
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
];


export default function Portfolio() {

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        <Typography variant="h4" color='#CD1C18'>
          Projects
        </Typography>
        <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '25px', marginTop: "-10px"}}></img>
      </Box>
      <Box>
      <AnimatedTypography variant="h3" text="Here is a look at some of my work" sx={{ fontWeight: 'bold', letterSpacing: 1 }}/>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <StyledCard
              raised={true}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                height: 450,
              }}
            >
                <CardHeader
                  //sx={{backgroundColor: '#18C9CD', borderRadius: '8px'}}
                  avatar={project.avatar}
                  title={
                    <Typography variant="h6" align="left">
                        {project.name}
                    </Typography>
                }
                />
                <Divider variant='middle' sx={{ mb: 1}}/>
              <CardMedia
                component="img"
                image={project.image}
                alt={`Image for ${project.name}`}
                sx={{height: 220}}
              />
              <CardContent>
                <Typography variant="body2" color="#FFF">
                  {/* {projects.testimonial} */}
                </Typography>
                <Typography variant="body1" align="center">
                        {project.project}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent: 'center'}}>
                <Button
                  sx={{backgroundColor: '#252525', '&:hover': {backgroundColor: '#18C9CD'}}}
                  variant="contained"
                  size='small'
                  href={project.url} target="_blank"
                >
                    {project.navigation}
                </Button>
                <Button
                    href={project.url}
                    target="_blank"
                    endIcon={<CallMade />}
                    sx={{ color: '#000'}}
                  >
                    view project
                </Button>
              </CardActions>
              {/* <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <CardHeader
                  avatar={project.avatar}
                  // title={projects.name}
                  // subheader={projects.project}
                  title={
                    <Typography variant="h6" align="left">
                        {project.name}
                    </Typography>
                }
                subheader={
                    <Typography variant="body2" align="left">
                        {project.project}
                    </Typography>
                }
                />
              </Box> */}
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}