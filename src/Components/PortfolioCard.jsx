import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { CardMedia, Icon, ButtonBase, Button } from '@mui/material'
import {styled, keyframes} from '@mui/material/styles'

import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import clogo from '../assets/icons8-c-sharp-logo-48.png'
import vuelogo from '../assets/icons8-vue-js-48.png'

//Nuemorphism code for cards
// body {
//   line-height: 1.7;
// }

// .material-icons {
//   font-size: 4rem !important;
// }

// .cards {
//   background: #e6e6e6;
// }

// .cards .row {
//   width: 100%;
//   max-width: 1280px;
//   padding-top: 30px;
//   margin-bottom: 0;
// }

// .cards .row .col:not(:last-child) {
// padding-right: 20px;
// }
// .cards .card {
// background: transparent;
//       box-shadow: 6px 6px 14px 0 rgba(0, 0, 0, 0.2),
//     -8px -8px 18px 0 rgba(255, 255, 255, 0.55);
//   border-radius: 40px;
//   padding: 4px 30px 20px;
//   min-height: 380px;
// }

// .cards.container {
//   width: 100%;
//   max-width: none;
//   padding: 0 20px;
// }
const polaroidKeyframes = keyframes`
  0% {
    transform: scale(0.8) rotate(-10deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`
const StyledCard = styled(Card)(({ theme }) => ({
  th: 200,
  height: 300,
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
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

const projects = [
  {
    avatar: <img src={reactlogo} alt="react logo" height={48}/>,
    name: 'Three Sixty Sessions',
    image: '360Home.png',
    project: 'live - music producers site',
    url: 'https://threesixtysessions.com/',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: <img src={clogo} alt="c# logo" height={48}/>,
    name: 'C# Memory Game',
    image: 'MemoryGame.png',
    project: 'simple memory game app with timer',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <img src={jslogo} alt="react logo" height={48}/>,
    name: 'Current Films app',
    image: 'MovieApp.png',
    project: 'search films & ratings from TMDB API',
    url: "https://jjlindsey.github.io/movie-appJS/",
    testimonial:
      'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
    width: '40%'
  },
  {
    avatar: <Avatar alt="vue logo" src={vuelogo} />,
    name: 'Calculator',
    project: 'vue.js calculator',
    image: 'vue-calculator.png',
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
    },
  {
    avatar: <Avatar alt="js logo" src={jslogo} />,
    name: 'Password Strength',
    project: 'blurry load, image clears as password gets stronger',
    image: 'passwordPage.png',
    url: 'https://jjlindsey.github.io/password-str/',
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'In Progress',
    project: 'E-Commerce',
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

// function ProjectButton({ project }) {
//   return (
//     <Button variant="outlined" sx={{ color: "#000" }} href={project.url} target="_blank">
//       {project.name}
//     </Button>
//   )
// }

export default function Portfolio() {
  const theme = useTheme()
  //const [hovered, setHovered] = useState(false)
  //const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

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
        <Typography variant="h3" color="text.primary">
          Projects
        </Typography>
        <Typography variant="h4" color="text.secondary">
          Here is a peek at some of my work...
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projects.map((projects, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <StyledCard
              raised={true}
              // onMouseEnter={() => setHovered(true)}
              // onMouseLeave={() => setHovered(false)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                height: 375,
                
                //backgroundImage: `url(/${projects.image})`,
                //opacity: 0.7,
              }}
            >
              <CardMedia
                className="polaroid-image"
                image={projects.image}
                sx={{height: 250, color: 'black'}}
              />
              <CardContent>
                <Typography variant="body2" color="#FFF">
                  {/* {projects.testimonial} */}
                </Typography>
                <Button variant="outlined" sx={{color: "#000"}}
                    href={projects.url} target="_blank"
                  >{projects.name}</Button>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // pr: 2,
                }}
              >
                <CardHeader
                  avatar={projects.avatar}
                  // title={projects.name}
                  // subheader={projects.project}
                  title={
                    <Typography variant="h6" align="left">
                        {projects.name}
                    </Typography>
                }
                subheader={
                    <Typography variant="body2" align="left">
                        {projects.project}
                    </Typography>
                }
                />
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}