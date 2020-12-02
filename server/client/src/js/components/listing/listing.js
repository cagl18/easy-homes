import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card/listingCardGridview';

class Listing extends Component {
  onSavedListing = (e) => {
    e.preventDefault(); // do not view listing details when saved icon is clicked
    //favorite listing on api endpoint
    if (!this.props.auth.isAuthenticated) {
      console.log('redirect to login');
      this.props.requestUserAuth();
      return;
    }
    console.log('listing need to be saved');

    //call parent function to open login window
  };
  render() {
    return (
      <div>
        <Card
          data={this.props.data}
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
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Listing);
