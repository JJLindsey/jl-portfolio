import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {projects} from '../data/projects'
import { Box, Button, Chip, Container, Divider, Grid, ImageList, ImageListItem, Typography, Tooltip } from '@mui/material'
import MediaPreview from './MediaPreview'
import { CallMade } from '@mui/icons-material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'


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
                <Typography variant='h3' textAlign='left' gutterBottom color='#fff'>{project.name}</Typography>
                <Typography variant='h5' textAlign='left' sx={{ mb: 2 }}>{project.subtitle}</Typography>
                <Typography textAlign='left' sx={{ mb: 4 }}>{project.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" textAlign='left' sx={{ color: '#18C9CD', mb: 1 }}>
                    Details
                  </Typography>
                </Box>
                 {/* Icon Details */}
                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <WorkOutlineIcon sx={{ fontSize: 24, color: '#18C9CD' }} />
                      <Typography variant="body" textAlign='left'>{project.productType}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CropSquareIcon sx={{ fontSize: 24, color: '#18C9CD' }} />
                      <Typography variant="body" textAlign='left'>{project.scope}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TrendingUpIcon sx={{ fontSize: 24, color: '#18C9CD' }} />
                      <Typography variant="body" textAlign='left'>{project.businessImpact}</Typography>
                    </Box>
                  </Box>
                <Typography variant='h6' textAlign='left' gutterBottom sx={{ color: '#18c9cd'}}>My Role</Typography>
                <Typography variant='body1' textAlign='left' sx={{ mb: 4 }}>{project.role}</Typography>
               
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.url && (
                    <Button
                        variant='contained'
                        color='secondary'
                        href={project.url}
                        target='_blank'
                        endIcon={<CallMade />}
                        sx={{
                            borderRadius: 4,
                            alignContent: 'left'
                        }}
                        >
                        {project.navigation}
                    </Button>
                )}
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {project.label.map((label, index) => (
                    <Chip
                    key={index}
                    label={label}
                    variant='outlined'
                    sx={{color: '#fff', borderColor: '#18C9CD', backgroundColor: 'transparent', borderWidth: 2}}
                    />
                ))}
                </Box>
            </Grid>
        <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
        {/* Conditionally render screenshots or video */}
        <MediaPreview videoUrl={project.videoUrl} image={project.image}/>
        </Grid>
      </Grid>
       {/* Problem & Solution Section */}
      {(project.problem || project.solution) && (
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {project.problem && (
            <Grid item xs={12} md={6}>
              <Typography variant='h5' textAlign='left' gutterBottom color='#fff'>
                The Challenge
              </Typography>
              <Typography variant='body1' textAlign='left'>
                {project.problem}
              </Typography>
            </Grid>
          )}
          {project.solution && (
            <Grid item xs={12} md={6}>
              <Typography variant='h5' textAlign='left' gutterBottom color='#fff'>
                The Solution
              </Typography>
              <Typography variant='body1' textAlign='left'>
                {project.solution}
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
       <Divider orientation='horizontal' flexItem sx={{ backgroundColor: '#18C9CD', mx: 1 }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4' textAlign='left' gutterBottom color='#fff'>
          Project Goal
        </Typography>
        <Typography variant='body1' textAlign='left' sx={{ mb: 4 }}>
            {project.goal}
        </Typography>
        </Box>
        {/* Key Features */}
        {project.keyFeatures && (
          <Box sx={{ mb: 8 }}>
            <Typography variant='h4' textAlign='left' gutterBottom color='#fff'>
              Key Features
            </Typography>
            <Grid container spacing={2}>
              {project.keyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ width: 8, height: 8, backgroundColor: '#18C9CD', borderRadius: '50%', mr: 2 }} />
                    <Typography variant='body1'>{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Box>
         {/* Design Decisions */}
        {project.designDecisions && (
          <Box sx={{ mb: 8 }}>
            <Typography variant='h4' textAlign='left' gutterBottom color='#fff'>
              Design Decisions
            </Typography>
            {project.designDecisions.map((item, index) => (
              <Box key={index} sx={{ mb: 3, p: 3, border: '1px solid #333', borderRadius: 2 }}>
                <Typography variant='h6' color='#18C9CD' gutterBottom>
                  {item.decision}
                </Typography>
                <Typography variant='body1'>
                  {item.rationale}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
        {/* Full-width image after goal */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ImageList cols={2} variant='masonry' sx={{ mb: 4}}>
             {project.screenshots.map((src, index) => (
                <ImageListItem key={index}>
                    <img
                    src={src}
                    alt={`${project.name} screenshot ${index + 1}`}
                    style={{ borderRadius: 4 }}
                    loading='lazy'

                    />
                </ImageListItem>
                ))}
          </ImageList>
        )}
      </Box>
       {/* Results */}
        {project.results && (
          <Box sx={{ mb: 8 }}>
            <Typography variant='h4' textAlign='left' gutterBottom color='#fff'>
              Results & Impact
            </Typography>
            <Grid container spacing={2}>
              {project.results.map((result, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant='h6' color='#18C9CD' sx={{ mr: 1 }}>✓</Typography>
                    <Typography variant='body1'>{result}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
       {/* Conditionally render the Figma embed */}
       {project.figmaEmbed && (
            <Box sx={{ mt: 4, mb: 4 }}>
              <Typography variant='h6' textAlign='left' gutterBottom color='#fff'>Figma Prototype</Typography>
              <div dangerouslySetInnerHTML={{ __html: project.figmaEmbed }} />
            </Box>
          )}
      <Button variant='contained'  sx={{backgroundColor: '#18C9CD', mt: 4}} onClick={() => navigate('/')}>
        Back to Projects
      </Button>
    </Container>
  )
}
