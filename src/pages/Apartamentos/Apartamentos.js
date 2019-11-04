import React from 'react';

import {
  Fundo,
  Content,
  Header,
  ContainerApart,
  ContainerApartRightL,
  ContainerApartRightR,
  Descript,
  Efeitotransparente,
} from './Styles';

// import { Container } from './styles';

export default function Main() {
  return (
    <>
      <Fundo>
        <Content>
          <Header>
            <h1>COLIVINGS</h1>
          </Header>
          <ContainerApart>
            <ContainerApartRightL>
              <Efeitotransparente>
                <h1>RIACHUELO</h1>
              </Efeitotransparente>
            </ContainerApartRightL>
            <ContainerApartRightR>
              <Descript>
                <h1>Rua Riachuelo, 714</h1>
                <h2>Total de quartos: 16</h2>
                <h2>Quartos disponíveis: 3</h2>
              </Descript>
            </ContainerApartRightR>
          </ContainerApart>
          <ContainerApart>
            <ContainerApartRightR>
              <Descript />
            </ContainerApartRightR>
            <ContainerApartRightL>
              <Efeitotransparente />
            </ContainerApartRightL>
          </ContainerApart>
          <ContainerApart>
            <ContainerApartRightL>
              <Efeitotransparente />
            </ContainerApartRightL>
            <ContainerApartRightR>
              <Descript />
            </ContainerApartRightR>
          </ContainerApart>
          <ContainerApart>
            <ContainerApartRightR>
              <Descript />
            </ContainerApartRightR>
            <ContainerApartRightL>
              <Efeitotransparente />
            </ContainerApartRightL>
          </ContainerApart>
          <ContainerApart>
            <ContainerApartRightL>
              <Efeitotransparente />
            </ContainerApartRightL>
            <ContainerApartRightR>
              <Descript />
            </ContainerApartRightR>
          </ContainerApart>
          <ContainerApart>
            <ContainerApartRightR>
              <Descript />
            </ContainerApartRightR>
            <ContainerApartRightL>
              <Efeitotransparente />
            </ContainerApartRightL>
          </ContainerApart>
        </Content>
      </Fundo>
    </>
  );
}
