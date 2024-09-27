import React, {useEffect, useState} from 'react'
import { Container, Typography,Grid, Box } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import CloseTag from './assets/icons8-code-50.png'
import bauhaus from './assets/bauhausBack2.png'

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import {motion, AnimatePresence} from 'framer-motion'
import Footer from './Components/Footer';

const shimmerAnimation = keyframes`
 0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`

const ShimmerTypography = styled('div')(({ showShimmer}) => ({
    backgroundImage: showShimmer
    ? 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%), linear-gradient(to right, #002d66, #363276, #5d3481, #823385, #a53182, #c53379, #df3d6b, #f25058, #fd6a43, #ff8727)'
    : 'linear-gradient(to right, #002d66, #363276, #5d3481, #823385, #a53182, #c53379, #df3d6b, #f25058, #fd6a43, #ff8727)',
  backgroundSize: '200% 100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  fontSize: '50px',
  color: 'transparent',
  animation: showShimmer ? `${shimmerAnimation} 4s linear infinite` : 'none',
  display: 'flex',
  alignItems: 'center',
}))

export default function Home() {
    const [showShimmer, setShowShimmer] = useState(true)
    const [word, setWord] = useState('code')
      
    useEffect(() => {
        const interval = setInterval(() => {
        setWord((prev) => (prev === 'code' ? 'craft' : 'code'));
        }, 3000) // Change word every 2 seconds
    
        return () => clearInterval(interval);
    }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShimmer(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
   <>
      <Box
        id="hero"
         
        sx={(theme) => ({
            width: '100%',
            //height: '100vh',
            height: 'calc(100vh - 70px)',
            backgroundImage: `url(${bauhaus})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: { xs: 'scale-down', sm: 'cover' }
        })}
      >
        <Container
            sx={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'flex-end',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
            pr: {xs: 2, sm: 10},
            //paddingTop: '100px'
            }}
            >
            <Grid spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '80%' }, display: 'flex', flexDirection: 'column', paddingTop: '200px', paddingLeft: '270px' }}>
                <Grid item>
                    <Typography variant='h3'  fontFamily="Noto Sans" fontWeight="600" >JENNIFER LINDSEY</Typography>
                </Grid>
                <Grid item>
                    <ShimmerTypography
                    showShimmer={showShimmer}
                    component="span"
                    variant="h2"
                    >
                    <CodeIcon sx={{fontSize: '50px', color: '#000', paddingTop: '15px'}}/>
                            not just{' '}
                        <AnimatePresence mode="wait">
                            <motion.span
                            key={word}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginLeft: '7px', marginRight: '7px', color: "#006aff", fontWeight: 'bold' }}
                            >
                            {word}
                            </motion.span>
                        </AnimatePresence>
                        {' '}but{' '}
                        <AnimatePresence mode="wait">
                            <motion.span
                            key={word === 'code' ? 'craft' : 'code'}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginLeft: '7px', color: "#006aff", fontWeight: 'bold' }}
                            >
                            {word === 'code' ? 'craft' : 'code'}
                            </motion.span>
                        </AnimatePresence>   
                        <img src={CloseTag} style={{ color: '#000', paddingTop: '5px', paddingLeft: '10px' }} height={50} alt='icon'/>
                    </ShimmerTypography>
                </Grid>
                    <Grid item>
                    <Typography variant="h5" textAlign="left" color="#000" style={{paddingTop: "32px", zIndex: 2}}>
                    Frontend engineer with a design soul, passionate about crafting functional, beautiful and intuitive user experiences.  <br />
                </Typography>
                <Typography variant="h6" textAlign="left" color="black" style={{paddingTop: "32px", zIndex: 2}}> Curiosity brought me to programming and it keeps me passionate about learning. A highly collaborative and a strategic thinker, always seeking groundbreaking projects.</Typography>
                </Grid>
                </Grid>
            {/* <svg viewBox="0 0 500 200" style={{ width: '100%', position: 'fixed', bottom: 0, left: '0', zIndex: 0 }}>
            <path d="M 0 150 C 150 50 300 200 500 120 L 500 200 L 0 200" fill="#FF5F1F"></path>
            <path d="M 0 150 C 150 50 330 230 500 150 L 500 200 L 0 200" fill="#ffff00" opacity="0.8"></path>
            <path d="M 0 150 C 215 50 250 200 500 100 L 500 200 L 0 200" fill="#ffff00" opacity="0.5"></path>
            </svg> */}
        </Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '50px', // Footer height
          position: 'fixed',
          bottom: 0,
          left: 0,
          backgroundColor:'#ffda00',
          color: 'grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '8px'
          //zIndex: 1000,
        }}
      >
        <Footer />
      </Box>
    </>
  )
}
