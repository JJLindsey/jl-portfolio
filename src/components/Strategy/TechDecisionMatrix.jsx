import React from 'react'
import { Container, Typography, Chip, Grid, Card, CardContent} from '@mui/material'
import { Clear, DragHandle } from '@mui/icons-material'
import { FrostedCard } from '../FrostedCard/FrostedCard'

export default function TechDecisionMatrix() {
  return (
    <Container>
        <FrostedCard>
        <Typography variant='h4'>Technical Trade-off Decision Matrix</Typography>
        <Typography variant='h5'>
          Balancing user experience, technical constraints, and business goals.
        </Typography>       
        <Grid container spacing={2} sx={{ mt: 2 }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Chip variant='outlined' color='secondary' label='USER IMPACT' size='medium' sx={{ mr: 1 }} />
        <Clear />
        <Chip variant='outlined' color='secondary' label='TECHNICAL DEBT' size='medium' sx={{ mr: 1 }} />
        <Clear />
        <Chip variant='outlined' color='secondary' label='RESOURCE COST' size='medium' sx={{ mr: 1 }} />
        <DragHandle />
        <Chip variant='outlined' label='STRATEGIC SCORE' size='medium' sx={{ ml: 1, backgroundColor: 'accent.main', color: '#fff' }}/>
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} container spacing={2} sx={{ mt: 2 }}>
            <Grid item>
                <Card variant='outlined' sx={{ backgroundColor: 'primary.main' }}>
                    <CardContent>
                        <Typography variant='h5' color={'green'}>High Impact, Low Debt</Typography>
                        <Typography color={'white'}>Priority: Immediate</Typography>
                        <Typography color={'white'}>Action: Fast track development</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant='h5'>High Impact, High Debt</Typography>
                        <Typography>Priority: Strategic</Typography>
                        <Typography>Action: Plan technical foundation first</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card >
                    <CardContent>
                        <Typography variant='h5'>Low Impact, Low Debt</Typography>
                        <Typography>Priority: Backlog</Typography>
                        <Typography>Action: Quick wins when resources allow</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </FrostedCard>
    </Container>
  )
}
