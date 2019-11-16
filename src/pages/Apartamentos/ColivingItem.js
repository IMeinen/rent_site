import React, { Component } from 'react';

import {
  ContainerImg,
  Imagem,
  Descricao,
  StyledPointer,
  Botao,
} from './Styles';
import Logo from '../Main/images/logo_so_cama1.svg';
import Logo2 from '../Main/images/logo_so_cama2.svg';

const Nomes = ['Riachuelo', 'Vigário', 'Universitário'];
const Endereço = [
  'Rua Riachuelo,714',
  'Rua Vigário José Inácio, 829',
  'Av. João Pessoa, 61',
];

class ColivingItem extends React.Component {
  state = { hovered: false };

  HandleHover = () => {
    this.setState({ hovered: !this.state.hovered });
    console.log(this.state.hovered);
  };

  render() {
    return (
      <>
        <ContainerImg>
          <Imagem
            Col={this.props.Col}
            Estilizar={this.state.hovered}
            onMouseEnter={this.HandleHover}
            onMouseLeave={this.HandleHover}
          >
            <div>
              <StyledPointer Estilizar={this.state.hovered} />
              <img src={this.state.hovered ? Logo2 : Logo} alt="logo" />
            </div>
          </Imagem>
          <Descricao
            Col={this.props.Col}
            onMouseEnter={this.HandleHover}
            onMouseLeave={this.HandleHover}
          >
            <h1>{Nomes[this.props.Col - 1]}</h1>
            <h2>Porto Alegre</h2>
            <h2>Centro Histórico</h2>
            <h2>{Endereço[this.props.Col - 1]}</h2>
            <Botao>
              <h1>Saiba Mais + </h1>
            </Botao>
          </Descricao>
        </ContainerImg>
      </>
    );
  }
}

export default ColivingItem;
