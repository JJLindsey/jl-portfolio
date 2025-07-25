import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AnimatedCard from './AnimatedCard';
//import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
//import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
//import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
//import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

import htmlIcon from '../assets/icons8-html-48.png'
import cssIcon from '../assets/css-icon.png'
//import reactIcon from '../assets/logo192.png'
import jsIcon from '../assets/icons8-javascript-48.png'
//import cSharp from '../assets/icons8-c-sharp-logo-48.png'
import figmaIcon from '../assets/icons8-figma-48.png'
import { Divider, Tooltip } from '@mui/material';
//import bracketicon from '../assets/bracketPNG.png'
import jiraIcon from '../assets/jira.png'
import designThinking from '../assets/design-thinking.png'
import GradientDivider from './GradientDivider'


const items = [
  // {
  //   icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
  //   title: 'Strategic Thinker',
  //   description:
  //     'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  // },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Team Collaboration',
    description:
      'I connect technical and creative teams, transforming complex requirements into a clear, user-centric product vision. I leverage my technical expertise to foster strong collaboration across teams.',
  },
  {
    icon: <Diversity1Icon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'User Experience Strategy',
    description:
      'I leverage cultural analysis training to understand user psychology and behavior patterns, creating products that resonate across diverse audiences while maintaining technical feasibility.'
  },
  // {
  //   icon: <AutoFixHighRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
  //   title: 'Critical Thinking & Curiosity',
  //   description:
  //     'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  // },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
    title: 'Product Impact',
    description:
      'I connect user needs with business objectives, using analytical frameworks from art history to understand context, identify opportunities, and drive product decisions that create meaningful impact.',
  },
  // {
  //   icon: <QueryStatsRoundedIcon sx={{ fontSize: '2.5rem', color: '#fff'}}/>,
  //   title: 'Strategic Implementation',
  //   description:
  //     'Translating business objectives into technical solutions through analytical thinking and contextual understanding developed through years of visual culture analysis.'
  // },
]

export default function About() {

  return (
    <>
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 2 },
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
            <Typography align='left' variant="h4" sx={{ mt: 4, color: '#FFc300', fontFamily: '"Sansation", sans-serif'}}>
              About Me
            </Typography>
            <Divider sx={{width: '100px', height: '3px', backgroundColor: '#FFc300', mt: 1}}/>
            {/* <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '55px', marginTop: "-10px"}}></img> */}
            <Typography align='left' variant="h3" sx={{ mt: 8, mb: 4, fontWeight: 'light', fontFamily: '"Sansation", sans-serif'}}>
            Contextual Thinking for Digital Products
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb:2}}>
            From analyzing 19th-century masterpieces to decoding user behavior patterns, I bring a unique lens to each product. My art history background taught me to see beyond the surface—to understand context, meaning, and human motivation.  Now I apply that same analytical rigor to product focused—building solutions that aren't just functional, but meaningful and user-centered.
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb: 4}}>
            I bridge the gap between technical possibility and user need, translating complex requirements into actionable product strategies. My unique combination of technical depth and design thinking helps teams make decisions that balance user experience, technical constraints, and business objectives. I thrive in collaborative environments where I can synthesize diverse perspectives into cohesive product vision.
            </Typography>
          </Grid>
        </Grid>
        <Grid  container spacing={2} sx={{display: 'flex', justifyContent:'center', alignItems: 'center', mb: 4}}>
          {/* <Tooltip title='React' aria-labelledby='React logo'><img src={reactIcon} alt='react icon' width={64}/></Tooltip> */}
          <Tooltip title='Figma'><img src={figmaIcon} alt='figma icon' width={58}/></Tooltip> 
          <Tooltip title='Design Thinking'><img src={designThinking} alt='design thinking icon' width={52}/></Tooltip>
          <Tooltip title='Jira'><img src={jiraIcon} alt='jira icon' width={50}/></Tooltip>
          <Tooltip title='Javascript'><img src={jsIcon} alt='javascript icon' width={64}/></Tooltip>
          <Tooltip title='HTML'><img src={htmlIcon} alt='html icon' width={64}/></Tooltip> 
          <Tooltip title='CSS'><img src={cssIcon} alt='css icon' width={50}/></Tooltip>
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