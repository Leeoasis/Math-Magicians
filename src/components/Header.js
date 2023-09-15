import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quote">Quote</NavLink>
      </ul>
    </nav>
  );
}
