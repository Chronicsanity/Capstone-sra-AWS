import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
  
const Navbar = () => {
  return (

      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>Home</NavLink>
          <NavLink to="/admin" activeStyle>Admin</NavLink>
          <NavLink to="/caller" activeStyle>Caller</NavLink>
          <NavLink to="/sign-up" activeStyle>Sign Up</NavLink>
          <NavLink to="/Login" activeStyle>Sign In</NavLink>
          <NavLink to="/sra_root" activeStyle>Root</NavLink>
        </NavMenu>
      </Nav>
   
  );}

  
export default Navbar;