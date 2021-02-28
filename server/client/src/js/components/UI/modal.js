import React, { Component } from 'react';
// import onClickOutside from 'react-onclickoutside';
// import { withRouter } from 'react-router-dom';
import Button from './button';
import Banner from './banner';

class Modal extends Component {
  state = {
    isModalOpened: false,
  };

  closeModal = () => {
    this.setState({ isModalOpened: false });
    this.props.onClose();
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
    console.log('this.state.isModalOpened', this.state.isModalOpened);
    let is_active = {};
    is_active.className = this.state.isModalOpened ? 'is-active' : '';
    is_active.onClick =
      this.state.isModalOpened === true ? this.closeModal : null;

    return (
      <div className="modal">
        <div onClick={this.openModal}>
          <Button ref={this.props.btnRef} className={this.props.btnClass}>
            {this.props.btnText}
          </Button>
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
              <Banner>{this.props.message}</Banner>
              <div className="authentication">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
