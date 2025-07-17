import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  Chip,
  Grid,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import Articles from './Articles';

const TabPanel = ({ children, value, index }) => {
  return value === index ? <Box sx={{ mt: 2 }}>{children}</Box> : null;
};

const SectionHeader = () => (
  <Box textAlign="center" mb={6}>
    <Typography variant="h3" component="h2" color="error" fontWeight="bold" gutterBottom>
      Technical Deep Dive
    </Typography>
    <Typography variant="h5" color="text.secondary" maxWidth={600} mx="auto">
      Where art historical methodology meets modern frontend engineering
    </Typography>
  </Box>
);

const CodeCard = ({ title, chip, description, code }) => (
  <Card sx={{ p: 4, borderRadius: 3, boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
      <Typography variant="h6" fontWeight="bold">{title}</Typography>
      <Chip label={chip} color="error" size="small" />
    </Box>
    <Typography color="text.secondary" mb={3}>{description}</Typography>
    <Box
      component="pre"
      sx={{
        textAlign: 'left',
        backgroundColor: '#1e1e1e',
        color: 'white',
        p: 3,
        borderRadius: 2,
        fontFamily: 'Courier New, monospace',
        fontSize: '0.9rem',
        overflowX: 'auto',
      }}
    >
      <code>{code}</code>
    </Box>
  </Card>
);

export default function TechnicalDeepDive() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <SectionHeader />

      <Box sx={{ backgroundColor: 'black', borderRadius: 2, boxShadow: 3, overflow: 'hidden', mb: 4 }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          variant="fullWidth"
          indicatorColor="error"
          textColor="inherit"
        >
          <Tab icon={<CodeIcon />} label="Code Samples" iconPosition="start" />
          <Tab icon={<DescriptionIcon />} label="Technical Writing" iconPosition="start" />
        </Tabs>
      </Box>

      <TabPanel value={tabIndex} index={0}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CodeCard
              title="Accessible Component Pattern"
              chip="React/TypeScript"
              description="Custom hook for managing focus states with cultural context"
              code={`// useFocusManagement - Considers cultural reading patterns
const useFocusManagement = (direction = 'ltr') => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyNavigation = useCallback((e, items) => {
    const nextKey = direction === 'ltr' ? 'ArrowRight' : 'ArrowLeft';
    const prevKey = direction === 'ltr' ? 'ArrowLeft' : 'ArrowRight';

    switch (e.key) {
      case nextKey:
        setFocusedIndex(prev => (prev + 1) % items.length);
        break;
      case prevKey:
        setFocusedIndex(prev => (prev - 1 + items.length) % items.length);
        break;
    }
  }, [direction]);

  return { focusedIndex, handleKeyNavigation };
};`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CodeCard
              title="Design Token System"
              chip="CSS/JavaScript"
              description="Scalable theming with semantic naming conventions"
              code={`// Theme tokens inspired by art historical color theory
                    const designTokens = {
                    color: {
                        primary: {
                        50: '#fef7f0',  // Renaissance flesh tones
                        500: '#d71920', // Venetian red
                        900: '#7f1d1d'  // Deep burgundy
                        },
                        semantic: {
                        error: 'var(--color-primary-500)',
                        warning: 'var(--color-amber-500)',
                        success: 'var(--color-emerald-500)',
                        info: 'var(--color-blue-500)'
                        }
                    },
                    spacing: {
                        xs: '0.618rem',
                        sm: '1rem',
                        md: '1.618rem',
                        lg: '2.618rem',
                        xl: '4.236rem'
                    }
                    };`}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CodeCard
              title="Component Composition"
              chip="React"
              description="Flexible, reusable components with cultural adaptability"
              code={`// CulturalCard - Adapts layout based on cultural context
const CulturalCard = ({ culture = 'western', imagePosition = 'auto', children }) => {
  const getImagePosition = () => {
    if (imagePosition !== 'auto') return imagePosition;
    switch (culture) {
      case 'arabic': return 'right';
      case 'eastern': return 'top';
      default: return 'left';
    }
  };

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: getImagePosition() === 'top' ? 'column' : 'row',
      direction: culture === 'arabic' ? 'rtl' : 'ltr'
    }}>
      {children}
    </Card>
  );
};`}
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>

        <Articles />
      </TabPanel>
    </Container>
  )
}
