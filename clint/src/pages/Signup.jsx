import React, { useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [userName, setuserName] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()

  const [password, setPassword] = useState()
   

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/signup' , {
      method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body :JSON.stringify({
          userName,
          email, 
          password
        })
      })
      const data = await response.json()
      
      if(data.status === 'ok'){
        navigate('/login')
      }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userName}
            onChange={(e)=>{setuserName(e.target.value)}}
            required
          />
        </div>
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
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="login-prompt">
        <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
