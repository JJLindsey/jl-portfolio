import React, {useEffect, useState} from 'react'
import { Container, Typography,Grid, Box, BottomNavigation } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import { Copyright } from '@mui/icons-material'
import CloseTag from './assets/icons8-code-50.png'
import bauhaus from './assets/bauhausBack2.png'
import mobileBkgrd from './assets/bauhausMobile2.png'

//import { keyframes } from '@emotion/react';
//import styled from '@emotion/styled/macro';
import {motion, AnimatePresence} from 'framer-motion'
//import Footer from './Components/Footer';


export default function Home() {
    const [word, setWord] = useState('code')
    const [value, setValue] = React.useState(0)
      
    useEffect(() => {
        const interval = setInterval(() => {
        setWord((prev) => (prev === 'code' ? 'craft' : 'code'));
        }, 3000)
    
        return () => clearInterval(interval);
    }, [])

  return (
   <>
      {/* <Box
        id="hero"
        sx={(theme) => ({
            width: '100%',
            height: 'calc(100vh - 70px)',
            // backgroundImage: {
            //     xs: `url(${mobileBkgrd})`,
            //     md: `url(${bauhaus})`
            // },
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            objectFit: { xs: 'scale-down', sm: 'cover' }
        })}
      > */}
        <Container
            sx={{
            display: 'flex',
            //justifyContent: 'flex-end',
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
            pr: {xs: 2, sm: 10},
            //paddingTop: '100px'
            }}
            >
            <Grid
                spacing={1}
                useFlexGap
                sx={{ width: { xs: '100%', sm: '80%' }, display: 'flex', flexDirection: 'column',  paddingTop: { xs: '50px', sm: '50px' },
                paddingLeft: { xs: '10px', sm: '270px' }, }}
            >
                <Grid item>
                    <Typography variant='h3' fontFamily="Noto Sans" align='center' fontWeight="600"
                        sx={{ 
                            fontSize: {
                                xs: '1.5rem',  
                                sm: '2rem',
                                md: '3.5rem',  // Default size for larger screens
                                },
                            color: '#000',
                            paddingTop: '5px'
                        }}>
                        JENNIFER LINDSEY
                    </Typography>
                </Grid>
                <Grid item sx={{display: 'inline-flex'}}>
                    <Typography
                    component="span"
                    variant="h3"
                    sx={{display: "flex",
                        alignContent: "center", 
                        alignItems: "center", 
                        fontSize: {
                        xs: '1.2rem',  
                        sm: '1.5rem',
                        md: '3rem',    
                        },
                    }}
                    >
                    <CodeIcon
                        sx={{ 
                            fontSize: {
                                xs: '30px',  // Smaller icon for mobile
                                sm: '40px',  // Medium size for tablets
                                md: '50px',  // Default size for larger screens
                            },
                            color: '#000', paddingTop: '5px'
                        }}
                    />
                            not just{' '}
                        <AnimatePresence mode="wait">
                            <motion.span
                            key={word}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ marginLeft: '8px', marginRight: '15px', color: "#006aff", fontWeight: 'bold', fontSize: 'inherit',
                                width: {
                                    xs: '47px',   // Smaller for mobile
                                    sm: '100px',  // Medium for tablets
                                    md: '118px',  // Fixed for desktop
                                },
                            }}
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
                            style={{ 
                                marginLeft: '15px',
                                color: "#006aff",
                                fontWeight: 'bold',
                                width: {
                                    xs: '47px',   // Smaller for mobile
                                    sm: '100px',  // Medium for tablets
                                    md: '118px',  // Fixed for desktop
                                },
                            }}
                            >
                            {word === 'code' ? 'craft' : 'code'}
                            </motion.span>
                        </AnimatePresence>
                        <Box
                          component="img"
                          src={CloseTag}
                          sx={{ color: '#000', paddingTop: '5px', paddingLeft: '10px', 
                            height: {
                            xs: '30px',  // Smaller icon for mobile
                            sm: '40px',  // Medium size for tablets
                            md: '50px',  // Default size for larger screens
                            }, 
                            width: 'auto'
                            }} alt='icon'
                        /> 
                        {/* <img src={CloseTag} sx={{ color: '#000', paddingTop: '5px', paddingLeft: '10px', 
                                height: {
                                xs: '30px',  // Smaller icon for mobile
                                sm: '40px',  // Medium size for tablets
                                md: '50px',  // Default size for larger screens
                                }, 
                                width: 'auto'
                                }} alt='icon'/> */}
                    </Typography>
                </Grid>
                    <Grid item>
                    <Typography variant="h5" textAlign="left" color="#000" style={{paddingTop: "32px", zIndex: 2}}>
                    Frontend engineer | Crafting intuitive user experiences.  <br />
                </Typography>
                <Typography variant="h6" textAlign="left" color="black" style={{paddingTop: "32px", zIndex: 2}}> A highly collaborative and strategic thinker, always seeking groundbreaking projects.</Typography>
                </Grid>
                </Grid>
            {/* <svg viewBox="0 0 500 200" style={{ width: '100%', position: 'fixed', bottom: 0, left: '0', zIndex: 0 }}>
            <path d="M 0 150 C 150 50 300 200 500 120 L 500 200 L 0 200" fill="#FF5F1F"></path>
            <path d="M 0 150 C 150 50 330 230 500 150 L 500 200 L 0 200" fill="#ffff00" opacity="0.8"></path>
            <path d="M 0 150 C 215 50 250 200 500 100 L 500 200 L 0 200" fill="#ffff00" opacity="0.5"></path>
            </svg> */}
        </Container>
      {/* </Box> */}
      <Box
        sx={{
          width: '100%',
          height: '50px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          //backgroundColor:'#ffda00',
          color: 'grey',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '8px'
          //zIndex: 1000,
        }}
      >
        <Copyright /> 
        <Typography>{new Date().getFullYear()} | Jennifer Lindsey</Typography>
        <BottomNavigation 
        // sx={{backgroundColor:'#ffda00'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}>
        </BottomNavigation>
      </Box>
    </>
  )
}
