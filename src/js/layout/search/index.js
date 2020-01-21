import React, { Component } from 'react';
// import Header from './header';
// import Footer from '../../components/footer';
// import Cities from '../../components/cities';
// import Market from '../../components/market';
// import FeautedListings from '../../components/featured_listings';

class Search extends Component {
  render() {
    return (
      <div className='search'>
        <p> {this.props.searched_input} </p>
        <div className='sticky-nav'>sticky nav</div>
        <div className='search__content'>
          <div className='map'>Map</div>
          <div className='listings'>Listings</div>
        </div>
      </div>
    );
  }
}

export default Search;
