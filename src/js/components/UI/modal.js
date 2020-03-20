import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { withRouter } from 'react-router-dom';
import Button from '../UI/button';

class Auth extends Component {
  state = {
    is_opened: false
  };

  componentDidMount() {
    if (this.props.position === 'open') {
      this.toogleModal();
    }
  }
  toogleModal = () => {
    this.setState({ is_opened: !this.state.is_opened });
  };

  handleClickOutside = () => {
    //closing menu when user click outside component
    if (this.state.is_opened) {
      this.setState({ is_opened: false });
    }
  };

  render() {
    let is_active = {};
    is_active.className = this.state.is_opened ? 'is-active' : '';
    is_active.onClick = this.state.is_opened ? this.toogleModal : null;

    return (
      <div className='modal'>
        <div onClick={this.toogleModal}>
          <Button className={this.props.btnClass}>{this.props.btnText}</Button>
        </div>
        <div className={`backdrop ${is_active.className}`}>
          <div className={`modal--box ${is_active['className']}`}>
            <div className='container'>
              <div className='btn__closed' onClick={this.toogleModal}>
                <div href='#' className='btn__closed--animated closed-position'>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className='authentication'> {this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(onClickOutside(Auth));
