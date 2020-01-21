import React, { Component } from 'react';

class Drawer extends Component {
  state = {
    is_opened: false
  };

  toogleDrawer = () => {
    this.setState({ is_opened: !this.state.is_opened });
  };

  render() {
    const is_active = this.state.is_opened ? 'is-active' : '';
    return (
      <div className={`backdrop ${is_active}`}>
        <div className='mobile__menu--icon'>
          <i onClick={this.toogleDrawer} className=' fas fa-bars'></i>

          <a href='.' className='logo__link' style={{ color: 'white' }}>
            Easy Homes
          </a>
        </div>
        <div className={`nav--box ${is_active}`}>
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
