import React, { FC, useState, useEffect } from 'react';
import { Navbar as Navigation, Nav } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';

import * as routes from 'src/constants/routes';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import EmergencyButton from 'src/components/Buttons/EmergencyButton';
import NavItem from './NavItem';

import i18n from '../../i18n';

interface INavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<INavbarProps> = props => {
  const { toggleSidebar } = props;
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname;
  const [language, setLanguage] = useState('en');
  const interLang = i18n();
  const { navBar } = interLang;

  const setLanguagePath = (lang: string) => {
    setLanguage(lang);
    history.push(location.pathname + `?lang=${lang}`);
  };

  return (
    <React.Fragment>
      <Navigation collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Link to={routes.DASHBOARD}>
          <Navigation.Brand className="font-weight-bold">
            <span className="mr-2">nCOVID</span>
            <span>{navBar.Nepal}</span>
          </Navigation.Brand>
        </Link>

        {/* language */}
        <div className="lang mobile-flag">
          <label htmlFor="np-lang" className={language === 'np' ? 'active' : ''}>
            <input
              type="radio"
              id="np-lang"
              onClick={() => setLanguagePath('np')}
              name="language"
              value="np"
              checked={language === 'np'}
            />
            <img src="/images/nepal.png" className="mx-1" /> {navBar.NEP}
          </label>

          <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
            <input
              type="radio"
              id="en-lang"
              onClick={() => setLanguagePath('en')}
              name="language"
              value="en"
              checked={language === 'en'}
            />
            {navBar.ENG} <img src="/images/english.png" className="mx-1" />
          </label>
        </div>

        <Navigation.Toggle aria-controls="responsive-navbar-nav" />

        <Navigation.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem title={navBar.Home} to={routes.DASHBOARD} active={routes.DASHBOARD === currentPath} />
            <NavItem title={navBar.Symptoms} to={routes.SYMPTOMS} active={routes.SYMPTOMS === currentPath} />
          </Nav>

          <Nav>
            {/* <TransparentButton text={'Covid-19 Cases'} handleClick={() => ({})} /> */}
            <EmergencyButton text={navBar.EmergencyContact} handleClick={toggleSidebar} />

            {/* language */}
            <div className="lang menu-flag">
              <label htmlFor="np-lang" className={language === 'np' ? 'active' : ''}>
                <input
                  type="radio"
                  id="np-lang"
                  onClick={() => setLanguage('np')}
                  name="language"
                  value="np"
                  checked={language === 'np'}
                />
                <img src="/images/nepal.png" className="mx-1" /> {navBar.NEP}
              </label>

              <label htmlFor="en-lang" className={language === 'en' ? 'active' : ''}>
                <input
                  type="radio"
                  id="en-lang"
                  onClick={() => setLanguage('en')}
                  name="language"
                  value="en"
                  checked={language === 'en'}
                />
                {navBar.ENG} <img src="/images/english.png" className="mx-1" />
              </label>
            </div>
          </Nav>
        </Navigation.Collapse>
      </Navigation>
    </React.Fragment>
  );
};

export default Navbar;
