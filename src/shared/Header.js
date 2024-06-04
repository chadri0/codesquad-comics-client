import React from 'react';

const Header = ({ user, setUser }) => {
    return (
      <div>
        <header>
        <nav>
            <a href="#"><img src="./images/CodeSquad-Comics-logo.png" alt="codesquad-comics-logo" className="codesquad-comics-logo"/></a>
            <ul className="navbar-list">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
            <i className="fa-solid fa-bars fa-lg"></i>
        </nav>
        </header>
      </div>
    )
   }

export default Header;