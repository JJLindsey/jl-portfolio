import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

export default function ThreeSixtySessions() {
  return (
    <div>
      <Grid>
        <Typography>Project Details</Typography>
        <Grid item>
          <Typography>360 Sessions - Atlanta-based Music Producer</Typography>
        </Grid>
        <Grid item>
          <Typography>Development</Typography>
          <Card>
            {/*project overview, tasks, what I solved */}
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
