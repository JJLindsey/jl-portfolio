import { Container, Typography, Box, Divider } from '@mui/material';
//import { useParams } from 'react-router-dom';
import ProductProjectDetails from '../ProductProjectDetails'
import { products } from '../../data/products';

export default function CaseStudyPage({productId}) {
  //const { id } = useParams()
  const product = products.find((product) => product.id === productId)

  if (!product) return <Typography>Case study not found</Typography>

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {product.type}
      </Typography>
      <Box component="img" src={product.image} alt={product.title} sx={{ width: '100%', mb: 4 }} />
      
      {/* Project Details component */}
      <ProductProjectDetails details={product.details} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom>Process</Typography>
      {product.map((step, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          <Typography variant="h6">{step.name}</Typography>
          <Typography>{step.description}</Typography>
        </Box>
      ))}

      <Typography variant="h5" gutterBottom>Results</Typography>
      <Typography>{product.solution}</Typography>
    </Container>
  )
}
