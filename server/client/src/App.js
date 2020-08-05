import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './js/layout/home';
import search from './js/layout/search';
import agents from './js/layout/agents';
import agentDetails from './js/components/agent/agentDetails';
import listingDetails from './js/components/listing/detailView/listingDetails';
import noFound from './js/layout/noFound';

import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/search/" exact component={search} />
          <Route path="/listings/:listingId" exact component={listingDetails} />
          <Route path="/agents/" exact component={agents} />
          <Route path="/agents/:id/" exact component={agentDetails} />
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
