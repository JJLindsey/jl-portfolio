import { Button, Card, CardContent, CardActions, CardMedia, Typography, CardActionArea, Grid } from '@mui/material';
//import { useNavigate } from 'react-router-dom'
import { products } from '../../data/products'
import { CallMade } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { FrostedCard } from '../FrostedCard/FrostedCard'

export default function CaseStudyCard() {
  //const navigate = useNavigate()

  return (
    <Grid container spacing={4} alignItems='flex-start'>
    {/* {products.map((product, index) => (
    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    ))} */}
      {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <FrostedCard
              raised={true}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
                paddingBottom: 2,
                height: 450,
              }}
            >
              <CardMedia
                component="img"
                image={product.logo}
                alt={`Image for ${product.name}`}
                sx={{height: 190, objectFit: 'contain', padding: 1}}
              />
              <CardContent>
                {product.avatar}
                <Typography variant="body2" color='#fff'>
                  {/* {projects.testimonial} */}
                </Typography>
                <Typography variant="h6" align="center" color='#fff'>
                        {product.name}
                </Typography>
                <Typography variant="body1" align="center" color='#fff'>
                      {product.description}
                </Typography>
              </CardContent>
              <CardActions sx={{justifyContent: 'center'}}>
                <Button
                  sx={{color: '#18C9CD'}}
                  variant="outlined"
                  size='small'
                  href={product.url} target="_blank"
                >
                    {product.navigation}
                </Button>
                <Button
                    //href={product.url}
                    component={Link}
                    to={`/products/${product.id}`}
                    endIcon={<CallMade />}
                    sx={{ color: '#18C9CD'}}
                  >
                    view product
                </Button>
              </CardActions>
            </FrostedCard>
          </Grid>
        ))}
    </Grid>
  )
}
