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

export default function GradientDivider({height = '2px', width = '100%', margin = '4rem 0'}) {
  return (
    <Box
        component='div'
        sx={{
            position: 'relative',
            height,
            width,
            margin,
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
            backgroundSize: '400% 400%',
            animation: `${animatedline} 9s ease alternate infinite`,
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
            }
        }}
    />
  )
}
