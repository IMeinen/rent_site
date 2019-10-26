import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Vantagens from './pages/Vantagens/Vantagens';
import Apartamentos from './pages/Apartamentos/Apartamentos';
import Contato from './pages/Contato/Contato';
import Galeria from './pages/Galeria/Galeria';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/vantagens" component={Vantagens} />
        <Route path="/apartamentos" component={Apartamentos} />
        <Route path="/contato" component={Contato} />
        <Route path="/galeria" component={Galeria} />
      </Switch>
    </BrowserRouter>
  );
}
