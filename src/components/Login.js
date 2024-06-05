import React from 'react';

function Login({ user, setUser }) {
    const loginSubmit = (e) => {
      e.preventDefault();
      console.log("Login submit handler ran.")
      const formData = new FormData(e.target);
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  };

    // console.log(e.target.value) was returning "undefined" so I scoped the web for a better method to print out the input entries
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries

    return (
      <div>
        <main>
        <h1>LOGIN</h1>
        <form action="#" className="login-form" onSubmit={loginSubmit}>
        <div className="login-field">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="login-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <button type="submit" className="login-submit-button">Submit</button>
        </form>
        </main>
      </div>
    )
   }

export default Login;