import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AnimatedCard from './AnimatedCard';
//import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
//import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import htmlIcon from '../assets/icons8-html-48.png'
import cssIcon from '../assets/css-icon.png'
import reactIcon from '../assets/logo192.png'
import jsIcon from '../assets/icons8-javascript-48.png'
import cSharp from '../assets/icons8-c-sharp-logo-48.png'
import figmaIcon from '../assets/icons8-figma-48.png'
import { Tooltip } from '@mui/material';
import bracketicon from '../assets/bracketPNG.png'
import GradientDivider from './GradientDivider';


const items = [
  // {
  //   icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
  //   title: 'Strategic Thinker',
  //   description:
  //     'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  // },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Design Systems',
    description:
      'Building scalable component libraries that bridge design and development teams, ensuring consistency across products while maintaining flexibility for creative expression.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Culturally-Aware UX',
    description:
      'Leveraging art history training to create interfaces that consider cultural context, aesthetic principles, and user psychology—not just technical requirements.'
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
    title: 'Strategic Implementation',
    description:
      'Translating business objectives into technical solutions through analytical thinking and contextual understanding developed through years of visual culture analysis.'
  },
]

export default function About() {

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
            <Typography align='left' variant="h4" sx={{ mt: 4, color: '#CD1C18', fontFamily: '"Michroma", sans-serif'}}>
              About Me
            </Typography>
            <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '115px', marginTop: "-10px"}}></img>
            <Typography align='left' variant="h4" sx={{ mt: 8, mb: 4, fontWeight: 'bold', fontFamily: '"Michroma", sans-serif'}}>
            From 19th-Century Art to React Components
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb:2}}>
            My art history background trained me to analyze visual culture, understand context, and think critically about design decisions. Now I apply that same analytical rigor to frontend engineering—building interfaces that aren't just functional, but culturally aware and aesthetically intentional.
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb: 4}}>
            I bridge the gap between design and development teams, ensuring consistency at scale while maintaining the flexibility for creative expression. My unique perspective helps teams make decisions that consider both technical constraints and user experience holistically. I thrive in collaborative environments, where I can learn from others and contribute to the success of the team.
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