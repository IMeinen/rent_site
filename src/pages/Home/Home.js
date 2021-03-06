import React from 'react';

import { Link, Element } from 'react-scroll';

import { Container, Centro, Description, Botao, Subtitle } from './HomeStyles';

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
          Somos dedicados a proporcionar uma melhor qualidade de vida a estudantes e profissionais em Porto Alegre via nossos colivings. Queremos fazer de nossos colivings a casa de pessoas que prezam o bom senso e respeito pelo próximo para viver bem em coletivo.
            <br />
            <br />
            Nossa maior inspiração é ser um facilitador para nossos colivers alcançarem seus objetivos, renovando seu jeito de viver com conveniência e flexibilidade.
            <br />
            <br />
            Se quiser saber um pouco mais sobre nós visite nosso instagram @rentcoliving e entre em contato!
          </p>                
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
