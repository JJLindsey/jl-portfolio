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
        padding: '3px',
        borderRadius: '4px',
        border: '2px',
        width: '100%',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: '4px',
          //background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
          background: 'linear-gradient(60deg, #ffc300, #e3be15, #c6ba2a, #aab540, #8eb055, #71ac6a, #55a77f, #39a295, #1c9eaa, #0099bf)',
          backgroundSize: '400% 400%',
          animation: `${animatedgradient} 3s ease alternate infinite`,
          zIndex: 0
        }
      }}>
        <Card
          sx={{
            position: 'relative',
            height: '100%',
            backgroundColor: '#011640',
            zIndex: 1,
            p: 2,
          }}
        >
          <Box>{item.icon}</Box>
          {/* <div> */}
            <Typography 
              align='center' 
              fontWeight="600" 
              gutterBottom 
              sx={{ 
                color: '#fff', 
                fontSize: '1.5rem', 
                pt: 3, 
                mb: 2 
              }}
            >
              {item.title}
            </Typography>
            <Divider 
              sx={{ 
                borderWidth: 1, 
                opacity: 0.8, 
                borderColor: "#ffc300", 
                mb: 3
              }}
            />
            <Typography 
              align='left' 
              sx={{ 
                color: '#fff', 
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