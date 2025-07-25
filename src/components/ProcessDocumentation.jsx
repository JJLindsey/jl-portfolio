import React, {useState} from 'react'
import {  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
 } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HomeIcon from '@mui/icons-material/Home'
import Warning from '@mui/icons-material/Warning'
import Error from '@mui/icons-material/Error'
import { ArrowForward } from '@mui/icons-material'

const steps = {
    processOne: [
      ['User Research & Discovery', 'Apply analytical methods to understand user needs, market context, and behavioral patterns through interviews, surveys, and data analysis'],
      ['Problem Definition', 'Frame user problems using contextual analysis skills to identify root causes rather than surface-level symptoms'],
      ['Solution Prioritization', 'Evaluate potential solutions against user impact, technical feasibility, and business objectives using structured frameworks'],
      ['Cross-Cultural Validation', 'Ensure solutions work across different user contexts and cultural backgrounds through inclusive research methods'],
      ['Success Metrics Definition', 'Establish measurable outcomes that align with both user value and business goals'],
    ],
    processTwo: [
      ['Stakeholder Alignment', 'Facilitate conversations between engineering, design, and business teams to establish shared product vision'],
      ['Requirements Documentation', 'Create clear, actionable product requirements that bridge user needs and technical implementation'],
      ['Technical Feasibility Assessment', 'Leverage engineering background to evaluate implementation complexity and resource requirements'],
      ['Risk Identification', 'Anticipate potential challenges in user adoption, technical implementation, and market fit'],
      ['Communication Strategy', 'Develop messaging that resonates with different audiences: users, stakeholders, and development teams'],
    ],
    processThree: [
      ['Market Analysis', 'Research competitive landscape and identify opportunities using systematic analytical approaches'],
      ['Feature Roadmap Planning', 'Balance user needs, technical debt, and business priorities in strategic product planning'],
      ['User Testing & Validation', 'Design and conduct user research to validate assumptions and iterate on solutions'],
      ['Performance Monitoring', 'Track key metrics and user behavior to measure product success and identify improvement opportunities'],
      ['Continuous Iteration', 'Use feedback loops and data insights to refine product strategy and enhance user experience'],
    ],
  };
  
  const workflowSteps = [
    'Identify Problem',
    'Understand Users',
    'Define Success',
    'Prototype Solutions',
    'Develop Solution',
    'Validate & Test',
    'Measure Impact',
    'Iterate & Scale'
  ];
  
  const checklistItems = [
    ['Color contrast meets WCAG AAA standards', 'ok'],
    ['Keyboard navigation fully functional', 'ok'],
    ['Focus indicators need enhancement', 'warn'],
    ['Screen reader compatibility verified', 'ok'],
    ['RTL language support implemented', 'ok'],
    ['Cultural symbols need review for global markets', 'error'],
  ];
  
  const components = [
    ['Button System', 'Culturally adapted sizing and spacing'],
    ['Typography Scale', 'Multi-language font optimization'],
    ['Color Palette', 'Art historical color theory applied'],
    ['Layout Grid', 'Golden ratio-based proportions'],
    ['Navigation', 'Directional and cultural adaptations'],
    ['Form Elements', 'Accessible and culturally appropriate'],
  ];
  
  export default function ProcessDocumentation() {
    const theme = useTheme()
    //const [activeComponent, setActiveComponent] = useState(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  
    const renderProcessCard = (title, icon, stepsArr) => (
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, position: 'relative', backgroundColor: '#011640' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'error.main' }} />
        <Box display="flex" alignItems="center" mb={3}>
          <Box
            sx={{
              width: 48,
              height: 48,
              background: 'linear-gradient(135deg, #CD1C18, #ff6b6b)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>
            {title}
          </Typography>
        </Box>
        <Box component="ol" sx={{ pl: 0, listStyle: 'none', counterReset: 'step-counter' }}>
          {stepsArr.map(([stepTitle, desc], idx) => (
            <Box
              key={idx}
              component="li"
              sx={{
                position: 'relative',
                borderLeft: '2px solid #e9ecef',
                pl: 4,
                pb: 2,
                '&::before': {
                  content: 'counter(step-counter)',
                  counterIncrement: 'step-counter',
                  position: 'absolute',
                  left: -14,
                  top: 8,
                  width: 24,
                  height: 24,
                  bgcolor: 'error.main',
                  color: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                },
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="#18C9CD">
                {stepTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    );
  
    return (
      <Container sx={{ py: { xs: 4, sm: 6 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" color="error.main" fontWeight="bold" gutterBottom>
            My Process
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            How I apply art historical methodology to product methodology
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {renderProcessCard('Product Discovery', <StarIcon sx={{ fill: '#fff' }} />, steps.processOne)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderProcessCard('Cross-Functional Collaboration', <CheckCircleIcon sx={{ fill: '#fff' }} />, steps.processTwo)}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderProcessCard('Strategic Product Planning', <HomeIcon sx={{ fill: '#fff' }} />, steps.processThree)}
          </Grid>
        </Grid>
  
        <Paper
          sx={{
            mt: 4,
            p: 4,
            borderRadius: 3,
            bgcolor: '#011640',
            border: '1px solid rgb(206, 206, 206)',
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            sx={{ color: '#fff', mb: 3 }}
          >
            Product Thinking
          </Typography>

          {isSmallScreen ? (
            // Vertical Stepper for small screens
            <Stepper orientation="vertical" activeStep={-1}>
              {workflowSteps.map((step, idx) => (
                <Step key={idx}>
                  <StepLabel>
                    <Typography variant="body1" fontWeight={500}>
                      {step}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          ) : (
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <Box
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      border: '1px solid #dee2e6',
                      bgcolor: idx === 0 ? '#7ba696' : 'grey.100',
                      color: idx === 0 ? '#fff' : '#000',
                      minWidth: 120,
                      textAlign: 'center',
                    }}
                  >
                    {step}
                  </Box>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowForward sx={{ color: '#b82601', fontSize: 28 }} />
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
        </Paper>
  
        <Paper sx={{ mt: 8, p: 4, borderRadius: 4, border: '3px solid rgb(92, 92, 92)' }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom  color="#000" >
            Interactive Accessibility Checklist
          </Typography>
          <Typography variant="body2" color="#000" gutterBottom>
            A sample of how I approach accessibility audits, combining automated tools with cultural awareness
          </Typography>
          <Grid container spacing={2} mt={2}>
            {checklistItems.map(([label, status], i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{
                    bgcolor: '#f8f9fa',
                    p: 2,
                    borderRadius: 2,
                    borderLeft: `4px solid ${
                      status === 'ok' ? '#28a745' : status === 'warn' ? '#ffc107' : '#dc3545'
                    }`,
                    borderBottom: '1px solid #c9c9c9'
                  }}
                >
                  {status === 'ok' && (
                    <CheckCircleIcon sx={{ color: '#28a745', mr: 1.5 }} />
                  )}
                  {status === 'warn' && (
                    <Warning sx={{ color: '#ffc107', mr: 1.5 }} />
                  )}
                  {status === 'error' && (
                    <Error sx={{ color: '#dc3545', mr: 1.5 }} />
                  )}
                  <Typography variant="body2" color='#000'>{label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
        {/* <Paper sx={{ mt: 8, p: 4, borderRadius: 3 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Design System Components
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Click each component to see how I approach culturally-aware design systems
          </Typography>
          <Grid container spacing={2} mt={2}>
            {components.map(([title, desc], idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  onClick={() => setActiveComponent(idx)}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: activeComponent === idx ? '2px solid #CD1C18' : '2px dashed #dee2e6',
                    backgroundColor: activeComponent === idx ? '#fff' : '#f8f9fa',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper> */}
      </Container>
    );
  }
