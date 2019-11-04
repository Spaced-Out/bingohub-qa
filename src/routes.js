import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
import List from './List';
import Creator from './Creator';
import Game from './Game';
import Editor from './Editor';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={List} />
    <Route path="new" component={Creator} />
    <Route path=":gameId" component={Game} />
    <Route path=":gameId/edit" component={Editor} />
  </Route>
);

