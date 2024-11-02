import { Box, Typography, Card, Grid } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh', // Full page height
        display: 'flex', // Use flexbox for alignment
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        backgroundImage: 'url("/path/to/your/background/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card
        sx={{
          padding: '80px',
          width: '800px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
          boxShadow: 3,
          marginBottom: '200px',
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: 'white', marginBottom: '30px', fontSize: '36px' }}
        >
          About Evolution
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'white', fontSize: '18px', marginBottom: '20px' }}
        >
          Welcome to Evolution, the next-generation car showroom where innovation meets elegance.
          We are committed to bringing you the latest in electric and hybrid vehicle technology.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}
            >
              Our Vision
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'white', fontSize: '16px' }}
            >
              We believe in a future driven by sustainable mobility, where every journey
              leaves behind only memories, not emissions.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{ color: 'white', fontSize: '24px', marginBottom: '10px' }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'white', fontSize: '16px' }}
            >
              To offer innovative, environmentally friendly vehicles that seamlessly combine
              performance and comfort for every customer.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ color: 'white', fontSize: '24px', marginTop: '20px' }}
            >
              Why Choose Us?
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'white', fontSize: '16px', marginTop: '10px' }}
            >
              - State-of-the-art electric vehicles <br />
              - Unmatched customer service <br />
              - A sustainable vision for the future <br />
              - Flexible financing options <br />
              - A commitment to excellence and innovation
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default About;
