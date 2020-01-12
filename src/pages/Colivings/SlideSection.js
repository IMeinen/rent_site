import React from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { ColivingSection } from './ColivingStyle';

import './Styles.scss';

class Slide extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    imagem: 0,
    imagens: this.props.IMG,
  };

  HandleClick = click => {
    const ImagemAtual = this.state.imagem;
    if (click === 'A') {
      if (ImagemAtual > 0) {
        this.setState({ imagem: ImagemAtual - 1 });
      } else if (ImagemAtual === 0) {
        this.setState({ imagem: this.state.imagens.length - 1 });
      }
    } else if (ImagemAtual < this.state.imagens.length - 1) {
      this.setState({ imagem: ImagemAtual + 1 });
    } else if (ImagemAtual === this.state.imagens.length - 1) {
      this.setState({ imagem: 0 });
    }
  };

  HandleClickItem = key => {
    this.setState({ imagem: key });
  };

  render() {
    return (
      <ColivingSection>
        <h1 className="Header">{this.props.Nome}</h1>
        <p className="Descricao">{this.props.Desc}</p>
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
