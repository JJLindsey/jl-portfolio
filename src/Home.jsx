import React from 'react'
import { Box, Container, Stack, Typography, IconButton, Grid, Card, CardContent } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import { alpha } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import CloseTag from './assets/icons8-code-50.png'
import Brain from './assets/brain.png'
import reactIcon from './assets/logo192.png'
import JS from './assets/icons8-javascript-48.png'
import C from './assets/icons8-c-sharp-logo-48.png'
import MUI from './assets/material-ui-1.svg'
import Boot from './assets/icons8-bootstrap-48.png'

export default function Home() {
  return (
    <div>
      <Box
        id="hero"
        sx={(theme) => ({
            width: '100%',
            // backgroundImage:
            // theme.palette.mode === 'light'
            //     ? 'linear-gradient(180deg, #002d66, #FFF)'
            //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.2)}, #02294F)`,
            backgroundSize: '100% 20%',
            backgroundRepeat: 'no-repeat',
        })}
      >
        <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}>
            <Grid spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                <Typography
                    component="h2"
                    variant="h2"
                    sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignSelf: 'center',
                    textAlign: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                    }}
                >
                Jennifer Lindsey&nbsp;
                    <Typography
                    component="span"
                    variant="h2"
                    sx={{
                        // color: (theme) =>
                        // theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text', /* Safari support */
                        color: 'transparent',
                        display: 'flex',
                        alignContent: 'center',
                        backgroundImage: 'linear-gradient(to right, #002d66, #363276, #5d3481, #823385, #a53182, #c53379, #df3d6b, #f25058, #fd6a43, #ff8727)',
                    }}
                    >
                        <CodeIcon sx={{fontSize: '50px', color: '#000', paddingTop: '15px'}}/>
                    not just code, but craft
                    <img src={CloseTag} style={{ color: '#000', paddingTop: '15px', paddingLeft: '10px' }} height={50} alt='icon'/>
                    </Typography>
                    <Typography variant="h6" textAlign="center" color="text.secondary" style={{paddingTop: "32px"}}>
                    Frontend engineer with a design soul, passionate about crafting functional, beautiful and intuitive user experiences. <br />
                    I wield modern JavaScript libraries, HTML, CSS, and additional backend skills to bring ideas to life. Highly collaborative and a strategic thinker, always seeking groundbreaking projects.
                </Typography>
                </Typography>
                <Card elevation={0} style={{paddingTop: "32px"}}>
                    {/* <img src={Brain} height={300} alt="brain"/> */}
                    <CardContent style={{display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                        <img src={JS} alt='icon' />
                        <img src={C} alt='icon' />
                        <img src={Brain} height={300} alt="brain"/>
                        <img src={reactIcon} width={50} alt='icon' />
                        <img src={MUI} width={48} alt='icon' />
                        <img src={Boot} width={50} alt='icon' />
                    </CardContent>
                </Card>
                {/* <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignSelf="center"
                    spacing={1}
                    useFlexGap
                    sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                >
                    <IconButton variant="contained" color="primary">
                    <LinkedInIcon sx={{fontSize: "50px"}} />
                    </IconButton>
                    <IconButton variant="contained" color="primary">
                    <EmailIcon />
                    </IconButton>
                </Stack> */}
            </Grid>
        </Container>
      </Box>
    </div>
  )
}
