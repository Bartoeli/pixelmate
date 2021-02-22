import React from 'react';

import './checkbox.scss';
import Rectangle from './../../../images/icons/Rectangle.svg';

export const Checkbox = (props) => {
  return (
    <>
      <label className="checkbox">
        <img className="checkbox__icon" src={Rectangle} alt="checkbox" />

        <input
          className="checkbox__input"
          type="checkbox"
          checked={props.checked}
          onChange={(e) => props.setChecked(e.target.checked)}
        />
        {props.text}
      </label>
    </>
  );
};
