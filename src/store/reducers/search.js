import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';
import listingData from '../../js/components/data/dummy_data';

const initialState = {
  listingData,
  filteredData: listingData
  // filtersParams: {
  //   searchTerm: '',
  //   minPrice: 0,
  //   maxPrice: 9999999999,
  //   minBeds: -1,
  //   maxBeds: 7,
  //   minBaths: 0
  // }
};

const setListingsFilters = (state, action) => {
  const updatedFilters = updateObject(state.filtersParams, action.filters);
  //   console.log('redux state', updatedFilters, 'action', action);
  return updateObject(state, { filtersParams: updatedFilters });
};

const filterListingData = (state, action) => {
  return updateObject(state, { filteredData: action.filteredData });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LISTINGS_FILTER:
      return setListingsFilters(state, action);
    case actionTypes.FILTER_LISTING_DATA:
      return filterListingData(state, action);
    default:
      return state;
  }
};

export default reducer;

// const setListingsFilter = (state, action) => {
//   const updatedFilters = { ...this.state.filters_params, ...filters };

//   this.setState({ filters_params: updatedFilters });

//   //filtering based on Search input field
//   const term = this.state.filters_params.searchTerm;
//   const searchTerm = term.trim().toLowerCase();

//   // console.log('+++++term++++', term);
//   // console.log('+++++filters++++', filters, updatedFilters);
//   // console.log('+++++searchTerm++++', searchTerm);

//   let newData = this.state.listing_data.filter(l => {
//     const doesIdMatches = l.id.toString().match(searchTerm);

//     const address = l.address.toLowerCase();
//     const doesAddressMatches = address.match(searchTerm);

//     const neighborhood = l.neighborhood.toLowerCase();
//     const doesNeighborhoodMatches = neighborhood.match(searchTerm);

//     const city = l.city.toLowerCase();
//     const doesCityMatches = city.match(searchTerm);

//     const agent = l.agent.name.toLowerCase();
//     const doesAgentMatches = agent.match(searchTerm);

//     const zipcode = l.zipcode.toString();
//     const doesZipcodeMatches = zipcode.match(searchTerm);

//     if (
//       doesIdMatches !== null ||
//       doesAddressMatches !== null ||
//       doesNeighborhoodMatches !== null ||
//       doesCityMatches !== null ||
//       doesAgentMatches !== null ||
//       doesZipcodeMatches !== null
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   //filtering based on price select field
//   // console.log('newData', newData);
//   newData = newData.filter(l => {
//     // console.log(updatedFilters.minPrice, updatedFilters.maxPrice, l.price);

//     return (
//       l.price >= updatedFilters.minPrice && l.price <= updatedFilters.maxPrice
//     );
//   });

//   this.setState({ filtered_data: newData });
// };
