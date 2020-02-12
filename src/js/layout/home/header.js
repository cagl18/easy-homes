import React, { Component } from 'react';
import Navbar from '../../components/UI/navbar';
import Button from '../../components/UI/button';
import SearchBar from '../../components/searchBar';

class Header extends Component {
  state = { isForSale: true };
  toogleListingType = listing_type => {
    let newState = {};
    listing_type === 'forSale'
      ? (newState['isForSale'] = true)
      : (newState['isForSale'] = false);
    this.setState(newState);
  };
  onSearchSubmit = event => {
    console.log(event);
  };
  componentDidUpdate() {
    // console.log('filtersParams: ', this.props.filtersParams);
    // console.log('match', this.props.match);
  }

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
                    onClick={() => this.toogleListingType('forSale')}
                  >
                    Buy
                  </Button>
                  <Button
                    className={`homepage__search__type--btn  ${
                      !this.state.isForSale ? 'is_active' : null
                    }`}
                    onClick={() => this.toogleListingType('forRent')}
                  >
                    Rent
                  </Button>
                </div>
                <SearchBar
                  onSearch={this.props.onSearchSubmited}
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

export default Header;
