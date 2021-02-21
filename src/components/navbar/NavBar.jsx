import React from 'react';

import { TheMenu } from './theMenu/TheMenu.jsx';
import { MenuLogo } from './menuLogo/MenuLogo.jsx';

import './navBar.scss';

export const NavBar = (props) => {
  return (
    <header className="navBar">
      <MenuLogo />
      <TheMenu showNavLinks={props.showNavLinks} />
    </header>
  );
};
