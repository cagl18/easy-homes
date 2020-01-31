import React, { Component } from 'react';
import Map from '../../components/map';
import SearchBar from '../../components/searchBar';
import Nav from '../../components/UI/navbar';
import Listings from '../../components/listings';
import listing_data from '../../components/data/dummy_data';

class Search extends Component {
  state = { listing_data, filtered_data: listing_data, searchText: '' };

  filterData = kw => {
    console.log('previous data ', this.state.listing_data);
    console.log('previous search KW here: ', this.state.searchText);
    console.log('new search KW here: ', kw);

    const searchText = kw.trim().toLowerCase();
    console.log('inside the if statement ', this.state.searchText);
    const newData = this.state.listing_data.filter(l => {
      const doesIdMatches = l.id.toString().match(searchText);

      const address = l.address.toLowerCase();
      const doesAddressMatches = address.match(searchText);

      const neighborhood = l.neighborhood.toLowerCase();
      const doesNeighborhoodMatches = neighborhood.match(searchText);

      const city = l.city.toLowerCase();
      const doesCityMatches = city.match(searchText);

      const agent = l.agent.name.toLowerCase();
      const doesAgentMatches = agent.match(searchText);

      const zipcode = l.zipcode.toString();
      const doesZipcodeMatches = zipcode.match(searchText);

      console.log('filter :', doesAddressMatches);
      if (
        doesIdMatches !== null ||
        doesAddressMatches !== null ||
        doesNeighborhoodMatches !== null ||
        doesCityMatches !== null ||
        doesAgentMatches !== null ||
        doesZipcodeMatches !== null
      ) {
        return true;
      } else {
        return false;
      }
    });
    // console.log('new state data ', newData);
    this.setState({ filtered_data: newData });
  };
  onSearch = kw => {
    this.setState({ searchText: kw });
    this.filterData(kw);
  };

  render() {
    return (
      <div className='searchpage'>
        {/* <p> {this.props.searched_input} </p> */}
        <div className='searchpage__nav'>
          <Nav>
            <SearchBar onSearch={this.onSearch} />
          </Nav>
        </div>
        <div className='searchpage__content'>
          <Map zoom={14} />
          <div className='listings'>
            <Listings data={this.state.filtered_data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
