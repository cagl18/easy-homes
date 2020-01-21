import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import home from './js/layout/home';
import search from './js/layout/search';

// import FlexBox from './js/layout/flexboxExample';
// import CssGridExample from './js/layout/cssGridExample';
import './sass/main.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={home} />
          <Route path='/search' exact component={search} />
          {/* <Route path='/streams/new' exact component={streams.streamCreate} />
        <Route path='/streams/edit' exact component={streams.streamEdit} />
        <Routey
          path='/streams/delete'
          exact
          component={streams.streamDelete}
        />
        <Route path='/streams/show' exact component={streams.streamShow} /> */}
          {/* <div>StreamHubs</div> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
