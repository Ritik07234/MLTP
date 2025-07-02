import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Style.css";

function Signin() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Add validation or authentication logic here if needed
        navigate('/dashboard'); // Redirect to the dashboard page
    };

    return (
        <div className="signinDiv">
            <div className="signBox">
                <h1 className="signin_head">Helpdesk System</h1>
                <form className='signinform' onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                    <div className="row">
                        <Link to="/forget-password" className="forgetLink">
                            Forgot password
                        </Link>
                        <Link to="/Signup" className="signupLink">
                            Signup
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;

