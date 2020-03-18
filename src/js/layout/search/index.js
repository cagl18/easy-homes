import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/map';
import SearchBar from '../../components/searchBar';
import Nav from '../../components/UI/navbar';
import Listings from '../../components/listings';
import ListingsFilter from '../../components/UI/filter';

import * as actions from '../../../store/actions';
import { getAllUrlParams } from '../../../shared/utility';

class Search extends Component {
  // state = {
  //   listingData,
  //   filteredData: listingData
  //   // filtersParams: { searchTerm: '', minPrice: 0, maxPrice: 9999999999 }
  // };

  componentDidMount() {
    // const searchTerm = this.props.searchTerm;
    // if (searchTerm !== null) {
    //   this.props.setfilteredData(searchTerm);
    // }
    // this.filterData(this.props.filtersParams);
  }

  componentDidUpdate() {
    //   this.filterData(this.props.filtersParams);
    console.log('search props', this.props);
  }

  filterData = async filters => {
    await this.props.setFilters(filters); //updating redux state listing filter params

    // const updatedFilters = { ...this.props.filtersParams, ...filters };
    // const term = updatedFilters.searchTerm;

    const URLParmsObj = getAllUrlParams(this.props.location.search);
    const updatedFilters = { ...URLParmsObj, ...filters };
    const queryTerm = updatedFilters.q;

    let newData = this.props.listingData;

    if (queryTerm && queryTerm.trim().length) {
      const searchTerm = queryTerm.trim().toLowerCase();

      newData = newData.filter(l => {
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
    }

    //filtering based on type
    const listing_type = updatedFilters.type;
    if (listing_type) {
      newData = newData.filter(l => {
        return l.type === listing_type;
      });
    }

    // filtering based on price select field
    newData = newData.filter(l => {
      let isAMatch = true;
      if (updatedFilters.minprice) {
        isAMatch = isAMatch && l.price >= parseInt(updatedFilters.minprice);
      }
      if (updatedFilters.maxprice) {
        isAMatch = isAMatch && l.price <= parseInt(updatedFilters.maxprice);
      }
      if (updatedFilters.minbeds) {
        isAMatch = isAMatch && l.beds >= parseInt(updatedFilters.minbeds);
      }
      if (updatedFilters.maxbeds) {
        isAMatch = isAMatch && l.beds <= parseInt(updatedFilters.maxbeds);
      }
      if (updatedFilters.minbaths) {
        isAMatch = isAMatch && l.baths >= parseFloat(updatedFilters.minbaths);
      }
      return isAMatch;
    });

    //sorting data
    const sortBy = updatedFilters.sort;

    if (sortBy) {
      const [sortDirection, sortByField] = sortBy.includes('-')
        ? sortBy.split('-')
        : ['asc', sortBy];

      newData.sort((a, b) => {
        return typeof a[sortByField] === 'string'
          ? a[sortByField].localeCompare(b[sortByField])
          : a[sortByField] - b[sortByField];
      });

      if (sortDirection === 'desc') {
        newData.reverse();
      }
    }

    // this.setState({ filteredData: newData });
    this.props.setfilteredData(newData);
  };

  render() {
    return (
      <div className='searchpage'>
        <div className='searchpage__nav'>
          <Nav className='sticky'>
            <SearchBar
              onSearch={searchTerm => this.filterData({ searchTerm })}
              autoSearch
            />
          </Nav>
        </div>
        <div className='searchpage__content'>
          <Map zoom={14} />
          <div className='listings'>
            <div className='listings__header'>
              <header>
                <h4 className='heading-quaternary'>
                  Explore This Neighborhood
                </h4>
              </header>
              <ListingsFilter
                filteredData={this.props.filteredData}
                onFiltersSelected={this.filterData}
              />
            </div>

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
