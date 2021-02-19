import React from 'react';
import './menuItem.css';

export const MenuItem = (props) => {
  return (
    <li className="menuItem">
      <a
        href={`#${props.id}`}
        className="menu-url"
        onClick={() => props.onSelect()}
      >
        {props.text}
      </a>
    </li>
  );
};
