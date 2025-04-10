import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {projects} from '../data/projects'
import { Box, Button, Container, Typography } from '@mui/material'
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
      <Typography variant="h3" gutterBottom color='#fff'>{project.name}</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>{project.description}</Typography>

      {/* Conditionally render screenshots or video */}
      <MediaPreview videoUrl={project.videoUrl} screenshots={project.screenshots}/>

      <Button variant="contained" onClick={() => navigate('/')}>
        Back to Projects
      </Button>
    </Container>
  )
}
