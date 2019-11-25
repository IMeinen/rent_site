import React from 'react';

import Cabec from './Cabec';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Apartamentos from '../Apartamentos/Apartamentos';
import Vantagens from '../Vantagens/Vantagens';
import Contato from '../Contato/Contato';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Cabec />
      <Landing />
      <Home />

      <Vantagens />

      <Apartamentos />

      <Contato />
    </>
  );
}
