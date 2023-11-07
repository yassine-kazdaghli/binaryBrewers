import React, { useState } from 'react';
import './login.css';
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
} from 'mdb-react-ui-kit';
import * as authService from '../../services/authService'; // Make sure this path is correct

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

export default function Login() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    registerUsername: '',
    loginUsername: '',
    loginPassword: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const { setCurrentUser, setToken } = useAuth();

  const navigate = useNavigate();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSignup = async () => {
    try {
      const response = await authService.signup(
        formData.registerUsername,
        formData.password,
        formData.fullName,
        formData.email
      );
      if (response.message === 'User registered successfully') {
        await handleLogin(formData.registerUsername, formData.password);
        navigate('/');
      } else {
        setMessage(response.message || 'Signup failed');
      }
    } catch (error) {
      setMessage(error.message || 'Signup failed');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await authService.login(formData.loginUsername, formData.loginPassword);
      if (response && response.token) {
        setToken(response.token); // Store token in AuthContext
        setCurrentUser(response.user); // Assuming response contains user info
        Cookies.set('token', response.token, { expires: 1 / 24 });
        navigate('/');
      } else {
        setMessage(response.message || 'Login failed');
      }
    } catch (error) {
      setMessage(error.message || 'Login failed');
    }
  };

  return (
    <div className="login">
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 m-auto">
        <MDBTabs pills justify className="mb-3 d-flex flex-row justify-content-between">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('tab1')}
              active={justifyActive === 'tab1'}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick('tab2')}
              active={justifyActive === 'tab2'}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        {message && <div className="text-center text-danger mb-3">{message}</div>}

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === 'tab1'}>
            <MDBInput
              className="mb-4"
              label="Username"
              type="text"
              value={formData.loginUsername}
              onChange={(e) => updateFormData('loginUsername', e.target.value)}
            />
            <MDBInput
              className="mb-4"
              label="Password"
              type="password"
              value={formData.loginPassword}
              onChange={(e) => updateFormData('loginPassword', e.target.value)}
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            </div>

            <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
              Sign in
            </MDBBtn>

            <p className="text-center">
              Not a member? <a href="#!" onClick={() => handleJustifyClick('tab2')}>Register</a>
            </p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === 'tab2'}>
            <MDBInput
              className="mb-4"
              label="Full Name"
              type="text"
              value={formData.fullName}
              onChange={(e) => updateFormData('fullName', e.target.value)}
            />
            <MDBInput
              className="mb-4"
              label="Username"
              type="text"
              value={formData.registerUsername}
              onChange={(e) => updateFormData('registerUsername', e.target.value)}
            />
            <MDBInput
              className="mb-4"
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
            />
            <MDBInput
              className="mb-4"
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
            />

            <MDBBtn className="mb-4 w-100" onClick={handleSignup}>
              Register
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
}
