import React from 'react';

import Landing from '../Landing/Landing';
import Home from '../Home/Home';

import Apartamentos from '../Apartamentos/Apartamentos';
import Vantagens from '../Vantagens/Vantagens';
import Contato from '../Contato/Contato';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Landing />
      <Home />

      <Vantagens />

      <Apartamentos />

      <Contato />
    </>
  );
}
