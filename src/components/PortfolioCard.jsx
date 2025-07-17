import React, { useState } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Tab, Tabs } from '@mui/material'
import {styled} from '@mui/material/styles'
//import {motion} from 'framer-motion'

import bracketicon from '../assets/bracketPNG.png'
import AnimatedTypography from './AnimatedTypography'

import CodeIcon from '@mui/icons-material/Code'
import DescriptionIcon from '@mui/icons-material/Description'
import CodeProjects from './CodeProjects'
import Articles from './Articles'
//import cardBack from '../assets/bubblesred.png'

// const AnimatedTypography = ({ text, ...props }) => {
//   const typeContainer = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
//     }),
//   }

//   const child = {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       x: -10,
//       y: 5,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   }
//   return (
//     <motion.div style={{overflow: "hidden", display: "flex", justifyContent: "left", fontSize: "2em"}}
//       variants={typeContainer}
//       initial="hidden"
//       animate="visible"
//     >
//       {text.split("").map((letter, index) => (
//         <motion.span variants={child} key={index}>
//           {letter === " " ? "\u00A0" : letter}
//         </motion.span>
//       ))}
//     </motion.div>
//   )
// }
function TabPanel({children, value, index}) {
  return value === index && (
    <Box>
      {children}
    </Box>
  )
}

export default function PortfolioCard({ projects= []}) {
  const [tab, setTab] = useState(0)

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

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
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        <Typography align='left' variant='h4' color='#CD1C18'>
           My Work
        </Typography>
        <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '28px', marginTop: "-10px"}}></img>
      </Box>
      <Box>
      <AnimatedTypography variant='h4' text="Here is a look at some of my work" sx={{ fontWeight: 'bold', letterSpacing: 1 }}/>
      </Box>
      {/* Tabs */}
      <Tabs value={tab} onChange={handleTabChange} variant='fullWidth' aria-label="portfolio tabs">
        <Tab icon={<CodeIcon />} label="Code" iconPosition="start"/>
        <Tab icon={<DescriptionIcon />} label="Writing" iconPosition="start"/>
        <Tab label="UX" />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <CodeProjects projects={projects} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Articles />
      </TabPanel>
    </Container>
  )
}