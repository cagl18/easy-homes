import React, { Component } from 'react';

class sort extends Component {
  render() {
    const style = {
      //   backgroundColor: 'yellow',
      //   height: '200px',
      //   zIndex: '2000',
      //   position: 'absolute',
      //   padding: '2rem'
    };
    // filters is-active
    return (
      <span className=''>
        <span className='results__sorted_by'>Sort By Recommended</span>
        {/* <div className='advanceFilters ' style={style}>
          <ul>
            <li>price</li>
          </ul>
        </div> */}
      </span>
    );
  }
}

export default sort;
