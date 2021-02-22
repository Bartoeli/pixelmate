import React from 'react';
import { useHistory } from 'react-router-dom';

import './about.scss';

import { Button } from './../button/Button.jsx';
import computer from './../../images/photos/computer.png';

export const About = () => {
  const { push } = useHistory();

  return (
    <div className="about">
      <div className="about__img">
        <img
          className="about__img-computer"
          src={computer}
          alt="computer illustration"
        />
      </div>
      <p className="about__team">Poznejte Pixelmate tým</p>
      <h2 className="about__header">Jsme mladí a hraví, startupy nás baví</h2>
      <div className="about__paragraph">
        <p className="about__paragraph-a">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque arcu. Ut tempus purus at lorem.
          Nam quis nulla. Aenean placerat. Mauris suscipit, ligula sit amet
          pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel
          metus. Fusce tellus. Praesent id justo in neque elementum ultrices.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam.
        </p>
        <p className="about__paragraph-b">
          architecto beatae vitae dicta sunt explicabo. Nulla est. Curabitur
          bibendum justo non orci. Aenean placerat. Praesent in mauris eu tortor
          porttitor accumsan. Maecenas libero. Phasellus enim erat, vestibulum
          vel, aliquam a, posuere eu, velit. Etiam commodo dui eget wisi. Fusce
          dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nemo enim
          ipsam voluptatem.
        </p>
      </div>
      <div className="about__button">
        <Button
          className="button--primary"
          textBtn="Co dalšího se šušká"
          onClick={() => push('/list')}
          type="button"
        />
      </div>
    </div>
  );
};
