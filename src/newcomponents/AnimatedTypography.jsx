import React from 'react'
import {motion} from 'framer-motion'
import { useTheme } from '@emotion/react'
import { Box, useMediaQuery } from '@mui/material'

export default function AnimatedTypography({ text, variant='h4', ...props }) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const typeContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const textBaseSize = theme.typography[variant]?.fontSize || '2rem'

  // Calculate responsive font size
  let fontSize = textBaseSize;
  if (isMobile) {
    // 60% of original size on mobile
    fontSize = typeof textBaseSize === 'string' 
      ? `calc(${textBaseSize} * 0.6)` 
      : textBaseSize * 0.6;
  } else if (isTablet) {
    // 80% of original size on tablets
    fontSize = typeof textBaseSize === 'string' 
      ? `calc(${textBaseSize} * 0.8)` 
      : textBaseSize * 0.8;
  }

  return (
     <Box sx={{ overflow: "hidden" }}>
      <motion.div
        variants={typeContainer}
        initial="hidden"
        animate="visible"
        style={{
          overflow: "hidden",
          display: "flex",
          justifyContent: "left",
          fontSize: fontSize,
          fontWeight: props.sx?.fontWeight || 'bold',
          letterSpacing: props.sx?.letterSpacing || 1,
          ...(props.sx || {})
        }}
      >
        {text.split("").map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </Box>
  )
}
