import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
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
import { Element } from 'react-scroll';
import {
  Content,
  QuadroVantagens,
  Header,
  VantagensGrid,
  GridItem,
  MyModal,
} from './Styles';

export default function Main() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const Desc = [
    ['Economia', 'Quartos a partir de R$700 ...'],
    [
      'Localização privilegiada',
      'Todos os apartamentos com localizados perto de mercados,bares ...',
    ],
    [
      'Internet wi-fi de alta velocidade',
      'Todos os Colivings são equipados com internet wi-fi de alta velocidade ...',
    ],
    [
      'Apartamentos mobiliados',
      'Todos os quartos mobiliados com cama,roupeiro e ...',
    ],
    [
      'Única conta para pagar',
      'Todas as despesas incluidas em uma unica conta (água,luz,) ...',
    ],
    ['Studios e quartos individuais', 'Voce pode escolher entre quartos e ...'],
    ['Área de convivência', 'Todos os colivings tem uma área de conv...'],
    ['Equipe de manutenção', 'A Rent conta com uma equipe de suporte ...'],
    [
      'Limpeza semanal inclusa',
      'Limpeza semanal em todos os quartos e duas vezes por semana na casa ...',
    ],
    ['Melhoria Continua', 'Investimentos constantes na melhoria dos colivings'],
    ['Eventos', 'Eventos para integrar a comunidade dos colivings ...'],
    ['Lavanderia', 'Todos os Colivings equipados com lavanderia ...'],
  ];
  return (
    <Element
      name="Vantagens"
      style={{
        paddingTop: '80px',
      }}
    >
      <Content>
        <QuadroVantagens>
          <Header>
            <h1>DIFERENCIAIS</h1>
          </Header>
          <VantagensGrid>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(0);
                console.log(index);
              }}
            >
              <FaDollarSign className="Item" />

              <h1>Economia</h1>
            </GridItem>
            <Rodal visible={show} onClose={() => setShow(false)}>
              <MyModal>
                <h1>{Desc[index][0]}</h1>
                <p> {Desc[index][1]}</p>
              </MyModal>
            </Rodal>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(1);
                console.log(index);
              }}
            >
              <FaMapMarkerAlt className="Item" />
              <h1>Localização privilegiada</h1>
            </GridItem>

            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(2);
                console.log(index);
              }}
            >
              <FaWifi className="Item" />
              <h1>Internet wi-fi de alta velocidade</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(3);
                console.log(index);
              }}
            >
              <FaCouch className="Item" />
              <h1>Apartamentos mobiliados</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(4);
                console.log(index);
              }}
            >
              <FaFileInvoiceDollar className="Item" />
              <h1>Única conta para pagar</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(5);
                console.log(index);
              }}
            >
              <FaBed className="Item" />
              <h1>Studios e quartos individuais</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(6);
                console.log(index);
              }}
            >
              <FaHandshake className="Item" />
              <h1>Área de convivência</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(7);
                console.log(index);
              }}
            >
              <FaWrench className="Item" />
              <h1>Equipe de manutenção</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(8);
                console.log(index);
              }}
            >
              <FaQuidditch className="Item" />
              <h1>Limpeza semanal inclusa</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(9);
                console.log(index);
              }}
            >
              <FaParachuteBox className="Item" />
              <h1>Melhoria contínua</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(10);
                console.log(index);
              }}
            >
              <FaGlassMartiniAlt className="Item" />
              <h1>Eventos</h1>
            </GridItem>
            <GridItem
              onClick={() => {
                setShow(!show);
                setIndex(11);
                console.log(index);
              }}
            >
              <FaSave className="Item" />
              <h1>Lavanderia</h1>
            </GridItem>
          </VantagensGrid>
        </QuadroVantagens>
      </Content>
    </Element>
  );
}
