import React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '../UI/drawer';
import Logo from './logo';

import Auth from '../../layout/auth';

const navbar = props => {
  return (
    <div className={`header__nav ${props.className}`}>
      <div className='backdrop'>
        <nav className={`nav `}>
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
                  <Auth
                    signup
                    btnClass='nav__menu--user--item--btn active'
                    btnText='Sign Up'
                  ></Auth>
                </div>
                <div className='nav__menu--user--item'>
                  <Auth
                    login
                    btnClass='nav__menu--user--item--btn'
                    btnText='Log In'
                  ></Auth>
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
