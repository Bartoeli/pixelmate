import React from 'react';

export const Checkbox = (props) => {
  return (
    <>
      <label className="checkbox__label">
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
