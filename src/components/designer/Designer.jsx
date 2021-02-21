import React from 'react';

import map_pin from './../../images/icons/map_pin.svg';

export const Designer = (props) => {
  return (
    <div>
      <p className="designer__username">{props.username}</p>
      <p className="designer__name">{props.name}</p>
      <p className="designer__email">{props.email}</p>
      <div>
        <img className="designer__pin" src={map_pin} alt="Pixelmate logo" />
        <div>
          <p className="designer__city">{props.city}</p>
          <p className="designer__street">{props.street}</p>
          <p className="designer__citycode">{props.citycode}</p>
        </div>
        <a href="mailto:{props.email}">{props.email}</a>
      </div>
    </div>
  );
};
