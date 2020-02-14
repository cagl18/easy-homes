import React, { Component } from 'react';
import Navbar from '../../components/UI/navbar';
import Button from '../../components/UI/button';
import SearchBar from '../../components/searchBar';
import { withRouter } from 'react-router-dom';

import { updateURLParams } from '../../../shared/utility';

class Header extends Component {
  state = { isForSale: true, isForRent: false };
  toogleListingType = async listing_type => {
    let newState = {};
    listing_type === 'for-sale'
      ? (newState['isForSale'] = true)
      : (newState['isForSale'] = false);
    newState['isForRent'] = !newState['isForSale'];
    await this.setState(newState);
    updateURLParams({ type: listing_type }, this.props.history);
  };

  render() {
    return (
      <header className='header'>
        <div className='header__nav-box'>
          <Navbar />

          <div className='row'>
            <div className='header__content'>
              <h1 className='heading-primary'>Find your place.</h1>
              <div className='homepage__search '>
                <div className='homepage__search__type--select'>
                  <Button
                    className={`homepage__search__type--btn  ${
                      this.state.isForSale ? 'is_active ' : null
                    }`}
                    onClick={() => this.toogleListingType('for-sale')}
                  >
                    Buy
                  </Button>
                  <Button
                    className={`homepage__search__type--btn  ${
                      !this.state.isForSale ? 'is_active' : null
                    }`}
                    onClick={() => this.toogleListingType('for-rent')}
                  >
                    Rent
                  </Button>
                </div>
                <SearchBar
                  onSearch={this.props.onSearchSubmited}
                  autoSearch={false}
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
