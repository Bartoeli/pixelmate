import React from 'react';

import loga_header_ct from './../../images/logos/loga_header_ct.png';
import loga_header_deloitte from './../../images/logos/loga_header_deloitte.png';
import loga_header_bosch from './../../images/logos/loga_header_bosch.png';
import narodni_muzeum from './../../images/logos/narodni_muzeum.svg';
import loga_header_cemix from './../../images/logos/loga_header_cemix.png';

export const References = () => {
  return (
    <div className="references">
      <div>
        <img sclassName="references__logo" src={loga_header_ct} alt="CT logo" />
      </div>
      <div>
        <img
          sclassName="references__logo"
          src={loga_header_deloitte}
          alt="Deloitte logo"
        />
      </div>
      <div>
        <img
          sclassName="references__logo"
          src={loga_header_bosch}
          alt="Bosch logo"
        />
      </div>
      <div>
        <img
          sclassName="references__logo"
          src={narodni_muzeum}
          alt="Národní Muzeum logo"
        />
      </div>
      <div>
        <img
          sclassName="references__logo"
          src={loga_header_cemix}
          alt="Cemix logo"
        />
      </div>
    </div>
  );
};
