import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Style.css";

function Signup() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add sign-up logic here (e.g., form validation, API call)
        navigate('/dashboard'); // Redirect to the dashboard page
    };

    return (
        <div className="signinDiv">
            <div className="signBox">
                <h1 className="signin_head">Helpdesk System</h1>
                <h2 className='signup_head'> Sign up here </h2>
                <form className='signinform' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />
                    <button type="submit" className="signup-button">Sign Up</button>
                    <div className="row">
                        <Link to="/forget-password" className="forgetLink">
                            Forget password
                        </Link>
                        <Link to="/Signin" className="signupLink">
                            Signin
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
