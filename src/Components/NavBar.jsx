import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { IconButton, Typography, Button, Box, styled } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

// const pages = [
//   { label: 'Home', link: '#home' },
//   { label: 'About', link: '#about' },
//   { label: 'Work', link: '#portfolio' },
// ];
const StyledButton = styled(Button)(({theme}) => ({
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'scale(1.15)',
    boxShadow: '0px 2px 4px rgba(255, 218, 0, 0.4)',
    borderRadius: '8px'
  }
}))

function NavBar() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFF" }}>
      <Toolbar>
          <Typography variant='h5' color='#000'>Jennifer Lindsey</Typography>
            <StyledButton color="primary" component={Link} to="/">
                    Home
            </StyledButton>
            <StyledButton color="primary" component={Link} to="/about">
                About
            </StyledButton>
            <StyledButton color="primary" component={Link} to="/projects">
                Projects
            </StyledButton>
            <StyledButton color="primary" component={Link} to="/contact">
                Contact
            </StyledButton>
            <Box sx={{ flexGrow: 1 }}/>
              <IconButton
                variant="contained"
                color="primary"
                component="a"
                href="http://www.linkedin.com/in/jennifer-lindsey010"
                target="_blank"
                rel="noopener noreferrer"
                >
                <LinkedInIcon sx={{fontSize: "38px"}} />
              </IconButton>
              <IconButton variant="contained" color="primary" component="a" href="mailto:jlindsey010@gmail.com">
                <EmailIcon sx={{fontSize: "36px"}}/>
              </IconButton>
              <StyledButton  color="primary" size="large" variant='outlined' endIcon={<DownloadForOfflineIcon />} >RESUME</StyledButton>
                      {/* <a href="#" className="btn btn-light">
                      Download
                      </a> */}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
