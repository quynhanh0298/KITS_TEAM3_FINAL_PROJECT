import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsAStudent from "../../assets/images/as-a-student.svg";
import { Button } from "components/Button/Button";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from "features/auth/authSlice";
import { useLoginMutation } from "features/auth/authApiSlice";


const StyledLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dee4f3;
  .logo {
    padding-top: 81px;
    padding-bottom: 54px;
  }
  .main {
    .as-a-student {
      padding-bottom: 41px;
    }
    padding-left: 151px;
    padding-right: 151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    aspect-ratio: 1;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(42px);
    input.info {
      width: 100%;
      height: 49px;
      flex-shrink: 0;
      border-radius: 15px;
      background: #fff;
      border: 0;
      padding-left: 29px;
      margin-bottom: 44px;
    }
  }
  .remember-me-forgot-password {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  .or-sign-in {
    padding-top: 39px;
    padding-bottom: 32px;
  }
  .login-with-other-method {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const LogIn = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      // Save the JWT token to local storage or a cookie
      console.log(data.token);
      // Redirect or show success message
      navigate("/login-page")
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="FullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="role"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LogIn;
