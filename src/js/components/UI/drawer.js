import React, { Component } from 'react';

class Drawer extends Component {
  state = {
    is_opened: false
  };

  componentDidMount() {
    if (this.props.position === 'open') {
      this.toogleDrawer();
    }
  }
  toogleDrawer = () => {
    this.setState({ is_opened: !this.state.is_opened });
  };

  render() {
    let is_active = {};
    is_active.className = this.state.is_opened ? 'is-active' : '';
    is_active.onClick = this.state.is_opened ? this.toogleDrawer : null;
    return (
      <div className='drawer'>
        <div
          className={`backdrop ${is_active.className}`}
          onClick={is_active.onClick}
        >
          <div className='mobile__menu--icon'>
            <i onClick={this.toogleDrawer} className=' fas fa-bars'></i>

            <a href='.' className='logo__link'>
              Easy Homes
            </a>
          </div>
        </div>
        <div className={`nav--box ${is_active['className']}`}>
          <div className='btn__closed' onClick={this.toogleDrawer}>
            <div href='#' className='btn__closed--animated closed-position'>
              <span></span>
              <span></span>
            </div>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Drawer;
