import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import MyImage from '../assets/cartoonJennWeb.png'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupsIcon from '@mui/icons-material/Groups';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

import htmlIcon from '../assets/icons8-html-48.png'
import cssIcon from '../assets/css-icon.png'
import reactIcon from '../assets/logo192.png'
import jsIcon from '../assets/icons8-javascript-48.png'
import cSharp from '../assets/icons8-c-sharp-logo-48.png'
import figmaIcon from '../assets/icons8-figma-48.png'

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const ShimmerOverlay = styled('div')(({theme}) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
  zIndex: 9999,
  animation: `${shimmerAnimation} 2s ease-out forwards`,
}))

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
    title: 'Strategic Thinker',
    description:
      'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
    title: 'Perfomance Building',
    description:
      'Crafting high-performing Frontend components for complex forms, tables, and datagrids to streamline data management and elevate user interactions.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: '2.5rem', color: '#006aff'}}/>,
    title: 'User Experience',
    description:
      'I translate my visual instincts into intuitive and efficient user experiences, crafting interfaces that are both beautiful and functional.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
    title: 'Critical Thinking & Curiosity',
    description:
      'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: '2.5rem', color: '#006aff'}}/>,
    title: 'Collaborative',
    description:
      ' I thrive in collaborative environments to ensure project success. ',
  },
  {
    icon: <QueryStatsRoundedIcon sx={{ fontSize: '3.5rem', color: '#ffda00'}}/>,
    title: 'Empowering Interactions',
    // description:
    //   'I design user interfaces with intuitive navigation, clear information, and captivating visuals. The result? UIs that empower users and deliver a seamless experience.'
  },
]

const FrameRectangle = ({ color, ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '100px',
      height: '100px',
      border: `50px solid ${color}`,
      ...props.sx
    }}
  />
)

export default function About() {
  const [showShimmer, setShowShimmer] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShimmer(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    {showShimmer && <ShimmerOverlay />}
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'black',
        bgcolor: '#fff',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'left' },
          }}
        >
          <Box sx={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
            <FrameRectangle color="#d71920" sx={{ top: -42, left: -45 }} />
            <FrameRectangle color="#006aff" sx={{ top: 7, left: -45 }} />
            <FrameRectangle color="#ffda00" sx={{ top: 45, left: 15 }} />
            <img src={MyImage} width={175} alt="portrait" style={{ position: 'relative', zIndex: 1 }} />
          </Box>
          <Typography variant="h3" sx={{color: 'grey.800', mt: 6}}>
          {/* <p><strong>Visualizing the Future, Building it in Code: </strong>
            As a designer-turned-frontend engineer, I bridge the gap between imagination and reality.</p> */}
            Design & Code
          </Typography>
        </Grid>
        <Grid sx={{margin: '0 225px'}}>
          <Typography>
          {/* <p><strong>Visualizing the Future, Building it in Code: </strong> */}
          As a designer-turned-frontend engineer, I bridge the gap between imagination and reality.
          Curiosity brought me to programming and it keeps me passionate about learning. A lifelong learner, I'm energized by the power of collaboration. I'm a strategic thinker who builds bridges across teams, uniting them around shared goals.
          </Typography>
        </Grid>
        <Grid>
          <img src={reactIcon} alt='react icon' width={64}/>
          <img src={jsIcon} alt='javascript icon' width={64}/>
          <img src={htmlIcon} alt='html icon' width={64}/>
          <img src={cssIcon} alt='css icon' width={64}/>
          <img src={figmaIcon} alt='figma icon' width={64}/>
          <img src={cSharp} alt='C Sharp icon' width={64}/>
        </Grid>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                direction="column"
                color="inherit"
                //component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 1,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  background: 'transparent',
                  backgroundColor: 'white',
                  transition: 'box-shadow 0.3s ease-in-out', 
                  "&:hover":{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' },
                  // '&::before': {
                  //   content: '""',
                  //   position: 'absolute',
                  //   top: 0,
                  //   right: 0,
                  //   bottom: 0,
                  //   left: 0,
                  //   background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                  //   animation: `${shimmerAnimation} 3s linear`,
                  // },
                }}
              >
                <Box>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.700' }}>
                    {item.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
}