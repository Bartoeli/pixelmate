import React from 'react';

import './main.scss';
import { Left } from './left/Left';
import { Right } from './right/Right';
import { NavBar } from './../navbar/NavBar.jsx';

export const Main = () => {
  return (
    <>
      <div className="main">
        <NavBar showNavLinks={true} />
        <div className="main__content">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
};
