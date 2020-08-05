import React from 'react';
import Grid from '@material-ui/core/Grid';

const cities = () => {
  return (
    <div className='container'>
      <div className='market u-margin-top-big'>
        <h3 className='heading-quaternary'>Real Estate in Popular Cities</h3>
        <p className='paragraph subTitle u-margin-bottom-tiny'>
          Browse listings, view photos, and connect with an agent to schedulea
          viewing in some of our most popular cities.
        </p>
        <div className='row market__cities'>
          <Grid container spacing={1}>
            <Grid container spacing={1} item>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Manhattan Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>San Jose Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>West Hollywood Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Brooklyn Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Santa Monica Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Pasadena Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Los Angeles Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Malibu Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Menlo Park Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>San Francisco Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Santa Rosa Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Laguna Beach Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Washington DC Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Beverly Hills Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Sonoma Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Oakland Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Newport Beach Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Napa Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Queens Real Estate</a>
              </Grid>
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
                <a href='#manhattan'>Danville Real Estate</a>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default cities;
