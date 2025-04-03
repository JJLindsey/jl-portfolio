import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AnimatedCard from './AnimatedCard';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

import htmlIcon from '../assets/icons8-html-48.png'
import cssIcon from '../assets/css-icon.png'
import reactIcon from '../assets/logo192.png'
import jsIcon from '../assets/icons8-javascript-48.png'
import cSharp from '../assets/icons8-c-sharp-logo-48.png'
import figmaIcon from '../assets/icons8-figma-48.png'
import { Tooltip } from '@mui/material';
import bracketicon from '../assets/bracketPNG.png'
import GradientDivider from './GradientDivider';

// const shimmerAnimation = keyframes`
//   0% {
// 		background-position: 0% 50%;
// 	}
// 	50% {
// 		background-position: 100% 50%;
// 	}
// 	100% {
// 		background-position: 0% 50%;
// 	}
// `;

// const ShimmerOverlay = styled('div')(({theme}) => ({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   //background: 'linear-gradient(to right, rgba(217,217,217,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 70%)',
//   background: 'linear-gradient(-45deg, rgba(217,217,217,0.3) 0%, rgba(70,70,70,0.5) 35%, rgba(0,0,0,0.5) 50%)',
//   zIndex: 9999,
//   animation: `${shimmerAnimation} 15s ease-out forwards`,
// }))

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
      'With a strong foundation in design, I specialize in bringing designs to life to ensure that the final product is both visually stunning & user-friendly.'
  },
]

export default function About() {
  // const [showShimmer, setShowShimmer] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowShimmer(false)
  //   }, 1500)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 2 },
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
        <Grid container>
          <Grid item>
            <Typography align='left' variant="h4" sx={{ mt: 8, color: '#CD1C18'}}>
              About Me
            </Typography>
            <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '45px', marginTop: "-10px"}}></img>
            <Typography align='left' variant="h3" sx={{ mt: 8, mb: 4, fontWeight: 'bold'}}>
              Curiosity is my superpower
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb:2}}>
            As a designer-turned-frontend engineer, I blend artistic vision with technical prowess to craft exceptional digital experiences. I'm passionate about creating intuitive and visually appealing interfaces that solve real-world problems.
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb: 4}}>
            Driven by curiosity, I'm constantly exploring new technologies and techniques to elevate my craft. I thrive in collaborative environments, where I can learn from others and contribute to the success of the team.
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{display: 'flex', alignItems: 'center', mb: 4}}>
          <Tooltip title='React' aria-labelledby='React logo'><img src={reactIcon} alt='react icon' width={64}/></Tooltip>
          <Tooltip title='Javascript'><img src={jsIcon} alt='javascript icon' width={64}/></Tooltip>
          <Tooltip title='HTML'><img src={htmlIcon} alt='html icon' width={64}/></Tooltip> 
          <Tooltip title='CSS'><img src={cssIcon} alt='css icon' width={50}/></Tooltip> 
          <Tooltip title='Figma'><img src={figmaIcon} alt='figma icon' width={58}/></Tooltip> 
          <Tooltip title='C#'><img src={cSharp} alt='C Sharp icon' width={60}/></Tooltip>
        </Grid>
        <Grid container spacing={2.5} sx={{mb: 8}}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard
                index={index}
                item={item}
              />
            </Grid>
          ))}
        </Grid>
        <GradientDivider />
      </Container> 
    </Box>
    </>
  );
}