import React, { Component } from 'react';
import Navbar from '../../components/UI/navbar';
import Button from '../../components/UI/button';
import SearchBar from '../../components/searchBar';
import { withRouter } from 'react-router-dom';

import { updateURLParams, getURLParams } from '../../../shared/utility';

const defaultType = 'for-sale';

class Header extends Component {
  state = { type: defaultType };
  toogleListingType = async () => {
    let newState = {};
    const listing_type =
      getURLParams('type', this.props.history.location) || 'for-sale';

    listing_type === 'for-sale'
      ? (newState.type = 'for-rent')
      : (newState.type = 'for-sale');
    await this.setState(newState);
    updateURLParams({ type: newState.type }, this.props.history);
  };

  setDefaultState() {
    updateURLParams({ type: defaultType }, this.props.history);
  }

  componentDidMount() {
    this.setDefaultState();
  }

  componentDidUpdate() {
    const currentType = getURLParams('type', this.props.history.location);
    if (!currentType.length) {
      this.setDefaultState();
    }
  }

  render() {
    return (
      <header className='header'>
        <div className='header__nav-box'>
          <Navbar />

          <div className='row'>
            <div className='header__content'>
              <h1 className='heading-primary'>Find your place.</h1>
              <div className='homepage__search '>
                <div className='homepage__search__type--select'>
                  <Button
                    className={`homepage__search__type--btn  ${
                      this.state.type === 'for-sale' ? 'is_active ' : ''
                    }`}
                    onClick={() => this.toogleListingType()}
                  >
                    Buy
                  </Button>
                </div>
                <div className='homepage__search__type--select'>
                  <Button
                    className={`homepage__search__type--btn  ${
                      this.state.type === 'for-rent' ? 'is_active' : ''
                    }`}
                    onClick={() => this.toogleListingType()}
                  >
                    Rent
                  </Button>
                </div>
                <SearchBar
                  onSearch={this.props.onSearchSubmited}
                  autoSearch={false}
                  // onSearch={searchTerm => this.props.setFilters({ searchTerm })}
                />
              </div>
              {/* End of header Content  */}
            </div>
          </div>
          {/* End of header  */}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

// import React, { Component } from 'react';
// import Navbar from '../../components/UI/navbar';
// import Button from '../../components/UI/button';
// import SearchBar from '../../components/searchBar';
// import { withRouter } from 'react-router-dom';

// import { updateURLParams, getURLParams } from '../../../shared/utility';

// class Header extends Component {
//   state = { type: 'for-sale' };
//   toogleListingType = (listing_type = 'for-rent') => {
//     let newState = {};
//     listing_type === 'for-sale'
//       ? (newState.type = 'for-rent')
//       : (newState.type = 'for-sale');
//     // await this.setState(newState);
//     updateURLParams({ type: newState.type }, this.props.history);
//     return listing_type;
//   };

//   getListingType = () => {
//     return getURLParams('type', this.props.history.location);
//   };

//   componentDidMount() {
//     this.toogleListingType(); // init type param on URL
//   }

//   componentDidUpdate() {
//     // const currentType = this.getListingType();
//     // if (!currentType.length) {
//     //   this.toogleListingType();
//     // }
//   }

//   render() {
//     return (
//       <header className='header'>
//         <div className='header__nav-box'>
//           <Navbar />

//           <div className='row'>
//             <div className='header__content'>
//               <h1 className='heading-primary'>Find your place.</h1>
//               <div className='homepage__search '>
//                 <div className='homepage__search__type--select'>
//                   <Button
//                     className={`homepage__search__type--btn  ${
//                       this.getListingType() === 'for-sale' ? 'is_active ' : null
//                     }`}
//                     onClick={() => this.toogleListingType('for-sale')}
//                   >
//                     Buy
//                   </Button>
//                   <Button
//                     className={`homepage__search__type--btn  ${
//                       this.getListingType() === 'for-rent' ? 'is_active' : null
//                     }`}
//                     onClick={() => this.toogleListingType('for-rent')}
//                   >
//                     Rent
//                   </Button>
//                 </div>
//                 <SearchBar
//                   onSearch={this.props.onSearchSubmited}
//                   autoSearch={false}
//                   // onSearch={searchTerm => this.props.setFilters({ searchTerm })}
//                 />
//               </div>
//               {/* End of header Content  */}
//             </div>
//           </div>
//           {/* End of header  */}
//         </div>
//       </header>
//     );
//   }
// }

// export default withRouter(Header);
