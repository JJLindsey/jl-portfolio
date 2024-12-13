import React, {useState} from 'react'
//import { Link } from 'react-router-dom'
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
    //boxShadow: '0px 2px 4px rgba(255, 218, 0, 0.4)',
    borderRadius: '8px'
  },
  color: '#FFF'
}))

function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElContact, setAnchorElContact] = useState(null)

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleOpenContact = (e) => {
    setAnchorElContact(e.currentTarget)
  }
  const handleCloseContact = () => {
    setAnchorElContact(null)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth'})
    handleCloseNavMenu()
  }

  // const pages = [
  //   {name: 'Home', id: 'home'},
  //   {name: 'About', id: 'about'},
  //   {name: 'Projects', id: 'projects'}
  // ]

  return (
    <AppBar position="sticky" sx={{ backgroundColor: { md: "#000", xs: 'transparent'}, boxShadow: { xs: 'none', sm: 'none', md: 'none'} }}>
      <Toolbar>
          <img src={Logo} alt='logo' width={175}/>
            {/*Mobile Menu*/}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}} >
                <IconButton
                  size='large'
                  aria-label='menu'
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                  keepMounted
                  transformOrigin={{vertical: 'top', horizontal: 'left'}}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  {/* {pages.map((page) => ( */}
                    <MenuItem onClick={() => scrollToSection('home')}>
                      <Typography textAlign='center'>Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('about')}>
                      <Typography textAlign='center'>About</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => scrollToSection('projects')}>
                      <Typography textAlign='center'>Projects</Typography>
                    </MenuItem>
                  {/* ))} */}
                </Menu>
                {/* contact menu for mobile*/}
                <Button aria-controls="contact-menu"
                  aria-haspopup="true"
                  onClick={handleOpenContact}
                  sx={{ ml: 2 }}
                >
                  Contact 
                </Button>
                <Menu
                  anchorEl={anchorElContact}
                  open={Boolean(anchorElContact)}
                  onClose={handleCloseContact}
                  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  <MenuItem onClick={handleCloseContact}>
                    <IconButton  variant="contained"
                      color="primary"
                      component="a"
                      href="http://www.linkedin.com/in/jennifer-lindsey010"
                      target="_blank"
                      rel="noopener noreferrer">
                      <LinkedInIcon  sx={{ fontSize: "32px" }} />
                      <Typography variant='h6'>LinkedIn</Typography>
                    </IconButton>
                  </MenuItem>
                  <MenuItem onClick={handleCloseContact}>
                <IconButton
                  variant="contained"
                  color="primary"
                  component="a"
                  href="mailto:jlindsey010@gmail.com"
                >
                  <EmailIcon sx={{ fontSize: "30px" }} />
                  <Typography variant='h6'>Email</Typography>
                </IconButton>
              </MenuItem>
              <MenuItem onClick={handleCloseContact}>
                <StyledButton
                  color="primary"
                  size="small"
                  variant="outlined"
                  endIcon={<DownloadForOfflineIcon />}
                >
                  RESUME
                </StyledButton>
              </MenuItem>
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
                Projects
            </StyledButton>
            {/* <StyledButton color="primary" component={Link} to="/contact">
                Contact
            </StyledButton> */}
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
                href={`${process.env.PUBLIC_URL}/JenniferLindseyResume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadForOfflineIcon />}
                >
                  RESUME
              </StyledButton>
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
