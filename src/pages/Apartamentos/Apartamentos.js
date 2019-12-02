import React from 'react';

import { Element } from 'react-scroll';

import { Fundo, Colivings, Header, ColivingIMG } from './Styles';
import ColivingItem from './ColivingItem';
// import { Container } from './styles';

export default function Main() {
  return (
    <Element
      name="Apartamentos"
      style={{
        paddingTop: '90px',
      }}
    >
      <Fundo>
        <Header>
          <h1>COLIVINGS</h1>
        </Header>
        <Colivings>
          <ColivingItem Col={1} />
          <ColivingItem Col={2} />
          <ColivingItem Col={3} />
        </Colivings>
      </Fundo>
    </Element>
  );
}
