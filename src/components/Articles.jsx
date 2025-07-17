import React from 'react'
import {
  Box,
  Button,
  Typography,
  Card,
  CardActions,
  Chip,
  useTheme,
  Grid,
} from '@mui/material'

const ArticleCard = ({ title, badge, description, platform, tags, badgeColor }) => (
  <Card
    variant='outlined'
    sx={{
        p: 4,
        borderRadius: 3,
        backgroundColor: 'black',
        border: '3px solid', // Adjust border thickness as needed
        backgroundClip: 'padding-box', // Ensure the background is clipped within the border
        borderColor: '#18C9CD',
        content: '""',
        zIndex: -1,
        transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }
    }}
    >
    <Chip label={badge} color={badgeColor} size='small' />
    <Box display='flex' justifyContent='space-between' alignItems='center' mb={2}>
      <Typography variant='h6' fontWeight='bold' color='text.secondary'>{title}</Typography>
    </Box>
    <Typography color='text.secondary' mb={1}>{description}</Typography>
    <Typography variant='body2' color='text.secondary' mb={2}>Platform: {platform}</Typography>
    <Box display='flex' flexWrap='wrap' gap={1} justifyContent='center'>
      {tags.map(tag => (
        <Chip key={tag} label={tag} variant='outlined' sx={{color: '#fff'}} />
      ))}
    </Box>
    <CardActions>
        <Button size='large' sx={{color: '#18C9CD'}}>Share</Button> 
        <Button size='large' sx={{color: '#18C9CD'}}>Read</Button>
      </CardActions>
  </Card>
)

export default function Articles() {
    return (
    <Grid container spacing={4} sx={{ pt: 1, pb: 12 }}>
        <Grid item xs={12} md={6}>
            <ArticleCard
                title='How Visual Analysis Improves Code Quality'
                badge='Coming Next Week'
                badgeColor='warning'
                description="The Art Historian's Advantage - 6 Part Series"
                platform='Medium'
                tags={['Visual Hierarchy', 'Color Theory', 'Composition', 'User Psychology']}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <ArticleCard
                title='Design Systems Through an Art Historical Lens'
                badge='Draft'
                badgeColor='success'
                description='Applying Renaissance Principles to Modern UX'
                platform='Dev.to'
                tags={['Design Systems', 'Cultural Context', 'Accessibility']}
            />
        </Grid>
    </Grid>
)
}