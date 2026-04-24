import React from 'react'
import { Typography, Box, Container, Divider, Button} from '@mui/material'
import HeroImage from '../../assets/jlHeadshotblack.png'
import RectangleIcon from '@mui/icons-material/Rectangle'
import Sections from '../GradientDivider'
import { Code, DesignServices, Palette, CategoryOutlined } from '@mui/icons-material'
import './Home.css'

const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Home2() {
  return (
    <Container maxWidth='lg'>
        <Box  sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: 'auto',
        }}
        > 
        <Box sx={{maxWidth: '560px'}}>
            <Typography
              color="text.primary"
              align="left"
              variant="h1"
              sx={{ mb:2, mt:8 }}
            >
              Jennifer Lindsey,
              <Typography
                component="span"
                variant="body1"
                sx={{ fontWeight: 'light', ml: 1 }}
              >
                MA
              </Typography>
            </Typography>
            <Typography
                align="left"
                variant="h2"
                sx={{ mb: 6, mt: { xs: 4, sm: 4}}}
                >
                Design Engineer
            </Typography>
            <Typography
              color="inherit"
              align="left"
              variant="h6"
              sx={{ mb: 6, mt: { xs: 4, sm: 4} }}
            > My background in visual analysis (MA, Art History) trained me to see composition, color, and spatial hierarchy as technical problems, which turns out to be exactly what building interfaces requires. I build and design. This means fewer handoff gaps, faster iteration, and UIs that match at pixel level.</Typography>
            <Box sx={{display: 'flex', gap: 2, mb: 3, }}>
                {/* <CategoryOutlined />
                <Typography>Technical</Typography>
                <DesignServices />
                <Typography>Design</Typography>
                <Palette />
                <Typography>Product & System Thinking</Typography> */}
                <Button variant='outlined' size='medium' sx={{color: 'accent.main'}} onClick={() => scrollToSection('projects')}>
                  See My Work
                </Button>
            </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: {xs: 'none', sm: 'cover', md: 'cover'},
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            //height: { xs: '200px', md: '300px' },
            //width: { xs: '100%', md: '50%' },
            height: { xs: '280px', md: '375px'},
            width: { xs: '280px', md: '375px' },
            borderRadius: '50%',
            border: '1px solid rgba(198, 161, 126, 0.2)',
            boxShadow: `
              0 0 60px rgba(0, 0, 0, 0.6),
              0 0 30px rgba(191, 155, 122, 0.06)
            `,
            alignSelf: 'center',
          }}
        />
        </Box>
        <Sections />
  </Container>
  )
}
