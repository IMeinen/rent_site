import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';

import Colivings from './pages/Colivings/Colivings';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/colivings/:id" children={<Colivings />} />
      </Switch>
    </BrowserRouter>
  );
}
