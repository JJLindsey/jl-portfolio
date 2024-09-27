import { Copyright, GitHub, LinkedIn } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    const [value, setValue] = React.useState(0)
  return (
    <Box sx={{ backgroundColor:'#ffda00', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <Copyright /> 
        <Typography>{new Date().getFullYear()} | Jennifer Lindsey</Typography>
        <BottomNavigation 
        sx={{backgroundColor:'#ffda00'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
            <BottomNavigationAction icon={<GitHub />} href='https://github.com/JJLindsey' target='_blank'/>
            <BottomNavigationAction icon={<LinkedIn  color='primary'/>} href='https://www.linkedin.com/in/jennifer-lindsey010' target='_blank'/>
        </BottomNavigation>
    </Box>
  )
}
