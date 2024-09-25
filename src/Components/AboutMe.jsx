import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import MyImage from '../assets/cartoonJennWeb.png'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupsIcon from '@mui/icons-material/Groups';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
    title: 'Strategic Thinker',
    description:
      'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
    title: 'Perfomance Building',
    description:
      'Crafting high-performing Frontend components for complex forms, tables, and datagrids to streamline data management and elevate user interactions.',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: '2.5rem', color: '#006aff'}}/>,
    title: 'User Experience',
    description:
      'I translate my visual instincts into intuitive and efficient user experiences, crafting interfaces that are both beautiful and functional.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ fontSize: '2.5rem', color: '#d71920'}}/>,
    title: 'Critical Thinking & Curiosity',
    description:
      'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: '2.5rem', color: '#006aff'}}/>,
    title: 'Collaborative',
    description:
      ' I thrive in collaborative environments to ensure project success. ',
  },
  {
    icon: <QueryStatsRoundedIcon sx={{ fontSize: '2.5rem', color: '#ffda00'}}/>,
    title: 'Empowering Interactions',
    description:
      'I design user interfaces with intuitive navigation, clear information, and captivating visuals. The result? UIs that empower users and deliver a seamless experience.'
  },
]

const FrameRectangle = ({ color, ...props }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '100px',
      height: '100px',
      border: `50px solid ${color}`,
      ...props.sx
    }}
  />
)

export default function About() {
  return (
    <>
    <Box
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'black',
        bgcolor: '#fff',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'left' },
          }}
        >
           <Box sx={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
            <FrameRectangle color="#d71920" sx={{ top: -42, left: -45 }} />
            <FrameRectangle color="#006aff" sx={{ top: 150, left: -45 }} />
            <FrameRectangle color="#ffda00" sx={{ top: 200, left: 150 }} />
            <img src={MyImage} width={300} alt="portrait" style={{ position: 'relative', zIndex: 1 }} />
          </Box>
          {/* <img src={MyImage} width={300} alt="portrait"/> */}
          <Typography variant="h6" sx={{color: 'grey.800', mt: 6}}>
          <p><strong>Visualizing the Future, Building it in Code: </strong>
            As a designer-turned-frontend engineer, I bridge the gap between imagination and reality.</p>
            <p><strong>Fueled by Curiosity, Driven by Impact: </strong>
            A lifelong learner, I'm energized by the power of collaboration. I'm a strategic thinker who builds bridges across teams, uniting them around shared goals. </p>
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                direction="column"
                color="inherit"
                //component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 1,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  background: 'transparent',
                  backgroundColor: 'white',
                  transition: 'box-shadow 0.3s ease-in-out', 
                  "&:hover":{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)' }  
                }}
              >
                <Box>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.700' }}>
                    {item.description}
                  </Typography>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </>
  );
}