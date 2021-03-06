import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './js/layout/home';
import search from './js/layout/search';
import account from './js/layout/account/account';
import savedItems from './js/layout/savedItems/SavedItems';
import agents from './js/layout/agents';
import agentDetails from './js/components/agent/agentDetails';
import listingDetails from './js/components/listing/detailView/listingDetails';
import noFound from './js/layout/noFound';
import './sass/main.scss';
// import React, { Component, Suspense, lazy } from 'react';
// import Loader from './js/components/UI/loader';

// const home = lazy(() => import('./js/layout/home'));
// const search = lazy(() => import('./js/layout/search'));
// const account = lazy(() => import('./js/layout/account/account'));
// const savedItems = lazy(() => import('./js/layout/savedItems/SavedItems'));
// const agents = lazy(() => import('./js/layout/agents'));
// const agentDetails = lazy(() => import('./js/components/agent/agentDetails'));
// const listingDetails = lazy(() =>
//   import('./js/components/listing/detailView/listingDetails')
// );

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          {/* <Suspense fallback={<Loader />}> */}
          <Route path="/" exact component={home} />

          <Route path="/search/" exact component={search} />
          <Route
            path="/listings/:slug/:listingId"
            exact
            component={listingDetails}
          />
          <Route path="/agents/" exact component={agents} />
          <Route path="/agents/:slug/:id" exact component={agentDetails} />
          <Route path="/account/" exact component={account} />
          <Route path="/workspace/" exact component={savedItems} />
          {/* </Suspense> */}
          <Route component={noFound} />

          {/* <Route path='/streams/new' exact component={streams.streamCreate} />
        <Route path='/streams/edit' exact component={streams.streamEdit} />
        <Routey
          path='/streams/delete'
          exact
          component={streams.streamDelete}
        />
        <Route path='/streams/show' exact component={streams.streamShow} /> */}
          {/* <div>StreamHubs</div> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
