import React from 'react';

import { Main } from '../../components/main/Main';

import './homepage.scss';
import { References } from '../../components/references/References';
import { About } from '../../components/about/About';
import { Footer } from '../../components/footer/Footer';

export const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Main />
        <References />
        <About />
        <Footer />
      </div>
    </>
  );
};
