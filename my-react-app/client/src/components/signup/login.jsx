import React, { useState } from "react";
import './login.css'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import * as authService from "../../services/authService"; // Import all functions from authService

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // Changed variable name to match the state variable
  const [email, setEmail] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate(); // Get the navigate function

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSignup = async () => {
    
    try {
      console.log('Signup data:', registerUsername, password, fullName, email);
      // Create a signupData object with user's sign-up data
      const response = await authService.signup(
        registerUsername,
        password,
        fullName,
        email
      );

      // Check if sign-up was successful
      if (response.message === "User registered successfully") {
        // Automatically log in the user after sign-up
        await handleLogin();
      }navigate("/");
    } catch (error) {
      console.error(error);
      // Handle sign-up error here
    }
  };

  const handleLogin = async () => {
    try {
      // Call the login function from your authService
      const response = await authService.login(loginUsername, loginPassword);
      const token = response.token;

      // Store the JWT token in a cookie with a 1-hour expiration
      Cookies.set("token", token, { expires: 1 / 24 });

      console.log("Logged in successfully", response);
      navigate("/");
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="login">
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 m-auto">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
          style={{backgroundColor:"white",fontSize:"1.05rem"}}
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p style={{ color: "white", fontSize: "1.1rem" }}>Sign in with:</p>
            {/* ... */}
          </div>

          <MDBInput
          
            wrapperClass="mb-4"
            label="Username"
            id="loginUsername"
            type="text"
            style={{ color: "black", fontSize: "1.1rem" ,backgroundColor:"white" }}
            value={loginUsername} // Bind the input value to the username state variable
            onChange={(e) => setLoginUsername(e.target.value)} // Update the username state on change
          />
          <MDBInput
            style={{backgroundColor:"white"}}
            wrapperClass="mb-4"
            label="Password"
            id="loginPassword"
            type="password"
            value={loginPassword} // Bind the input value to the password state variable
            onChange={(e) => setLoginPassword(e.target.value)} // Update the password state on change
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
              color="white"
            />
          
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleLogin} color="white">
            Sign in
          </MDBBtn>
          <p
            className="text-center"
            style={{ color: "whitesmoke", fontSize: "1.5rem" }}
          >
            Not a member?{" "}
            <a href="#!" style={{ color: "whitesmoke", fontSize: "1.5rem" }}>
              Register
            </a>
          </p>
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className="text-center mb-3">
            <p>Sign un with:</p>
            {/* ... */}
          </div>

          <MDBInput
          style={{backgroundColor:"white"}}
            wrapperClass="mb-4"
            label="Full Name"
            id="form1-name"
            type="text"
            color="white"
            value={fullName} // Bind the input value to the fullName state variable
            onChange={(e) => setFullName(e.target.value)} // Update the fullName state on change
          />
          <MDBInput
          style={{backgroundColor:"white"}}
            wrapperClass="mb-4"
            label="Username"
            id="register-username"
            type="text"
            value={registerUsername}// Bind the input value to the username state variable
            onChange={(e) => setRegisterUsername(e.target.value)} // Update the username state on change
          />
          <MDBInput
          style={{backgroundColor:"white"}}
            wrapperClass="mb-4"
            label="Email"
            id="form1-email"
            type="email"
            value={email} // Bind the input value to the email state variable
            onChange={(e) => setEmail(e.target.value)} // Update the email state on change
          />
          <MDBInput
          style={{backgroundColor:"white"}}
            wrapperClass="mb-4"
            label="Password"
            id="form1-password"
            type="password"
            value={password} // Bind the input value to the password state variable
            onChange={(e) => setPassword(e.target.value)} // Update the password state on change
            
          />

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I have read and agree to the terms"
            />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleSignup}>
            Sign up
          </MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
    </div>
  );
}
