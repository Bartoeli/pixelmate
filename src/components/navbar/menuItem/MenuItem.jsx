import React from 'react';
import './menuItem.scss';

export const MenuItem = (props) => {
  return (
    <li className="nav__menu-item">
      <a
        href={`#${props.id}`}
        className="menu-item__url"
        onClick={() => props.onSelect()}
      >
        {props.text}
      </a>
    </li>
  );
};
