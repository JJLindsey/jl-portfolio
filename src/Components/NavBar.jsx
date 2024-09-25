import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { IconButton, Typography, Button, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const pages = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: 'Work', link: '#portfolio' },
];

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFF" }}>
      <Toolbar>
          <Typography variant='h5' color='#000'>Jennifer Lindsey</Typography>
            <Button color="primary" component={Link} to="/">
                    Home
            </Button>
            <Button color="primary" component={Link} to="/about">
                About
            </Button>
            <Button color="primary" component={Link} to="/projects">
                Projects
            </Button>
            <Button color="primary" component={Link} to="/contact">
                Contact
            </Button>
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
              <Button  color="primary" size="large" variant='outlined' endIcon={<DownloadForOfflineIcon />} >RESUME</Button>
                      {/* <a href="#" className="btn btn-light">
                      Download
                      </a> */}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
