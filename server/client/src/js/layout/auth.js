import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Modal from '../components/UI/modal';
import Button from '../components/UI/button.js';
import Input from '../components/UI/form/input';

const initialFields = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

class Auth extends Component {
  state = {
    auth_window: {
      login: this.props.login,
      signup: this.props.signup,
    },
    fields: initialFields,
    errors: {},
    // showSpinner: false,
  };

  setInitialStateToProps = () => {
    this.setState({
      auth_window: {
        login: this.props.login,
        signup: this.props.signup,
      },
    });
  };
  toogleAuthOption = () => {
    this.setState({
      auth_window: {
        login: !this.state.auth_window.login || null,
        signup: !this.state.auth_window.signup || null,
      },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const valid = this.validateForm();

    if (valid) {
      if (this.state.auth_window.login) {
        const email = this.state.fields.email.trim();
        const password = this.state.fields.password.trim();
        this.props.loginUser({ email, password });
      } else if (this.state.auth_window.signup) {
        const firstname = this.state.fields.firstname.trim();
        const lastname = this.state.fields.lastname.trim();
        const email = this.state.fields.email.trim();
        const password = this.state.fields.password.trim();
        const passwordConfirm = this.state.fields.passwordConfirm.trim();
        this.props.signUpUser({
          firstname,
          lastname,
          email,
          password,
          passwordConfirm,
        });
      }
      // this.setState({ fields: initialFields, errors: {}, showSpinner: true });
    }
  };

  onChangedHandler = (e) => {
    const { name: fieldName, value } = e.target;
    const updateState = { ...this.state.fields, [fieldName]: value };
    const updatedError = { ...this.state.errors, [fieldName]: '' };
    this.setState({
      fields: updateState,
      errors: updatedError,
      // showSpinner: false,
    });
  };

  validateForm = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //check fistname and lastname for sign up window
    if (this.state.auth_window.signup) {
      // Firstaname
      if (!fields['firstname']) {
        formIsValid = false;
        errors['firstname'] = 'First Name cannot be empty.';
      }
      //Lastname
      if (!fields['lastname']) {
        formIsValid = false;
        errors['lastname'] = 'Last Name cannot be empty.';
      }

      if (!fields['passwordConfirm']) {
        formIsValid = false;
        errors['passwordConfirm'] = 'Password confirm cannot be empty.';
      }
      if (formIsValid && typeof fields['passwordConfirm'] !== 'undefined') {
        if (!(fields['passwordConfirm'].length > 7)) {
          formIsValid = false;
          errors['passwordConfirm'] =
            'Confirm password needs to be at least 8 characters.';
        }
      }

      if (formIsValid && !(fields['password'] === fields['passwordConfirm'])) {
        formIsValid = false;
        errors['passwordConfirm'] = 'Confirm password does not match';
      }
    }

    // Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Email cannot be empty.';
    }

    if (formIsValid && typeof fields['email'] !== 'undefined') {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields['email'])
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
    }

    //Password
    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Password cannot be empty.';
    }

    if (formIsValid && typeof fields['password'] !== 'undefined') {
      if (!(fields['password'].length > 7)) {
        formIsValid = false;
        errors['password'] =
          'Password confirm needs to be at least 8 characters.';
      }
    }

    this.setState({ errors });
    return formIsValid;
  };

  render() {
    // console.log('message', this.props.auth.message);
    let modal_content = this.state.auth_window.login ? (
      <div className="authentication-content">
        <h1>Welcome back!</h1>
        <form className="form" action="" onSubmit={this.onSubmitHandler}>
          <Input
            // className={this.state.errors.email ? 'error' : ''}
            name="email"
            type="text"
            placeholder="Email"
            value={this.state.fields.email}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.fields.password}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.password}
          />
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
        <form className="form" action="" onSubmit={this.onSubmitHandler}>
          <Input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={this.state.fields.firstname}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.firstname}
          />
          <Input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={this.state.fields.lastname}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.lastname}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.fields.email}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.fields.password}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.password}
          />
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            value={this.state.fields.passwordConfirm}
            onChange={this.onChangedHandler}
            errorMessage={this.state.errors.passwordConfirm}
          />

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
        <Modal
          btnClass={this.props.btnClass}
          btnText={this.props.btnText}
          onClose={this.setInitialStateToProps}
          message={this.props.auth.message}
        >
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
    loginUser: (credentials) => dispatch(actions.loginUser(credentials)),
    signUpUser: (user) => dispatch(actions.signUpUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../store/actions';
// import Modal from '../components/UI/modal';
// import Button from '../components/UI/button.js';

// class Auth extends Component {
//   state = {
//     auth_window: {
//       login: this.props.login,
//       signup: this.props.signup,
//     },
//   };

//   setInitialStateToProps = () => {
//     this.setState({
//       auth_window: {
//         login: this.props.login,
//         signup: this.props.signup,
//       },
//     });
//   };
//   toogleAuthOption = () => {
//     this.setState({
//       auth_window: {
//         login: !this.state.auth_window.login || null,
//         signup: !this.state.auth_window.signup || null,
//       },
//     });
//   };

//   handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value.trim();
//     const password = e.target.password.value.trim();
//     this.props.loginUser({ email, password });
//   };

//   render() {
//     let modal_content = this.state.auth_window.login ? (
//       <div className="authentication-content">
//         <h1>Welcome back!</h1>
//         <form className="form" action="" onSubmit={this.handleLogin}>
//           <input required name="email" placeholder="Email"></input>
//           <input
//             required
//             type="password"
//             name="password"
//             placeholder="Password"
//           ></input>
//           <Button className="btn primary" loading={this.props.auth.isFetching}>
//             Continue
//           </Button>
//           <div className="authentication-footer">
//             <span>New to Easy Homes?</span>
//             <button onClick={() => this.toogleAuthOption()}>
//               Create an account
//             </button>
//           </div>
//         </form>
//       </div>
//     ) : (
//       <div className="authentication-content">
//         <h1>Create an account</h1>
//         <form className="form" action="">
//           <input type="text" name="name" placeholder="First Name"></input>
//           <input type="text" name="lastname" placeholder="Last Name"></input>
//           <input type="email" name="email" placeholder="Email"></input>
//           <input type="password" name="password" placeholder="Password"></input>
//           <Button className="btn primary" loading={this.props.auth.isFetching}>
//             Continue
//           </Button>
//           <div className="authentication-footer">
//             <span>Already have an account?</span>
//             <button onClick={() => this.toogleAuthOption()}>Sign in</button>
//           </div>
//         </form>
//       </div>
//     );
//     return (
//       <div className="authentication">
//         <Modal
//           btnClass={this.props.btnClass}
//           btnText={this.props.btnText}
//           onClose={this.setInitialStateToProps}
//           message={this.props.auth.message}
//         >
//           {modal_content}
//         </Modal>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loginUser: (credentials) => dispatch(actions.loginUser(credentials)),
//     signUpUser: (user) => dispatch(actions.signUpUser(user)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Auth);
