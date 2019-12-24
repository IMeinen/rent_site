import React from 'react';

import { Link, Element } from 'react-scroll';

import { Container, Centro, Description, Botao, Subtitle } from './HomeStyles';
import video1 from './video1.MP4';

export default function Main() {
  return (
    <Element
      name="Home"
      style={{
        paddingTop: '100px',
      }}
    >
      <Container>
        <Description>
          <h1>Sobre nós</h1>
          <p>
            Somos um casal dedicados a proporcionar uma melhor qualidade de vida
            a estudantes e profissionais em Porto Alegre via nossos colivings.
            Queremos fazer de nossos colivings a casa de pessoas que prezam o
            bom senso e respeito pelo próximo para viver bem em coletivo.
            <br />
            <br />
            Começamos neste negócio com o objetivo de melhorar nossas vidas
            através de um trabalho que criasse um diferencial em nossa
            comunidade, agindo de forma independente e responsável. Sendo que
            durante este processo nossa maior inspiração tem sido ser um
            facilitador para nossos colivers alcançarem seus objetivos e
            renovando seu jeito de viver com conveniência e flexibilidade.
            <br />
            <br />
            Gostamos de ser “mãos-a-obra” em todos os aspectos de
            desenvolvimento e gestão de nossos colivings. Desde a busca por
            prédios antigos, reformando com layouts práticos, com decoração
            moderna resgatando suas originalidades até a prestação de todos os
            serviços de moradia. Na RENT COLIVING conte sempre conosco. Se
            quiser saber um pouco mais sobre nós entre em contato!
          </p>
          <Centro />
          <Subtitle>Gabriella Fuga e Gabriel Culau</Subtitle>
          <Link to="Contato" spy smooth duration={500}>
            <Botao>
              <h1>
                Agende já sua visita!
                <br />
                Adoraríamos te conhecer!
              </h1>
            </Botao>
          </Link>
        </Description>
      </Container>
    </Element>
  );
}
