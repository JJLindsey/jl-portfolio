import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { CardMedia, Button } from '@mui/material'
import {styled} from '@mui/material/styles'
import {motion} from 'framer-motion'

import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import nextlogo from '../assets/icons8-next.js-48.png'
// import clogo from '../assets/icons8-c-sharp-logo-48.png'
// import vuelogo from '../assets/icons8-vue-js-48.png'
// import { CallMade } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  th: 200,
  height: 300,
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(9px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
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
    <motion.div style={{overflow: "hidden", display: "flex", justifyContent: "center", fontSize: "2em"}}
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
    image: '360Home.png',
    project: 'live - music producers site',
    url: 'https://threesixtysessions.com/',
    testimonial:
      "Music Producer needed a website to advertise his services and showcase his work",
  },
  {
    avatar: <img src={jslogo} alt="react logo" height={48}/>,
    name: 'Current Films app',
    image: 'MovieApp.png',
    project: 'search films from TMDB API',
    url: "https://jjlindsey.github.io/movie-appJS/",
    testimonial:
      "",
    width: '40%'
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
    name: 'Tracking Component',
    project: 'Shipping component: updates status in real-time',
    image: 'orderStatus.png',
    url: 'https://github.com/JJLindsey/tracking-app',
    testimonial:
      "",
    width: '30%'
  },
  {
    avatar: <Avatar alt="react logo" src={reactlogo}/>,
    name: 'Shopping Cart',
    project: 'Shopping cart and Stripe payment',
    image: 'ProductPageCleanskin.png',
    url: 'https://github.com/JJLindsey/checkout-stripe',
    testimonial:
      "",
    width: '30%'
  },
  {
    avatar: <Avatar alt="js logo" src={jslogo} />,
    name: 'Password Strength',
    project: 'image clears as password gets stronger',
    image: 'passwordPage.png',
    url: 'https://jjlindsey.github.io/password-str/',
    testimonial:
      "",
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
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography variant="h3" color="primary">
          Projects
        </Typography>
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
                >
                </CardHeader>
                {/* <Button
                    href={project.url}
                    target="_blank"
                    endIcon={<CallMade />}
                  >
                    view project
                </Button> */}
              <CardMedia
                component="img"
                src={project.image}
                alt={`Image for ${project.name}`}
                sx={{height: 225, color: 'black'}}
              />
              <CardContent>
                <Typography variant="body2" color="#FFF">
                  {/* {projects.testimonial} */}
                </Typography>
                <Button variant="contained" color="primary"
                    href={project.url} target="_blank"
                  >{project.name}
                </Button>
              </CardContent>
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