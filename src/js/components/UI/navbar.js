import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/button';
import Drawer from '../UI/drawer';
import Logo from './logo';

const navbar = props => {
  return (
    <div className='header__nav'>
      <div className='backdrop'>
        <nav className='nav'>
          <Drawer position='closed'>
            <Logo iconClass='fas fa-home' />
            {props.children}
            <div className='nav__menu'>
              <ul className='nav__menu--main'>
                <li className='nav__item'>
                  <Link className='nav__link' to='#exclusives'>
                    Exclusives
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/search?type=for-sale'>
                    Buy
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/search?type=for-rent'>
                    Rent
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='#sell'>
                    Sell
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='#agents'>
                    Agents
                  </Link>
                </li>
              </ul>

              <div className='nav__menu--user'>
                <div className='nav__menu--user--item '>
                  <Button className='nav__menu--user--item--btn active'>
                    Sign Up
                  </Button>
                </div>
                <div className='nav__menu--user--item'>
                  <Button className='nav__menu--user--item--btn'>Log In</Button>
                </div>
              </div>
            </div>
          </Drawer>
        </nav>
      </div>
      {props.children}
    </div>
  );
};

export default navbar;
