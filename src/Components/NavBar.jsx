import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email';

const pages = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Work', link: '/portfolio' },
];

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Box display="flex">
          <Tabs value={value} onChange={handleChange} aria-label="navigation tabs" style={{paddingRight: "32px"}}>
            {pages.map((page, index) => (
              <Tab
                key={index}
                label={page.label}
                component={Link}
                to={page.link}
                sx={{ textDecoration: 'none', color: 'black' }}
              />
            ))}
          </Tabs>
          <IconButton variant="contained" color="primary">
            <LinkedInIcon sx={{fontSize: "38px"}}/>
          </IconButton>
            <IconButton variant="contained" color="primary">
          <EmailIcon sx={{fontSize: "36px"}}/>
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
}

export default NavBar;
