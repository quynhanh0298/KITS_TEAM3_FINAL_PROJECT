import React, { useState } from 'react';
import { selectCurrentTokenr, setCredentials } from "features/auth/authSlice"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");


  const handleAddToAuth = (user,token) => {
    const credent = {
      user: user,
      accessToken: token
    }
    dispatch(setCredentials(credent));
    navigate("/our-courses");

};

  

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          "Content-Type":"application/json",
      },
        body: JSON.stringify({
                email: mail,
                password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed: Invalid credentials');
      }



      const data = await response.json();

      

      // Save the JWT token to local storage or a cookie
      localStorage.setItem('token', data.token);
      console.log(data.token);

      handleAddToAuth(mail,data.token)
      // Redirect to the home/dashboard page after successful login
      // You can use React Router's history.push('/home') or similar
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="mail" value={mail} onChange={ (e) => setMail(e.target.value) }/>
            <br/>
            <input type="password" placeholder="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
            <br/>
            <button id="submit_button" onClick={ (e) => handleLoginSubmit(e) }>Sign up</button>
            <br/>
            <Link to="/register">
            <button id="register-button" >Register</button>
            </Link>
        </div>
  );
};

export default LoginPage;