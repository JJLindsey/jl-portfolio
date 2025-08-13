import React from 'react'
import { projects } from '../data/projects'
import {styled} from '@mui/material/styles'
import { CallMade } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Card,CardMedia, Button, CardActions, CardContent, Grid, Typography } from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
    height: 300,
    //backdropFilter: 'blur( 3px )',
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
    borderRadius: 9,
    border: '1px solid rgba(24, 202, 205, 0.2)',
    background: `linear-gradient(to bottom right,
    rgba(255,255,255,0.9) 0%,
   rgba(255,255,255,0.1) 40%,
   rgba(0,150,255,0.1) 60%,
   rgba(0, 225, 255, 0.9) 100%)`,
    color:'#fff',
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      //background: 'rgba(255, 255, 255, 0.2)',
    },
  }))

export default function CodeProjects() {
  return (
        <Grid
          container
          spacing={3} 
        >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <StyledCard
              raised={true}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                paddingBottom: 2,
                height: 450,
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={`Image for ${project.name}`}
                sx={{height: 200}}
              />
              <CardContent>
                {project.avatar}
                <Typography variant="body2" color='#000'>
                  {/* {projects.testimonial} */}
                </Typography>
                <Typography variant="h6" align="center">
                        {project.name}
                </Typography>
                <Typography variant="body1" align="center">
                      {project.project}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent: 'center'}}>
                <Button
                  sx={{color: '#fff', borderColor: '#ffd'}}
                  variant="outlined"
                  href={project.url} target="_blank"
                >
                    {project.navigation}
                </Button>
                <Button
                    //href={project.url}
                    variant="outlined"
                    component={Link}
                    to={`/projects/${project.id}`}
                    endIcon={<CallMade />}
                    sx={{ color: '#fff', borderColor: '#ffd' }}
                  >
                    view project
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
  )
}
