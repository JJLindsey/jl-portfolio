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
import reactIcon from '../assets/logo192.png'
import jsIcon from '../assets/icons8-javascript-48.png'
import cSharp from '../assets/icons8-c-sharp-logo-48.png'
import figmaIcon from '../assets/icons8-figma-48.png'
import photoshopIcon from '../assets/photoshop.png'
import illustratorIcon from '../assets/illustrator.png'
import indesignIcon from '../assets/Indesign.png'
import { Divider, Tooltip } from '@mui/material';
//import bracketicon from '../assets/bracketPNG.png'
import jiraIcon from '../assets/jira.png'
import designThinking from '../assets/design-thinking.png'
import GradientDivider from './GradientDivider'
import { QueryStatsOutlined } from '@mui/icons-material';


const items = [
  // {
  //   icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
  //   title: 'Strategic Thinker',
  //   description:
  //     'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  // },
  {
    icon: <QueryStatsOutlined sx={{ fontSize: '2rem', color: '#fff'}}/>,
    title: 'Curatorial Discernment',
    description:
      'Art history trained me to analyze visual systems with precision and cultural context. That judgment shapes every interface decision, from color token semantics to the hierarchy of information on a screen.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2rem', color: '#fff'}}/>,
    title: 'Design Embedded in Engineering',
    description:
      'Design is not a separate phase in my process. Visual and systems thinking shapes component architecture, interaction patterns, and API contracts from the first decision, not after the fact.',
  },
  // {
  //   icon: <AutoFixHighRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
  //   title: 'Critical Thinking & Curiosity',
  //   description:
  //     'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  // },
  {
    icon: <SettingsSuggestIcon sx={{ fontSize: '2rem', color: '#fff'}}/>,
    title: 'Systems That Scale',
    description:
      'From design tokens and component libraries through state management and backend logic, I build end-to-end systems that stay maintainable because they were designed with the same rigor they were engineered with.',
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
            <Typography align='left' variant="h2" sx={{ color: 'secondary.main', mt: 4}}>
              About Me
            </Typography>
            <Divider sx={{width: '135px', height: '3px', backgroundColor: 'secondary.main', mt: 1}}/>
            {/* <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '55px', marginTop: "-10px"}}></img> */}
             {/* <Typography align="left" variant="h4" sx={{fontWeight: 'bold', fontFamily: '"Sansation", sans-serif'}}>
              Critical Analysis Meets Product Innovation
            </Typography> */}
             <Typography
                color="inherit"
                align="left"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 4}, fontWeight: 'bold' }}
                >
                Design Engineer
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb:2}}>
              I work across the full creative-to-code pipeline, from brand identity and high-fidelity prototypes through component architecture, state management, and deployment.
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb: 4}}>
              My background in art history and visual analysis gives me something AI cannot replicate: curatorial judgment. I read interfaces the way a curator reads an exhibition, composition, hierarchy, color, and spatial logic as problems with real solutions. That same eye follows me outside the editor. I shoot landscape photography because nature is our first canvas, and there is no better study in texture, pattern, and color relationships than the one that has been running for four billion years. While AI can generate code, it cannot navigate color theory, historical context, or the cultural nuance that makes a digital product legally compliant and genuinely resonant. I provide that oversight.
            </Typography>
            <Typography align='left' variant='h6' component='p' sx={{mb: 4}}>
              I've spent 13 years developing production-grade visual craft and 4 years building scalable UI in React and Vue. I contribute to interaction decisions, design system architecture, and the gap between design intent and what actually ships, which is usually where the interesting problems live.
            </Typography>
          </Grid>
        </Grid>
        <Grid  container spacing={2} sx={{display: 'flex', justifyContent:'center', alignItems: 'center', mb: 4}}>
          {/* <Tooltip title='React' aria-labelledby='React logo'><img src={reactIcon} alt='react icon' width={64}/></Tooltip> */}
          <Tooltip title='Figma'><img src={figmaIcon} alt='figma icon' width={58}/></Tooltip>
          <Tooltip title='PhotoShop'><img src={photoshopIcon} alt='photoshop icon' width={58}/></Tooltip>
          <Tooltip title='Illustrator'><img src={illustratorIcon} alt='illustrator icon' width={58}/></Tooltip>
          <Tooltip title='Design Thinking'><img src={designThinking} alt='design thinking icon' width={52}/></Tooltip>
          <Tooltip title='React'><img src={reactIcon} alt='react icon' width={50}/></Tooltip>
          <Tooltip title='Javascript'><img src={jsIcon} alt='javascript icon' width={64}/></Tooltip>
          <Tooltip title='C#'><img src={cSharp} alt='cSharp icon' width={64}/></Tooltip>
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