import React, { useState } from 'react';
import './ForgotP.css';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate('/');
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className="container">
      <div className="form-box">
        <p className="form-text">
          Don't worry! Enter your email below and we will send you a link to change password.
        </p>
        <form onSubmit={handleSubmit}>
          <input className='forgotinput'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit" className="signin-btn" >
            Submit
          </button>
          <button type="button" className="signup-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpComponent;
