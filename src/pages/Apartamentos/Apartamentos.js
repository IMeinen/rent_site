import React from 'react';

import { Fundo, Content, Header, ColivingIMG } from './Styles';
import ColivingItem from './ColivingItem';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Fundo>
        <Header>
          <h1>COLIVINGS</h1>
        </Header>

        <ColivingItem Col={1} />
        <ColivingItem Col={2} />
        <ColivingItem Col={3} />
      </Fundo>
    </>
  );
}
