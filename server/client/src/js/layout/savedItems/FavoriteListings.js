import React, { Component } from 'react';
import Listings from '../../components/listing/listings';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Loader from '../../components/UI/loader';

class FavoriteListing extends Component {
  async componentDidMount() {
    //get data from API endPoint
    await this.props.getUserFavorties();
  }
  onFavoriteHandler = async () => {
    await this.props.getUserFavorties();
  };
  render() {
    const pageBody = !this.props.listings ? (
      <Loader />
    ) : (
      <Listings
        data={this.props.listings}
        show_fav_btn={true}
        onFavoriteHandler={this.onFavoriteHandler}
      />
    );
    return <div>{pageBody}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    listings: state.listings.favorites,
  };
};

export default connect(mapStateToProps, actions)(FavoriteListing);
