import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {projects} from '../data/projects'
import { Box, Button, Container, Typography } from '@mui/material'


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
      {project.videoUrl ? (
        <Box sx={{ mb: 4, position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={project.videoUrl}
            title={project.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: 8
            }}
          ></iframe>
        </Box>
      ) : (
        project.screenshots?.map((src, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Box>
        ))
      )}

      <Button variant="contained" onClick={() => navigate('/')}>
        Back to Projects
      </Button>
    </Container>
  )
}
