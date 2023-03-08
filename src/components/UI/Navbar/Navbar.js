import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>Home</NavLink>
      <NavLink to="/movies" className={css.link}>Movies</NavLink>
    </nav>
  );
};

export default Navbar;


























