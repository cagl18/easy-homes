import React, { Component } from 'react';
import listingData from '../../../components/data/dummy_data';

class listingDetail extends Component {
  state = { listing: '' };
  componentDidMount() {
    const listingID = this.props.location.params.id;
    console.log('listingDetail Page', listingID);
    const listing = this.ComponentgetListingByID(listingID);
    this.setState({ listing });
  }

  getListingByID = id => {
    const listing = listingData.map(l => l.id === id);
    return listing;
  };
  render() {
    return (
      <div className='listing__detailView'>
        <p>{this.state.listing.id}</p>
        <p>{this.state.listing.address}</p>
        <p>{this.state.listing.price}</p>
        <p>{this.state.listing.neighborhood}</p>
      </div>
    );
  }
}

export default listingDetail;
