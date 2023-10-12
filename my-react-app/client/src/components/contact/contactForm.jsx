import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../nav/iconTheme.js"


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
    <TextField
    focused
      label="Name"
      variant="outlined"
      fullWidth
      name="name"
      value={formData.name}
      onChange={handleChange}
      margin="normal"
     
    />
    <TextField
    focused
      label="Email"
      variant="outlined"
      fullWidth
      name="email"
      value={formData.email}
      onChange={handleChange}
      margin="normal"
      
    />
    <TextField
    focused
      
      label="Message"
      variant="outlined"
      fullWidth
      multiline
      rows={4}
      name="message"
      value={formData.message}
      onChange={handleChange}
      margin="normal"
      sx={{ color: 'white' }}
     
    />
    <Button
      type="submit"
      variant="contained"
      color="warning"
      fullWidth
      startIcon={<SendIcon />}
      // sx={{ color: 'black' }}
    >
      Submit
    </Button>
  </form>
    </Container>
    </ThemeProvider>
  );
}

export default ContactForm;