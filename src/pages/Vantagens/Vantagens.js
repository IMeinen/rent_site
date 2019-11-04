import React from 'react';

import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaHandHoldingHeart,
  FaHandshake,
  FaSignInAlt,
  FaGlassMartiniAlt,
  FaQuidditch,
  FaWrench,
  FaParachuteBox,
  FaWifi,
  FaCouch,
  FaFileInvoiceDollar,
} from 'react-icons/fa';

import {
  Content,
  QuadroVantagens,
  QuadroVantagensSombra,
  Header,
  VantagensGrid,
  GridItem,
} from './Styles';

export default function Main() {
  return (
    <>
      <Content>
        <QuadroVantagensSombra>
          <QuadroVantagens>
            <Header>
              <h1>VANTAGENS</h1>
            </Header>
            <VantagensGrid>
              <GridItem>
                <FaDollarSign size={46} className="Item" />

                <h1>Economia</h1>
              </GridItem>
              <GridItem>
                <FaMapMarkerAlt size={46} className="Item" />
                <h1>Localização privilegiada</h1>
              </GridItem>
              <GridItem>
                <FaWifi size={46} className="Item" />
                <h1>Internet wi-fi de alta velocidade</h1>
              </GridItem>
              <GridItem>
                <FaCouch size={46} className="Item" />
                <h1>Apartamentos mobiliados</h1>
              </GridItem>
              <GridItem>
                <FaFileInvoiceDollar size={46} className="Item" />
                <h1>Única conta para pagar</h1>
              </GridItem>
              <GridItem>
                <FaHandHoldingHeart size={46} className="Item" />
                <h1>Conforto</h1>
              </GridItem>
              <GridItem>
                <FaHandshake size={46} className="Item" />
                <h1>Networking</h1>
              </GridItem>
              <GridItem>
                <FaWrench size={46} className="Item" />
                <h1>Suporte</h1>
              </GridItem>
              <GridItem>
                <FaQuidditch size={46} className="Item" />
                <h1>Faxina semanal inclusa</h1>
              </GridItem>
              <GridItem>
                <FaParachuteBox size={46} className="Item" />
                <h1>Melhoria contínua</h1>
              </GridItem>
              <GridItem>
                <FaGlassMartiniAlt size={46} className="Item" />
                <h1>Eventos</h1>
              </GridItem>
              <GridItem>
                <FaSignInAlt size={46} className="Item" />
                <h1>Sem burocracia</h1>
              </GridItem>
            </VantagensGrid>
          </QuadroVantagens>
        </QuadroVantagensSombra>
      </Content>
    </>
  );
}
