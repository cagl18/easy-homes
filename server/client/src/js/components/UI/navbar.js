import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from './drawer';
import Logo from './logo';
import Auth from '../../layout/auth';
import * as actions from '../../../store/actions';

// Note button does not work properly in this component <Button></Button> */}

class navbar extends Component {
  state = {
    isModalOpened: false,
  };

  // componentDidUpdate() {
  //   console.log(
  //     'navbar auth props user:',
  //     this.props.user,
  //     'isAuth',
  //     this.props.isAuthenticated
  //   );
  // }

  componentDidMount() {
    // this.triggerClickOnLogin();
    // console.log('loginBtnRef', this.loginBtnRef.current);
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
              closeDrawer={this.C}
              active={this.state.isModalOpened}
              brand="Easy Homes"
            >
              <Logo brand="Easy Homes" iconClass="fas fa-home" />
              {this.props.children}
              <div className="nav__menu">
                <ul className="nav__menu--main" onClick={this.closeDrawer}>
                  <Link
                    className="nav__link"
                    to="#exclusives"
                    style={{ cursor: 'not-allowed' }}
                  >
                    <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                      Exclusives
                    </li>
                  </Link>
                  <Link className="nav__link" to="/search?type=for-sale">
                    <li className="nav__item">Buy</li>
                  </Link>
                  <Link className="nav__link" to="/search?type=for-rent">
                    <li className="nav__item">Rent</li>
                  </Link>
                  <Link
                    className="nav__link"
                    to="#sell"
                    style={{ cursor: 'not-allowed' }}
                  >
                    <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                      Sell
                    </li>
                  </Link>
                  <Link className="nav__link" to="/agents">
                    <li className="nav__item">Agents</li>
                  </Link>
                  {this.props.isAuthenticated ? (
                    <Link className="nav__link" to="/workspace">
                      <li className="nav__item">
                        {`Saved Items `}
                        <i className="fas fa-angle-down"></i>
                      </li>
                    </Link>
                  ) : (
                    ''
                  )}
                </ul>

                <div className="nav__menu--user">
                  {this.props.isAuthenticated ? (
                    <>
                      <div className="nav__menu--user--item ">
                        <Link className="userProfileLink" to="/account">
                          <div
                            className="nav__menu--user--item--btn btn active"
                            style={{
                              padding: '1rem',
                              textTransform: 'capitalize',
                            }}
                          >
                            <i className="far fa-user"></i>

                            {this.props.user?.name.split(' ')[0]}
                          </div>
                        </Link>
                      </div>

                      <div className="nav__menu--user--item ">
                        <div
                          className="nav__menu--user--item--btn btn"
                          style={{ padding: '1rem' }}
                          onClick={this.props.logout}
                        >
                          Log Out
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="nav__menu--user--item ">
                        <Auth
                          signup
                          btnClass="nav__menu--user--item--btn active"
                          btnText="Sign Up"
                        ></Auth>
                      </div>
                      <div className="nav__menu--user--item">
                        <Auth
                          login
                          btnClass="nav__menu--user--item--btn"
                          btnText="Log In"
                          loginBtnRef={this.props.loginBtnRef}
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
