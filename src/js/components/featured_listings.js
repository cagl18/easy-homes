import React, { Component } from 'react';
import Listings from './listings';
import data from './data/dummy_data';

class FeaturedListings extends Component {
  componentDidMount() {
    // fetch real data here from API
  }
  render() {
    return (
      <div className='container'>
        <h2 className='heading-tertiary u-margin-top-big'>
          Recommended For You
        </h2>
        <p className='paragraph u-margin-bottom-small'>
          Listings we think you’ll love.
        </p>
        <Listings data={data} />
      </div>
    );
  }
}

export default FeaturedListings;
