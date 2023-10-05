// components/Navbar.js
import React from "react";
import {
  NavbarContainer,
  NavLogo,
  NavLinks,
  NavLink,
} from "./NavbarComponents";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo to="/">MyApp</NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/carrito">Carrito</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
