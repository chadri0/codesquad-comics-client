import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer>
          <div className="visit-us-container">
            <h3>VISIT US</h3>
            <p className="footer-address">CodeSquad Comics
              <br/>
              123 Dorchester Avenue
              <br/>
              Boston, MA 02124
            </p>
          </div>
          <div className="index-links-container">
            <h3>LINKS</h3>
            <a href="index.html">Home</a>
            <br/>
            <a href="about.html">About</a>
            <br/>
            <a href="login.html">Login</a>
          </div>
          <div className="follow-us-container">
            <h3>FOLLOW US</h3>
            <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
          </div>
          <div className="product-of-container">
            <h3>A PRODUCT OF</h3>
            <a href="http://www.codesquad.org" target="_blank" rel="noopener noreferrer">
              <img src="./images/CodeSquad-logo.png" alt="codesquad-logo-b" className="codesquad-logo-b"/></a>
          </div>
        </footer>
      </div>
    )
   }

export default Footer;