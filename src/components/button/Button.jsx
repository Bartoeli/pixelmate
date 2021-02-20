import React from 'react';
import './button.scss';

export const Button = (props) => {
  const className =
    typeof props.className !== 'undefined'
      ? props.className
      : 'button--primary';

  const typeBtn = typeof props.type !== 'undefined' ? props.type : 'button';

  const onClick =
    typeof props.onClick !== 'undefined' ? props.onClick : () => {};

  return (
    <button
      className={`button ${className}`}
      onClick={() => onClick()}
      type={typeBtn}
    >
      {props.textBtn}
    </button>
  );
};
