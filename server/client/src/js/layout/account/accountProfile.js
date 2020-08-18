import React, { Component } from 'react';
import AccountCard from './card/card';
import Button from '../../components/UI/button';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../store/actions';

class AccountProfile extends Component {
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
    const cardBody = !this.state.user ? (
      <div className="account__profile">failed to fetch user profile. :-(</div>
    ) : (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <div className="inputGroup">
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            value={this.state.user?.firstname}
            onChange={this.onChangedHandler}
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            value={this.state.user?.lastname}
            onChange={this.onChangedHandler}
          />
        </div>
        <input
          disabled={true}
          type="email"
          name="email"
          placeholder="email"
          value={this.state.user?.email}
          onChange={this.onChangedHandler}
        />
        <Button
          className="default btn-sm"
          loading={this.state.spinnerOnSubmit && this.props.auth?.isFetching}
        >
          save
        </Button>
      </form>
    );

    return (
      <div className="account__profile">
        <AccountCard title="Profile">{cardBody}</AccountCard>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountProfile);
