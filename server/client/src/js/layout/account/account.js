import React, { Component } from 'react';
import Nav from '../../components/UI/navbar';
import { Redirect } from 'react-router-dom';
import SearchBar from '../../components/searchBar';

import { redirectToURL, getURLParams } from '../../../shared/utility';
import { connect } from 'react-redux';
// import AccountCard from './card/card';
import AccountProfile from './accountProfile';
import NotificationSettings from './notificationSettings';
import SignOut from './signOut';
import DeleteAccount from './deleteAccount';
import ChangePassword from './changePassword';
import Banner from '../../components/UI/banner.js';

class UserAccount extends Component {
  redirectToSearchPage = () => {
    const searchTerm = getURLParams('q', this.props.location);
    if (searchTerm.length) {
      redirectToURL('/search', this.props.history);
    }
  };
  render() {
    const { auth } = this.props;
    // console.log('account auth props', auth);

    if (!auth?.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Nav className="sticky">
          <SearchBar onSearch={() => this.redirectToSearchPage()} />
        </Nav>
        <div className="account">
          <h2 className="heading-secondary u-padding-top-medium u-margin-bottom-small">
            Account <div className="heading-divider"></div>
          </h2>
          <div className="container account__body">
            <AccountProfile />
            <NotificationSettings />
            <ChangePassword />
            <DeleteAccount />
            <SignOut />
            <Banner success={!auth.error}>{auth.message}</Banner>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(UserAccount);
