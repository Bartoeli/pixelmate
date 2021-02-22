import React from 'react';

import './input.scss';

export const Input = (props) => {
  return (
    <>
      <label className="input">
        {props.popis}
        <input
          className="input__input"
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.setChanged(e.target.value)}
        />
      </label>
    </>
  );
};
