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

export default function GradientDivider({height = '3px', width = '100%', margin = '4rem 0'}) {
  return (
    <Box
        component='div'
        sx={{
            position: 'relative',
            height,
            width,
            margin,
            background: 'linear-gradient(60deg, #ffc300, #e3be15, #c6ba2a, #aab540, #8eb055, #71ac6a, #55a77f, #39a295, #1c9eaa, #0099bf)',
            backgroundSize: '400% 400%',
            animation: `${animatedline} 5s ease alternate infinite`,
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
            }
        }}
    />
  )
}
