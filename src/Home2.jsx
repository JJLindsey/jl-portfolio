import React from 'react'
import { Typography, Box, Container, Divider } from '@mui/material'
import HeroImage from '../src/assets/jlHeadshotblack.png'
import RectangleIcon from '@mui/icons-material/Rectangle';
import Sections from './Components/GradientDivider';


export default function Home2() {
  return (
    <Container maxWidth='lg'>
        <Box  sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '50vh',
        }}
        >
        <Box sx={{maxWidth: '560px'}}>
            {/* <Divider orientation='vertical' sx={{color: 'white', borderWidth: 5, opacity: 1.0, borderColor: '#18C9CD' }}/> */}
            <RectangleIcon  sx={{color: '#18C9CD', display: 'flex', fontSize: '5em'}}/>
            <Typography color="inherit" align="left" variant="h2" marked="center" sx={{fontWeight: 'bold'}}>
                Crafting intuitive
            </Typography>
            <Typography color="inherit" align="left" variant="h3" marked="center" sx={{fontWeight: 'bold'}}>
                User Experiences
            </Typography>
            <Typography
                color="inherit"
                align="left"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 4} }}
                >
                Jennifer Lindsey | Frontend Engineer
            </Typography>
            <Divider sx={{backgroundColor: '#CD1C18', width: '100%', height: '24px'}}/>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: {xs: 'cover', md: 'contain'},
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: { xs: '200px', md: '300px' },
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
            //boxShadow: 3,
          }}
        />
        </Box>
        <Sections />
  </Container>
  )
}
