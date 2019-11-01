import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';

import Apartamentos from './pages/Apartamentos/Apartamentos';
import Contato from './pages/Contato/Contato';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />

        <Route path="/apartamentos" component={Apartamentos} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}
