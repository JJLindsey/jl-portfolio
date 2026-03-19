import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { designProjects } from '../data/designprojects'
import {
  Box, Button, Chip, Container, Divider, Grid, Typography,
  List, ListItem, ListItemIcon, ListItemText, IconButton
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  ShoppingCart, OpenInNew, CheckCircleOutline,
  ChevronLeft, ChevronRight, Close
} from '@mui/icons-material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import CropSquareIcon from '@mui/icons-material/CropSquare'

export default function DesignProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const theme = useTheme()
  const project = designProjects.find((p) => p.id === id)
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const accent = theme.palette.accent?.main || '#18C9CD'
  const secondary = theme.palette.secondary?.main || '#ffda00'

  if (!project) {
    return (
      <Container>
        <Typography variant='h4'>Project Not Found</Typography>
        <Button onClick={() => navigate(-1)} variant='contained' color='primary'>
          Back to Portfolio
        </Button>
      </Container>
    )
  }

  const imgs = project.screenshots || []

  return (
    <>
      <Grid>
         <Button variant='text' sx={{ mt: 2, color: 'lightgrey' }}
                onClick={() => navigate('/')}>
            Back to Projects
        </Button>
        </Grid>
    <Container sx={{ pt: 8, pb: 12 }}>
      {/* ── Hero Image ── */}
      <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden',
                 mb: 6, cursor: 'zoom-in' }}
           onClick={() => setLightboxIdx(0)}>
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
          <Typography variant='h6' sx={{ color: accent }}>{project.subtitle}</Typography>
          {project.tagline && (
            <Typography variant='body2' sx={{ color: '#ccc', mt: 1 }}>
              {project.tagline}
            </Typography>
          )}
        </Box>
        {/* zoom hint */}
        <Box sx={{ position: 'absolute', top: 12, right: 16,
                   bgcolor: '#00000066', borderRadius: 1, px: 1.5, py: 0.5 }}>
          <Typography variant='caption' sx={{ color: '#aaa', letterSpacing: '0.1em' }}>
            click to expand
          </Typography>
        </Box>
      </Box>

      {/* ── Two Column Body ── */}
      <Grid container spacing={6} alignItems='flex-start'>

        {/* ── LEFT — main content ── */}
        <Grid item xs={12} md={7}>

          {/* Details */}
          <Typography variant='h6' sx={{ color: accent, mb: 1 }}>Details</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WorkOutlineIcon sx={{ fontSize: 24, color: accent }} />
              <Typography variant='body1'>{project.productType}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CropSquareIcon sx={{ fontSize: 24, color: accent }} />
              <Typography variant='body1'>{project.timeline}</Typography>
            </Box>
          </Box>

          {/* Problem & Solution */}
          {(project.problem || project.solution) && (
            <Grid container spacing={4} sx={{ mb: 4 }}>
              {project.problem && (
                <Grid item xs={12} md={6}>
                  <Typography variant='h5' color='#fff' gutterBottom>The Challenge</Typography>
                  <Typography variant='body1' textAlign='left'>{project.problem}</Typography>
                </Grid>
              )}
              {project.solution && (
                <Grid item xs={12} md={6}>
                  <Typography variant='h5' color='#fff' gutterBottom>The Solution</Typography>
                  <Typography variant='body1' textAlign='left'>{project.solution}</Typography>
                </Grid>
              )}
            </Grid>
          )}

          <Divider sx={{ backgroundColor: accent, mb: 4 }} />

          {/* Image strip */}
          {imgs.length > 1 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h6' sx={{ color: accent, mb: 2 }}>Preview</Typography>
              <Grid container spacing={1.5}>
                {imgs.slice(1).map((src, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      component='img' src={src}
                      alt={`Preview ${i + 2}`}
                      onClick={(e) => { e.stopPropagation(); setLightboxIdx(i + 1) }}
                      sx={{ width: '100%', borderRadius: 1, aspectRatio: '4/3',
                            objectFit: 'cover', cursor: 'zoom-in', display: 'block',
                            border: '1px solid #333',
                            transition: 'transform 0.2s, border-color 0.2s',
                            '&:hover': { transform: 'scale(1.02)', borderColor: accent } }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Design Decisions */}
          {project.designDecisions?.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h5' color='#fff' gutterBottom>Design Decisions</Typography>
              {project.designDecisions.map((item, index) => (
                <Box key={index} sx={{ mb: 3, p: 3, border: '1px solid #333', borderRadius: 2 }}>
                  <Typography variant='h6' color={accent} gutterBottom>
                    {item.decision}
                  </Typography>
                  {Array.isArray(item.rationale) ? (
                    <List disablePadding>
                      {item.rationale.map((point, i) => (
                        <ListItem key={i} disableGutters>
                          <Typography variant='body1'>{point}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant='body1'>{item.rationale}</Typography>
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Results */}
          {project.results?.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h5' color='#fff' gutterBottom>Results & Impact</Typography>
              <Grid container spacing={2}>
                {project.results.map((result, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography variant='h6' color={accent} sx={{ mr: 1 }}>✓</Typography>
                      <Typography variant='body1' textAlign='left'>{result}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Role */}
          {project.role && (
            <>
              <Typography variant='h6' sx={{ color: accent }} gutterBottom>My Role</Typography>
              <Typography variant='body1' sx={{ mb: 4 }}>{project.role}</Typography>
            </>
          )}

          {/* Tools */}
          {project.label?.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {project.label.map((label, index) => (
                <Chip key={index} label={label} variant='outlined'
                  sx={{ color: '#fff', borderColor: accent,
                        backgroundColor: 'transparent', borderWidth: 2 }} />
              ))}
            </Box>
          )}
        </Grid>

        {/* ── RIGHT — sidebar ── */}
        <Grid item xs={12} md={5}>

          {/* Creative Market CTA */}
          {project.url && (
            <Box sx={{ border: `1px solid ${secondary}55`, borderRadius: 2, p: 3, mb: 4 }}>
              <Typography variant='caption'
                sx={{ color: secondary, letterSpacing: '0.15em',
                      textTransform: 'uppercase', display: 'block', mb: 1 }}>
                Coming Soon for purchase
              </Typography>
              <Typography variant='h5' color='#fff' sx={{ mb: 0.5 }}>
                {project.name}
              </Typography>
              <Typography variant='body2' sx={{ mb: 3 }}>
                {project.productType}
              </Typography>
              <Button fullWidth variant='contained' color='secondary'
                href={project.url} target='_blank' rel='noopener noreferrer'
                startIcon={<ShoppingCart />} sx={{ mb: 1.5, borderRadius: 4 }}>
                Get This Template - Coming Soon
              </Button>
              {/* <Button fullWidth variant='outlined' color='secondary'
                href={project.url} target='_blank' rel='noopener noreferrer'
                endIcon={<OpenInNew />} sx={{ borderRadius: 4 }}>
                View on Creative Market
              </Button> */}
            </Box>
          )}

          {/* What's Included */}
          {project.whatsIncluded?.length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h6' sx={{ color: accent, mb: 2 }}>
                What's Included
              </Typography>
              <List disablePadding>
                {project.whatsIncluded.map((w, i) => (
                  <ListItem key={i} disableGutters alignItems='flex-start'>
                    <ListItemIcon sx={{ minWidth: 32, mt: '2px' }}>
                      <CheckCircleOutline sx={{ color: accent, fontSize: 18 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={w.item}
                      secondary={w.detail}
                      primaryTypographyProps={{ variant: 'body2', color: '#fff' }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Specs */}
          {project.specs && Object.keys(project.specs).length > 0 && (
            <Box sx={{ mb: 4 }}>
              <Typography variant='h6' sx={{ color: accent, mb: 2 }}>
                Specifications
              </Typography>
              <Box sx={{ border: '1px solid #333', borderRadius: 2, overflow: 'hidden' }}>
                {Object.entries(project.specs).map(([k, v], i) => (
                  <Box key={i} sx={{
                    display: 'flex', justifyContent: 'space-between',
                    px: 2, py: 1.2,
                    bgcolor: i % 2 === 0 ? '#161616' : '#1c1c1c',
                    borderBottom: i < Object.keys(project.specs).length - 1
                      ? '1px solid #333' : 'none'
                  }}>
                    <Typography variant='caption' sx={{ color: '#888' }}>{k}</Typography>
                    <Typography variant='caption' color='#fff'>{v}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Back button */}
      <Button variant='contained' sx={{ backgroundColor: accent, mt: 4 }}
              onClick={() => navigate('/')}>
        Back to Projects
      </Button>

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
    </>
  )
}