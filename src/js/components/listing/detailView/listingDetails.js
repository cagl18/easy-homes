import React, { Component } from 'react';
import listingData from '../../../components/data/dummy_data';

class listingDetail extends Component {
  state = { listing: '' };
  componentDidMount() {
    const listingID = this.props.match.params.id;
    console.log('listingDetail Page', listingID);
    const listing = this.getListingByID(listingID);
    console.log('listing', listing);
    this.setState({ listing });
  }

  getListingByID = id => {
    const listing = listingData.find(l => l.id.toString() === id);
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
