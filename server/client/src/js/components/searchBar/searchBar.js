import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getURLParams,
  updateURLParams,
  redirectToURL,
} from '../../../shared/utility';
import * as actions from '../../../store/actions';
import SearchSuggestion from './searchSuggestion';

const utilizeFocus = () => {
  const ref = React.createRef();
  const setFocus = () => {
    ref.current && ref.current.focus();
  };
  return { setFocus, ref };
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.inputFocus = utilizeFocus();
  }

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

  renderSuggestions() {
    // if (!this.props.listings || !this.props.agents) {
    //   return '';
    // }

    let listings = '';
    if (this.state.term.length) {
      listings = !this.props.searchResults ? (
        ''
      ) : (
        <ul className="search_suggestions--listings">
          {this.props.searchResults.data.map((r) => (
            <SearchSuggestion key={r._id} data={r} />
          ))}
        </ul>
      );
    }

    return <div className="search_suggestions">{listings}</div>;
  }
  // componentDidUpdate() {
  //   // console.log('SearchBar - location', this.props.location);
  //   // console.log('SearchBar -  state', this.state);
  //   //Note: check why the term variable is constantely being set back to the URL Q before the redirect happens
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.onSearchSubmit();
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value }, () => {
      this.props.fetchSearchResults(this.state.term);
      // console.log(this.props.listings);
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
    // console.log(this.props.searchResults);
    return (
      <div className="search--input-box">
        <form onSubmit={this.onFormSubmit}>
          <input
            className="search--input truncate"
            type="text"
            ref={this.inputFocus.ref}
            placeholder="City, Neighborhood, Address, School, ZIP, Agent, MLS #"
            onChange={this.onInputChange}
            value={this.state.term}
          ></input>
          {this.state.term ? (
            <div className="search--input-btn btn cancel-btn">
              <i
                onClick={() =>
                  this.setState({ term: '' }, this.inputFocus.setFocus)
                }
                className="fas fa-times-circle"
                style={{ fontSize: '1.6rem' }}
              ></i>
            </div>
          ) : (
            ''
          )}
          <button className="search--input-btn btn primary">
            <i className="fas fa-search"></i>
          </button>
        </form>
        {this.renderSuggestions()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.search.searchResults,
  };
};

export default withRouter(connect(mapStateToProps, actions)(SearchBar));

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
