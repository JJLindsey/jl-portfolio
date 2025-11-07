import React from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Button, Box,
  Typography, Grid, List, ListItem, ListItemIcon, ListItemText,
  Chip, Divider, Paper, Stack
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { CheckCircle, Cancel, Build } from '@mui/icons-material'

const StyledModal = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    boxShadow: '0 4px 20px rgba(255, 255, 255, 0.22)',
    borderRadius: 9,
    border: '1px solid rgba(255, 255, 255, 0.22)',
    background: `linear-gradient(
      to bottom right,
      rgba(71, 150, 199, 0.79) 0%,
      rgba(45, 45, 45, 0.1) 40%,
      rgba(0, 106, 255, 0.13) 60%,
      rgba(0, 69, 173, 0.9) 100%
    )`,
    color: '#f1f1f1ff',
    fontWeight: 600,
    padding: theme.spacing(1),
    backdropFilter: 'blur(25px)',
    backgroundColor: 'rgba(0, 0, 0, 0.31)',
    overflow: 'hidden',
  },
}))

const MetricCard = styled(Paper)(({ theme, severity }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  background: severity === 'error' 
    ? 'rgba(255, 68, 68, 0.1)' 
    : severity === 'success' 
    ? 'rgba(74, 222, 128, 0.1)' 
    : 'rgba(24, 201, 205, 0.1)',
  border: severity === 'error' 
    ? '1px solid #ff4444' 
    : severity === 'success' 
    ? '1px solid #4ade80' 
    : '1px solid #18C9CD',
  backdropFilter: 'blur(10px)',
}))

const ComparisonSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

export default function AccessibilityReportModal({ open, onClose, report }) {
  if (!report) return null

  // Calculate improvement metrics
  const totalBefore = (report.before?.issues?.length || 0)
  const totalAfter = (report.after?.improvements?.length || 0)
  const improvement = totalBefore > 0 ? Math.round(((totalAfter) / totalBefore) * 100) : 0

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="accessibility-report-title"
      aria-modal="true"
      role="dialog"
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle id="accessibility-report-title">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" component="span">
            {report.name}
          </Typography>
          <Chip
            label="Accessibility Report"
            size="small"
            sx={{ bgcolor: '#ffda00', color: '#000000ff' }}
          />
        </Stack>
      </DialogTitle>

      <DialogContent dividers>
        {/* Summary Metrics */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#18C9CD' }}>
            At a Glance
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MetricCard severity="error">
                <Typography variant="h3" sx={{ color: '#ff4444', mb: 1 }}>
                  {totalBefore}
                </Typography>
                <Typography variant="body2">Issues Found</Typography>
              </MetricCard>
            </Grid>
            <Grid item xs={4}>
              <MetricCard severity="success">
                <Typography variant="h3" sx={{ color: '#4ade80', mb: 1 }}>
                  {totalAfter}
                </Typography>
                <Typography variant="body2">Improvements Made</Typography>
              </MetricCard>
            </Grid>
            <Grid item xs={4}>
              <MetricCard>
                <Typography variant="h3" sx={{ color: '#18C9CD', mb: 1 }}>
                  {improvement}%
                </Typography>
                <Typography variant="body2">Improvement</Typography>
              </MetricCard>
            </Grid>
          </Grid>
        </Box>

        {/* Before Section */}
        <ComparisonSection sx={{ bgcolor: 'rgba(255, 68, 68, 0.05)' }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Cancel sx={{ color: '#ff4444' }} />
            <Typography variant="h6" sx={{ color: '#ff4444' }}>
              Issues Identified
            </Typography>
          </Stack>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <List dense>
                {report.before?.issues?.map((issue, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start', py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#ff4444',
                          mt: 1
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ color: '#fff' }}>
                          {issue}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            
            {report.before?.screenshot && (
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '"Before"',
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#ff4444',
                      color: '#fff',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 1
                    }
                  }}
                >
                  <img
                    src={report.before.screenshot}
                    alt={`Before accessibility improvements for ${report.name}`}
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      border: '2px solid #ff4444',
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </ComparisonSection>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* After Section */}
        <ComparisonSection sx={{ bgcolor: 'rgba(74, 222, 128, 0.05)' }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <CheckCircle sx={{ color: '#4ade80' }} />
            <Typography variant="h6" sx={{ color: '#4ade80' }}>
              Improvements Implemented
            </Typography>
          </Stack>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <List dense>
                {report.after?.improvements?.map((improvement, idx) => (
                  <ListItem key={idx} sx={{ alignItems: 'flex-start', py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <CheckCircle sx={{ color: '#4ade80', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body1" sx={{ color: '#fff' }}>
                          {improvement}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            
            {report.after?.screenshot && (
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '"After"',
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#4ade80',
                      color: '#000',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      zIndex: 1
                    }
                  }}
                >
                  <img
                    src={report.after.screenshot}
                    alt={`After accessibility improvements for ${report.name}`}
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      border: '2px solid #4ade80',
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </ComparisonSection>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Testing Methodology */}
        <Box sx={{ mb: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Build sx={{ color: '#18C9CD' }} />
            <Typography variant="h6" sx={{ color: '#18C9CD' }}>
              Testing Methodology
            </Typography>
          </Stack>
          <Paper sx={{ p: 2, bgcolor: 'rgba(24, 201, 205, 0.1)', border: '1px solid #18C9CD' }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Comprehensive accessibility testing using industry-standard tools and manual validation:
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Lighthouse" size="small" sx={{ bgcolor: '#222' }} />
              <Chip label="WAVE DevTools" size="small" sx={{ bgcolor: '#222' }} />
              <Chip label="VoiceOver Screen Reader" size="small" sx={{ bgcolor: '#222' }} />
              <Chip label="VoiceOver" size="small" sx={{ bgcolor: '#222' }} />
              <Chip label="Keyboard Navigation" size="small" sx={{ bgcolor: '#222' }} />
            </Stack>
          </Paper>
        </Box>

        {/* WCAG Focus Areas */}
        {report.focusAreas && report.focusAreas.length > 0 && (
          <Box>
            <Typography variant="h6" gutterBottom sx={{ color: '#18C9CD' }}>
              WCAG 2.1 Success Criteria Addressed
            </Typography>
            <Grid container spacing={1}>
              {report.focusAreas.map((area, idx) => (
                <Grid item xs={12} sm={6} key={idx}>
                  <Paper
                    sx={{
                      p: 1.5,
                      bgcolor: 'rgba(24, 201, 205, 0.05)',
                      border: '1px solid rgba(24, 201, 205, 0.3)',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: '#18C9CD',
                        mr: 1.5,
                        flexShrink: 0
                      }}
                    />
                    <Typography variant="body2">{area}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            bgcolor: '#18C9CD',
            '&:hover': { bgcolor: '#18C9CD', opacity: 0.9 }
          }}
        >
          Close Report
        </Button>
      </DialogActions>
    </StyledModal>
  )
}