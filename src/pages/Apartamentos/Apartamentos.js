import React from 'react';

import { Fundo, Content, Header, ColivingIMG } from './Styles';
import ColivingItem from './ColivingItem';
// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Fundo>
        <Content>
          <Header>
            <h1>COLIVINGS</h1>
          </Header>
          <ColivingIMG Col={1}>
            <ColivingItem Col={1} />
          </ColivingIMG>
          <ColivingIMG Col={2}>
            <ColivingItem Col={2} />
          </ColivingIMG>
          <ColivingIMG Col={3}>
            <ColivingItem Col={3} />
          </ColivingIMG>
        </Content>
      </Fundo>
    </>
  );
}
