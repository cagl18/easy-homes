import React, { Component } from 'react';
import AccountCard from './card/card';
import Button from '../../components/UI/button';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../store/actions';

class notificationSettings extends Component {
  state = {
    user: this.props.auth.user || {
      name: '',
      firstname: '',
      lastname: '',
      email: '',
    },
    showSpinner: false,
  };

  onChangedHandler = (e) => {
    const { name: fieldName, value } = e.target;
    const updateState = { ...this.state.user, [fieldName]: value };

    this.setState({
      user: updateState,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.updateUserProfile(this.state.user);
  };
  render() {
    const title = (
      <div
        style={{ lineHeight: '25px', marginBottom: '8px', marginTop: '-17px' }}
      >
        <p
          className="u-margin-top-small"
          style={{ color: 'red', fontSize: '1.5rem' }}
        >
          This functionality is coming soon!
        </p>
        Default Saved Search Notifications
      </div>
    );
    const cardBody = !this.state.user ? (
      `failed to fetch user profile. :-(`
    ) : (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <p>
          How often would you like to receive updates on future Saved Searches?
        </p>
        <div className="inputGroup">
          <label htmlFor="currentPassword">
            <input
              disabled
              type="radio"
              name="Immediately"
              // value={this.state.user?.firstname}
              onChange={this.onChangedHandler}
            />
            <span>Immediately</span>
          </label>
        </div>
        <div className="inputGroup">
          <label htmlFor="currentPassword">
            <input
              disabled
              type="radio"
              name="Daily"
              onChange={this.onChangedHandler}
            />
            <span>Daily</span>
          </label>
        </div>
        <div className="inputGroup">
          <label htmlFor="currentPassword">
            <input
              disabled
              type="radio"
              name="never"
              onChange={this.onChangedHandler}
            />
            <span>Never</span>
          </label>
        </div>

        <Button
          disabled
          className="default btn-sm"
          loading={this.state.spinnerOnSubmit && this.props.auth?.isFetching}
          // disabled={true}
        >
          save
        </Button>
      </form>
    );

    return (
      <div className="account__notification">
        <AccountCard title={title}>{cardBody}</AccountCard>
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
    updateUserProfile: (user) => dispatch(updateUserProfile(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(notificationSettings);
