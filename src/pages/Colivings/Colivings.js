import React from 'react';

import Cabec from '../Main/Cabec';

import { Fundo, FirstSection } from './ColivingStyle';

export default function Main() {
  return (
    <>
      <Cabec />
      <Fundo>
        <div>
          <h1>RENT COLIVING</h1>
          <h1>VIGÁRIO</h1>
          <h2>Rua Vigário José Inácio, 827 - Centro Histórico</h2>
        </div>
      </Fundo>
      <FirstSection>
        <p>
          A RENT COLIVING - Vigário, é localizada em área residencial do Centro
          Histórico, a 5 minutos da UFRGS e UFSCPA. Com quartos individuais e
          suítes mobiliados compartilhando cozinhas, banheiros e salas de TV
          amplas. Para os moradores que preferem mais privacidade temos também
          studios mobiliados com cozinha e banheiro. Este prédio totalmente
          reformado de 4 andares conta com amplo terraço com vista panorâmica,
          churrasqueira e horta coletiva. Os moradores são principalmente
          estudantes de graduação, mestrado e doutorado, como também jovens
          profissionais que gostam de conviver em comunidade.
        </p>
      </FirstSection>
    </>
  );
}
