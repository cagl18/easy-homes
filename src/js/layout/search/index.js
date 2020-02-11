import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/map';
import SearchBar from '../../components/searchBar';
import Nav from '../../components/UI/navbar';
import Listings from '../../components/listings';
import ListingsFilter from '../../components/UI/filter';

import * as actions from '../../../store/actions';

class Search extends Component {
  // state = {
  //   listingData,
  //   filteredData: listingData
  //   // filtersParams: { searchTerm: '', minPrice: 0, maxPrice: 9999999999 }
  // };

  filterData = async filters => {
    await this.props.setFilters(filters); //updating redux state listing filter params
    const updatedFilters = { ...this.props.filtersParams, ...filters };
    // console.log('updatedFilters', updatedFilters);

    const term = updatedFilters.searchTerm;
    const searchTerm = term.trim().toLowerCase();

    let newData = this.props.listingData.filter(l => {
      const doesIdMatches = l.id.toString().match(searchTerm);

      const address = l.address.toLowerCase();
      const doesAddressMatches = address.match(searchTerm);

      const neighborhood = l.neighborhood.toLowerCase();
      const doesNeighborhoodMatches = neighborhood.match(searchTerm);

      const city = l.city.toLowerCase();
      const doesCityMatches = city.match(searchTerm);

      const agent = l.agent.name.toLowerCase();
      const doesAgentMatches = agent.match(searchTerm);

      const zipcode = l.zipcode.toString();
      const doesZipcodeMatches = zipcode.match(searchTerm);

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

    //filtering based on price select field
    newData = newData.filter(l => {
      return (
        l.price >= updatedFilters.minPrice &&
        l.price <= updatedFilters.maxPrice &&
        l.beds >= updatedFilters.minBeds &&
        l.beds <= updatedFilters.maxBeds &&
        l.baths >= updatedFilters.minBaths
      );
    });

    // this.setState({ filteredData: newData });
    this.props.setfilteredData(newData);
  };

  render() {
    return (
      <div className='searchpage'>
        {/* <p> {this.props.searched_input} </p> */}
        <div className='searchpage__nav'>
          <Nav>
            <SearchBar
              onSearch={searchTerm => this.filterData({ searchTerm })}
            />
          </Nav>
        </div>
        <div className='searchpage__content'>
          <Map zoom={14} />
          <div className='listings'>
            <h4 className='heading-quaternary'>Explore This Neighborhood</h4>
            <ListingsFilter
              filteredData={this.props.filteredData}
              onFiltersSelected={this.filterData}
            />
            <Listings data={this.props.filteredData} />
          </div>
        </div>
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
    setFilters: filters => dispatch(actions.setListingsFilter(filters)),
    setfilteredData: newData => dispatch(actions.filterListingData(newData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
