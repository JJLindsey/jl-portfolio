import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { IconButton, Button, Box, styled, Menu, MenuItem, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { GitHub } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../assets/logoJL2.png'

const StyledButton = styled(Button)(({theme}) => ({
  transition: theme.transitions.create('all', {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    transform: 'scale(1.15)',
    borderRadius: '8px'
  },
  color: '#FFF'
}))

const GlassAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  background: 'rgba(0, 0, 0, 0.3)', // translucent dark background
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.19)', // subtle border
  boxShadow: `
    0 4px 20px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.21)
  `,
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
    zIndex: 0,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1px',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent)',
    zIndex: 0,
  },
}))

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const location = useLocation();
const navigate = useNavigate();


  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }


  const scrollToSection = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    if (location.pathname !== '/') {
      // Navigate to homepage first, then scroll after load
      navigate('/');
      // Delay scrolling until after navigation
      setTimeout(() => scroll(), 100);
    } else {
      scroll();
    }
  
    handleCloseNavMenu();
  };

  return (
    <GlassAppBar position="sticky" sx={{ backgroundColor: { md: "#011640", xs: '#011640'}, boxShadow: { xs: 'none', sm: 'none', md: 'none'} }}>
      <Toolbar>
          <img src={Logo} alt='logo' width={175}/>
            {/*Mobile Menu*/}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end'}} >
                <IconButton
                  size='large'
                  aria-label='menu'
                  onClick={handleOpenNavMenu}
                  sx={{ color: '#FFF' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                  keepMounted
                  transformOrigin={{vertical: 'top', horizontal: 'right'}}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  PaperProps={{
                    sx: {
                      backgroundColor: '#000',
                      color: '#FFF'
                    }
                  }}
                >
                    <MenuItem onClick={() => scrollToSection('home')}>
                      <Typography textAlign='center'>Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('about')}>
                      <Typography textAlign='center'>About</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('projects')}>
                      <Typography textAlign='center'>Work</Typography>
                    </MenuItem>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'flex-start' }}>
                    <IconButton  variant="contained"
                      color="primary"
                      component="a"
                      href="http://www.linkedin.com/in/jennifer-lindsey010"
                      target="_blank"
                      rel="noopener noreferrer">
                      <LinkedInIcon  sx={{ fontSize: "28px" }} />
                      <Typography>LinkedIn</Typography>
                    </IconButton>
                <IconButton
                  variant="contained"
                  color="primary"
                  component="a"
                  href="mailto:jlindsey010@gmail.com"
                >
                  <EmailIcon sx={{ fontSize: "28px" }} />
                  <Typography>Email</Typography>
                </IconButton>
              </Box>
              <Box>
                <StyledButton
                  color="primary"
                  size="small"
                  variant="contained"
                  href={`${process.env.PUBLIC_URL}/JenniferLindseyFE.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<DownloadForOfflineIcon />}
                >
                  RESUME
                </StyledButton>
              </Box>
                </Menu>
              </Box>
            {/*Desktop Menu*/}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, color: "#FFF" }}>
            <StyledButton onClick={() => scrollToSection('home')}>
                Home
            </StyledButton>
            <StyledButton onClick={() => scrollToSection('about')}>
                About
            </StyledButton>
            <StyledButton onClick={() => scrollToSection('projects')}>
                Work
            </StyledButton>
            <Box sx={{ flexGrow: 1 }}/>
              <IconButton
                variant="contained"
                component="a"
                href="http://www.linkedin.com/in/jennifer-lindsey010"
                target="_blank"
                rel="noopener noreferrer"
                >
                <LinkedInIcon sx={{fontSize: "38px", color: '#FFF'}} />
              </IconButton>
              <IconButton
                variant="contained"
                color="#FFF"
                component="a"
                href="https://github.com/JJLindsey"
                target="_blank"
                rel="noopener noreferrer"
                >
                <GitHub sx={{fontSize: "38px", color: '#FFF'}} />
              </IconButton>
              <IconButton variant="contained" component="a" href="mailto:jlindsey010@gmail.com">
                <EmailIcon sx={{fontSize: "36px", color: "#FFF"}}/>
              </IconButton>
              <StyledButton
                color="primary"
                size="small"
                variant='outlined'
                component="a"
                href={`${process.env.PUBLIC_URL}/JenniferLindseyFE.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadForOfflineIcon />}
                >
                  RESUME
              </StyledButton>
          </Box>
      </Toolbar>
    </GlassAppBar>
  )
}

export default NavBar
