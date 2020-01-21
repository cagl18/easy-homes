import React from 'react';
import Logo from './logo';
import Drawer from '../UI/drawer';

const navbar = () => {
  return (
    <div className='header__nav'>
      <nav className='nav'>
        <Drawer position='open'>
          <Logo />

          <div className='nav__menu'>
            <ul className='nav__menu--main'>
              <li className='nav__item'>
                <a className='nav__link' href='#exclusives'>
                  Exclusives
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#buy'>
                  Buy
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#rent'>
                  Rent
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#sell'>
                  Sell
                </a>
              </li>
              <li className='nav__item'>
                <a className='nav__link' href='#agents'>
                  Agents
                </a>
              </li>
            </ul>

            <div className='nav__menu--user'>
              <div className='nav__menu--user--item '>
                <button className='nav__menu--user--item--btn active'>
                  Sign Up
                </button>
              </div>
              <div className='nav__menu--user--item'>
                <button className='nav__menu--user--item--btn'>Log In</button>
              </div>
            </div>
          </div>
        </Drawer>
      </nav>
    </div>
  );
};

export default navbar;
