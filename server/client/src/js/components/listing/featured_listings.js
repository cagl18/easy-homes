// import React, { Component, Suspense, lazy } from 'react';
import React, { Component } from 'react';
import ItemsGridList from '../UI/ItemsGridList';
import { connect } from 'react-redux';
import { fetchFeaturedListings } from '../../../store/actions';

import Listing from './listing';

class FeaturedListings extends Component {
  componentDidMount() {
    // fetch real data here from API
    this.props.fetchFeaturedListings();
  }
  render() {
    // if (!this.props.featuredListings) {
    //   return '';
    // }
    return (
      <div className="featured__listings">
        <div className="container">
          <h3 className="heading-tertiary u-margin-top-big">
            Recommended For You
          </h3>
          <p className="paragraph u-margin-bottom-small">
            Listings we think you’ll love.
          </p>
          <ItemsGridList data={this.props.featuredListings}>
            <Listing />
          </ItemsGridList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    featuredListings: state.listings.data,
  };
};

export default connect(mapStateToProps, { fetchFeaturedListings })(
  FeaturedListings
);
