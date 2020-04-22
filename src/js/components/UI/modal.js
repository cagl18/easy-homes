import React, { Component } from 'react';
// import onClickOutside from 'react-onclickoutside';
// import { withRouter } from 'react-router-dom';
import Button from '../UI/button';

class Auth extends Component {
  state = {
    isModalOpened: false,
  };

  componentDidMount() {
    // console.log('modal state is_opened', this.state.isModalOpened);
    // if (this.props.position === 'open') {
    //   this.closeModal();
    // }
  }
  componentDidUpdate() {
    // console.log('modal state is_opened', this.state.isModalOpened);
    // console.log('modal props', this.props);
  }
  closeModal = () => {
    this.setState({ isModalOpened: false });
  };

  openModal = () => {
    this.setState({ isModalOpened: true });
  };

  // handleClickOutside = () => {
  //   //closing menu when user click outside component
  //   if (this.state.isModalOpened) {
  //     this.closeModal();
  //   }
  // };

  render() {
    let is_active = {};
    is_active.className = this.state.isModalOpened ? 'is-active' : '';
    is_active.onClick = this.state.isModalOpened ? this.closeModal : null;

    return (
      <div className="modal">
        <div onClick={this.openModal}>
          <Button className={this.props.btnClass}>{this.props.btnText}</Button>
        </div>
        <div className={`backdrop ${is_active.className}`}>
          <div className={`modal--box ${is_active['className']}`}>
            <div className="container">
              <div className="btn__closed" onClick={this.closeModal}>
                <div href="#" className="btn__closed--animated closed-position">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="authentication">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
