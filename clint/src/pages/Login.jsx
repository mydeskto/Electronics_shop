import React, { useState } from 'react';
import './Login.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  const [email, setEmail] = useState()

  const [password, setPassword] = useState()
   

  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    try{
        const response = await axios.post('http://localhost:3000/api/login' ,{
            email: email,
            password: password
        })
        console.log(response.data)
        const token = response.data.token
        // console.log(token)
        localStorage.setItem('token', token)
        if(response.data.status == 'ok'){
            window.location.href = '/'
        }

    }catch(error){
        console.log(`Error in sending request to server `)
    }
    // Handle form submission logic here
  };

  return (
    <div className="signup-container">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
          />
        </div>
        <button type="submit" className="signup-button">Log in</button>
        
      </form>
      <div className="login-prompt">
        <p>Don't have an account?  <Link to="/signup" className="login-link">Signup</Link></p>
      </div>

    </div>
  );
};

export default Login;

