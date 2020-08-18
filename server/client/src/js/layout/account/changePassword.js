import React, { Component } from 'react';
import AccountCard from './card/card';
import Button from '../../components/UI/button';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../store/actions';

const initialState = {
  fields: {
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  },
  errors: {},
  showSpinner: false,
};

class AccountChangePassword extends Component {
  state = initialState;

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!fields['currentPassword']) {
      formIsValid = false;
      errors['currentPassword'] = 'Password cannot be empty!';
    }

    if (formIsValid && typeof fields['currentPassword'] !== 'undefined') {
      if (!(fields['currentPassword'].length > 7)) {
        formIsValid = false;
        errors['currentPassword'] =
          'Password needs to be at least 8 characters.';
      }
    }

    //newPassword
    if (!fields['newPassword']) {
      formIsValid = false;
      errors['newPassword'] = 'New Password cannot be empty!';
    }

    //newPasswordConfirm
    if (!fields['newPasswordConfirm']) {
      formIsValid = false;
      errors['newPasswordConfirm'] = 'Confirm password cannot be empty!';
    }

    if (formIsValid && typeof fields['newPassword'] !== 'undefined') {
      if (!(fields['newPassword'].length > 7)) {
        formIsValid = false;
        errors['newPassword'] =
          'New password needs to be at least 8 characters.';
      }
    }

    if (formIsValid && typeof fields['newPasswordConfirm'] !== 'undefined') {
      if (!(fields['newPasswordConfirm'].length > 7)) {
        formIsValid = false;
        errors['newPasswordConfirm'] =
          'Confirm password needs to be at least 8 characters.';
      }
    }

    if (
      formIsValid &&
      !(fields['newPassword'] === fields['newPasswordConfirm'])
    ) {
      formIsValid = false;
      errors['newPasswordConfirm'] = 'Confirm password does not match';
    }

    // if (typeof fields['currentPassword'] !== 'undefined') {
    //   if (!fields['name'].match(/^[a-zA-Z]+$/)) {
    //     formIsValid = false;
    //     errors['name'] = 'Only letters';
    //   }
    // }

    this.setState({ errors });
    return formIsValid;
  };

  onChangedHandler = (e) => {
    const { name: fieldName, value } = e.target;
    const updateState = { ...this.state.fields, [fieldName]: value };
    const updatedError = { ...this.state.errors, [fieldName]: '' };
    this.setState({
      fields: updateState,
      errors: updatedError,
      showSpinner: false,
    });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const valid = this.validateForm();

    if (valid) {
      //if no errors, clear form
      this.props.changeUserPassword(this.state.fields);
      this.setState({ ...initialState, showSpinner: true });
    }
  };
  render() {
    console.log('state', this.state);
    const cardBody = (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <label htmlFor="currentPassword">
          <p>Current Password</p>
          <input
            className={this.state.errors.currentPassword ? 'error' : ''}
            type="password"
            name="currentPassword"
            onChange={this.onChangedHandler}
            value={this.state.fields.currentPassword}
          />
        </label>
        <small className="error">{this.state.errors.currentPassword}</small>
        <label htmlFor="newPassword">
          <p>New Password</p>
          <input
            className={this.state.errors.newPassword ? 'error' : ''}
            type="password"
            name="newPassword"
            onChange={this.onChangedHandler}
            value={this.state.fields.newPassword}
          />
        </label>
        <small className="error">{this.state.errors.newPassword}</small>
        <label htmlFor="newPasswordConfirm">
          <p>Confirm Password</p>
          <input
            className={this.state.errors.newPasswordConfirm ? 'error' : ''}
            type="password"
            name="newPasswordConfirm"
            onChange={this.onChangedHandler}
            value={this.state.fields.newPasswordConfirm}
          />
        </label>
        <small className="error">{this.state.errors.newPasswordConfirm}</small>

        <Button
          className="default btn-sm"
          loading={this.state.showSpinner && this.props.auth?.isFetching}
        >
          save
        </Button>
      </form>
    );

    return (
      <div className="account__changePassword">
        <AccountCard title="Change Password">{cardBody}</AccountCard>
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
    changeUserPassword: (credentials) =>
      dispatch(changeUserPassword(credentials)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountChangePassword);
