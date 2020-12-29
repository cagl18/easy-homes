import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card/listingCardGridview';
import * as actions from '../../../store/actions/index';

class Listing extends Component {
  onSavedListing = async (e) => {
    e.preventDefault(); // do not view listing details when saved icon is clicked
    if (!this.props.auth.isAuthenticated) {
      // Ask user to login
      this.props.requestUserAuth(); //call parent function to open login window
      return;
    }
    //saving listing to user favorites (api endpoint)

    if (this.props.data.favorite) {
      await this.props.unSetListingLiked(this.props.data.id);
    } else {
      await this.props.setListingLiked(this.props.data.id);
    }
    this.props.getUserFavorties();
  };
  render() {
    if (!this.props.data?._id) return null;
    return (
      <div>
        <Card
          data={{
            listing: this.props.data,
            userFavoriteListing: this.props.auth,
          }}
          show_fav_btn={this.props.show_fav_btn}
          onSavedListing={this.onSavedListing}
        ></Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(Listing);
