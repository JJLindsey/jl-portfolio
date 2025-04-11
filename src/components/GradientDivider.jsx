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
            background: 'linear-gradient(60deg, #f79533, #f37055, #CD1C18, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
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
