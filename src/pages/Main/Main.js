import React from 'react';

import Cabec from './Cabec';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';

import Apartamentos from '../Apartamentos/Apartamentos';
import Contato from '../Contato/Contato';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Cabec />
      <Landing />
      <Home />

      <Apartamentos />

      <Contato />
    </>
  );
}
