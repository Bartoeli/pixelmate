import React, { useState } from 'react';

import { MenuItem } from './../menuItem/MenuItem.jsx';
import { Button } from '../../button/Button.jsx';

import './theMenu.scss';

export const TheMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSelectItem = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <nav className="theMenu-mobile">
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
                  id="designeri"
                  text="Designéři"
                  onSelect={handleSelectItem}
                />
                <MenuItem
                  id="portfolio"
                  text="Portfolio"
                  onSelect={handleSelectItem}
                />
              </>
            )}
            <Button
              className="button--secondary"
              textBtn="Přihlásit se"
              onClick={openModal}
              type="button"
            />
          </ul>
        )}
      </nav>
      <nav className="theMenu-desktop">
        <ul className="theMenu__menu-items theMenu__menu-items--desktop">
          {props.showLPLinks && (
            <>
              <MenuItem
                id="designeri"
                text="Designéři"
                onSelect={handleSelectItem}
              />
              <MenuItem
                id="portfolio"
                text="Portfolio"
                onSelect={handleSelectItem}
              />
            </>
          )}
          <Button
            className="button--secondary"
            textBtn="Přihlásit se"
            onClick={openModal}
            type="button"
          />
        </ul>
      </nav>
    </>
  );
};
