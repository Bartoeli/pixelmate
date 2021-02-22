import React from 'react';
import { useHistory } from 'react-router-dom';

import './designer.scss';

import { Button } from './../button/Button.jsx';

import map_pin from './../../images/icons/map_pin.svg';

export const Designer = (props) => {
  const { push } = useHistory();
  return (
    <div className="designer">
      <p className="designer__username">{props.username}</p>
      <p className="designer__name">{props.name}</p>
      <p className="designer__email">{props.email}</p>
      <div>
        <img className="designer__pin" src={map_pin} alt="Pixelmate logo" />
        <div>
          <p className="designer__city">{props.city}</p>
          <p className="designer__street">{props.street}</p>
          <p className="designer__apt">{props.suite}</p>
          <p className="designer__zipcode">{props.zipcode}</p>
          <p className="designer__city-address">{props.city}</p>
        </div>
        <a href="mailto:{props.email}">{props.email}</a>
      </div>
      <div>
        <Button
          className="button--secondary-blue"
          textBtn="Zobrazit profil"
          onClick={() => push(`/detail/${props.key}`)}
          type="button"
        />
      </div>
    </div>
  );
};
