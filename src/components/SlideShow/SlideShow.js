import React from 'react';
import { Slide } from 'react-slideshow-image';
import './styles.css';
import FundoRich1 from '../../pages/Colivings/images/fundo_rich1.jpg';
import FundoRich2 from '../../pages/Colivings/images/fundo_rich2.jpg';
import FundoRich3 from '../../pages/Colivings/images/fundo_rich3.jpg';
import Fundouniv1 from '../../pages/Main/images/univ_fundo.jpeg';
import Fundouniv2 from '../../pages/Colivings/images/fundo_univ2.jpg';
import Fundouniv3 from '../../pages/Colivings/images/fundo_univ3.jpg';
import VIG_QUARTO4 from '../../pages/Colivings/images/vig_quarto_4.jpg';
import VIG_30_40_2 from '../../pages/Colivings/images/vig_30a40_2.jpg';
import VIG_30_40_3 from '../../pages/Colivings/images/vig_30a40_3.jpg';
import BF1 from '../../pages/Colivings/images/bom_fim1.jpeg';
import BF2 from '../../pages/Colivings/images/bom_fim4.jpeg';
import BF3 from '../../pages/Colivings/images/bom_fim3.jpeg';
import VIG_4 from '../../pages/Main/images/vigario_sala.jpeg';
import RIAC_4 from '../../pages/Main/images/riachuelo_escada.jpeg';

const Fundos = [
  [FundoRich1, FundoRich2],
  [VIG_QUARTO4, VIG_4, VIG_30_40_2, VIG_30_40_3],
  [Fundouniv1, Fundouniv2, Fundouniv3],
  [BF1, BF2, BF3],
];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
};

export default function Slideshow(props) {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {Fundos[props.id - 1].map((image, index) => {
          return (
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
