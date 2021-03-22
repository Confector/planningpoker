import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter, Route } from 'react-router-dom';
import Start from './pages/start/Start';
import Poker from './pages/poker/Poker';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route path="/" exact={true} component={Start}/>
      <Route path ="/poker"  exact={true} component={Poker} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
