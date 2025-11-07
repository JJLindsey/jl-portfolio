import React, { useState } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Tab, Tabs, Divider, Chip } from '@mui/material'
import {styled} from '@mui/material/styles'
//import {motion} from 'framer-motion'

import bracketicon from '../assets/bracketPNG.png'
import AnimatedTypography from './AnimatedTypography'

import CodeIcon from '@mui/icons-material/Code'
import DescriptionIcon from '@mui/icons-material/Description'
import CodeProjects from './CodeProjects'
import Articles from './Articles'
import ProcessDocumentation from './ProcessDocumentation'
import CategoryIcon from '@mui/icons-material/Category'
import ProductProjectDetails from './ProductProjectDetails'
import { EmojiObjects } from '@mui/icons-material'
import TechDecisionMatrix from './Strategy/TechDecisionMatrix'
import PortfolioGrid from './PortfolioGrid'
//import CaseStudyCard from './CaseStudy/CaseStudyCard'
//import { products } from '../data/products'

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

export default function PortfolioCard({ projects= [], products = [] }) {
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
        <Typography align='left' variant='h4' color='#ffc300' sx={{fontFamily: '"Sansation", sans-serif'}}>
           My Work
        </Typography>
        <Divider sx={{width: '100px', height: '3px', backgroundColor: '#FFc300', mt: 1}}/>
        {/* <img src={bracketicon} alt='icon' width='120px' align="left" style={{marginLeft: '45px', marginTop: "-10px"}}></img> */}
      </Box>
      <Box>
      <AnimatedTypography variant='h4' text="Here is a look at some of my work" sx={{ fontWeight: 'bold', letterSpacing: 1 }}/>
      </Box>
      {/* Tabs */}
      <Tabs value={tab} onChange={handleTabChange} variant='fullWidth' aria-label="portfolio tabs"
        sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#000', // Color of the indicator line
        },
        // '& .MuiTab-root': {
        //   color: '#fff', // Default color for all tab labels (inactive)
        // },
        '& .MuiTab-root.Mui-selected': {
                    color: '#18C9CD', // Color for the selected tab label
        },
        }}
      >
        <Tab icon={<CodeIcon />} label="Projects" iconPosition="start"/>
        <Tab icon={<DescriptionIcon />} label="Case Studies" iconPosition="start"/>
        <Tab icon={<CategoryIcon />} label="Product Thinking" iconPosition="start"/>
        <Tab icon={<EmojiObjects />} label="Strategic Product Design" iconPosition="start"/>
      </Tabs>
      <TabPanel value={tab} index={0}>
        <CodeProjects projects={projects} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {/* <Articles /> */}
        {/* <CaseStudyCard /> */}
        <ProductProjectDetails productId="accessible-meditation" products={products} />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        {/* <ProcessDocumentation /> */}
        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', gap: 1, py: 4 }}>
          <Chip label="In Progress" color="secondary" variant="contained" />
          <Typography variant="h6" color="text.secondary">
            This section is under development and will be available soon.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={tab} index={3}>
        {/* <TechDecisionMatrix /> */}
        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', gap: 1, py: 4 }}>
          <Chip label="Coming Soon" color="secondary" variant="contained" />
          <Typography variant="h6" color="text.secondary">
            This section will be live shortly.
          </Typography>
        </Box>
      </TabPanel>
      <PortfolioGrid products={products} />
    </Container>
  )
}