import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Modal, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import img1 from './Assets/OIP.jpeg';
import img2 from './Assets/th.jpeg';
import img3 from './Assets/img5.jpeg';
import img4 from './Assets/img6.jpeg';

const cars = [
  { 
    id: 1, 
    name: 'Model X', 
    description: 'An all-electric SUV with exceptional performance.', 
    image: img1, 
    price: '€75,000' 
  },
  { 
    id: 2, 
    name: 'Model S', 
    description: 'Luxury sedan with unparalleled acceleration.', 
    image: img3, 
    price: '€85,000' 
  },
  { 
    id: 3, 
    name: 'Model 3', 
    description: 'Affordable electric vehicle for the modern world.', 
    image: img4, 
    price: '€40,000' 
  },
  { 
    id: 4, 
    name: 'Model Y', 
    description: 'Versatile electric crossover with great range.', 
    image: img2, 
    price: '€65,000' 
  },
];

function Collection() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleViewDetails = (car) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCar(car);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  };

  const handleClose = () => {
    setSelectedCar(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', 
        backgroundImage: 'url("/path/to/your/background/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px',
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: 'white', marginBottom: '50px', fontSize: '36px' }}
      >
        Our Collection
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
            <Card sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={car.image}
                alt={car.name}
              />
              <CardContent>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  {car.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', marginTop: '10px' }}>
                  {car.description}
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', marginTop: '10px' }}>
                  Price: {car.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" sx={{ width: '100%' }} onClick={() => handleViewDetails(car)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Car Details */}
      <Modal open={Boolean(selectedCar)} onClose={handleClose}>
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Full height
          }}
        >
          <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 2,
            maxWidth: '500px', // Set max width for the modal
            width: '90%', // Responsive width
            textAlign: 'center', // Center text
          }}>
            {loading ? (
              <CircularProgress />
            ) : (
              selectedCar && (
                <>
                  <Typography variant="h4">{selectedCar.name}</Typography>
                  <CardMedia
                    component="img"
                    height="200"
                    image={selectedCar.image}
                    alt={selectedCar.name}
                    sx={{ margin: '20px 0' }} // Add margin for spacing
                  />
                  <Typography variant="body1">
                    {selectedCar.description}
                  </Typography>
                  <Typography variant="h5" sx={{ marginTop: '10px' }}>
                    Price: {selectedCar.price}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ marginTop: '20px' }} onClick={handleClose}>
                    Close
                  </Button>
                </>
              )
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Collection;
