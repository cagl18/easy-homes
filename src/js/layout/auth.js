import React, { Component } from 'react';
import Modal from '../components/UI/modal';

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

  render() {
    let modal_content = this.state.auth_window.login ? (
      <div className="authentication-content">
        <h1>Welcome back!</h1>
        <form className="form" action="">
          <input name="email" placeholder="Email"></input>
          <button className="btn primary">Continue</button>
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
          <button className="btn primary">Continue</button>
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

export default Auth;

// import React, { Component } from 'react';
// import onClickOutside from 'react-onclickoutside';
// import { withRouter } from 'react-router-dom';

// class Auth extends Component {
//   state = {
//     is_opened: false,
//     auth_window: { login: true, signup: false }
//   };

//   componentDidMount() {
//     if (this.props.position === 'open') {
//       this.toogleModal();
//     }
//     this.setState({
//       auth_window: { login: this.props.login, signup: this.props.signup }
//     });
//   }
//   toogleModal = () => {
//     this.setState({ is_opened: !this.state.is_opened });
//   };

//   toogleAuthOption = () => {
//     this.setState({
//       auth_window: {
//         login: !this.state.auth_window.login,
//         signup: !this.state.auth_window.signup
//       }
//     });
//   };

//   handleClickOutside = () => {
//     //closing menu when user click outside component
//     if (this.state.is_opened) {
//       this.setState({ is_opened: false });
//     }
//   };

//   render() {
//     let is_active = {};
//     is_active.className = this.state.is_opened ? 'is-active' : '';
//     is_active.onClick = this.state.is_opened ? this.toogleModal : null;

//     let modal_content = this.state.auth_window.login ? (
//       <div className='authentication-content'>
//         <h1>Welcome back!</h1>
//         <form className='form' action=''>
//           <input name='email' placeholder='Email'></input>
//           <button className='btn primary'>Continue</button>
//           <div className='authentication-footer'>
//             <span>New to Easy Homes?</span>
//             <button onClick={() => this.toogleAuthOption()}>
//               Create an account
//             </button>
//           </div>
//         </form>
//       </div>
//     ) : (
//       <div className='authentication-content'>
//         <h1>Create an account</h1>
//         <form className='form' action=''>
//           <input type='text' name='name' placeholder='First Name'></input>
//           <input type='text' name='lastname' placeholder='Last Name'></input>
//           <input type='email' name='email' placeholder='Email'></input>
//           <input type='password' name='password' placeholder='Password'></input>
//           <button className='btn primary'>Continue</button>
//           <div className='authentication-footer'>
//             <span>Already have an account?</span>
//             <button onClick={() => this.toogleAuthOption()}>Sign in</button>
//           </div>
//         </form>
//       </div>
//     );
//     return (
//       <div className='authentication modal'>
//         <div onClick={this.toogleModal}>{this.props.children}</div>
//         <div className={`backdrop ${is_active.className}`}>
//           <div className={`modal--box ${is_active['className']}`}>
//             <div className='container'>
//               <div className='btn__closed' onClick={this.toogleModal}>
//                 <div href='#' className='btn__closed--animated closed-position'>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//               <div className='authentication'>{modal_content}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(onClickOutside(Auth));
