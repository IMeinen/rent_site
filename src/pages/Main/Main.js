import React from 'react';

import Cabec from './Cabec';
import Landing from '../Landing/Landing';
import Home from '../Home/Home';
import Vantagens from '../Vantagens/Vantagens';
import Apartamentos from '../Apartamentos/Apartamentos';
import Contato from '../Contato/Contato';
import Galeria from '../Galeria/Galeria';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Cabec />
      <Landing />
      <Home />
      <Vantagens />
      <Apartamentos />
      <Galeria />
      <Contato />
    </>
  );
}
