import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from '../UI/drawer';
import Logo from './logo';

import Auth from '../../layout/auth';

class navbar extends Component {
  state = {
    isModalOpened: false,
  };

  closeDrawer = () => {
    this.setState({ isModalOpened: false });
  };
  toogleDrawer = () => {
    this.setState((prevState) => ({ isModalOpened: !prevState.isModalOpened }));
  };

  render() {
    return (
      <div
        className={`header__nav ${
          this.props.className ? this.props.className : ''
        }`}
      >
        <div className="backdrop">
          <nav className={`nav `}>
            <Drawer
              toogleDrawer={this.toogleDrawer}
              active={this.state.isModalOpened}
              brand="Easy Homes"
            >
              <Logo brand="Easy Homes" iconClass="fas fa-home" />
              {this.props.children}
              <div className="nav__menu">
                <ul className="nav__menu--main" onClick={this.closeDrawer}>
                  <li className="nav__item">
                    <Link className="nav__link" to="#exclusives">
                      Exclusives
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link className="nav__link" to="/search?type=for-sale">
                      Buy
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link className="nav__link" to="/search?type=for-rent">
                      Rent
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link className="nav__link" to="#sell">
                      Sell
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link className="nav__link" to="/agents">
                      Agents
                    </Link>
                  </li>
                </ul>

                <div className="nav__menu--user">
                  <div className="nav__menu--user--item ">
                    <Auth
                      signup
                      btnClass="nav__menu--user--item--btn active"
                      btnText="Sign Up"
                      onClick={this.closeDrawer}
                    ></Auth>
                  </div>
                  <div className="nav__menu--user--item">
                    <Auth
                      login
                      btnClass="nav__menu--user--item--btn"
                      btnText="Log In"
                      onClick={this.closeDrawer}
                    ></Auth>
                  </div>
                </div>
              </div>
            </Drawer>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default navbar;
