import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import Cities from '../../components/cities';
import Market from '../../components/market';
import FeautedListings from '../../components/featured_listings';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class Home extends Component {
  redirectToSearchPage = () => {
    console.log('redicting to Search page');
  };

  render() {
    return (
      <div>
        <Header onSearchSubmited={this.redirectToSearchPage} />
        <FeautedListings />
        <Cities />
        <Market />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listingData: state.search.listingData,
    filteredData: state.search.filteredData,
    filtersParams: state.search.filtersParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilters: filters => dispatch(actions.setListingsFilter(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
