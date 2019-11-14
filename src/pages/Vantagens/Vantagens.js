import React from 'react';

import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaBed,
  FaHandshake,
  FaSave,
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
              <h1>Diferenciais</h1>
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
                <FaBed size={46} className="Item" />
                <h1>Studios e quartos individuais</h1>
              </GridItem>
              <GridItem>
                <FaHandshake size={46} className="Item" />
                <h1>Área de convivência</h1>
              </GridItem>
              <GridItem>
                <FaWrench size={46} className="Item" />
                <h1>Equipe de manutenção</h1>
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
                <FaSave size={46} className="Item" />
                <h1>Lavanderia</h1>
              </GridItem>
            </VantagensGrid>
          </QuadroVantagens>
        </QuadroVantagensSombra>
      </Content>
    </>
  );
}
