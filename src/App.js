import React from 'react';
import { Switch, Route } from 'react-router-dom';
import home from './js/layout/home';
import search from './js/layout/search';

import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <div>
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/search/' exact component={search} />
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
