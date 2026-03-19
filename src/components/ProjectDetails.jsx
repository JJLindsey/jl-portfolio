import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {projects} from '../data/projects'
import { accessibilityReport } from '../data/accessibility'
import { Box, Button, Chip, Container, Divider, Grid, ImageList, ImageListItem, Typography, Tooltip, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import MediaPreview from './MediaPreview'
import { CallMade, ChevronLeft, ChevronRight, Close } from '@mui/icons-material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AccessibilityReportModal from './Accessibility/AccessibilityReportModal'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import ArticleDisplay from './Articles'


export default function ProjectDetails() {
    const {id} = useParams()
    const navigate = useNavigate()
    const project = projects.find((project) => project.id === id)
    const accessibility = accessibilityReport.find((item) => item.id === project.id)
    const isArticle = project.category === 'writing'
    const [openModal, setOpenModal] = useState(false)
    const [lightboxIdx, setLightboxIdx] = useState(null)

    const handleOpenModal = () => {
      setOpenModal(true)
    }

    const handleCloseModal = () => {
      setOpenModal(false)
    }
    const imgs = project.screenshots || []
    const accent = '#18C9CD'

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
       {isArticle ? (
        <ArticleDisplay project={project} />

      ) : (
        <>
        {/* <Grid container spacing={2} alignItems='flex-start'> */}
          {/* ── Hero Image ── */}
            {/* {project.videoUrl ? (
                <Box sx={{ mb: 6 }}>
                  <MediaPreview videoUrl={project.videoUrl} />
                </Box>
              ) : ( */}
                <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden',
                          mb: 6, cursor: imgs.length > 0 ? 'zoom-in' : 'default' }}
                    onClick={() => imgs.length > 0 && setLightboxIdx(0)}>
                  <Box
                    component='img'
                    src={imgs[0] || project.image}
                    alt={project.name}
                    sx={{ width: '100%', height: { xs: 260, sm: 420, md: 500 },
                          objectFit: 'cover', display: 'block', filter: 'brightness(0.75)' }}
                  />
                  {/* gradient overlay */}
                  <Box sx={{ position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, #011640ee 0%, transparent 55%)' }} />
                  {/* title on image */}
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, p: { xs: 3, md: 5 } }}>
                    <Typography variant='h3' color='#fff' gutterBottom>{project.name}</Typography>
                    <Typography variant='h6' sx={{ color: '#18C9CD' }}>{project.subtitle}</Typography>
                  </Box>
                  {/* zoom hint */}
                  {imgs.length > 0 && (
                    <Box sx={{ position: 'absolute', top: 12, right: 16,
                              bgcolor: '#80808066', borderRadius: 1, px: 1.5, py: 0.5 }}>
                      <Typography variant='caption' sx={{ color: '#aaa', letterSpacing: '0.1em' }}>
                        click to expand
                      </Typography>
                    </Box>
                  )}
                </Box>
          {/* )} */}
        <Grid container spacing={2} alignItems='flex-start'>
            <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
              {/* Only show title here if video — hero already shows it for image projects */}
              {/* {project.videoUrl && (
                <>
                  <Typography variant='h3' textAlign='left' gutterBottom color='#fff'>{project.name}</Typography>
                  <Typography variant='h5' textAlign='left' sx={{ mb: 2 }}>{project.subtitle}</Typography>
                </>
              )} */}
                {/* <Typography variant='h3' textAlign='left' gutterBottom color='#fff'>{project.name}</Typography>
                <Typography variant='h5' textAlign='left' sx={{ mb: 2 }}>{project.subtitle}</Typography>
                <Typography textAlign='left' sx={{ mb: 4 }}>{project.description}</Typography> */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" textAlign='left' sx={{ color: '#18C9CD', mb: 1 }}>
                    Details
                  </Typography>
                </Box>

                 {/* Icon Details */}
                 <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 5 }}>
                  <Typography textAlign='left' sx={{ mb: 4 }}>{project.description}</Typography>
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
                 {accessibility && (
                    <Button
                      variant='outlined'
                      color='secondary'
                      startIcon={<AccessibilityNewIcon />}
                      onClick={handleOpenModal}
                      sx={{ borderRadius: 4 }}
                    >
                      Accessibility Report
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
        <MediaPreview videoUrl={project.videoUrl} />
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
        {/* ── Screenshot strip (right column, image projects only) ── */}
            {!project.videoUrl && imgs.length > 1 && (
              <Grid item xs={12} sm={6} sx={{ mb: 4 }}>
                <Typography variant='h6' sx={{ color: '#18C9CD', mb: 2 }}>Preview</Typography>
                <Grid container spacing={1.5}>
                  {imgs.slice(1).map((src, i) => (
                    <Grid item xs={6} key={i}>
                      <Box
                        component='img' src={src}
                        alt={`Preview ${i + 2}`}
                        onClick={() => setLightboxIdx(i + 1)}
                        sx={{ width: '100%', borderRadius: 4, aspectRatio: '3/2',
                              objectFit: 'cover', cursor: 'zoom-in', display: 'block',
                              border: '1px solid #333',
                              transition: 'transform 0.2s, border-color 0.2s',
                              '&:hover': { transform: 'scale(1.02)', borderColor: '#18C9CD' } }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}
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
            {/* <Grid container spacing={2}>
              {project.keyFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ width: 8, height: 8, backgroundColor: '#18C9CD', borderRadius: '50%', mr: 2 }} />
                    <Typography variant='body1' textAlign="left">{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid> */}
            <List disablePadding>
                {project.keyFeatures.map((feature, index) => (
                  <ListItem key={index} disableGutters alignItems="flex-start">
                    <ListItemIcon sx={{ minWidth: 20, mt: '9px' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          backgroundColor: '#18C9CD',
                          borderRadius: '50%',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
          </Box>
        )}
        <Box>
        {project.designDecisions.map((item, index) => (
            <Box
              key={index}
              sx={{
                mb: 3,
                p: 3,
                border: '1px solid #333',
                borderRadius: 2
              }}
            >
              <Typography variant="h6" color="#18C9CD" gutterBottom>
                {item.decision}
              </Typography>

              {Array.isArray(item.rationale) ? (
                <List style={{ marginTop: 8, paddingLeft: 20 }}>
                  {item.rationale.map((point, i) => (
                    <ListItem key={i}>
                      <Typography variant="body1">{point}</Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1">{item.rationale}</Typography>
              )}
            </Box>
          ))}
        {/* Full-width image after goal */}
        {/* {project.screenshots && project.screenshots.length > 0 && (
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
        )} */}
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
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <Typography variant='h6' color='#18C9CD' sx={{ mr: 1 }}>✓</Typography>
                    <Typography variant='body1' textAlign="left">{result}</Typography>
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
      {accessibility && (
      <AccessibilityReportModal
        open={openModal}
        onClose={handleCloseModal}
        report={accessibility}
      />
      )}
      </>
      )}
       {/* ── Lightbox ── */}
            {lightboxIdx !== null && (
              <Box onClick={() => setLightboxIdx(null)}
                sx={{ position: 'fixed', inset: 0, zIndex: 9999,
                      bgcolor: '#000000ee', display: 'flex',
                      alignItems: 'center', justifyContent: 'center' }}>
                <IconButton onClick={() => setLightboxIdx(null)}
                  sx={{ position: 'absolute', top: 20, right: 20, color: '#fff' }}>
                  <Close />
                </IconButton>
                {imgs.length > 1 && (
                  <IconButton
                    onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i - 1 + imgs.length) % imgs.length) }}
                    sx={{ position: 'absolute', left: 20, color: '#fff' }}>
                    <ChevronLeft />
                  </IconButton>
                )}
                <Box component='img' src={imgs[lightboxIdx]}
                  alt={`Lightbox ${lightboxIdx + 1}`}
                  onClick={(e) => e.stopPropagation()}
                  sx={{ maxWidth: '88vw', maxHeight: '88vh',
                        objectFit: 'contain', borderRadius: 2 }} />
                {imgs.length > 1 && (
                  <IconButton
                    onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i + 1) % imgs.length) }}
                    sx={{ position: 'absolute', right: 20, color: '#fff' }}>
                    <ChevronRight />
                  </IconButton>
                )}
                <Typography variant='caption'
                  sx={{ position: 'absolute', bottom: 24, color: '#888', letterSpacing: '0.1em' }}>
                  {lightboxIdx + 1} / {imgs.length}
                </Typography>
              </Box>
            )}
    </Container>
  )
}
