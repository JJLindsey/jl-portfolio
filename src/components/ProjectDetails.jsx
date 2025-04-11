import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {projects} from '../data/projects'
import { Box, Button, Chip, Container, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import MediaPreview from './MediaPreview'


export default function ProjectDetails() {
    const {id} = useParams()
    const navigate = useNavigate()
    const project = projects.find((project) => project.id === id)

    if(!project) {
        return(
            <Container>
                <Typography variant='h4'>Project Not Found</Typography>
                <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Back to Portfolio</Button>
            </Container>
        )
    }
  return (
    <Container sx={{ pt: 8, pb: 12 }}>
        <Grid container spacing={2} alignItems='flex-start'>
            <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                <Typography variant="h3" textAlign='left' gutterBottom color='#fff'>{project.name}</Typography>
                <Typography variant="body1" textAlign='left' sx={{ mb: 4 }}>{project.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {project.label.map((label, index) => (
                    <Chip
                    key={index}
                    label={label}
                    variant="outlined"
                    sx={{color: '#fff', borderColor: '#18C9CD', backgroundColor: 'transparent', borderWidth: 2}}
                    />
                ))}
                </Box>
            </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
        {/* Conditionally render screenshots or video */}
        {/* <MediaPreview videoUrl={project.videoUrl} screenshots={project.screenshots}/> */}
        {project.image && (
          <Box sx={{ mb: 4 }}>
            <img
              src={project.image}
              alt={`${project.name} preview`}
              style={{
                width: '100%',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </Box>
        )}
        </Grid>
      </Grid>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" textAlign='left' gutterBottom color="#fff">
          Project Goal
        </Typography>
        <Typography variant="body1" textAlign='left' sx={{ mb: 4 }}>
            {project.goal}
        </Typography>

        {/* Full-width image after goal */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ImageList cols={2} variant="masonry" sx={{ mb: 4}}>
             {project.screenshots.map((src, index) => (
                <ImageListItem key={index}>
                    <img
                    src={src}
                    alt={`${project.name} screenshot ${index + 1}`}
                    style={{ borderRadius: 4 }}
                    loading="lazy"

                    />
                </ImageListItem>
                ))}
          </ImageList>
        )}
      </Box>
       {/* Conditionally render the Figma embed */}
       {project.figmaEmbed && (
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant="h6" textAlign='left' gutterBottom color='#fff'>Figma Prototype</Typography>
              <div dangerouslySetInnerHTML={{ __html: project.figmaEmbed }} />
            </Box>
          )}
      <Button variant="contained"  sx={{backgroundColor: '#18C9CD'}} onClick={() => navigate('/')}>
        Back to Projects
      </Button>
    </Container>
  )
}
