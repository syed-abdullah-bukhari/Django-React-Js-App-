import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className='Login-Form' >
            <h2>Login</h2>

           <div className="input-box">
            <input type="text" placeholder='Username' required />
           </div>

           <div className="input-box">
            <input type="text" placeholder='Password' required />
           </div>

           <div className="remember-forget">
            <label><input type="checkbox" />Remembe me?</label>
            <a href="#">Forgot Password?</a>  <br />
            
            <button type="submit">Login</button>

            <div className="register-link">
                <h4>Don't Have an account? <a href="#">Register</a></h4>
            </div>

           </div>
        </div>
    );
};

export default LoginForm;