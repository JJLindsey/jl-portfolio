import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Container,Typography, Grid, Chip, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Image, ImageList, ImageListItem, Paper } from '@mui/material'
import { caseStudies } from '../data/caseStudies'
import MediaPreview from './MediaPreview'
import { FrostedCard } from './FrostedCard/FrostedCard'
import { EmojiObjects } from '@mui/icons-material'

// component for PM case studies
export default function ProductProjectDetails({productId}) {
    //const {id} = useParams()
    const navigate = useNavigate()
    const product = caseStudies.find((item) => item.id === productId)

    if(!product) {
        return(
            <Container>
                <Typography variant='h4'>Project Not Found</Typography>
                <Button onClick={() => navigate(-1)} variant='contained' color='primary'>Back to Portfolio</Button>
            </Container>
        )
    }

    const sections = [
        { title: "Problem Statement", content: product.problem },
        { title: "User Research", content: product.userResearch },
        { title: "Solution Strategy", content: product.solution },
        { title: "Key Features & Prioritization", content: product.features },
        { title: "Technical Considerations", content: product.technical },
        { title: "Results & Impact", content: product.impact },
        { title: "Lessons Learned", content: product.lessons }
    ]

  return (
    <FrostedCard sx={{ pt: 8, pb: 12, color: '#fff', backgroundColor: '#021640' }}>
          <Typography variant='h4' gutterBottom>
                    <EmojiObjects fontSize='large'/>
                    Iterating...
                </Typography> 
        <Box sx={{filter: 'blur(6px)'}}>
        {/* Hero Section */}
        <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={6} sx={{ mb: 4 }}>
                {/* <Chip label={product.type} size='large' sx={{ mb: 2, bgcolor: '#18C9CD', color: '#fff' }} /> */}
                <Button
                        variant='outlined'
                        color='secondary'
                        target='_blank'
                        sx={{ borderRadius: 4, mb: 4 }}
                    > {product.type}</Button>
                <Typography variant='h3' textAlign='center' gutterBottom color='#fff'>
                    {product.name}
                </Typography>
                <Typography variant='h6' textAlign='center' gutterBottom color='#18C9CD'>
                    {product.tagline}
                </Typography>
                <Typography variant='body1' textAlign='center' sx={{ mb: 4 }}>
                    {product.description}
                </Typography>
                <Box>
                        <Typography variant='h6' color='#fff'>My Role</Typography>
                        <Typography variant='body1' gutterBottom>{product.role}</Typography>
                </Box>
                
                {/* Key Metrics */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant='h6' color='#fff' gutterBottom>Key Outcomes</Typography>
                    <Grid container spacing={2}>
                        {product.metrics?.map((metric, index) => (
                            <Grid item xs={6} key={index}>
                                <Box sx={{ 
                                    border: '1px solid #18C9CD', 
                                    borderRadius: 2, 
                                    p: 2, 
                                    textAlign: 'center' 
                                }}>
                                    <Typography variant='h4' color='#18C9CD'>{metric.value}</Typography>
                                    <Typography variant='body2'>{metric.label}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Timeline */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
                    <Box>
                        <Typography variant='h6' color='#fff'>Timeline</Typography>
                        <Typography variant='body1'>{product.timeline}</Typography>
                    </Box>
                    {/* <Box>
                        <Typography variant='h6' color='#fff'>My Role</Typography>
                        <Typography variant='body1'>{product.role}</Typography>
                    </Box> */}
                </Box>

                {/* Tools & Methods */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4, justifyContent: 'center'}}>
                    {product.methods.map((method, index) => (
                        <Chip
                            key={index}
                            label={method}
                            variant='outlined'
                            sx={{color: '#fff', borderColor: '#18C9CD', backgroundColor: 'transparent'}}
                        />
                    ))}
                </Box>

                {product.url && (
                    <Button
                        variant='outlined'
                        color='secondary'
                        href={product.url}
                        target='_blank'
                        sx={{ borderRadius: 4 }}
                    >
                        {product.navigation}
                    </Button>
                )}
            </Grid>
            {/* <Grid item xs={12} md={6} sx={{ mb: 4 }}>
                <MediaPreview videoUrl={product.videoUrl} image={product.image}/>
            </Grid> */}
        </Grid>

        {/* Case Study Sections */}
        {sections.map((section, index) => (
            section.content && (
                <Box key={index} sx={{ mt: 8 }}>
                    <Typography variant='h4' gutterBottom color='#fff'>
                        {section.title}
                    </Typography>
                    <Typography variant='body1' sx={{ mb: 4 }}>
                        {section.content}
                    </Typography>
                    
                    {/* Conditional content based on section */}
                    {section.title === "User Research" && product.userPersonas && (
                        <Grid container spacing={2} sx={{justifyContent: 'center'}}>
                            {product.userPersonas.map((persona, idx) => (
                                <Grid item xs={12} md={4} key={idx}>
                                    <Paper sx={{ p: 3, bgcolor: '#111', border: '1px solid #18C9CD' }}>
                                        <Typography variant='h6' color='#18C9CD'>{persona.name}</Typography>
                                        <Typography variant='body1'>{persona.description} </Typography>
                                        <Typography variant='body2' sx={{ mt: 2, fontStyle: 'italic' }}>
                                            "{persona.quote}"
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    {section.title === "Key Features & Prioritization" && product.featureMatrix && (
                        <TableContainer component={Paper} sx={{ mt: 2 }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Feature</TableCell>
                                        <TableCell>User Impact</TableCell>
                                        <TableCell>Technical Effort</TableCell>
                                        <TableCell>Priority</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {product.featureMatrix.map((feature, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell>{feature.name}</TableCell>
                                            <TableCell>{feature.impact}</TableCell>
                                            <TableCell>{feature.effort}</TableCell>
                                            <TableCell>
                                                <Chip 
                                                    label={feature.priority} 
                                                    color={feature.priority === 'High' ? 'error' : feature.priority === 'Medium' ? 'warning' : 'default'}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Box>
            )
        ))}

        {/* Screenshots/Prototypes */}
        {product.screenshots && product.screenshots.length > 0 && (
            <Box sx={{ mt: 8 }}>
                <Typography variant='h4' gutterBottom color='#fff'>Visual Design</Typography>
                <Typography variant='body' sx={{ mb: 4 }}>In Progress...</Typography>
                {/* <ImageList cols={2} variant='masonry' sx={{ mb: 4}}>
                    {product.screenshots.map((src, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={src}
                                alt={`${product.name} design ${index + 1}`}
                                style={{ borderRadius: 4 }}
                                loading='lazy'
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
            </Box>
        )}

        {/* Figma Prototype */}
        {product.figmaEmbed && (
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant='h4' gutterBottom color='#fff'>Interactive Prototype... in Progress</Typography>
                <div dangerouslySetInnerHTML={{ __html: product.figmaEmbed }} />
            </Box>
        )}

        <Button 
            variant='contained'  
            sx={{backgroundColor: '#18C9CD', mt: 4}} 
            onClick={() => navigate('/')}
        >
            Back to Case Studies
        </Button>
        </Box>
    </FrostedCard>
  )
}