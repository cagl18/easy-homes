import React from 'react';
import Grid from '@material-ui/core/Grid';

const market = () => {
  return (
    <div className='container'>
      <div className='market u-margin-top-medium'>
        <h3 className='heading-quaternary'>Real Estate Markets</h3>
        <p className='paragraph subTitle u-margin-bottom-tiny'>
          Find your next dream home in one of our markets across 16 states.
        </p>
        <div className='row market__cities'>
          <Grid container spacing={1}>
            <Grid
              container
              spacing={1}
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}
              xl={8}
            >
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>California Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Georgia Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>New York Real Estate</a>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Colorado Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Illinois Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Pennsylvania Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Connecticut Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Maryland Real Estate</a>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Tennessee Real Estate</a>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>DC Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Massachusetts Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Texas Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Florida Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>New Jersey Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <a href='#manhattan'>Virginia Real Estate</a>
              </Grid>
            </Grid>

            <Grid
              container
              direction='column'
              item
              xs={12}
              sm={3}
              md={4}
              lg={4}
              xl={4}
              spacing={1}
            >
              <Grid item>
                <a href='#manhattan'>Washington Real Estate</a>
              </Grid>
              <Grid item>
                <a href='#manhattan'>View All Markets</a>
              </Grid>
            </Grid>
          </Grid>

          {/* <div className='col-1-of-4 item'>
            <a href='#manhattan'>California Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Georgia Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>New York Real Estate</a>
          </div>

          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Washington Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Colorado Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Illinois Real Estate</a>
          </div>

          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Connecticut Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Maryland Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Tennessee Real Estate</a>
          </div>

          <div className='col-1-of-4 item'>
            <a href='#manhattan'>DC Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Massachusetts Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Texas Real Estate</a>
          </div>

          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Florida Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>New Jersey Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Virginia Real Estate</a>
          </div>

          <div className='col-1-of-4 item'>
            <a href='#manhattan'>Pennsylvania Real Estate</a>
          </div>
          <div className='col-1-of-4 item'>
            <a href='#manhattan'>View All Markets</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default market;
