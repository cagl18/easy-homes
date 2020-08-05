import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from './drawer';
import Logo from './logo';
import Auth from '../../layout/auth';
import Button from '../UI/navbar.js';
import * as actions from '../../../store/actions';

class navbar extends Component {
  state = {
    isModalOpened: false,
  };

  componentDidUpdate() {
    console.log(
      'navbar auth props user:',
      this.props.user,
      'isAuth',
      this.props.isAuthenticated
    );
  }
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
                  <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                    <Link
                      className="nav__link"
                      to="#exclusives"
                      style={{ cursor: 'not-allowed' }}
                    >
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
                  <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                    <Link
                      className="nav__link"
                      to="#sell"
                      style={{ cursor: 'not-allowed' }}
                    >
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
                  {this.props.isAuthenticated ? (
                    <>
                      <div className="nav__menu--user--item ">
                        <i className="far fa-user"></i> {this.props.user?.name}
                        {/* button does not work properly here */}
                        {/* <Button className="nav__menu--user--item--btn">
                          Test
                        </Button> */}
                      </div>
                      <div className="nav__menu--user--item ">
                        <Auth
                          logout
                          btnClass="nav__menu--user--item--btn active"
                          btnText="Log Out"
                          // onClick={this.closeDrawer}
                        ></Auth>
                      </div>
                      {/* <div className="nav__menu--user--item">
                        <Button
                          // onClick={this.props.logout}
                          className="nav__menu--user--item--btn"
                        >
                          Log out
                        </Button>
                      </div> */}
                    </>
                  ) : (
                    <>
                      <div className="nav__menu--user--item ">
                        <Auth
                          signup
                          btnClass="nav__menu--user--item--btn active"
                          btnText="Sign Up"
                          // onClick={this.closeDrawer}
                        ></Auth>
                      </div>
                      <div className="nav__menu--user--item">
                        <Auth
                          login
                          btnClass="nav__menu--user--item--btn"
                          btnText="Log In"
                          // onClick={this.closeDrawer}
                        ></Auth>
                      </div>
                    </>
                  )}
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

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
