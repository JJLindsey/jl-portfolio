import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Adaptable performance',
    description:
      'I go beyond the immediate task, fostering understanding of an organization\'s broader objectives and ensuring my work aligns with them.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Built to last',
    description:
      'Experience unmatched durability that goes above and beyond with lasting investment.',
  },
  {
    icon: <DesignServicesIcon />,
    title: 'Great user experience',
    description:
      'I translate my visual instincts into intuitive and efficient user experiences, crafting interfaces that are both beautiful and functional.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Critical Thinking & Curiosity',
    description:
      'My critical thinking and insatiable curiosity fuel my desire to learn new skills and tackle challenging projects, constantly pushing the boundaries of what is possible.',
  },
  {
    icon: <GroupsIcon />,
    title: 'Collaborative',
    description:
      ' I thrive in collaborative environments to ensure project success. ',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Empowering Interactions',
    description:
      'I design user interfaces with intuitive navigation, clear information, and captivating visuals. The result? UIs that empower users and deliver a seamless experience.'
  },
];

export default function Highlights() {
  return (
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
          position: 'relative',
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
          <Typography component="h2" variant="h4">
            About
          </Typography>
          <img src={MyImage} width={400} alt="portrait"/>
          <Typography variant="h6" sx={{ color: 'black' }}>
          <p><strong>Visualizing the Future, Building it in Code: </strong>
            As a designer-turned-frontend engineer, I bridge the gap between imagination and reality.</p>
            <p><strong>Fueled by Curiosity, Driven by Impact: </strong>
            A lifelong learner, I'm energized by the power of collaboration. I'm a strategic thinker who builds bridges across teams, uniting them around shared goals. </p>
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  background: 'transparent',
                  backgroundColor: 'white',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}