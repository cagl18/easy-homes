import React, { Component } from 'react';
import Navbar from '../../components/UI/navbar';
import Button from '../../components/UI/button';
import SearchBar from '../../components/searchBar/searchBar';
import { withRouter } from 'react-router-dom';

import { updateURLParams, getURLParams } from '../../../shared/utility';

// const defaultType = 'for-sale';

// const headerCss = {
//   backgroundImage: `linearGradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(../../../img/office_reception.jpg) !important`,
// };

class Header extends Component {
  //   state = { type: defaultType };
  //   toogleListingType = async () => {
  //     let newState = {};
  //     const listing_type =
  //       getURLParams('type', this.props.history.location) || 'for-sale';

  //     listing_type === 'for-sale'
  //       ? (newState.type = 'for-rent')
  //       : (newState.type = 'for-sale');
  //     await this.setState(newState);
  //     updateURLParams({ type: newState.type }, this.props.history);
  //   };

  //   setDefaultState() {
  //     updateURLParams({ type: defaultType }, this.props.history);
  //   }

  //   componentDidMount() {
  //     this.setDefaultState();
  //   }

  //   componentDidUpdate() {
  //     const currentType = getURLParams('type', this.props.history.location);
  //     if (!currentType.length) {
  //       this.setDefaultState();
  //     }
  //   }

  render() {
    return (
      <header className="header agents">
        {/* <header className="header agents-hero">*/}
        <div className="header__nav-box">
          <Navbar />

          <div className="container row">
            <div className="header__content">
              <h2 className="heading-secondary u-margin-bottom-small">
                Find an agent who knows your market best.
              </h2>
              <div className="homepage__search ">
                {/* <div className="homepage__search__type--select">
                  <Button
                    className={`homepage__search__type--btn  ${
                      this.state.type === 'for-sale' ? 'is_active ' : ''
                    }`}
                    onClick={() => this.toogleListingType()}
                  >
                    Buy
                  </Button>
                </div> */}
                {/* <div className="homepage__search__type--select">
                  <Button
                    className={`homepage__search__type--btn  ${
                      this.state.type === 'for-rent' ? 'is_active' : ''
                    }`}
                    onClick={() => this.toogleListingType()}
                  >
                    Rent
                  </Button>
                </div> */}
                <SearchBar
                  autoSearch={false}
                  // onSearch={this.props.onSearchSubmited}
                  // onSearch={searchTerm => this.props.setFilters({ searchTerm })}
                />
              </div>
              {/* End of header Content  */}
            </div>
          </div>
          {/* End of header  */}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
