import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import Cities from '../../components/cities';
import Market from '../../components/market';
import FeautedListings from '../../components/listing/featured_listings';

// import { redirectToURL, getURLParams } from '../../../shared/utility';
// import { redirectToSearchPage } from '../search/search_utils';

class Home extends Component {
  // redirectToSearchPage = () => {
  //   const searchTerm = getURLParams('q', this.props.location);
  //   if (searchTerm.length) {
  //     redirectToURL('/search', this.props.history);
  //   }
  // };

  componentDidUpdate() {
    // this.redirectToSearchPage();
  }

  render() {
    return (
      <div>
        <Header /* onSearchSubmited={() => this.redirectToSearchPage()} */ />
        <FeautedListings />
        <Cities />
        <Market />
        <Footer />
      </div>
    );
  }
}

export default Home;
