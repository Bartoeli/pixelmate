import React from 'react';
import './menuItem.scss';
import { useLocation } from 'react-router-dom';

export const MenuItem = (props) => {
  const location = useLocation;

  return (
    <li className="menu-item">
      <a
        href={`#${props.id}`}
        className={
          location.pathname === '/'
            ? 'menu-item__url menu-item__url--white'
            : 'menu-item__url menu-item__url--black'
        }
        onClick={() => props.onSelect()}
      >
        {props.text}
      </a>
    </li>
  );
};
