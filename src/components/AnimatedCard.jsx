import React from 'react'
import { Card, Box, Divider, Typography } from '@mui/material'
import { keyframes } from '@mui/system'

const animatedgradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedCard = ({ index, item }) => {
  return (
    <Box sx={{ 
        position: 'relative',
        padding: '2px',
        borderRadius: '4px',
        border: '2px',
        width: '100%',
        backgroundImage:'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '4px',
          background: `linear-gradient(
            60deg,
            #E8C87A,
            #D4A84B,
            #BF9B7A,
            #C87B3A,
            #B85C2A,
            #A84430,
            #8C3220,
            #7A2840,
            #5E3060,
            #8C3220,
            #BF9B7A
          )`,
          //background: 'linear-gradient(60deg, #ffc300, #e3be15, #c6ba2a, #aab540, #8eb055, #71ac6a, #55a77f, #39a295, #1c9eaa, #0099bf)',
          backgroundSize: '400% 400%',
          animation: `${animatedgradient} 6s ease alternate infinite`,
          zIndex: 0
        }
      }}>
        <Card
          sx={{
            position: 'relative',
            height: '100%',
            backgroundColor: 'background.default',
            zIndex: 1,
            p: 2,
          }}
        >
          {/* <Box>{item.icon}</Box> */}
          {/* <div> */}
            <Typography 
              align='center' 
              gutterBottom
              variant='h6'
              sx={{ 
                mb: 2 
              }}
            >
              {item.title}
            </Typography>
            <Divider 
              sx={{ 
                borderWidth: 1, 
                opacity: 0.8, 
                borderColor: "accent.main", 
                mb: 3
              }}
            />
            <Typography 
              align='left'
              variant='body1'
              sx={{ 
                pb: 3 
              }}
            >
              {item.description}
            </Typography>
          {/* </div> */}
        </Card>
      </Box>
  )
}
export default AnimatedCard