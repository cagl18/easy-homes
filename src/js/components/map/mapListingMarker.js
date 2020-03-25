import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import { getPriceLabel } from '../../layout/search/search_utils';

class mapListingMarker extends Component {
  state = {
    isCardOpened: false
  };

  toogleDrawer = () => {
    this.setState({ isCardOpened: !this.state.isCardOpened });
  };
  handleClickOutside = () => {
    //closing menu when user click outside component
    if (this.state.isCardOpened) {
      this.setState({ isCardOpened: false });
    }
  };
  render() {
    let is_active = {};
    is_active.className = this.state.isCardOpened ? 'is-active' : '';
    is_active.onClick = this.state.isCardOpened ? this.toogleDrawer : null;
    return (
      <div className='mapMarker'>
        <button
          className={`pin-marker ${is_active.className}`}
          onClick={this.toogleDrawer}
        >
          {getPriceLabel(this.props.data.price)}
        </button>

        <div className={`mapMarker__card ${is_active.className}`}>
          <div className='card__body'>
            <Link
              to={`listing/${this.props.data.id}`}
              className='card-img'
              style={{
                backgroundImage: `url(${this.props.data.img})`
              }}
              target='_blank'
            />
            <div className='card_details'>
              <h3>
                <Link to={`listing/${this.props.data.id}`} target='_blank'>
                  {this.props.data.address}
                </Link>
              </h3>
              <p>${Number(this.props.data.price).toLocaleString()}</p>
              <div className='card_details--specs'>
                <div>{this.props.data.beds} BD</div>
                <div>{this.props.data.baths} BA</div>
                <div>
                  {Number(this.props.data.sqft) === 0
                    ? '-'
                    : Number(this.props.data.sqft).toLocaleString()}
                  {' SF'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(mapListingMarker);
