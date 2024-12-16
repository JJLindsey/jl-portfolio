import React from 'react'
import { Box, Divider } from '@mui/material'
import { keyframes } from '@mui/system'

const animatedline = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`

export default function GradientDivider({height = '3px', width = '100%'}) {
  return (
    <>
    <Box
        component='div'
        sx={{
            position: 'relative',
            height,
            width,
            margin: '2rem 0',
            background: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
            backgroundSize: '400% 400%',
            animation: `${animatedline} 9s ease alternate infinite`,
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
            }
        }}
        >
        <div />
    </Box>
    </>
  )
}
