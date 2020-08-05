import React, { Component } from 'react';
import Pagination from './pagination';
// import Pagination from 'react-js-pagination';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';

class itemsGridList extends Component {
  state = {
    currentPage: 1,
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
  }

  paginate = (currentPage) => {
    // Change page
    this.setState({ currentPage });
  };

  render() {
    if (this.loading) {
      return <h2>Loading...</h2>;
    }

    const itemsShownPerPage = this.props.itemsShownPerPage || 8;
    // Get current properties
    const indexOfLastItemInPage = this.state.currentPage * itemsShownPerPage;
    const indexOfFirstItemInPage = indexOfLastItemInPage - itemsShownPerPage;
    const allItems = this.props.data || [];
    let currentItemsInPage = allItems.slice(
      indexOfFirstItemInPage,
      indexOfLastItemInPage
    );

    currentItemsInPage = currentItemsInPage.map((item_data, i) => (
      <Grid
        key={item_data.id}
        item
        xs={this.props.xs || 12}
        sm={this.props.sm || 6}
        md={this.props.md || 4}
        lg={this.props.lg || 4}
        xl={this.props.xl || 4}
      >
        {this.props.children
          ? React.cloneElement(this.props.children, { data: item_data })
          : ''}
      </Grid>
    ));

    return (
      <div className="listings__card">
        <div className="listings__card--wrapper">
          <Grid container spacing={this.props.spacing || 3}>
            {currentItemsInPage.length ? (
              currentItemsInPage
            ) : (
              <p>0 {this.props.listName} matched your search criteria</p>
            )}
          </Grid>
        </div>

        <Pagination
          itemsPerPage={itemsShownPerPage}
          totalItems={allItems.length}
          paginate={this.paginate}
          currentPage={this.state.currentPage}
        ></Pagination>
      </div>
    );
  }
}

export default itemsGridList;

// import React, { Component } from 'react';

// import Listing from './listing';
// import Pagination from '../../components/UI/pagination';

// import ReactDOM from 'react-dom';
// import Grid from '@material-ui/core/Grid';

// class listings extends Component {
//   state = {
//     currentPage: 1,
//   };

//   componentDidMount() {
//     ReactDOM.findDOMNode(this).scrollIntoView();
//   }

//   paginate = (currentPage) => {
//     // Change page
//     this.setState({ currentPage });
//   };

//   render() {
//     if (this.loading) {
//       return <h2>Loading...</h2>;
//     }

//     const itemsShownPerPage = this.props.itemsShownPerPage || 8;
//     // Get current properties
//     const indexOfLastProperty = this.state.currentPage * itemsShownPerPage;
//     const indexOfFirstProperty = indexOfLastProperty - itemsShownPerPage;
//     const allProperties = this.props.data;
//     let currentProperties = allProperties.slice(
//       indexOfFirstProperty,
//       indexOfLastProperty
//     );

//     currentProperties = currentProperties.map((listing_data, i) => (
//       <Grid key={listing_data.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
//         <Listing data={listing_data} />
//       </Grid>
//     ));

//     return (
//       <div className="listings__card">
//         <div className="listings__card--wrapper">
//           <Grid container spacing={3}>
//             {currentProperties.length ? (
//               currentProperties
//             ) : (
//               <p>0 listings matched your search criteria</p>
//             )}
//           </Grid>
//         </div>
//         <Pagination
//           itemsPerPage={this.props.itemsShownPerPage}
//           totalItems={allProperties.length}
//           paginate={this.paginate}
//           currentPage={this.state.currentPage}
//         ></Pagination>
//       </div>
//     );
//   }
// }

// export default listings;
