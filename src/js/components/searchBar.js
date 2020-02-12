import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SearchBar extends Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault();
    this.onSearchSubmit();
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
    this.onSearchSubmit(e.target.value);
  };
  onSearchSubmit = (term = this.state.term) => {
    this.props.onSearch(term);
    //save keyword on url parameter or pass it as prop
  };
  render() {
    return (
      <div className='search--input-box'>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='search--input'
            type='text'
            placeholder='City, Neighborhood, Address, School, ZIP, Agent, MLS #'
            onChange={this.onInputChange}
            value={this.state.term}
          ></input>

          <button className='search--input-btn primary'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filtersParams: state.search.filtersParams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilters: filters => dispatch(actions.setListingsFilter(filters))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
