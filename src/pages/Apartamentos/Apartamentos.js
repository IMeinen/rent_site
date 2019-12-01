import React from 'react';

import { Fundo, Colivings, Header, ColivingIMG } from './Styles';
import ColivingItem from './ColivingItem';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
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
    </>
  );
}
