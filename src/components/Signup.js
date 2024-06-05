import React from 'react';

function Signup({ user, setUser }) {
    const signupSubmit = (e) => {
      e.preventDefault();
        console.log("Signup submit handler ran.")
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
        <h1>SIGN UP</h1>
        <form action="#" className="signup-form" onSubmit={signupSubmit}>
            <div className="signup-field">
                <label htmlFor="first-name">First name:</label>
                <input type="text" name="first-name" id="first-name" required/>
            </div>
            <div className="signup-field">
                <label htmlFor="last-name">Last name:</label>
                <input type="text" name="last-name" id="last-name" required/>
            </div>
            <div className="signup-field">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required/>
            </div>
            <div className="signup-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <div className="signup-btn">
                <button type="submit" className="signup-button">Sign Up</button>
            </div>
        </form>
        </main>
      </div>
    )
   }

export default Signup;