import React from 'react';
import { Slide } from 'react-slideshow-image';
import './styles.css';
import FundoRich1 from '../../pages/Colivings/images/fundo_rich1.jpg';
import FundoRich2 from '../../pages/Colivings/images/fundo_rich2.jpg';
import FundoRich3 from '../../pages/Colivings/images/fundo_rich3.jpg';
import Fundouniv1 from '../../pages/Colivings/images/fundo_univ1.jpg';
import Fundouniv2 from '../../pages/Colivings/images/fundo_univ2.jpg';
import Fundouniv3 from '../../pages/Colivings/images/fundo_univ3.jpg';
import VIG_QUARTO4 from '../../pages/Colivings/images/vig_quarto_4.jpg';
import VIG_30_40_2 from '../../pages/Colivings/images/vig_30a40_2.jpg';
import VIG_30_40_3 from '../../pages/Colivings/images/vig_30a40_3.jpg';

const Fundos = [
  [FundoRich1, FundoRich2, FundoRich3],
  [VIG_30_40_2, VIG_30_40_3, VIG_QUARTO4],
  [Fundouniv1, Fundouniv2, Fundouniv3],
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
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${Fundos[props.id - 1][0]})`,
            }}
          />
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${Fundos[props.id - 1][1]})`,
            }}
          />
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${Fundos[props.id - 1][2]})`,
            }}
          />
        </div>
      </Slide>
    </div>
  );
}