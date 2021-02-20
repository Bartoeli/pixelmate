import React from 'react';
import { Link } from 'react-router-dom';

import './menuLogo.scss';
import Pixelmate_logo_claim_white from './../../../images/logos/Pixelmate_logo_claim_white.svg';

export const MenuLogo = () => {
  return (
    <Link to="/" className="nav__menu-logo">
      <img
        className="menu-logo__wht"
        src={Pixelmate_logo_claim_white}
        alt="Pixelmate logo"
      />
    </Link>
  );
};
