import React from 'react';

import { NavBar } from '../../components/navbar/NavBar';

import './homepage.scss';

export const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <NavBar showLPLinks={true} />
      </div>
    </>
  );
};
