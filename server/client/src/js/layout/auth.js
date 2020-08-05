import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Modal from '../components/UI/modal';
import Button from '../components/UI/button.js';

class Auth extends Component {
  state = {
    auth_window: {
      login: this.props.login,
      signup: this.props.signup,
    },
  };

  toogleAuthOption = () => {
    this.setState({
      auth_window: {
        login: !this.state.auth_window.login,
        signup: !this.state.auth_window.signup,
      },
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    console.log('from auth', this.props.auth);
    console.log('auth props*****', this.props);
    const email = e.target.email.value;
    const password = e.target.password.value;
    this.props.login({ email, password });
    // this.props.closeDrawer(); // closing auth window
  };

  render() {
    // console.log('auth', this.props.auth);
    let modal_content = this.state.auth_window.login ? (
      <div className="authentication-content">
        <h1>Welcome back!</h1>
        <form className="form" action="" onSubmit={this.handleLogin}>
          <input required name="email" placeholder="Email"></input>
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <Button className="btn primary" loading={this.props.auth.isFetching}>
            Continue
          </Button>
          <div className="authentication-footer">
            <span>New to Easy Homes?</span>
            <button onClick={() => this.toogleAuthOption()}>
              Create an account
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div className="authentication-content">
        <h1>Create an account</h1>
        <form className="form" action="">
          <input type="text" name="name" placeholder="First Name"></input>
          <input type="text" name="lastname" placeholder="Last Name"></input>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <Button className="btn primary" loading={this.props.auth.isFetching}>
            Continue
          </Button>
          <div className="authentication-footer">
            <span>Already have an account?</span>
            <button onClick={() => this.toogleAuthOption()}>Sign in</button>
          </div>
        </form>
      </div>
    );
    return (
      <div className="authentication">
        <Modal btnClass={this.props.btnClass} btnText={this.props.btnText}>
          {modal_content}
        </Modal>
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
    login: (credentials) => dispatch(actions.loginUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
