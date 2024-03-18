import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import { CardMedia, Icon } from '@mui/material';
import reactlogo from '../assets/logo192.png'
import jslogo from '../assets/icons8-javascript-48.png'
import clogo from '../assets/icons8-c-sharp-logo-48.png'

const projects = [
  {
    avatar: <img src={reactlogo} alt="react logo" height={48}/>,
    name: 'Three Sixty Sessions',
    image: '360Home.png',
    project: 'music producer site',
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    avatar: <img src={clogo} alt="c# logo" height={48}/>,
    name: 'C# Memory Game',
    image: 'MemoryGame.png',
    project: 'memory game app',
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    avatar: <img src={jslogo} alt="react logo" height={48}/>,
    name: 'Current Films app',
    image: 'MovieApp.png',
    project: 'movie app',
    testimonial:
      'The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.',
  },
  {
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    name: 'Julia Stewart',
    project: 'Senior Engineer',
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    name: 'John Smith',
    project: 'Product Designer',
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    name: 'Daniel Wolf',
    project: 'CDO',
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

// const whiteLogos = [
//   "/public/images/icons8-c-sharp-logo-48.png",
//   "/public/images/material-ui-1.svg",
//   "/public/images/icons8-javascript-48.png",
//   "/public/logo192.png"
// ];

// const darkLogos = [
//     "images/icons8-c-sharp-logo-48.png",
//     "images/material-ui-1.svg",
//     "images/icons8-javascript-48.png",
//     "logo192.png"
// ];

const logoStyle = {
  width: '48px',
  height: '48px',
  opacity: 0.5,
};

export default function Portfolio() {
  const theme = useTheme();
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
        <Typography component="h2" variant="h4" color="text.primary">
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          See what our customers love about our products. Discover how we excel in
          efficiency, durability, and satisfaction. Join us for quality, innovation,
          and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {projects.map((projects, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1
              }}
            >
              <CardMedia
                image={projects.image}
                sx={{height: 140, color: 'black'}}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {projects.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={projects.avatar}
                  title={projects.name}
                  subheader={projects.project}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}