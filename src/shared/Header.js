import React from 'react';
import { useNavigate, Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`http://localhost:8080/logout`)
    .then((response) => response.json())
    .then((result) => {
      console.log("result :>>", result);
      localStorage.removeItem("user");
      setUser({});
      navigate("/");
    })
    .catch((error) => {
      console.log("error :>>", error);
      navigate("/admin");
    });
  };

    return (
      <div>
        <header>
        <nav className="nav-container">
          <Link to="/" className="nav-logo-container">
            <img
              className="nav-logo"
              src="/images/CodeSquad-Comics-logo.png"
              alt="CodeSquad Comics Logo"
            />
          </Link>
          <ul className="navbar" id="nav-menu">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/signup">SIGNUP</Link>
            </li>
            {user.username ? (
              <>
                <li>
                  <Link to="/admin">ADMIN</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>LOGOUT</a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            )}
          </ul>
        </nav>
        </header>
      </div>
    )
}

export default Header;