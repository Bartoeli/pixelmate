import React from 'react';

import { TheMenu } from './theMenu/TheMenu.jsx';
import { MenuLogo } from './menuLogo/MenuLogo.jsx';

import './navBar.scss';

export const NavBar = (props) => {
  return (
    <header className="header">
      <MenuLogo />
      <TheMenu showLPLinks={props.showLPLinks} />
    </header>
  );
};
