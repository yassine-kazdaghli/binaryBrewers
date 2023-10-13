import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider } from "@mui/material/styles";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
         
          label="Email"
          color="secondary"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          
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
    </>
  );
}

export default ContactForm;
