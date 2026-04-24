import React, { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container, Grid, Card, CardContent, CardActions, CardMedia, Typography,
  Button, Chip, Box, ToggleButton, ToggleButtonGroup, Stack, Tooltip
} from '@mui/material';
import { Accessibility, Code, DesignServices, CallMade, Article } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { designProjects } from '../data/designprojects';
import {styled} from '@mui/material/styles'

const allProjects = [...projects, ...designProjects]

const StyledCard = styled(Card)(({ theme }) => ({
  //height: 450,
  borderRadius: 4,
  border: '0.25px solid rgba(191, 155, 122, 0.26)',
  background: `
    linear-gradient(
      160deg,
      rgba(38, 28, 20, 0.95) 0%,
      rgba(28, 21, 16, 0.98) 50%,
      rgba(20, 14, 10, 1.0) 100%
    )
  `,
  boxShadow: `
    0 0 0 1px rgba(191, 155, 122, 0.08),
    0 4px 24px rgba(0, 0, 0, 0.6),
    0 1px 0 rgba(191, 155, 122, 0.15) inset
  `,
  color: 'text.primary',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent 0%, #CD7F18 50%, transparent 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 50% 0%, rgba(205, 127, 24, 0.04) 0%, transparent 60%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
    pointerEvents: 'none',
  },
 
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(191, 155, 122, 0.28)',
    boxShadow: `
      0 0 0 1px rgba(191, 155, 122, 0.2),
      0 12px 40px rgba(0, 0, 0, 0.7),
      0 1px 0 rgba(191, 155, 122, 0.25) inset
    `,
    '&::before': { opacity: 1 },
    '&::after': { opacity: 1 },
  },
}));

export default function PortfolioGrid() {
  const navigate = useNavigate();
   const {id} = useParams()
  const project = allProjects.find((project) => project.id === id)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);

  const categoryColors = {
    audit: '#18C9CD',
    design: '#8C3220',
    code: '#CD7F18',
    writing: 'rgb(55, 0, 114)'
  };

  const categoryIcons = {
    audit: <Accessibility />,
    design: <DesignServices />,
    code: <Code />,
    writing: <Article />
  };

//   const allTags = useMemo(() => {
//     const tags = new Set();
//     projects.forEach(project => {
//       project.badges?.forEach(badge => tags.add(badge.label));
//       project.methods?.forEach(method => tags.add(method));
//     });
//     return Array.from(tags).sort();
//   }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
  let filtered = allProjects;

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(project => project.category.includes(selectedCategory));
  }

  if (selectedTags.length > 0) {
    filtered = filtered.filter(project => {
      const projectTags = [
        ...(project.badges?.map(b => b.label) || []),
        ...(project.methods || [])
      ];
      return selectedTags.some(tag => projectTags.includes(tag));
    });
  }

  return filtered;
}, [selectedCategory, selectedTags]);

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Developer • Design Systems & Interaction • Designer
        </Typography>
        <Typography variant="body1" color="#ccc" sx={{ mt: 2 }}>
          Building scalable, design forward systems
        </Typography>
        {/* Stats Bar */}
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          sx={{ mt: 4, flexWrap: 'wrap' }}
        >
          <Box>
            <Typography variant="h4" color="secondary.main">4</Typography>
            <Typography variant="body2">End-to-End Projects Built</Typography>
          </Box>
          <Box>
            <Typography variant="h4" color="#FF6B9D">9+</Typography>
            <Typography variant="body2">Custom Interactive Features</Typography>
          </Box>
          {/* <Box>
            <Typography variant="h4" color="#FFA500">CPACC</Typography>
            <Typography variant="body2">Certification (In Progress)</Typography>
          </Box> */}
        </Stack>
      </Box>

      {/* Category Filter */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleCategoryChange}
          aria-label="project category filter"
          sx={{
            '& .MuiToggleButton-root': {
              color: '#fff',
              borderColor: 'primary.light',
              '&.Mui-selected': {
                color: '#fff',
                fontWeight: 'bold'
              }
            }
          }}
        >
          <ToggleButton value="all" aria-label="all projects">
            All Work
          </ToggleButton>
          {/* <ToggleButton
            value="audit"
            aria-label="accessibility audits"
            sx={{
              '&.Mui-selected': {
                bgcolor: `${categoryColors.audit}40`,
                borderColor: categoryColors.audit
              }
            }}
          >
            {categoryIcons.audit}
            <Box component="span" sx={{ ml: 1 }}>Accessibility Audits</Box>
          </ToggleButton> */}
          <ToggleButton
            value="code"
            aria-label="code projects"
            sx={{
              '&.Mui-selected': {
                bgcolor: `${categoryColors.code}40`,
                borderColor: categoryColors.code
              }
            }}
          >
            {categoryIcons.code}
            <Box component="span" sx={{ ml: 1 }}>Frontend Projects</Box>
          </ToggleButton>
          <ToggleButton
            value="design"
            aria-label="product design"
            sx={{
              '&.Mui-selected': {
                bgcolor: `${categoryColors.design}40`,
                borderColor: categoryColors.design
              }
            }}
          >
            {categoryIcons.product}
            <Box component="span" sx={{ ml: 1 }}>Design & Interactions</Box>
          </ToggleButton>
          <ToggleButton
            value='writing'
            aria-label='articles written'
            sx={{
              '&.Mui-selected': {
                bgcolor: `${categoryColors.writing}40`,
                borderColor: categoryColors.writing
              }
            }}
          >
            {categoryIcons.writing}
             <Box component="span" sx={{ ml: 1 }}>Writing</Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* Tag Filter */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" color="#ccc" gutterBottom textAlign="center">
          Click to filter by skills & tools:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          {['Accessibility', 'Vue.js', 'React', 'Figma', 'Design', 'API Integration'].map(tag => (
            <Chip
              key={tag}
              label={tag}
              onClick={() => handleTagToggle(tag)}
              variant={selectedTags.includes(tag) ? 'filled' : 'outlined'}
              color={selectedTags.includes(tag) ? 'primary' : 'default'}
              sx={{
                cursor: 'pointer',
                borderColor: selectedTags.includes(tag) ? '#777' : '#d2d2d2ff',
                color: selectedTags.includes(tag) ? '#fff' : '#dcdcdcff',
                bgcolor: selectedTags.includes(tag) ? '#18c9cd' : 'transparent'
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Results Count */}
      <Typography variant="body2" color="#ccc" sx={{ mb: 2, textAlign: 'center' }}>
        Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
      </Typography>

      {/* Project Grid */}
      <Grid container spacing={4}>
        {filteredProjects.map((project) => {
            const categoryColor = categoryColors[project.category] || '#18C9CD';

            return (
            <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
                <StyledCard>
                {/* Image */}
                <CardMedia
                    component="img"
                    image={project.image}
                    alt={`Image for ${project.name}`}
                    sx={{
                    height: 200,
                    borderRadius: '6px',
                    objectFit: 'cover',
                    }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                    {project.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.project}
                    </Typography>

                    {/* Badges (colored by category) */}
                    <Grid container spacing={1} justifyContent="center" sx={{ mb: 1 }}>
                    {project.label?.slice(0, 4).map((tag, idx) => (
                        <Grid item key={idx}>
                          <Chip
                              label={tag}
                              size="small"
                              sx={{
                              bgcolor: `${categoryColor}20`,
                              color: 'text.primary',
                              border: `1px solid ${categoryColor}`,
                              fontWeight: 500,
                              cursor: 'pointer'
                              }}
                          />
                        </Grid>
                    ))}
                    {project.label && project.label.length > 4 && (
                        <Grid item>
                          <Tooltip title={project.label.slice(4).join(', ')}>
                            <Chip
                              label={`+${project.label.length - 4}`}
                              size="small"
                              sx={{
                              bgcolor: '#222',
                              color: '#fff',
                              border: `1px solid ${categoryColor}`,
                              fontWeight: 500,
                              }}
                          />
                          </Tooltip>
                          
                        </Grid>
                    )}
                    </Grid>
                </CardContent>
                {/* Buttons */}
                <CardActions sx={{ justifyContent: 'center' }}>
                    {(project.url || project.internalRoute) && (
                    <Button
                        variant="outlined"
                        {...(project.internalRoute
                          ? { component: Link, to: project.internalRoute }
                          : { href: project.url, target: '_blank' }
                        )}
                        // href={project.url}
                        target="_blank"
                        sx={{
                        color: '#fff',
                        borderColor: '#ffd',
                        '&:hover': { bgcolor: `${categoryColor}20` },
                        }}
                    >
                        {project.navigation || 'Live Site'}
                    </Button>
                    )}
                    <Button
                    variant="outlined"
                    component={Link}
                    to={`/projects/${project.id}`}
                    endIcon={<CallMade />}
                    sx={{
                        color: '#fff',
                        borderColor: '#ffd',
                        '&:hover': { bgcolor: `${categoryColor}20` },
                    }}
                    >
                    View Project
                    </Button>
                </CardActions>
                </StyledCard>
            </Grid>
            );
        })}
        </Grid>

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" color="#ccc" gutterBottom>
            No projects match your filters
          </Typography>
          <Typography variant="body1" color="#999">
            Try adjusting your category or tag selections
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedTags([]);
            }}
            sx={{ mt: 2, borderColor: '#18C9CD', color: '#18C9CD' }}
          >
            Clear All Filters
          </Button>
        </Box>
      )}

      {/* Call to Action */}
      <Box sx={{ mt: 8, textAlign: 'center', p: 4, borderRadius: 2 }}>
        {/* <Typography variant="h5" gutterBottom color="#fff">
          Currently Pursuing WAS & CPACC Certification
        </Typography> */}
        <Typography variant="body1" color="#ccc" sx={{ mb: 3 }}>
          Passionate about building inclusive experiences that work for everyone
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            sx={{ bgcolor: 'accent.main', '&:hover': { bgcolor: 'primary.light', opacity: 0.9 } }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: 'accent.main', color: 'accent.main', '&:hover': { bgcolor: 'primary.light', opacity: 0.9 } }}
          >
            Download Resume
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}