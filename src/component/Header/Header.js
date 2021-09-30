import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <NavLink    activeStyle={{
    fontWeight: "bold",
    color: "white",
    backgroundColor:"blue",

  }}
   className="links" to="/about">About Us</NavLink > <br />
           <NavLink    activeStyle={{
    fontWeight: "bold",
    color: "white",
    backgroundColor:"blue",
  }}
   className="links" to="/features">Features</NavLink ><br />
           <NavLink    activeStyle={{
    fontWeight: "bold",
    color: "white",
    backgroundColor:"blue",
  }}
   className="links" to="/friends">Friends</NavLink >
        </div>
    );
};

export default Header;