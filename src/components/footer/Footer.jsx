import React from 'react';

import './footer.scss';

import Pixelmate_logo_claim_white from './../../images/logos/Pixelmate_logo_claim_white.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__rights">
        © All rights reserved 2013-2019. Pixelmate s.r.o.
      </p>
      <div className="footer__logo">
        <img
          className="footer__logo-img"
          src={Pixelmate_logo_claim_white}
          alt="Pixelmate logo"
        />
      </div>
      <div className="footer__gdpr">
        <a className="footer__gdpr-link" href="#">
          Zásady ochrany osobních údajů
        </a>
      </div>
    </div>
  );
};
