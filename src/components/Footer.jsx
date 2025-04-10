import { Copyright, GitHub, LinkedIn, EmailOutlined } from '@mui/icons-material'
import { Box, Grid, Typography, IconButton} from '@mui/material'
import React from 'react'
import GradientDivider from './GradientDivider'

export default function Footer() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', mt: 2 }}>
      <GradientDivider />
      <Grid container spacing={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Grid item xs={4} md={6} sx={{display: 'flex',  flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Typography variant='h6' sx={{fontWeight: 'bold', color: '#CD1C18'}}>Contact</Typography>
        </Grid>
        <Grid item xs={6} md={6}
          sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}
        >
          <IconButton variant='contained' component='a' href='mailto:jlindsey010@gmail.com' rel='noopener noreferrer'>
            <EmailOutlined sx={{fontSize: '36px', color: '#FFF'}}/>
          </IconButton>
          <IconButton
            variant='contained'
            component='a'
            href='http://www.linkedin.com/in/jennifer-lindsey010'
            target='_blank'
            rel='noopener noreferrer'
            >
              <LinkedIn  sx={{ fontSize: '32px', color:'#FFF' }} />
          </IconButton>
          <IconButton
            variant='contained'
            color='#FFF'
            component='a'
            href='https://github.com/JJLindsey'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub sx={{fontSize: '32px', color: '#FFF'}} />
          </IconButton>
        </Grid>     
      </Grid> 
      <Grid container sx={{ justifyContent: 'center', flexDirection: 'row', mb: 5, mt: 5 }}>
        <Copyright /> 
        <Typography>{new Date().getFullYear()} Jennifer Lindsey | All rights reserved. </Typography>
      </Grid>
    </Box>
  )
}
