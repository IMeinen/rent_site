import React from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ColivingSection } from './ColivingStyle';
import VIG_30_40_1 from './images/vig_30a40_1.jpg';
import VIG_30_40_2 from './images/vig_30a40_2.jpg';
import VIG_30_40_3 from './images/vig_30a40_3.jpg';
import VIG_30_40_4 from './images/vig_30a40_4.jpg';
import VIG_30_40_5 from './images/vig_30a40_5.jpg';

import './Styles.css';

class Slide extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    imagem: 0,
    imagens: [VIG_30_40_1, VIG_30_40_2, VIG_30_40_3, VIG_30_40_4, VIG_30_40_5],
  };

  HandleClick = click => {
    const ImagemAtual = this.state.imagem;
    if (click === 'A') {
      if (ImagemAtual > 0) {
        this.setState({ imagem: ImagemAtual - 1 });
      } else if (ImagemAtual === 0) {
        this.setState({ imagem: 4 });
      }
    } else if (ImagemAtual < 4) {
      this.setState({ imagem: ImagemAtual + 1 });
    } else if (ImagemAtual === 4) {
      this.setState({ imagem: 0 });
    }
  };

  HandleClickItem = key => {
    this.setState({ imagem: key });
  };

  render() {
    return (
      <ColivingSection>
        <h1 className="Header">
          Studios de 20m2-30m2 (a partir de R$1.400,00)
        </h1>
        <p className="Descricao">
          Studios mobiliados com banheiro, cozinha e ótima luminosidade.
          Internet wi-fi, luz, agua, manutenção, limpeza e lavanderia semanal
          tudo incluso em uma só conta.
        </p>
        <img
          src={this.state.imagens[this.state.imagem]}
          alt="teste"
          className="ImagemPrincipal"
        />
        <div className="ContainerSetas">
          <button className="Botao" onClick={() => this.HandleClick('A')}>
            <FaAngleLeft size={24} />
          </button>
          <button className="Botao" onClick={() => this.HandleClick('B')}>
            <FaAngleRight size={24} />
          </button>
        </div>
        <div className="Galeria">
          {this.state.imagens.map(item => (
            <img
              src={item}
              alt="teste"
              onClick={() =>
                this.HandleClickItem(this.state.imagens.indexOf(item))
              }
              className={`ItemIMG ${
                this.state.imagens.indexOf(item) === this.state.imagem
                  ? 'ativo'
                  : 'inativo'
              }`}
            />
          ))}
        </div>
      </ColivingSection>
    );
  }
}

export { Slide };
