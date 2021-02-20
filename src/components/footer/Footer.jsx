import React from 'react';

import Pixelmate_logo_claim_white from './../../images/logos/Pixelmate_logo_claim_white.svg';

export const Footer = () => {
  return (
    <div>
      <p>© All rights reserved 2013-2019. Pixelmate s.r.o.</p>
      <img
        className="menu-logo__img"
        src={Pixelmate_logo_claim_white}
        alt="Pixelmate logo"
      />
      <a href="#">Zásady ochrany osobních údajů</a>
    </div>
  );
};
