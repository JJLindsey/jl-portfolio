import React from 'react'
import { Typography, Box, Container, Divider} from '@mui/material'
import HeroImage from '../src/assets/jlHeadshotblack.png'
import RectangleIcon from '@mui/icons-material/Rectangle';
import Sections from './newcomponents/GradientDivider'
import { Code, DesignServices, Palette } from '@mui/icons-material';


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
            <Typography color="inherit" align="left" variant="h2" sx={{fontWeight: 'bold'}}>
                Crafting Intuitive
            </Typography>
            <Typography color="inherit" align="left" variant="h3" sx={{fontWeight: 'bold'}}>
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
            <Box sx={{display: 'flex', gap: 2, mb: 3}}>
                <Code />
                <Typography>Developer</Typography>
                <DesignServices />
                <Typography>UI Design</Typography>
                <Palette />
                <Typography>Creative</Typography>
            </Box>
            <Divider sx={{backgroundColor: '#CD1C18', width: '100%', height: '24px'}}/>
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
