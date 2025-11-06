import { Container, Typography, Box, Divider } from '@mui/material';
//import { useParams } from 'react-router-dom';
import ProductProjectDetails from '../ProductProjectDetails'
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudyPage({productId}) {
  //const { id } = useParams()
  const study = caseStudies.find((item) => item.id === productId)

  if (!study) return <Typography>Case study not found</Typography>

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{study.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {study.type}
      </Typography>
      <Box component="img" src={study.image} alt={study.title} sx={{ width: '100%', mb: 4 }} />
      
      {/* Project Details component */}
      <ProductProjectDetails details={study.details} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Process</Typography>
      {study.map((step, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          <Typography variant="h6">{step.name}</Typography>
          <Typography>{step.description}</Typography>
        </Box>
      ))}

      <Typography variant="h5" gutterBottom>Results</Typography>
      <Typography>{study.solution}</Typography>
    </Container>
  )
}
