import React, { Component } from 'react';
import ItemsGridList from '../UI/ItemsGridList';
import Listing from './listing';
import data from '../data/dummy_data';

class FeaturedListings extends Component {
  componentDidMount() {
    // fetch real data here from API
  }
  render() {
    return (
      <div className="container">
        <h2 className="heading-tertiary u-margin-top-big">
          Recommended For You
        </h2>
        <p className="paragraph u-margin-bottom-small">
          Listings we think you’ll love.
        </p>
        <ItemsGridList data={data.slice(0, 6)}>
          <Listing />
        </ItemsGridList>
      </div>
    );
  }
}

export default FeaturedListings;
