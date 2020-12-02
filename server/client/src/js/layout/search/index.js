import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from '../../components/map/mapForMultiMarkers';
import SearchBar from '../../components/searchBar';
import Nav from '../../components/UI/navbar';
import Listings from '../../components/listing/listings';
import ListingsFilter from '../../components/UI/filter';

import * as actions from '../../../store/actions';
import { getAllUrlParams } from '../../../shared/utility';

class Search extends Component {
  loginBtnRef = React.createRef();
  requestUserAuth = () => {
    this.loginBtnRef.current.click();
  };

  async componentDidMount() {
    const URLParmsObj = getAllUrlParams(this.props.location.search);
    // console.log('this.props.location.search', this.props.location.search);

    await this.props.fetchListings();
    this.filterData({ ...URLParmsObj, bounds: null });
  }

  componentDidUpdate() {
    this.autoFilterURLData();
  }

  autoFilterURLData = async () => {
    const URLParmsObj = getAllUrlParams(this.props.location.search);
    if (this.props.filtersParams) {
      if (
        (URLParmsObj.type &&
          URLParmsObj.type !== this.props.filtersParams.type) ||
        (URLParmsObj.q && URLParmsObj.q !== this.props.filtersParams.q)
      ) {
        await this.filterData(URLParmsObj);
      }
    }
  };

  filterData = async (filters) => {
    // const updatedFilters = { ...this.props.filtersParams, ...filters };
    // const term = updatedFilters.searchTerm;

    const URLParmsObj = getAllUrlParams(this.props.location.search);
    const updatedFilters = {
      ...this.props.filtersParams,
      ...URLParmsObj,
      ...filters,
    };

    const queryTerm = updatedFilters.q;

    let newData = this.props.listingsAPIRes.data || [];

    if (!newData.length) return;

    if (queryTerm && queryTerm.trim().length) {
      const searchTerm = queryTerm.trim().toLowerCase();

      newData = newData.filter((l) => {
        const doesIdMatches = l.id.toString().match(searchTerm);

        const address = l.address.toLowerCase();
        const doesAddressMatches = address.match(searchTerm);

        const neighborhood = l.neighborhood.toLowerCase();
        const doesNeighborhoodMatches = neighborhood.match(searchTerm);

        const city = l.city.toLowerCase();
        const doesCityMatches = city.match(searchTerm);

        const agent = l.agents[0].name.toLowerCase();
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
      newData = newData.filter((l) => {
        return l.type === listing_type;
      });
    }

    // filtering based on price select field
    newData = newData.filter((l) => {
      let isAMatch = true;

      if (updatedFilters.minprice) {
        isAMatch = isAMatch && 1 * l.price >= parseInt(updatedFilters.minprice);
      }
      if (updatedFilters.maxprice) {
        isAMatch = isAMatch && 1 * l.price <= parseInt(updatedFilters.maxprice);
      }
      if (updatedFilters.minbeds) {
        isAMatch = isAMatch && 1 * l.beds >= parseInt(updatedFilters.minbeds);
      }
      if (updatedFilters.maxbeds) {
        isAMatch = isAMatch && 1 * l.beds <= parseInt(updatedFilters.maxbeds);
      }
      if (updatedFilters.minsqft) {
        isAMatch = isAMatch && 1 * l.sqft >= parseInt(updatedFilters.minsqft);
      }
      if (updatedFilters.maxsqft) {
        isAMatch = isAMatch && 1 * l.sqft <= parseInt(updatedFilters.maxsqft);
      }
      if (updatedFilters.minbaths) {
        isAMatch =
          isAMatch && 1 * l.baths >= parseFloat(updatedFilters.minbaths);
      }
      // 1 * l.fieldName to convert null values to 0.
      return isAMatch;
    });

    //filtering based on map location

    const { bounds } = updatedFilters;
    //check how often window.innerWidth updates
    if (bounds && window.innerWidth > 648) {
      newData = newData.filter((l) => {
        const bb = bounds;
        const marker = {
          lat: parseFloat(l.location.latitude),
          lng: parseFloat(l.location.longitude),
        };

        if (
          marker.lat > bb.se.lat &&
          bb.sw.lat &&
          marker.lat < bb.ne.lat &&
          bb.nw.lat &&
          marker.lng > bb.nw.lng &&
          bb.sw.lng &&
          marker.lng < bb.ne.lng &&
          bb.se.lng
        ) {
          // listing cordinates are within the map bounding box

          return true;
        }
        return false;
      });
    }

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
    this.props.setFilters(updatedFilters); //updating redux state listing filter params
    this.props.setfilteredData(newData);
  };

  render() {
    // const totalProperties = this.props.filteredData.length;
    // console.log('listingAPI', this.props.listingAPI);
    const itemsShownPerPage = 6;

    return (
      <div className="searchpage">
        <div className="searchpage__nav">
          <Nav className="sticky" loginBtnRef={this.loginBtnRef}>
            <SearchBar
              onSearch={(searchTerm) => this.filterData({ searchTerm })}
              autoSearch
            />
          </Nav>
        </div>
        <div className="searchpage__content">
          <Map
            zoom={14}
            onPan={(bounds) => this.filterData({ bounds })}
            filteredData={this.props.filteredData}
          />
          <div className="listings">
            <div className="listings__header">
              <header>
                <h4 className="heading-quaternary">
                  Explore This Neighborhood
                </h4>
              </header>
              <ListingsFilter
                filteredData={this.props.filteredData}
                onFiltersSelected={this.filterData}
                itemsShownPerPage={itemsShownPerPage}
              />
            </div>

            <Listings
              itemsShownPerPage={itemsShownPerPage}
              data={this.props.filteredData}
              show_fav_btn
              requestUserAuth={this.requestUserAuth}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listingData: state.search.listingData,
    filteredData: state.search.filteredData,
    filtersParams: state.search.filtersParams,
    listingsAPIRes: state.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (filters) => dispatch(actions.setListingsFilter(filters)),
    setfilteredData: (newData) =>
      dispatch(actions.setFilteredListingData(newData)),
    fetchListings: () => dispatch(actions.fetchListings()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
