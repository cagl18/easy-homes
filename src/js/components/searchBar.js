import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };
  onFormSubmit = e => {
    e.preventDefault();
    this.onSearchSubmit();
  };
  onInputChange = e => this.setState({ term: e.target.value });
  onSearchSubmit = e => {
    //save keyword on url parameter or pass it as prop
  };
  render() {
    return (
      <div className='homepage__search--input-box'>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='homepage__search--input'
            type='text'
            placeholder='City, Neighborhood, Address, School, ZIP, Agent, MLS #'
            onChange={this.onInputChange}
            value={this.state.term}
          ></input>
          {console.log(this.state.term)}
          <button
            className='homepage__search--input-btn primary'
            // onClick={this.onSearchSubmit}
          >
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
