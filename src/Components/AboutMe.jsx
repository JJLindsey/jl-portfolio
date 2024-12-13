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
import { Divider } from '@mui/material';
import bracketicon from '../assets/bracketPNG.png'

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
  background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.5) 70%)',
  zIndex: 9999,
  animation: `${shimmerAnimation} 3s ease-out forwards`,
}))

const items = [
  // {
  //   icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
  //   title: 'Strategic Thinker',
  //   description:
  //     'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  // },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Scalable Components',
    description:
      'Crafting high-performing, efficient, and scalable frontend components to streamline data management and elevate user interactions.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Inclusive User Experiences',
    description:
      'I create accessible and inclusive user interfaces that not only look great but also provide exceptional experiences for all users.'
  },
  // {
  //   icon: <AutoFixHighRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
  //   title: 'Critical Thinking & Curiosity',
  //   description:
  //     'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  // },
  // {
  //   icon: <GroupsIcon sx={{ fontSize: '2.5rem', color: '#006aff'}}/>,
  //   title: 'Collaborate for Impact',
  //   description:
  //     'Passionate about collaboration, I contribute to successful projects by fostering strong teamwork and open communication.',
  // },
  {
    icon: <QueryStatsRoundedIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Crafting Intuitive UI',
    description:
      'With a strong foundation in design and development, I specialize in bringing beautiful designs to life through clean, efficient code to ensure that the final product is both visually stunning and user-friendly.'
  },
]

const FrameRectangle = ({ color, ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '5px',
      height: '5px',
      border: `9px solid ${color}`,
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
        color: 'white',
        bgcolor: '#000',
        mt: 8
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
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                direction="column"
                color="white"
                //component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 1,
                  height: '100%',
                  background: 'transparent',
                  backgroundColor: index % 2 === 0 ? "#161616" : "#CD1C18",
                  transition: 'zoom 0.3s ease-in-out', 
                  "&:hover":{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' },
                }}
              >
                <Box>{item.icon}</Box>
                <div>
                  <Typography align='left' fontWeight="600" gutterBottom sx={{ color: '#fff', fontSize: '1.5rem', pt: 3, mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Divider sx={{ borderWidth: 2, opacity: 0.8, borderColor: index % 2 === 0 ? "#CD1C18" : "#FFF", mb: 3, mr: 35 }}/>
                  <Typography align='left' sx={{ color: '#fff', pb: 3 }}>
                    {item.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'left',
            width: { sm: '100%'},
            textAlign: { sm: 'left', md: 'left' },
          }}
        >
          {/* <Box sx={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
            <FrameRectangle color="#d71920" sx={{ top: -42, left: -45 }} />
            <FrameRectangle color="#006aff" sx={{ top: 7, left: -45 }} />
            <FrameRectangle color="#ffda00" sx={{ top: 45, left: 15 }} />
            <img src={MyImage} width={175} alt="portrait" style={{ position: 'relative', zIndex: 1 }} />
          </Box> */}
          
        </Grid>
        <Grid>
          <Typography align='left' variant="h5" sx={{ mt: 8, color: '#CD1C18'}}>
            About Me
          </Typography>
          <img src={bracketicon} alt='icon' width='108px' align="left" style={{marginLeft: '20px', marginTop: "-5px"}}></img>
          <Typography align='left' variant="h3" sx={{ mt: 8, mb: 4}}>
            Fueled by Curiosity
          </Typography>
          <Typography align='left' variant='body1' component='p'>
          As a designer-turned-frontend engineer, I bridge the gap between imagination and reality.
          Curiosity brought me to programming and it keeps me passionate about learning. A lifelong learner, I'm energized by the power of collaboration. I'm a strategic thinker who builds bridges across teams, uniting them around shared goals.
          </Typography>
          <Typography align='center' variant="h4" sx={{ mt: 4}}>
            Tech
          </Typography>
        </Grid>
        <Grid sx={{display: 'flex', alignItems: 'center'}}>
          <img src={reactIcon} alt='react icon' width={64}/>
          <img src={jsIcon} alt='javascript icon' width={64}/>
          <img src={htmlIcon} alt='html icon' width={64}/>
          <img src={cssIcon} alt='css icon' width={50}/>
          <img src={figmaIcon} alt='figma icon' width={58}/>
          <img src={cSharp} alt='C Sharp icon' width={60}/>
        </Grid>
      </Container>
    </Box>
    </>
  );
}