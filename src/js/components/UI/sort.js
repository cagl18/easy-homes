import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import { withRouter } from 'react-router-dom';
// import popUpMenu from './popUpMenu_notUsed';

import { updateURLParams } from '../../../shared/utility';

const sortFields = [
  'recommended',
  'price',
  'beds',
  'baths',
  'address',
  'neighborhood'
];

class sort extends Component {
  state = { isOptionsMenuOpened: false, sortBy: 'price', sortDirection: 'asc' };

  componentDidMount = () => {
    this.changeSortBy();
  };
  toogleMenu = () => {
    this.setState({
      isOptionsMenuOpened: !this.state.isOptionsMenuOpened
    });
  };
  setSortDirection = newSortDir => {
    this.setState({ sortDirection: newSortDir }, this.changeSortBy);
  };
  changeSortBy = (
    sortBy = this.state.sortBy,
    sortDirection = this.state.sortDirection
  ) => {
    // console.log('sortBy', sortBy, 'sortDirection', sortDirection);
    const sortByURLParam = sortDirection
      ? `${sortDirection}-${sortBy}`
      : sortBy;

    updateURLParams({ sort: sortByURLParam }, this.props.history);
    this.setState({ sortBy, sortDirection });
    this.props.onChange(); //function reference to sorting data
  };
  handleClickOutside = () => {
    //closing menu when user click outside component
    if (this.state.isOptionsMenuOpened) {
      this.setState({ isOptionsMenuOpened: false });
    }
  };

  render() {
    // filters is-active
    let is_active = {};
    is_active.className = this.state.isOptionsMenuOpened ? 'is-active' : '';

    const sortOptions = sortFields.map((val, index) => (
      <p
        key={index}
        onChange={this.props.onChange}
        onClick={() => this.changeSortBy(val)}
      >
        {val}
        {this.state.sortBy === val ? (
          <i style={{ marginLeft: '1.5rem' }} className='fas fa-check'></i>
        ) : (
          ''
        )}
      </p>
    ));
    return (
      <span className={`sort filters ${is_active['className']}`}>
        <span className='results__sorted_by' onClick={this.toogleMenu}>
          Sort By {this.state.sortBy} <i className='fas fa-chevron-down'></i>
        </span>

        <div className='popUpMenu advanceFilters'>
          <div className='advanceFilters__section'>
            <div className='advanceFilters__item'>
              <h5 className='sort-direction'>
                <span
                  className={
                    this.state.sortDirection === 'asc' ? 'is-active' : ''
                  }
                  onClick={() => this.setSortDirection('asc')}
                >
                  Ascending
                </span>
                <span
                  className={
                    this.state.sortDirection === 'desc' ? 'is-active' : ''
                  }
                  onClick={() => this.setSortDirection('desc')}
                >
                  Descending
                </span>
              </h5>
              {sortOptions}
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default withRouter(onClickOutside(sort));
