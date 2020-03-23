import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
  getURLParams,
  updateURLParams,
  redirectToURL
} from '../../shared/utility';

class SearchBar extends Component {
  state = { term: '' };

  redirectToSearchPage = () => {
    const searchTerm = getURLParams('q', this.props.location);
    // console.log('SearchBar - redirectToSearchPage --> searchTerm', searchTerm);
    if (searchTerm.length) {
      redirectToURL('/search', this.props.history);
    }
  };

  componentDidMount() {
    const path = this.props.location.pathname;
    if (path.includes('search')) {
      const prevSearchParam = getURLParams('q', this.props.location);
      this.setState({ term: prevSearchParam }); //setting search input value for URL (for redirects)
    }
  }

  // componentDidUpdate() {
  //   // console.log('SearchBar - location', this.props.location);
  //   // console.log('SearchBar -  state', this.state);
  //   //Note: check why the term variable is constantely being set back to the URL Q before the redirect happens
  // }

  onFormSubmit = e => {
    e.preventDefault();
    this.onSearchSubmit();
  };
  onInputChange = e => {
    this.setState({ term: e.target.value }, () => {
      if (this.props.autoSearch) {
        this.onSearchSubmit(this.state.term);
      }
    });
  };
  onSearchSubmit = async (term = this.state.term) => {
    await updateURLParams({ q: term }, this.props.history);

    if (!this.props.onSearch) {
      this.redirectToSearchPage();
    } else {
      this.props.onSearch(term);
    }
  };

  render() {
    return (
      <div className='search--input-box'>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='search--input truncate'
            type='text'
            placeholder='City, Neighborhood, Address, School, ZIP, Agent, MLS #'
            onChange={this.onInputChange}
            value={this.state.term}
          ></input>

          <button className='search--input-btn btn primary'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);

// class SearchBar extends Component {
//   state = { term: '' };
//   onFormSubmit = e => {
//     e.preventDefault();
//     this.onSearchSubmit();
//   };
//   onInputChange = async e => {
//     await this.setState({ term: e.target.value });
//     if (this.props.autoSearch) {
//       this.onSearchSubmit(this.state.term);
//     }
//   };
//   onSearchSubmit = (term = this.state.term) => {
//     updateURLParams({ q: this.state.term }, this.props.history);
//     this.props.onSearch(term);
//   };

//   componentDidMount() {
//     const path = this.props.location.pathname;
//     if (path.includes('search')) {
//       const prevSearchParam = getURLParams('q', this.props.location);
//       this.setState({ term: prevSearchParam }); //setting search input value for redirects
//     }
//   }
//   render() {
//     return (
//       <div className='search--input-box'>
//         <form onSubmit={this.onFormSubmit}>
//           <input
//             className='search--input truncate'
//             type='text'
//             placeholder='City, Neighborhood, Address, School, ZIP, Agent, MLS #'
//             onChange={this.onInputChange}
//             value={this.state.term}
//           ></input>

//           <button className='search--input-btn btn primary'>
//             <i className='fas fa-search'></i>
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(SearchBar);
