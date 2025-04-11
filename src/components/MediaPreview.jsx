import React from 'react'
import { Box, Typography } from '@mui/material'

export default function MediaPreview({ videoUrl, screenshots }) {
     // If there's a video URL, render it first
  if (videoUrl) {
    return (
      <Box sx={{ mb: 4, position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src={videoUrl}
          title="Project Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80%',
            height: '100%',
            borderRadius: 8
          }}
        />
      </Box>
    )
  }

  // If there are screenshots
  if (screenshots.length > 0) {
    return (
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Screenshots</Typography>
        {screenshots.map((src, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <img
              src={src}
              alt={`Screenshot ${index + 1}`}
              style={{
                width: '100%',
                maxHeight: 400,
                objectFit: 'cover',
                borderRadius: 8
              }}
            />
          </Box>
        ))}
      </Box>
    );
  }

  // Fallback message
  return (
    <Typography variant="body2" color="text.secondary">
      No media available for this project.
    </Typography>
  )
}
