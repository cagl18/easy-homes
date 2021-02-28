import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Drawer from './drawer';
import Logo from './logo';
import Auth from '../../layout/auth';
import * as actions from '../../../store/actions';
import { getAllUrlParams } from '../../../shared/utility';

// Note button does not work properly in this component <Button></Button> */}

const menuItems = {
  buy: 'Buy',
  rent: 'Rent',
  agents: 'Agents',
  user: 'Account',
};

class navbar extends Component {
  state = {
    isModalOpened: false,
    activeMenuItem: null,
  };

  handleNavActiveItem = (menuItemName) => {
    this.setState({ activeMenuItem: menuItemName });
  };

  componentDidMount() {
    const menuItemName = getAllUrlParams(window.location.search);
    this.handleNavActiveItem(menuItemName.type);
  }

  // componentDidUpdate() {
  //   // this.setState({
  //   //   location: {
  //   //     pathname: window.location.pathname,
  //   //     search: window.location.search,
  //   //   },
  //   // });
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.activeMenuItem !== this.state.activeMenuItem ||
  //     nextProps !== this.props
  //   );
  // }

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
              closeDrawer={this.closeDrawer}
              active={this.state.isModalOpened}
              brand="Easy Homes"
            >
              <Logo brand="Easy Homes" iconClass="fas fa-home" />
              {this.props.children}
              <div className="nav__menu">
                <ul className="nav__menu--main" onClick={this.closeDrawer}>
                  <NavLink
                    className="nav__link"
                    to="#exclusives"
                    style={{ cursor: 'not-allowed' }}
                  >
                    <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                      Exclusives
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav__link"
                    activeClassName={`${
                      `${this.state.activeMenuItem}` === 'for-sale'
                        ? 'nav__link-active'
                        : ''
                    }`}
                    exact
                    to={{
                      pathname: '/search',
                      search: '?type=for-sale',
                    }}
                  >
                    <li
                      onClick={() => this.handleNavActiveItem('for-sale')}
                      className={`nav__item`}
                    >
                      {menuItems.buy}
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav__link"
                    exact
                    activeClassName={`${
                      `${this.state.activeMenuItem}` === 'for-rent'
                        ? 'nav__link-active'
                        : ''
                    }`}
                    to={{
                      pathname: '/search',
                      search: '?type=for-rent',
                    }}
                  >
                    <li
                      className={`nav__item ${
                        this.state.activeMenuItem === menuItems.rent
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => this.handleNavActiveItem('for-rent')}
                    >
                      {menuItems.rent}
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav__link"
                    to="#sell"
                    style={{ cursor: 'not-allowed' }}
                  >
                    <li className="nav__item" style={{ cursor: 'not-allowed' }}>
                      Sell
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav__link"
                    activeClassName="nav__link-active"
                    exact
                    to="/agents"
                  >
                    <li
                      className={`nav__item ${
                        this.state.activeMenuItem === menuItems.agents
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => this.handleNavActiveItem('agents')}
                    >
                      {menuItems.agents}
                    </li>
                  </NavLink>
                  {this.props.isAuthenticated ? (
                    <NavLink
                      className="nav__link"
                      activeClassName="nav__link-active"
                      exact
                      to="/workspace"
                    >
                      <li className="nav__item">
                        {`Saved Items `}
                        <i className="fas fa-angle-down"></i>
                      </li>
                    </NavLink>
                  ) : (
                    ''
                  )}
                </ul>

                <div className="nav__menu--user">
                  {this.props.isAuthenticated ? (
                    <>
                      <div className="nav__menu--user--item ">
                        <NavLink
                          className="userProfileLink"
                          activeClassName="active"
                          exact
                          to="/account"
                          onClick={() => this.handleNavActiveItem('Account')}
                        >
                          <div
                            className={`nav__menu--user--item--btn btn ${
                              this.state.activeMenuItem === menuItems.user
                                ? 'active'
                                : ''
                            } `}
                            style={{
                              padding: '1rem',
                              textTransform: 'capitalize',
                            }}
                          >
                            <i className="far fa-user"></i>

                            {this.props.user?.name.split(' ')[0]}
                          </div>
                        </NavLink>
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
