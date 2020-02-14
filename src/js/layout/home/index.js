import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import Cities from '../../components/cities';
import Market from '../../components/market';
import FeautedListings from '../../components/featured_listings';

import { redirectToURL, getURLParams } from '../../../shared/utility';

class Home extends Component {
  redirectToSearchPage = () => {
    const searchTerm = getURLParams('q', this.props.location);
    if (searchTerm.length) {
      redirectToURL('/search', this.props.history);
    }
  };

  componentDidUpdate() {
    this.redirectToSearchPage();
    // console.log('homepage - params', this.props);
  }

  render() {
    return (
      <div>
        <Header onSearchSubmited={() => this.redirectToSearchPage()} />
        <FeautedListings />
        <Cities />
        <Market />
        <Footer />
      </div>
    );
  }
}

export default Home;
