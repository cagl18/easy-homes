import React, { Component } from 'react';
import Nav from '../../components/UI/navbar';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Favorites from './FavoriteListings';
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
        <div className="account" style={{ height: '91vh' }}>
          <h2 className="heading-secondary u-padding-top-medium u-margin-bottom-small">
            My Saves Homes <div className="heading-divider"></div>
          </h2>
          <div className="container">
            <Favorites />

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
