import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import SlideShow from '../../components/SlideShow/SlideShow';
import { Fundo, FirstSection, Description, Container } from './ColivingStyle';
import { Slide } from './SlideSection';
import { SlideVideo } from './VideoSection';
import Vantagens from '../Vantagens/Vantagens';

import VIG_30_40_1 from './images/vig_30a40_2.jpg';
import VIG_30_40_2 from './images/vig_30a40_5.jpg';
import VIG_30_40_3 from './images/vig_30a40_3.jpg';
import VIG_30_40_4 from './images/vig_30a40_4.jpg';
import VIG_30_40_5 from './images/vig_30a40_1.jpg';
import VIG_20_30_1 from './images/vig_20a30_3.jpg';
import VIG_20_30_2 from './images/vig_20a30_4.jpg';
import VIG_20_30_3 from './images/vig_20a30_5.jpg';
import VIG_20_30_4 from './images/vig_20a30_2.jpg';
import VIG_20_30_5 from './images/vig_20a30_1.jpg';
import VIG_MIN_SUI1 from './images/vig_minisuite_1.jpg';
import VIG_MIN_SUI2 from './images/vig_minisuite_2.jpg';
import VIG_MIN_SUI3 from './images/vig_minisuite_3.jpg';
import VIG_QUARTO1 from './images/vig_quarto_1.jpg';
import VIG_QUARTO2 from './images/vig_quarto_2.jpg';
import VIG_QUARTO3 from './images/vig_quarto_3.jpg';
import VIG_QUARTO4 from './images/vig_quarto_4.jpg';
import VIG_QUARTO5 from './images/vig_quarto_5.jpg';
import UNIV_1 from './images/univ_quarto_6.jpg';
import UNIV_2 from './images/univ_quarto_4.jpg';
import UNIV_3 from './images/univ_quarto_5.jpg';
import UNIV_4 from './images/univ_quarto_1.jpg';
import UNIV_5 from './images/univ_quarto_2.jpg';
import UNIV_6 from './images/univ_quarto_3.jpg';
import UNIV_7 from './images/univ_7.jpg';
import UNIV_8 from './images/univ_8.jpg';
import RIACH_1 from './images/riach_6.jpg';
import RIACH_2 from './images/riach_2.jpg';
import RIACH_3 from './images/riach_3.jpg';
import RIACH_4 from './images/riach_4.jpg';
import RIACH_5 from './images/riach_5.jpg';
import RIACH_6 from './images/riach_1.jpg';
import RIACH_7 from '../Main/images/riachuelo_escada.jpeg';
import RIACH_8 from '../Main/images/riachuelo_espelho.jpeg';
import BF1 from './images/bom_fim1.jpeg';
import UNIV_STUDIO1 from './images/UNIV_STUDIO1.jpg';
import UNIV_STUDIO2 from './images/UNIV_STUDIO2.jpg';
import UNIV_STUDIO3 from './images/UNIV_STUDIO_3.JPG';
import UNIV_STUDIO4 from './images/UNIV_STUDIO4.JPG';
import UNIV_STUDIO5 from './images/UNIV_STUDIO4.jpeg';
import UNIV_STUDIO6 from './images/UNIV_STUDIO5.jpeg';
import UNIV_STUDIO7 from './images/UNIV_STUDIO6.jpeg';
import video1 from './videos/VIDEO1_STUDIO_UNIV.mp4';
import video2 from './videos/VIDEO2_STUDIO_UNIV.mp4';
import video3 from './videos/VIDEO3_STUDIO_UNIV.mp4';

import BF3 from './images/bom_fim3.jpeg';
import BF4 from './images/bom_fim4.jpeg';
import BF5 from './images/bom_fim5.jpeg';
import BF6 from './images/bom_fim6.jpeg';
import BF7 from './images/bom_fim7.jpeg';
import UNIV_MINI1 from './images/suite_univ1.jpeg';
import UNIV_MINI2 from './images/suite_univ2.jpeg';
import UNIV_MINI3 from './images/suite_univ3.jpeg';

const dados = {
  dados: [
    {
      nome: 'Riachuelo',
      endereço: 'Rua Riachuelo,714',
      descricao:
        'A RENT COLIVING – Riachuelo é em um prédio histórico da década de 30, todo reformado com pé direito alto, pisos originais de madeira e ladrilho hidráulicos com ambientes aconchegantes combinando o antigo e o moderno. Localizada na Rua Riachuelo, no Centro Histórico a duas quadras do Gasômetro e Casa de Cultura Mario Quintana é ideal para atividades “outdoor” e passeios culturais no Centro Histórico da cidade. O coliving tem 16 quartos individuais completamente mobiliados com bastante luminosidade. As áreas em comum como Sala de TV e Sala de Jogos são amplas e confortáveis.',
      quartos: [
        {
          nomeQuarto: 'Quartos individuais de R$750 a R$850',
          descricaoQuarto:
            'Quartos privados mobiliados com áreas de uso coletivo como sala de estar com TV a cabo, Sala de Jogos com mesa de sinuca e videogames, cozinhas, banheiros, lavanderia e limpeza semanal com todas as contas inclusas.',
          imagensQuarto: [
            RIACH_1,
            RIACH_2,
            RIACH_3,
            RIACH_4,
            RIACH_5,
            RIACH_6,
            RIACH_7,
            RIACH_8,
          ],
        },
      ],
    },
    {
      nome: 'Vigário',
      endereço: 'Rua Vigário José Inácio, 829',
      descricao:
        'A RENT COLIVING – Vigário, é localizada em área residencial do Centro Histórico,  a 5 minutos da UFRGS e UFSCPA. Com quartos individuais e suítes mobiliados compartilhando cozinhas, banheiros e salas de TV amplas. Para os moradores que preferem mais privacidade temos também studios mobiliados com cozinha e banheiro. Este prédio totalmente reformado de 4 andares conta com amplo terraço com vista panorâmica, churrasqueira e horta coletiva. Os moradores são principalmente estudantes de graduação, mestrado e doutorado, como também jovens profissionais que gostam de conviver em comunidade.',
      quartos: [
        {
          nomeQuarto: 'Studios de 30m²-40m² (a partir de R$1.400,00)',
          descricaoQuarto:
            'Studios mobiliados com banheiro, cozinha e ótima luminosidade.  Internet wi-fi, luz, água, manutenção, limpeza e lavanderia semanal tudo incluso em uma só conta',
          imagensQuarto: [
            VIG_30_40_1,
            VIG_30_40_2,
            VIG_30_40_3,
            VIG_30_40_4,
            VIG_30_40_5,
          ],
        },
        {
          nomeQuarto: 'Studios de 20m²-30m² (a partir de R$1.200,00)',
          descricaoQuarto:
            'Studios mobiliados com banheiro, cozinha.  Internet wi-fi, luz, água, manutenção, limpeza e lavanderia semanal tudo incluso em uma só conta.',
          imagensQuarto: [
            VIG_20_30_1,
            VIG_20_30_2,
            VIG_20_30_3,
            VIG_20_30_4,
            VIG_20_30_5,
          ],
        },
        {
          nomeQuarto: 'Mini-Studios e Mini-Suítes(a partir de R$900,00)',
          descricaoQuarto:
            'Studios mobiliados com cozinha privativa e banheiro compartilhado com outro quarto. Internet wi-fi, luz, água, manutenção, limpeza e lavanderia semanal tudo incluso em uma só conta.',
          imagensQuarto: [VIG_MIN_SUI1, VIG_MIN_SUI2, VIG_MIN_SUI3],
        },
        {
          nomeQuarto: 'Quartos individuais de R$750 a R$850',
          descricaoQuarto:
            'Quartos privados mobiliados com áreas de uso coletivo como salas de estar com TV a cabo, cozinhas, banheiros, terraço, lavanderia e limpeza semanal com todas as contas inclusas.',
          imagensQuarto: [
            VIG_QUARTO1,
            VIG_QUARTO2,
            VIG_QUARTO3,
            VIG_QUARTO4,
            VIG_QUARTO5,
          ],
        },
      ],
    },
    {
      nome: 'Universitário',
      endereço: 'Av. João Pessoa, 61',
      descricao:
        'A RENT COLIVING – Universitário, é a moradia perfeita para estudantes da UFRGS e UFCSPA pois está em frente ao Campus Central e pontos de transporte público direto ao Campus do Vale. Sua localização privilegiada no centro histórico ao lado do R.U. e  de fácil acesso ao Parque da Redenção. O prédio da década de 40 foi todo reformado resgatando sua arquitetura original e projetado nos mínimos detalhes para oferecer conforto e conveniência para viver bem em comunidade. Os quartos individuais, studios e suítes são completamente mobiliados, as áreas em comum como sala de TV, cozinha e banheiros são decorados com estilo e design moderno.',
      quartos: [
        {
          nomeQuarto: 'Studios de 20m2-30m2 (a partir de R$1.400,00)',
          descricaoQuarto:
            'Studios mobiliados com banheiro, cozinha e ótima luminosidade. Internet wi-fi, luz, água, manutenção, limpeza e lavanderia semanal tudo incluso em uma só conta.',
          imagensQuarto: [
            UNIV_STUDIO1,
            UNIV_STUDIO2,
            UNIV_STUDIO3,
            UNIV_STUDIO4,
            UNIV_STUDIO5,
            UNIV_STUDIO6,
            UNIV_STUDIO7,
          ],
          videosQuarto: [video1, video2, video3],
        },
        {
          nomeQuarto: 'Suítes (R$1000,00)',
          descricaoQuarto:
            'Suítes mobiliadas com banheiro e ótima luminosidade.  Internet wi-fi, luz, água, manutenção, limpeza e lavanderia semanal tudo incluso em uma só conta.',
          imagensQuarto: [UNIV_MINI1, UNIV_MINI2, UNIV_MINI3],
        },
        {
          nomeQuarto: 'Quartos individuais de R$750 a R$900',
          descricaoQuarto:
            'Quartos privados mobiliados com áreas de uso coletivo como sala de estar com TV a cabo, cozinhas, banheiros, lavanderia e limpeza semanal com todas as contas inclusas.',
          imagensQuarto: [
            UNIV_1,
            UNIV_2,
            UNIV_3,
            UNIV_4,
            UNIV_5,
            UNIV_6,
            UNIV_7,
            UNIV_8,
          ],
        },
      ],
    },
    {
      nome: 'Bom Fim',
      endereço: 'Rua Santo Antônio,832',
      descricao:
        'Na RENT COLIVING Bom Fim disponibilizamos opções de moradias mais econômicas em ótima localização na Rua Santo Antônio a 3 min UFRGS e UFSCA,  50 metros da redenção, próximo ao centro, supermercados, farmácias e tudo de bom que o bairro bom fim nos oferece. A casa tem 17 quartos com 2 salas de convivência e 2 cozinhas que proporcionam aos nossos moradores um ambiente de companheirismo e amizade. ',
      quartos: [
        {
          nomeQuarto: 'Quartos e Suítes  individuais de R$600 a R$900',
          descricaoQuarto:
            'Quartos e suítes privados, mobiliados com áreas de uso coletivo como sala de estar com TV e PLAY 4, cozinhas, banheiros, lavanderia e limpeza semanal com todas as contas inclusas.',
          imagensQuarto: [BF1, BF3, BF4, BF5, BF6, BF7],
        },
      ],
    },
  ],
};

// eslint-disable-next-line react/prefer-stateless-function
export default function Colivings() {
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Container>
      <Fundo>
        <SlideShow id={id} />
        <Description>
          <h1>RENT COLIVING - {dados.dados[id - 1].nome}</h1>

          <h2>{`${dados.dados[id - 1].endereço} - Centro Histórico`}</h2>
        </Description>
      </Fundo>
      <FirstSection>
        <p>{dados.dados[id - 1].descricao}</p>
      </FirstSection>
      <Vantagens />

      {dados.dados[id - 1].quartos.map(item => (
        <>
          <Slide
            Col={1}
            Nome={item.nomeQuarto}
            Desc={item.descricaoQuarto}
            IMG={item.imagensQuarto}
          />

          <SlideVideo Video={item.videosQuarto} />
        </>
      ))}
    </Container>
  );
}
