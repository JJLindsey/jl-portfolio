import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const pages = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Portfolio', link: '/portfolio' },
];

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
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
        </Box>
      </Container>
    </AppBar>
  );
}

export default NavBar;
