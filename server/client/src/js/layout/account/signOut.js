import React, { Component } from 'react';
import AccountCard from './card/card';
import Button from '../../components/UI/button';
import { connect } from 'react-redux';
import { logoutUser } from '../../../store/actions';

class signOut extends Component {
  state = { user: this.props.auth.user || null };

  render() {
    const cardBody = (
      <>
        <p className="u-margin-bottom-small">
          If you sign out, you can sign back in anytime.
        </p>

        <Button
          className="default btn-sm"
          loading={this.props.auth?.isFetching}
          onClick={this.props.logout}
        >
          Sign Out
        </Button>
      </>
    );

    return (
      <div className="account__signOut">
        <AccountCard title="Sign Out">{cardBody}</AccountCard>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(signOut);
