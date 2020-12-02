import React, { Component } from 'react';
import Nav from '../../components/UI/navbar';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../../components/searchBar';
import Banner from '../../components/UI/banner.js';

class SavedItems extends Component {
  render() {
    const { auth } = this.props;

    if (!auth?.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Nav className="sticky"></Nav>
        <div className="account">
          <h2 className="heading-secondary u-padding-top-medium u-margin-bottom-small">
            My Saves Homes <div className="heading-divider"></div>
          </h2>
          <div className="container account__body">
            {/* <AccountProfile />
            <SignOut /> */}
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

export default connect(mapStateToProps, null)(SavedItems);
