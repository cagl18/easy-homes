import React from 'react';
// import { connect } from 'react-redux';

import Listing from '../components/listing';
import Grid from '@material-ui/core/Grid';

const listings = props => {
  const listings = props.data
    ? props.data.map((listing_data, i) => (
        <Grid key={listing_data.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
          <Listing data={listing_data} />
        </Grid>
      ))
    : null;

  return (
    <div className='listings__card--wrapper'>
      <Grid container spacing={3}>
        {listings}
      </Grid>
    </div>
  );
};

export default listings;
