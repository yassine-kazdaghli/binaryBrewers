import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../contact/contactForm.css"

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      backgroundColor:'white'
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: "white", // Label color
        
        "&$focused": {
          color: "white" // Label color when focused
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "white" // Border color on hover
        },
        "&$focused $notchedOutline": {
          borderColor: "white" // Border color when focused
        }
      },
      input: {
        color: "white", // Input text color
        "&::placeholder": {
          color: "white", // Placeholder color
          opacity: 1 // This is important to make sure the placeholder appears as expected
        }
      },
      notchedOutline: {
        borderColor: "white" // Default border color
      }
    }
  }
});





function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      const response = await axios.post("http://localhost:5002/api/contact", formData);

      if (response.status === 201) {
        console.log("Form submitted successfully:", response.data);
        setSubmitSuccess(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form:", response.data);
        setSubmitError(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      setSubmitError(true);
    }
  };

  return (
    <div className="contactForm">
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
       

        {submitSuccess && <p>Thank you! Your message has been sent.</p>}
        {submitError && <p>Oops! There was an error submitting your message. Please try again later.</p>}

        <form onSubmit={handleSubmit}>
        <TextField
  label="Name"
  style={{backgroundColor:"white", borderRadius:"5px"}}
  variant="outlined"
  fullWidth
  name="name"
  value={formData.name}
  onChange={handleChange}
  margin="normal"
  InputProps={{ placeholder: 'Enter your name' }} // Example placeholder
/>

<TextField
  label="Email"
  style={{backgroundColor:"white", borderRadius:"5px"}}
  variant="outlined"
  fullWidth
  name="email"
  value={formData.email}
  onChange={handleChange}
  margin="normal"
  InputProps={{ placeholder: 'Enter your email' }} // Example placeholder
/>

<TextField
  label="Message"
  color="primary"
  variant="outlined"
  fullWidth
  multiline
  rows={4}
  name="message"
  value={formData.message}
  onChange={handleChange}
  margin="normal"
  style={{backgroundColor:"white" , borderRadius:"5px"}}
  InputProps={{ placeholder: 'Enter your message' }} // Example placeholder
/>
          <Button
          style={{backgroundColor:"white" , borderRadius:"5px"}}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<SendIcon />}

          >
            Submit
          </Button>
        </form>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default ContactForm;


