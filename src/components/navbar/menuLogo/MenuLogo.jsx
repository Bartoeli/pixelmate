import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './menuLogo.scss';
import Pixelmate_logo_claim_white from './../../../images/logos/Pixelmate_logo_claim_white.svg';
import Pixelmate_logo_claim_black from './../../../images/logos/Pixelmate_logo_claim_black.svg';

export const MenuLogo = () => {
  const location = useLocation();

  return (
    <Link to="/" className="menu-logo">
      {location.pathname === '/' ? (
        <img
          className="menu-logo__img"
          src={Pixelmate_logo_claim_white}
          alt="Pixelmate logo"
        />
      ) : (
        <img
          className="menu-logo__img"
          src={Pixelmate_logo_claim_black}
          alt="Pixelmate logo"
        />
      )}
    </Link>
  );
};
