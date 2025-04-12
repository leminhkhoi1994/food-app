import React, { memo, useState } from 'react';
import Mountain from 'assets/icons/Mountains.svg';
import Crosshair from 'assets/icons/Crosshair.svg';
import Fishing from 'assets/icons/Fishing.svg';
import ArrowUpRight from 'assets/icons/ArrowUpRight.svg';
import { useTranslation } from 'react-i18next';
import { Button, Select } from 'antd';

import './styles.scss';
import { AlignJustify, X } from 'lucide-react';
import { getPageDataRequest } from 'slices/pageData';
import { useDispatch } from 'react-redux';

const Header = ({ headerMenu }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeLanguage = value => {
    const language = value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    dispatch(getPageDataRequest(language));
  };

  return (
    <div className="header-container">
      <div className="header-fix">
        <header className="header">
          <div className="logo">LOGO SAMPLE</div>

          <nav className="nav-menu">
            {headerMenu.map((item, key) => {
              return (
                <a key={key} href="/" className="nav-link">
                  {item}
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            <Select
              defaultValue="en"
              style={{ width: 60 }}
              onChange={handleChangeLanguage}
              options={[
                { value: 'en', label: 'En' },
                { value: 'fr', label: 'Fr' },
              ]}
            />

            <button className="icon-button">
              <img
                src={Mountain}
                alt="Mountain Icons"
                className="action-image"
              />
            </button>
            <button className="icon-button">
              <img
                src={Fishing}
                alt="Mountain Icons"
                className="action-image"
              />
            </button>
            <button className="icon-button">
              <img
                src={Crosshair}
                alt="Mountain Icons"
                className="action-image"
              />
            </button>
            <button className="action-button">
              <img
                src={ArrowUpRight}
                alt="Mountain Icons"
                className="action-image"
              />
            </button>
          </div>

          <div className="hamburger-menu">
            {isOpen && (
              <div onClick={toggleMenu}>
                <AlignJustify />
              </div>
            )}
            {!isOpen && (
              <div onClick={toggleMenu}>
                <X />
              </div>
            )}
          </div>
        </header>
        {!isOpen && (
          <div className="nav-menu-mobile">
            <div className="nav-link-mobile">
              <Select
                defaultValue="en"
                style={{ width: 60 }}
                onChange={handleChangeLanguage}
                options={[
                  { value: 'en', label: 'En' },
                  { value: 'fr', label: 'Fr' },
                ]}
              />
            </div>

            {headerMenu.map((item, key) => {
              return (
                <div key={key} className="nav-link-mobile">
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="group-icons">
          <img src={Mountain} className="icon" />
          <img src={Fishing} className="icon" />
          <img src={Crosshair} className="icon" />
        </div>
    </div>
  );
};

Header.propTypes = {};

export default memo(Header);
