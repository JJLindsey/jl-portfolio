import React from 'react'
import { Typography, Box, Container, Divider} from '@mui/material'
import HeroImage from '../../assets/jlHeadshotblack.png'
import RectangleIcon from '@mui/icons-material/Rectangle'
import Sections from '../GradientDivider'
import { Code, DesignServices, Palette } from '@mui/icons-material'
import './Home.css'


export default function Home2() {
  return (
    <Container maxWidth='lg'>
        <Box  sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'auto',
        }}
        >
        <Box sx={{maxWidth: '560px'}}>
            {/* <Divider orientation='vertical' sx={{color: 'white', borderWidth: 5, opacity: 1.0, borderColor: '#18C9CD' }}/> */}
            <RectangleIcon  sx={{color: '#18C9CD', display: 'flex', fontSize: '5em'}}/>
            <Typography color="inherit" align="left" variant="h2" sx={{fontWeight: 'bold', fontFamily: '"Michroma", sans-serif'}}>
                UX
            </Typography>
            <Typography align="left" variant="h4" className="neon-glow" sx={{fontWeight: 'bold', fontFamily: '"Michroma", sans-serif'}}>
            Where Critical Analysis Meets Product Innovation
            </Typography>
            <Typography
                align="left"
                variant="h3"
                sx={{ mb: 4, mt: { xs: 4, sm: 4} }}
                >
                Jennifer Lindsey
            </Typography>
            <Typography
                color="inherit"
                align="left"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 4} }}
                >
                Product Engineer | User-Centric Solutions
            </Typography>
            <Typography
              color="inherit"
              align="left"
              variant="h6"
              sx={{ mb: 4, mt: { xs: 4, sm: 4} }}
            > I understand the "why" behind design decisions, not just the "how" of implementation, leading to more thoughtful and purposeful frontend solutions.</Typography>
            <Box sx={{display: 'flex', gap: 2, mb: 3, }}>
                <Code />
                <Typography>Engineer</Typography>
                <DesignServices />
                <Typography>Design</Typography>
                <Palette />
                <Typography>Creative</Typography>
            </Box>
            {/* <Divider sx={{backgroundColor: '#CD1C18', width: '100%', height: '24px'}}/> */}
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: {xs: 'none', sm: ' contain', md: 'contain'},
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: { xs: '200px', md: '300px' },
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
          }}
        />
        </Box>
        <Sections />
  </Container>
  )
}
