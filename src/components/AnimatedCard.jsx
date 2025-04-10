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
          background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
          backgroundSize: '400% 400%',
          animation: `${animatedgradient} 3s ease alternate infinite`,
          zIndex: 0
        }
      }}>
        <Card
          sx={{
            position: 'relative',
            height: '100%',
            //backgroundColor: index % 2 === 0 ? "#161616" : "#CD1C18",
            backgroundColor: '#161616',
            zIndex: 1,
            p: 1,
          }}
        >
          <Box>{item.icon}</Box>
          {/* <div> */}
            <Typography 
              align='left' 
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
                borderWidth: 2, 
                opacity: 0.8, 
                borderColor: index % 2 === 0 ? "#CD1C18" : "#FFF", 
                mb: 3, 
                mr: 35 
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