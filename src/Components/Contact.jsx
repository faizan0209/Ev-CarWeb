import { Grid, Typography, Card, TextField, Box, Button, Snackbar, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

function Contact() {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [ph, setPh] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    setSuccessMessage('');


    if (!fname || !email || !ph || !message) {
      console.log("Please fill in all fields.");
      return;
    }

    setIsLoading(true); 

    
    setTimeout(() => {
      console.log("First Name:", fname);
      console.log("Email:", email);
      console.log("Phone:", ph);
      console.log("Message:", message);

    
      setFname('');
      setEmail('');
      setPh('');
      setMessage('');
      setIsLoading(false); 
      setSuccessMessage('Submission successful!'); 
    }, 2000); 
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/path/to/your/background/image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Card
        sx={{
          padding: '80px',
          width: '800px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          boxShadow: 3,
          marginBottom: '200px',
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          align="center"
          sx={{ color: 'white', marginBottom: '30px', fontSize: '36px' }}
        >
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                variant="outlined"
                fullWidth
                name='fName'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
                InputLabelProps={{ style: { color: 'white', fontSize: '18px' } }}
                inputProps={{ style: { color: 'white', fontSize: '18px', padding: '12px' } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email"
                placeholder="Enter Your Email"
                variant="outlined"
                type="email"
                fullWidth
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputLabelProps={{ style: { color: 'white', fontSize: '18px' } }}
                inputProps={{ style: { color: 'white', fontSize: '18px', padding: '12px' } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                placeholder="Enter Phone Number"
                variant="outlined"
                type="number"
                fullWidth
                name='ph'
                value={ph}
                onChange={(e) => setPh(e.target.value)}
                required
                InputLabelProps={{ style: { color: 'white', fontSize: '18px' } }}
                inputProps={{ style: { color: 'white', fontSize: '18px', padding: '12px' } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Message"
                placeholder="Enter Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                InputLabelProps={{ style: { color: 'white', fontSize: '18px' } }}
                inputProps={{ style: { color: 'white', fontSize: '18px', padding: '12px' } }}
              />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: '30px',
                  padding: '15px 40px',
                  fontSize: '20px',
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' },
                }}
                disabled={isLoading} 
              >
                {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>

        
        <Snackbar
          open={!!successMessage}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage('')}
          message={successMessage}
          sx={{
            '& .MuiSnackbarContent-root': {
              backgroundColor: 'green', 
              color: 'white',
              top: '20px',
              position: 'fixed',
              right: '20px',
            },
          }}
        />
      </Card>
    </Box>
  );
}

export default Contact;
