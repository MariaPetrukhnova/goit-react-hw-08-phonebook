import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from 'services/authHook';


const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    </nav>
  );
};

export default Navigation;