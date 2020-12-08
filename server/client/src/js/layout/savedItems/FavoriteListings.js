import React, { Component } from 'react';
import Listings from '../../components/listing/listings';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class FavoriteListing extends Component {
  async componentDidMount() {
    //get data from API endPoint
    await this.props.getUserFavorties();
  }
  render() {
    return (
      <div>
        <Listings data={this.props.listings} show_fav_btn={true} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    listings: state.listings.data,
  };
};

export default connect(mapStateToProps, actions)(FavoriteListing);
