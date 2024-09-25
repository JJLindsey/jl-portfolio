import React from 'react'
import { Container, Typography,Grid, Card, CardContent, Button, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import { alpha } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import CloseTag from './assets/icons8-code-50.png'
import Brain from './assets/brain.png'
import bauhaus from './assets/bauhausBack2.png'
import reactIcon from './assets/logo192.png'
import JS from './assets/icons8-javascript-48.png'
import C from './assets/icons8-c-sharp-logo-48.png'
import MUI from './assets/material-ui-1.svg'
import Boot from './assets/icons8-bootstrap-48.png'
//import heroImage from './assets/jjying.jpg'


export default function Home() {
  return (
   
      <Box
        id="hero"
         
        sx={(theme) => ({
            width: '100%',
            height: '100vh',
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
            paddingTop: '100px'
            }}
            >
            <Grid spacing={1} useFlexGap sx={{ width: { xs: '100%', sm: '70%' }, display: 'flex', flexDirection: 'column', paddingTop: '200px' }}>
                <Grid item>
                    <Typography variant='h2'  fontFamily="Noto Sans" fontWeight="600">JENNIFER LINDSEY</Typography>
                </Grid>
                <Grid item>
                    <Typography
                    component="span"
                    variant="h3"
                    sx={{
                        // color: (theme) =>
                        // theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text', /* Safari support */
                        top: '250px',
                        color: 'transparent',
                        display: 'flex',
                        //alignContent: 'center',
                        backgroundImage: 'linear-gradient(to right, #002d66, #363276, #5d3481, #823385, #a53182, #c53379, #df3d6b, #f25058, #fd6a43, #ff8727)',
                    }}
                    >
                        <CodeIcon sx={{fontSize: '50px', color: '#000', paddingTop: '15px'}}/>
                            not just code,
                        <img src={CloseTag} style={{ color: '#000', paddingTop: '15px', paddingLeft: '10px' }} height={50} alt='icon'/>
                    </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3"  sx={{
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text', /* Safari support */
                        top: '250px',
                        color: 'transparent',
                        display: 'flex',
                        //alignContent: 'center',
                        backgroundImage: 'linear-gradient(to right, #c53379, #df3d6b, #f25058, #fd6a43, #ff8727)',
                    }}>but craft</Typography>
                    </Grid>
                    <Grid item>
                    {/* <Card elevation={0} style={{paddingTop: "32px"}}> */}
                    {/* <img src={Brain} height={300} alt="brain"/> */}
                    {/* <CardContent style={{display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                        <img src={Brain} height={300} alt="brain"/>
                    </CardContent> */}
                    
                {/* </Card> */}
               
               
                    <Typography variant="h6" textAlign="left" color="#000" style={{paddingTop: "32px", zIndex: 2}}>
                    Frontend engineer with a design soul, passionate about crafting functional, beautiful and intuitive user experiences. Curiosity brought me to programming and it keeps me passionate about learning.  <br />
                </Typography>
                <Typography variant="h6" textAlign="left" color="black" style={{paddingTop: "32px", zIndex: 2}}>I wield modern JavaScript libraries, HTML, CSS, and additional backend skills to bring ideas to life. Highly collaborative and a strategic thinker, always seeking groundbreaking projects.</Typography>
                </Grid>
                </Grid>
            {/* <svg viewBox="0 0 500 200" style={{ width: '100%', position: 'fixed', bottom: 0, left: '0', zIndex: 0 }}>
            <path d="M 0 150 C 150 50 300 200 500 120 L 500 200 L 0 200" fill="#FF5F1F"></path>
            <path d="M 0 150 C 150 50 330 230 500 150 L 500 200 L 0 200" fill="#ffff00" opacity="0.8"></path>
            <path d="M 0 150 C 215 50 250 200 500 100 L 500 200 L 0 200" fill="#ffff00" opacity="0.5"></path>
            </svg> */}
        </Container>
      </Box>
  
  )
}
