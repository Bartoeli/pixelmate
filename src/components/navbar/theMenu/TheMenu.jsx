import React, { useState } from 'react';

import { MenuItem } from './../menuItem/MenuItem.jsx';
import { MenuSignIn } from '../menuSignIn/MenuSignIn.jsx';

import './theMenu.scss';

export const TheMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectItem = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav__theMenu-mobile">
        <button
          className={
            menuOpen
              ? 'theMenu__hamburger theMenu__hamburger--open'
              : 'theMenu__hamburger'
          }
          aria-label="menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menuOpen && (
          <ul className="theMenu__menu-items">
            {props.showLPLinks && (
              <>
                <MenuItem
                  id="aboutMe"
                  text="Designéři"
                  onSelect={handleSelectItem}
                />
                <MenuItem
                  id="projects"
                  text="Portfolio"
                  onSelect={handleSelectItem}
                />
              </>
            )}
            <MenuSignIn />
          </ul>
        )}
      </nav>
      <nav className="theMenu_desktop">
        <ul className="menuItems menuItems-desktop">
          {props.showLPLinks && (
            <>
              <MenuItem
                id="aboutMe"
                text="Designéři"
                onSelect={handleSelectItem}
              />
              <MenuItem
                id="projects"
                text="Portfolio"
                onSelect={handleSelectItem}
              />
            </>
          )}
          <MenuSignIn />
        </ul>
      </nav>
    </>
  );
};
