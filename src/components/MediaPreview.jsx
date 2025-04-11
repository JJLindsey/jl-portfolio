import React from 'react'
import { Box, Typography } from '@mui/material'

export default function MediaPreview({ videoUrl, image }) {
     // If there's a video URL, render it first
  if (videoUrl) {
    return (
      <Box sx={{ mb: 4, position: 'relative', paddingTop: '56.25%' }}>
        <iframe
          src={videoUrl}
          title="Project Demo"
          alt={`${videoUrl} preview`}
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

  // otherwise render image
  if (image) {
    return (
      <Box sx={{ mb: 4 }}>
        {/* <Typography variant="h6" gutterBottom>preview</Typography> */}
          <Box>
            <img
              src={image}
              alt='Project preview'
              style={{
                width: '100%',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
          </Box>
      </Box>
    )
  }

  // Fallback message
  return (
    <Typography variant="body2" color="text.secondary">
      No media available for this project.
    </Typography>
  )
}
