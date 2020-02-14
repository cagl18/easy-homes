import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getURLParams, updateURLParams } from '../../shared/utility';

class SearchBar extends Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault();
    this.onSearchSubmit();
  };
  onInputChange = async e => {
    await this.setState({ term: e.target.value });
    if (this.props.autoSearch) {
      this.onSearchSubmit(this.state.term);
    }
  };
  onSearchSubmit = (term = this.state.term) => {
    updateURLParams({ q: this.state.term }, this.props.history);
    this.props.onSearch(term);
  };

  componentDidMount() {
    const path = this.props.location.pathname;
    if (path.includes('search')) {
      const prevSearchParam = getURLParams('q', this.props.location);
      this.setState({ term: prevSearchParam }); //setting search input value for redirects
    }
  }
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

export default withRouter(SearchBar);
