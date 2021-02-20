import React from 'react';

export const Input = (props) => {
  return (
    <>
      <label className="input__label">
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
