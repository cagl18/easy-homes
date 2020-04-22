import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import Agents from './../../components/agent/agents/agentsListGrid';

import { agents } from '../../components/data/dummy_data';

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
      <div className="agents">
        <Header /* onSearchSubmited={() => this.redirectToSearchPage()} */ />
        <Agents data={agents} />
        {/* <Cities />
        <Market /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
