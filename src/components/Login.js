import React from 'react';

const Login = ({ user, setUser }) => {
    return (
      <div>
        <main>
        <h1>LOGIN</h1>
        <form action="#" className="login-form">
            <div className="login-field">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className="login-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="" id="" placeholder="Password" required/>
            </div>
        </form>
        <button className="login-submit-button">Submit</button>
    </main>
      </div>
    )
   }

export default Login;