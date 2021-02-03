import Header from './header';
import Footer from '../../components/footer';
import Cities from '../../components/cities';
import Market from '../../components/market';
import FeautedListings from '../../components/listing/featured_listings';

import React, { Component, Suspense, lazy } from 'react';
import Loader from '../../components/UI/loader';

// loading component into 2nd part of main JS file. So that page will load faster
// const Footer = lazy(() => import('../../components/footer'));
// const Cities = lazy(() => import('../../components/cities'));
// const Market = lazy(() => import('../../components/market'));
// const FeautedListings = lazy(() =>
//   import('../../components/listing/featured_listings')
// );

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
        {/* <Suspense fallback={<Loader />}> */}
        <FeautedListings />
        <Cities />
        <Market />
        <Footer />
        {/* </Suspense> */}
      </div>
    );
  }
}

export default Home;
