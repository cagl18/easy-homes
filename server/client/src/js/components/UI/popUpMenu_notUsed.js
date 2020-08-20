import React, { Component } from 'react';
import Button from './button';

import { withRouter } from 'react-router-dom';

class popUpMenu extends Component {
  state = {
    isMenuOpened: false,
  };
  componentDidMount() {
    if (this.props.position === 'open') {
      this.toogleDrawer();
    }
  }

  toogleDrawer = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened,
    });
  };

  render() {
    let is_active = {};
    is_active.className = this.state.isMenuOpened ? 'is-active' : '';
    is_active.onClick = this.state.isMenuOpened ? this.toogleDrawer : null;

    return (
      <div className={`filters ${is_active['className']}`}>
        {this.props.children}
        {/* content always visible props children shown before the toogle btn */}
        <span onClick={this.toogleDrawer}>
          <Button className={this.props.btnClassName}>
            {this.props.btnText}
          </Button>
        </span>

        <div className="popMenu">{this.props.menuContent}</div>
      </div>
    );
  }
}

export default withRouter(popUpMenu);
