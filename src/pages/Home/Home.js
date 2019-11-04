import React from 'react';

import { Container, Centro, Description, Botao } from './HomeStyles';

export default function Main() {
  return (
    <>
      <Container>
        <Centro />
        <Description>
          <h1>Viva de um novo jeito</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            viverra sem iaculis metus porta rhoncus. Etiam faucibus quam ac nisl
            dictum, vitae tincidunt lorem posuere. Donec sed velit eget orci
            convallis viverra. Nulla facilisi. Praesent id nisl ullamcorper,
            ullamcorper mauris ut, convallis velit. Vivamus non arcu ut nisl
            tincidunt pharetra. Proin in nunc ut enim accumsan iaculis sed nec
            lacus.
          </p>
        </Description>
        <Botao>
          <h1>Agende já sua visita!</h1>
        </Botao>
      </Container>
    </>
  );
}
