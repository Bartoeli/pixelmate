import React from 'react';

import './references.scss';

import loga_header_ct from './../../images/logos/loga_header_ct.png';
import loga_header_deloitte from './../../images/logos/loga_header_deloitte.png';
import loga_header_bosch from './../../images/logos/loga_header_bosch.png';
import narodni_muzeum from './../../images/logos/narodni_muzeum.svg';
import loga_header_cemix from './../../images/logos/loga_header_cemix.png';

export const References = () => {
  return (
    <div className="references">
      <div className="references__logos">
        <div className="references__logo ct">
          <img src={loga_header_ct} alt="CT logo" />
        </div>
        <div className="references__logo deloitte">
          <img src={loga_header_deloitte} alt="Deloitte logo" />
        </div>
        <div className="references__logo bosch">
          <img src={loga_header_bosch} alt="Bosch logo" />
        </div>
        <div className="references__logo muzeum">
          <img src={narodni_muzeum} alt="Národní Muzeum logo" />
        </div>
        <div className="references__logo cemix">
          <img src={loga_header_cemix} alt="Cemix logo" />
        </div>
      </div>
    </div>
  );
};
