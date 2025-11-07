import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  List,
  ListItemText,
} from '@mui/material'
import {styled} from '@mui/material/styles'

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
    //background: 'linear-gradient(325deg,rgba(5, 66, 70, 0.22) 0%, rgba(6, 32, 67, 0.28) 51%)',
    color: '#f1f1f1ff',
    fontWeight: 600,
    padding: theme.spacing(1),
    backdropFilter: 'blur(25px)',
    backgroundColor: 'rgba(0, 0, 0, 0.31)',
    overflow: 'hidden',
  },
}));

export default function AccessibilityReportModal({ open, onClose, report }) {
  if (!report) return null

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="accessibility-report-title"
      aria-modal="true"
      role="dialog"
      maxWidth="md"
      fullWidth
    >
      <DialogTitle id="accessibility-report-title">
        {report.name} — Accessibility Report
      </DialogTitle>

      <DialogContent divider>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Before
          </Typography>
          <Grid container spacing={1}>
             <Grid item xs={12} md={6}>
              <List>
                {report.before.issues.map((issue, idx) => (
                <ListItemText key={idx}>
                    <Typography variant="h6">{issue}</Typography>
                </ListItemText>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={report.before.screenshot}
                alt={`Before accessibility improvements for ${report.name}`}
                style={{
                  width: '40%',
                  borderRadius: 8,
                  border: '1px solid #ebebebff',
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            After
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                 <List>
                {report.after.improvements.map((improvement, idx) => (
                <ListItemText key={idx}>
                    <Typography variant="h6">{improvement}</Typography>
                </ListItemText>
                ))}
              </List>
            </Grid>
             <Grid item xs={12} md={4}>
              <img
                src={report.after.screenshot}
                alt={`After accessibility improvements for ${report.name}`}
                style={{
                  width: '50%',
                  borderRadius: 8,
                  border: '1px solid #ccc',
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Tools & Tests
          </Typography>
          <Typography variant="body2">
            Lighthouse, Wave DevTools, NVDA / VoiceOver manual screen reader tests,
            and keyboard navigation.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            WCAG Focus Areas
          </Typography>
          <ul>
            {report.focusAreas.map((area, idx) => (
              <li key={idx}>
                <Typography variant="body2">{area}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="secondary">
          Close
        </Button>
      </DialogActions>
    </StyledModal>
  )
}
