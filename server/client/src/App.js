import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './js/layout/home';
import search from './js/layout/search';
import account from './js/layout/account/account';
import savedItems from './js/layout/savedItems/SavedItems';
import agents from './js/layout/agents';
import agentDetails from './js/components/agent/agentDetails';
import listingDetails from './js/components/listing/detailView/listingDetails';
import noFound from './js/layout/noFound';
import Loader from './js/components/UI/loader';
import './sass/main.scss';

{
  /* <Suspense fallback={<Loader />}></Suspense>; */
}
function App() {
  return (
    <div className="App">
      <div>
        <Switch>
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
