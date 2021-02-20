import React from 'react';

import './main.scss';
import { Left } from './left/Left';
import { Right } from './right/Right';

export const Main = () => {
  return (
    <>
      <div>
        <Left />
        <Right />
      </div>
    </>
  );
};
